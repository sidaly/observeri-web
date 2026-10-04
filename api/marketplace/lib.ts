// Marketplace registration env:
// SITE_URL, AWS_REGION (default us-east-1), AWS_MARKETPLACE_PRODUCT_CODE,
// AWS credentials via the default provider chain,
// MARKETPLACE_DEV_MODE=true (local token "dev-token" only),
// MARKETPLACE_STORE_PATH (required on Vercel; /tmp does not persist),
// MARKETPLACE_WEBHOOK_SECRET, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS,
// SMTP_SECURE, SMTP_FROM.
import { createHash, randomBytes, scryptSync, timingSafeEqual, createVerify, X509Certificate } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import type { IncomingMessage, ServerResponse } from "node:http";
import { createTransport } from "nodemailer";
import {
  MarketplaceMeteringClient,
  ResolveCustomerCommand,
} from "@aws-sdk/client-marketplace-metering";
import {
  MarketplaceEntitlementServiceClient,
  GetEntitlementsCommand,
} from "@aws-sdk/client-marketplace-entitlement-service";

export type MarketplaceRequest = IncomingMessage & {
  body?: unknown;
  method?: string;
  query?: Record<string, string | string[] | undefined>;
  headers: IncomingMessage["headers"];
};

export type EntitlementView = {
  dimension: string;
  value: string;
  expiration: string | null;
};

export type MarketplaceCustomer = {
  id: string;
  customerIdentifier: string;
  customerAwsAccountId: string;
  productCode: string;
  licenseArn: string | null;
  entitlements: EntitlementView[];
  entitled: boolean;
  organizationName: string | null;
  adminName: string | null;
  adminEmail: string | null;
  passwordSalt: string | null;
  passwordHash: string | null;
  emailVerified: boolean;
  emailVerifyTokenHash: string | null;
  emailVerifyExpires: string | null;
  createdAt: string;
  updatedAt: string;
  entitlementCheckedAt: string | null;
};

type RegistrationSession = {
  tokenHash: string;
  customerId: string;
  expiresAt: string;
};

type AdminSession = {
  tokenHash: string;
  customerId: string;
  expiresAt: string;
};

type StoreShape = {
  customers: MarketplaceCustomer[];
  registrationSessions: RegistrationSession[];
  adminSessions: AdminSession[];
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const COOKIE_NAME = "observeri_admin";
const loginAttempts = new Map<string, { count: number; resetAt: number }>();

const emptyStore = (): StoreShape => ({
  customers: [],
  registrationSessions: [],
  adminSessions: [],
});

export const siteUrl = (req?: MarketplaceRequest) => {
  const configured = process.env.SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;
  const hostHeader = req?.headers["x-forwarded-host"] || req?.headers.host;
  const host = text(Array.isArray(hostHeader) ? hostHeader[0] : hostHeader, 200).split(",")[0].trim();
  if (host) {
    const protoHeader = req?.headers["x-forwarded-proto"];
    const forwarded = text(Array.isArray(protoHeader) ? protoHeader[0] : protoHeader, 20).split(",")[0].trim();
    const proto = forwarded || (host.startsWith("localhost") || host.startsWith("127.") ? "http" : "https");
    return `${proto}://${host}`;
  }
  return "https://observeri.com";
};

export const isDevMode = () => process.env.MARKETPLACE_DEV_MODE === "true";

let warnedAboutEphemeralStore = false;

const storePath = () => {
  if (process.env.VERCEL && !process.env.MARKETPLACE_STORE_PATH && !warnedAboutEphemeralStore) {
    warnedAboutEphemeralStore = true;
    console.error("Set MARKETPLACE_STORE_PATH. The default /tmp store does not persist Marketplace customers on Vercel.");
  }
  return (
    process.env.MARKETPLACE_STORE_PATH ||
    (process.env.VERCEL
      ? "/tmp/observeri-marketplace.json"
      : path.join(process.cwd(), ".data", "marketplace.json"))
  );
};

const readStore = (): StoreShape => {
  const file = storePath();
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as StoreShape;
  } catch {
    return emptyStore();
  }
};

const writeStore = (store: StoreShape) => {
  const file = storePath();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(store, null, 2), "utf8");
};

