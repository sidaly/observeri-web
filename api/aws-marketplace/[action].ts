import type { ServerResponse } from "node:http";
import {
  applySubscriptionChange,
  clearAdminCookie,
  completeRegistration,
  customerByRegistrationToken,
  customerFromAdminCookie,
  isDevMode,
  isValidEmail,
  loginAdmin,
  publicCustomer,
  readBody,
  refreshCustomerEntitlement,
  resendVerification,
  resolveMarketplaceCustomer,
  sendConfirmationEmail,
  sendJson,
  setAdminCookie,
  siteUrl,
  text,
  tooManyLogins,
  upsertResolvedCustomer,
  verifyEmailToken,
  verifySnsMessage,
  type MarketplaceRequest,
} from "../marketplace/lib";

const actionName = (req: MarketplaceRequest) => {
  const value = req.query?.action;
  return Array.isArray(value) ? value[0] : value || "";
};

const redirect = (res: ServerResponse, location: string) => {
  res.statusCode = 303;
  res.setHeader("Location", location);
  res.end();
};

const confirmationUrl = (req: MarketplaceRequest, token: string) =>
  `${siteUrl(req)}/aws-marketplace/verify?token=${encodeURIComponent(token)}`;

const handleFulfillment = async (req: MarketplaceRequest, res: ServerResponse) => {
  if (req.method !== "POST") {
    redirect(res, `${siteUrl(req)}/aws-marketplace/subscribe?reason=missing-token`);
    return;
  }

  const body = await readBody(req);
  const headerToken = req.headers["x-amzn-marketplace-token"];
  const token = text(body["x-amzn-marketplace-token"], 4096) || text(headerToken, 4096);

  if (!token) {
    redirect(res, `${siteUrl(req)}/aws-marketplace/subscribe?reason=missing-token`);
    return;
  }

  try {
    const resolved = await resolveMarketplaceCustomer(token);
    const saved = upsertResolvedCustomer(resolved);
    const destination = saved.customer.adminEmail ? "/aws-marketplace/login" : "/aws-marketplace/register";
    const next = new URLSearchParams({ session: saved.token });
    if (saved.customer.adminEmail) next.set("existing", "1");
    redirect(res, `${siteUrl(req)}${destination}?${next.toString()}`);
  } catch (error) {
    console.error("AWS Marketplace fulfillment failed");
    console.error(error instanceof Error ? error.message : "unknown error");
    redirect(res, `${siteUrl(req)}/aws-marketplace/subscribe?reason=invalid-token`);
  }
};

const handleSession = async (req: MarketplaceRequest, res: ServerResponse) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }
  const url = new URL(req.url || "/", "http://localhost");
  const customer = customerByRegistrationToken(url.searchParams.get("session") || "");
  if (!customer) {
    sendJson(res, 404, { error: "Registration session not found or expired." });
    return;
  }
  sendJson(res, 200, { customer: publicCustomer(customer) });
};

const handleComplete = async (req: MarketplaceRequest, res: ServerResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  const body = await readBody(req);
  const organizationName = text(body.organizationName, 160);
  const adminName = text(body.adminName, 120);
  const email = text(body.email, 254).toLowerCase();
  const password = text(body.password, 200);
  const session = text(body.session, 200);

  if (!organizationName || !adminName || !email || !password || !session) {
    sendJson(res, 400, { error: "Organization, name, email, and password are required." });
    return;
  }
  if (!isValidEmail(email)) {
    sendJson(res, 400, { error: "Enter a valid work email." });
    return;
  }
  if (password.length < 10) {
    sendJson(res, 400, { error: "Use a password of at least 10 characters." });
    return;
  }

  const result = completeRegistration({ session, organizationName, adminName, email, password });
  if ("error" in result) {
    sendJson(res, result.status, { error: result.error });
    return;
  }

  const verifyUrl = confirmationUrl(req, result.verifyToken);
  const emailed = await sendConfirmationEmail(email, adminName, verifyUrl);
  sendJson(res, 200, {
    ok: true,
    emailed,
    devVerifyUrl: emailed || !isDevMode() ? undefined : verifyUrl,
  });
};

const handleVerify = async (req: MarketplaceRequest, res: ServerResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }
  const body = await readBody(req);
  const customer = verifyEmailToken(text(body.token, 200));
  if (!customer) {
    sendJson(res, 400, { error: "This confirmation link is invalid or has expired." });
    return;
  }
  sendJson(res, 200, { ok: true, customer: publicCustomer(customer) });
};

const handleResend = async (req: MarketplaceRequest, res: ServerResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }
  const body = await readBody(req);
  const email = text(body.email, 254).toLowerCase();
  const result = email ? resendVerification(email) : null;
  if (result) {
    const verifyUrl = confirmationUrl(req, result.verifyToken);
    const emailed = await sendConfirmationEmail(email, result.customer.adminName || "", verifyUrl);
    sendJson(res, 200, { ok: true, emailed, devVerifyUrl: emailed || !isDevMode() ? undefined : verifyUrl });
    return;
  }
  sendJson(res, 200, { ok: true, emailed: true });
};