const updateStore = <T>(mutate: (store: StoreShape) => T): T => {
  const store = readStore();
  const now = Date.now();
  store.registrationSessions = store.registrationSessions.filter((session) => Date.parse(session.expiresAt) > now);
  store.adminSessions = store.adminSessions.filter((session) => Date.parse(session.expiresAt) > now);
  const result = mutate(store);
  writeStore(store);
  return result;
};

export const hashToken = (token: string) => createHash("sha256").update(token).digest("hex");

export const createToken = () => randomBytes(32).toString("hex");

export const hashPassword = (password: string) => {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return { salt, hash };
};

export const verifyPassword = (password: string, salt: string, hash: string) => {
  const next = scryptSync(password, salt, 64);
  const previous = Buffer.from(hash, "hex");
  if (next.length !== previous.length) return false;
  return timingSafeEqual(next, previous);
};

export const isValidEmail = (email: string) => EMAIL_PATTERN.test(email);

export const sendJson = (res: ServerResponse, statusCode: number, payload: Record<string, unknown>) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

export const readBody = async (req: MarketplaceRequest): Promise<Record<string, unknown>> => {
  if (req.body && typeof req.body === "object") {
    return req.body as Record<string, unknown>;
  }
  if (typeof req.body === "string" && req.body) {
    return parseBody(req.body, req.headers["content-type"]);
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return {};
  return parseBody(raw, req.headers["content-type"]);
};

const parseBody = (raw: string, contentType?: string | string[]) => {
  const type = Array.isArray(contentType) ? contentType[0] : contentType || "";
  if (type.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams(raw);
    return Object.fromEntries(params.entries());
  }
  return JSON.parse(raw) as Record<string, unknown>;
};

export const text = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const entitlementValue = (value: {
  IntegerValue?: number;
  DoubleValue?: number;
  BooleanValue?: boolean;
  StringValue?: string;
} | undefined) => {
  if (!value) return "0";
  if (typeof value.IntegerValue === "number") return String(value.IntegerValue);
  if (typeof value.DoubleValue === "number") return String(value.DoubleValue);
  if (typeof value.BooleanValue === "boolean") return value.BooleanValue ? "true" : "false";
  return value.StringValue || "0";
};

export const publicCustomer = (customer: MarketplaceCustomer) => ({
  id: customer.id,
  organizationName: customer.organizationName,
  adminName: customer.adminName,
  adminEmail: customer.adminEmail,
  emailVerified: customer.emailVerified,
  entitled: customer.entitled,
  customerIdentifier: customer.customerIdentifier,
  customerAwsAccountId: customer.customerAwsAccountId,
  productCode: customer.productCode,
  licenseArn: customer.licenseArn,
  entitlements: customer.entitlements,
  entitlementCheckedAt: customer.entitlementCheckedAt,
  status: !customer.adminEmail
    ? "pending_setup"
    : !customer.emailVerified
      ? "pending_email"
      : customer.entitled
        ? "active"
        : "inactive",
});

export const resolveMarketplaceCustomer = async (token: string) => {
  if (isDevMode() && token === "dev-token") {
    return {
      customerIdentifier: "dev-customer",
      customerAwsAccountId: "123456789012",
      productCode: process.env.AWS_MARKETPLACE_PRODUCT_CODE || "dev-product",
      licenseArn: null as string | null,
      entitlements: [
        { dimension: "observeri_platform", value: "1", expiration: null },
      ] as EntitlementView[],
      entitled: true,
    };
  }

  const region = process.env.AWS_REGION || "us-east-1";
  const metering = new MarketplaceMeteringClient({ region });
  const resolved = await metering.send(new ResolveCustomerCommand({ RegistrationToken: token }));

  if (!resolved.CustomerIdentifier || !resolved.CustomerAWSAccountId || !resolved.ProductCode) {
    throw new Error("ResolveCustomer returned an incomplete customer record");
  }

  const expectedProduct = process.env.AWS_MARKETPLACE_PRODUCT_CODE;
  if (expectedProduct && resolved.ProductCode !== expectedProduct) {
    throw new Error("Marketplace token is for a different product");
  }

  const entitlements = await loadEntitlements(
    resolved.ProductCode,
    resolved.CustomerIdentifier,
    resolved.LicenseArn,
  );

  return {
    customerIdentifier: resolved.CustomerIdentifier,
    customerAwsAccountId: resolved.CustomerAWSAccountId,
    productCode: resolved.ProductCode,
    licenseArn: resolved.LicenseArn || null,
    entitlements: entitlements.entitlements,
    entitled: entitlements.entitled,
  };
};

export const loadEntitlements = async (
  productCode: string,
  customerIdentifier: string,
  licenseArn?: string | null,
) => {
  if (isDevMode() && customerIdentifier === "dev-customer") {
    return {
      entitled: true,
      entitlements: [{ dimension: "observeri_platform", value: "1", expiration: null }] as EntitlementView[],
    };
  }

  const region = process.env.AWS_REGION || "us-east-1";
  const client = new MarketplaceEntitlementServiceClient({ region });
  const filter: Record<string, string[]> = licenseArn
    ? { LICENSE_ARN: [licenseArn] }
    : { CUSTOMER_IDENTIFIER: [customerIdentifier] };
  const result = await client.send(
    new GetEntitlementsCommand({
      ProductCode: productCode,
      Filter: filter,
    }),
  );

  const now = Date.now();
  const entitlements = (result.Entitlements || [])
    .filter((item) => !item.ExpirationDate || item.ExpirationDate.getTime() > now)
    .map((item) => ({
      dimension: item.Dimension || "unknown",
      value: entitlementValue(item.Value),
      expiration: item.ExpirationDate ? item.ExpirationDate.toISOString() : null,
    }))
    .filter((item) => item.value !== "0" && item.value !== "false");

  return { entitlements, entitled: entitlements.length > 0 };
};

export const upsertResolvedCustomer = (
  resolved: Awaited<ReturnType<typeof resolveMarketplaceCustomer>>,
) =>
  updateStore((store) => {
    const now = new Date().toISOString();
    let customer = resolved.licenseArn
      ? store.customers.find((item) => item.licenseArn === resolved.licenseArn)
      : store.customers.find(
          (item) =>
            item.customerIdentifier === resolved.customerIdentifier &&
            item.productCode === resolved.productCode &&
            !item.licenseArn,
        );

    if (!customer) {
      customer = {
        id: randomBytes(16).toString("hex"),
        customerIdentifier: resolved.customerIdentifier,
        customerAwsAccountId: resolved.customerAwsAccountId,
        productCode: resolved.productCode,
        licenseArn: resolved.licenseArn,
        entitlements: resolved.entitlements,
        entitled: resolved.entitled,
        organizationName: null,
        adminName: null,
        adminEmail: null,
        passwordSalt: null,
        passwordHash: null,
        emailVerified: false,
        emailVerifyTokenHash: null,
        emailVerifyExpires: null,
        createdAt: now,
        updatedAt: now,
        entitlementCheckedAt: now,
      };
      store.customers.push(customer);
    } else {
      customer.customerAwsAccountId = resolved.customerAwsAccountId;
      customer.licenseArn = resolved.licenseArn;
      customer.entitlements = resolved.entitlements;
      customer.entitled = resolved.entitled;
      customer.entitlementCheckedAt = now;
      customer.updatedAt = now;
    }

    const token = createToken();
    store.registrationSessions.push({
      tokenHash: hashToken(token),
      customerId: customer.id,
      expiresAt: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    });

    return { token, customer };
  });

export const customerByRegistrationToken = (token: string) => {
  const store = readStore();
  const session = store.registrationSessions.find((item) => item.tokenHash === hashToken(token));
  if (!session || Date.parse(session.expiresAt) <= Date.now()) return null;
  return store.customers.find((customer) => customer.id === session.customerId) || null;
};

export const completeRegistration = (input: {
  session: string;
  organizationName: string;
  adminName: string;
  email: string;
  password: string;
}) =>
  updateStore((store) => {
    const session = store.registrationSessions.find((item) => item.tokenHash === hashToken(input.session));
    const customer = session ? store.customers.find((item) => item.id === session.customerId) : undefined;
    if (!session || !customer || Date.parse(session.expiresAt) <= Date.now()) {
      return { error: "This registration link has expired. Return to AWS Marketplace and open Observeri again.", status: 400 };
    }
    if (!customer.entitled) {
      return { error: "This AWS account does not have an active Observeri contract.", status: 403 };
    }
    if (customer.adminEmail) {
      return { error: "This subscription already has an admin account. Sign in instead.", status: 409 };
    }

    const emailTaken = store.customers.some(
      (item) => item.adminEmail === input.email && item.id !== customer.id,
    );
    if (emailTaken) {
      return { error: "That email is already used by another Observeri admin.", status: 409 };
    }

    const password = hashPassword(input.password);
    const verifyToken = createToken();
    customer.organizationName = input.organizationName;
    customer.adminName = input.adminName;
    customer.adminEmail = input.email;
    customer.passwordSalt = password.salt;
    customer.passwordHash = password.hash;
    customer.emailVerified = false;
    customer.emailVerifyTokenHash = hashToken(verifyToken);
    customer.emailVerifyExpires = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();
    customer.updatedAt = new Date().toISOString();
    store.registrationSessions = store.registrationSessions.filter((item) => item.customerId !== customer.id);
    return { customer, verifyToken };
  });

export const verifyEmailToken = (token: string) =>
  updateStore((store) => {
    const tokenHash = hashToken(token);
    const customer = store.customers.find((item) => item.emailVerifyTokenHash === tokenHash);
    if (!customer || !customer.emailVerifyExpires || Date.parse(customer.emailVerifyExpires) <= Date.now()) {
      return null;
    }
    customer.emailVerified = true;
    customer.updatedAt = new Date().toISOString();
    return customer;
  });

export const resendVerification = (email: string) =>
  updateStore((store) => {
    const customer = store.customers.find((item) => item.adminEmail === email);
    if (!customer || customer.emailVerified) return null;
    const verifyToken = createToken();
    customer.emailVerifyTokenHash = hashToken(verifyToken);
    customer.emailVerifyExpires = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString();
    customer.updatedAt = new Date().toISOString();
    return { customer, verifyToken };
  });

const clientIp = (req: MarketplaceRequest) => {
  const forwarded = req.headers["x-forwarded-for"];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  return (value || req.socket.remoteAddress || "unknown").split(",")[0].trim();
};

export const tooManyLogins = (req: MarketplaceRequest) => {
  const ip = clientIp(req);
  const now = Date.now();
  const current = loginAttempts.get(ip);
  if (!current || current.resetAt < now) {
    loginAttempts.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return false;
  }
  current.count += 1;
  return current.count > 8;
};

export const loginAdmin = (email: string, password: string) =>
  updateStore((store) => {
    const customer = store.customers.find((item) => item.adminEmail === email);
    if (!customer || !customer.passwordSalt || !customer.passwordHash) return { error: "invalid" as const };
    if (!verifyPassword(password, customer.passwordSalt, customer.passwordHash)) return { error: "invalid" as const };
    if (!customer.emailVerified) return { error: "unverified" as const, customer };
    const token = createToken();
    store.adminSessions.push({
      tokenHash: hashToken(token),
      customerId: customer.id,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    });
    return { token, customer };
  });

export const readCookie = (req: MarketplaceRequest, name: string) => {
  const header = req.headers.cookie;
  if (!header) return "";
  const parts = header.split(";").map((part) => part.trim());
  const match = parts.find((part) => part.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : "";
};

export const customerFromAdminCookie = (req: MarketplaceRequest) => {
  const token = readCookie(req, COOKIE_NAME);
  if (!token) return null;
  const store = readStore();
  const session = store.adminSessions.find((item) => item.tokenHash === hashToken(token));
  if (!session || Date.parse(session.expiresAt) <= Date.now()) return null;
  return store.customers.find((customer) => customer.id === session.customerId) || null;
};

export const refreshCustomerEntitlement = async (customerId: string) => {
  const current = readStore().customers.find((item) => item.id === customerId);
  if (!current) return null;
  const entitlements = await loadEntitlements(current.productCode, current.customerIdentifier, current.licenseArn);
  return updateStore((store) => {
    const customer = store.customers.find((item) => item.id === customerId);
    if (!customer) return null;
    customer.entitlements = entitlements.entitlements;
    customer.entitled = entitlements.entitled;
    customer.entitlementCheckedAt = new Date().toISOString();
    customer.updatedAt = customer.entitlementCheckedAt;
    return customer;
  });
};

export const applySubscriptionChange = async (message: Record<string, unknown>) => {
  const identifier = text(
    message["customer-identifier"] || message.customerIdentifier || message.CustomerIdentifier,
    200,
  );
  const productCode = text(message["product-code"] || message.productCode || message.ProductCode, 200);
  const licenseArn = text(message["license-arn"] || message.licenseArn || message.LicenseArn, 400);
  const action = text(message.action || message["detail-type"] || message.detailType, 120).toLowerCase();

  const store = readStore();
  const matches = store.customers.filter((customer) => {
    if (licenseArn) return customer.licenseArn === licenseArn;
    if (identifier && customer.customerIdentifier !== identifier) return false;
    if (productCode && customer.productCode !== productCode) return false;
    return Boolean(identifier || productCode);
  });

  if (action.includes("unsubscribe") && matches.length) {
    updateStore((next) => {
      for (const match of matches) {
        const customer = next.customers.find((item) => item.id === match.id);
        if (!customer) continue;
        customer.entitled = false;
        customer.entitlements = [];
        customer.updatedAt = new Date().toISOString();
        customer.entitlementCheckedAt = customer.updatedAt;
      }
    });
  }

  for (const match of matches) {
    await refreshCustomerEntitlement(match.id);
  }

  return matches.length;
};

export const setAdminCookie = (res: ServerResponse, token: string, secureCookie = siteUrl().startsWith("https://")) => {
  const secure = secureCookie ? "; Secure" : "";
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${7 * 24 * 60 * 60}${secure}`,
  );
};

export const clearAdminCookie = (res: ServerResponse) => {
  res.setHeader("Set-Cookie", `${COOKIE_NAME}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0`);
};

export const sendConfirmationEmail = async (to: string, name: string, verifyUrl: string) => {
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  if (!smtpHost || !smtpUser || !smtpPass) {
    if (isDevMode()) {
      console.info(`Marketplace confirmation link for ${to}: ${verifyUrl}`);
      return false;
    }
    throw new Error("SMTP is not configured");
  }

  const smtpPort = Number.parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465;
  const transporter = createTransport({
    host: smtpHost,
    port: smtpPort,
    secure,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const safeName = escapeHtml(name || "there");
  const safeUrl = escapeHtml(verifyUrl);
  await transporter.sendMail({
    from: process.env.SMTP_FROM || smtpUser,
    to,
    subject: "Confirm your Observeri admin account",
    text: [
      `Hello ${name || "there"},`,
      "",
      "AWS Marketplace sent you to Observeri to finish setting up your contract.",
      "Confirm this admin email to activate access:",
      verifyUrl,
      "",
      "This link expires in 48 hours. AWS will continue to email you separately about billing and the Marketplace subscription.",
    ].join("\n"),
    html: `
      <p>Hello ${safeName},</p>
      <p>AWS Marketplace sent you to Observeri to finish setting up your contract.</p>
      <p><a href="${safeUrl}">Confirm your admin email</a></p>
      <p>This link expires in 48 hours. AWS will continue to email you separately about billing and the Marketplace subscription.</p>
    `,
  });
  return true;
};

const allowedSnsCert = (value: string) => {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      /^sns\.[a-z0-9-]+\.amazonaws\.com(\.cn)?$/.test(url.hostname) &&
      /^\/SimpleNotificationService-[A-Za-z0-9]+\.pem$/.test(url.pathname)
    );
  } catch {
    return false;
  }
};

const certCache = new Map<string, string>();

export const verifySnsMessage = async (message: Record<string, string>) => {
  if (!message.Signature || !message.SigningCertURL || !allowedSnsCert(message.SigningCertURL)) {
    return false;
  }
  let pem = certCache.get(message.SigningCertURL);
  if (!pem) {
    const response = await fetch(message.SigningCertURL);
    if (!response.ok) return false;
    pem = await response.text();
    certCache.set(message.SigningCertURL, pem);
  }

  const keys =
    message.Type === "Notification"
      ? ["Message", "MessageId", ...(message.Subject ? ["Subject"] : []), "Timestamp", "TopicArn", "Type"]
      : ["Message", "MessageId", "SubscribeURL", "Timestamp", "Token", "TopicArn", "Type"];
  const signed = keys.map((key) => `${key}\n${message[key] ?? ""}\n`).join("");
  const verifier = createVerify("RSA-SHA1");
  verifier.update(signed, "utf8");
  return verifier.verify(new X509Certificate(pem).publicKey, message.Signature, "base64");
};