const handleLogin = async (req: MarketplaceRequest, res: ServerResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }
  if (tooManyLogins(req)) {
    sendJson(res, 429, { error: "Too many sign-in attempts. Try again in a few minutes." });
    return;
  }

  const body = await readBody(req);
  const email = text(body.email, 254).toLowerCase();
  const password = text(body.password, 200);
  const result = loginAdmin(email, password);
  if ("error" in result && result.error === "unverified") {
    sendJson(res, 403, { error: "Confirm your email before signing in.", code: "EMAIL_UNVERIFIED" });
    return;
  }
  if (!("token" in result)) {
    sendJson(res, 401, { error: "Email or password is incorrect." });
    return;
  }

  try {
    const refreshed = await refreshCustomerEntitlement(result.customer.id);
    setAdminCookie(res, result.token, siteUrl(req).startsWith("https://"));
    sendJson(res, 200, { ok: true, customer: publicCustomer(refreshed || result.customer) });
  } catch (error) {
    console.error("Entitlement refresh failed during login", error);
    setAdminCookie(res, result.token, siteUrl(req).startsWith("https://"));
    sendJson(res, 200, { ok: true, customer: publicCustomer(result.customer) });
  }
};

const handleLogout = (req: MarketplaceRequest, res: ServerResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }
  clearAdminCookie(res);
  sendJson(res, 200, { ok: true });
};

const handleAccount = async (req: MarketplaceRequest, res: ServerResponse) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }
  const customer = customerFromAdminCookie(req);
  if (!customer) {
    sendJson(res, 401, { error: "Sign in required." });
    return;
  }
  try {
    const refreshed = await refreshCustomerEntitlement(customer.id);
    sendJson(res, 200, { customer: publicCustomer(refreshed || customer) });
  } catch (error) {
    console.error("Entitlement refresh failed", error);
    sendJson(res, 200, { customer: publicCustomer(customer), refreshError: true });
  }
};

const handleEvents = async (req: MarketplaceRequest, res: ServerResponse) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  const body = await readBody(req);
  const secret = process.env.MARKETPLACE_WEBHOOK_SECRET;
  const authorization = text(req.headers.authorization, 300);
  const bearerOk = Boolean(secret) && authorization === `Bearer ${secret}`;
  const snsType = text(body.Type, 80);

  if (snsType) {
    const signed = await verifySnsMessage(body as Record<string, string>);
    if (!signed) {
      sendJson(res, 403, { error: "SNS signature could not be verified." });
      return;
    }
    if (snsType === "SubscriptionConfirmation") {
      const subscribeUrl = text(body.SubscribeURL, 2000);
      if (subscribeUrl.startsWith("https://sns.")) {
        await fetch(subscribeUrl);
      }
      sendJson(res, 200, { ok: true });
      return;
    }
    if (snsType === "Notification") {
      let message: Record<string, unknown> = {};
      try {
        message = JSON.parse(text(body.Message, 100000) || "{}") as Record<string, unknown>;
      } catch {
        sendJson(res, 400, { error: "SNS notification message was not JSON." });
        return;
      }
      const updated = await applySubscriptionChange(message);
      sendJson(res, 200, { ok: true, updated });
      return;
    }
  }

  if (!bearerOk) {
    sendJson(res, 401, { error: "Unauthorized marketplace event." });
    return;
  }

  const detail = (body.detail && typeof body.detail === "object" ? body.detail : body) as Record<string, unknown>;
  const updated = await applySubscriptionChange({
    ...detail,
    "detail-type": body["detail-type"] || body.detailType || detail["detail-type"],
  });
  sendJson(res, 200, { ok: true, updated });
};

export default async function handler(req: MarketplaceRequest, res: ServerResponse) {
  try {
    switch (actionName(req)) {
      case "fulfillment":
        await handleFulfillment(req, res);
        return;
      case "session":
        await handleSession(req, res);
        return;
      case "complete":
        await handleComplete(req, res);
        return;
      case "verify":
        await handleVerify(req, res);
        return;
      case "resend":
        await handleResend(req, res);
        return;
      case "login":
        await handleLogin(req, res);
        return;
      case "logout":
        handleLogout(req, res);
        return;
      case "account":
        await handleAccount(req, res);
        return;
      case "events":
        await handleEvents(req, res);
        return;
      default:
        sendJson(res, 404, { error: "Not found" });
    }
  } catch (error) {
    console.error("Marketplace API failed", error);
    sendJson(res, 500, { error: "Something went wrong. Try again." });
  }
}
