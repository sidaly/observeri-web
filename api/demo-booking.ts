import type { IncomingMessage, ServerResponse } from "node:http";
import { createTransport } from "nodemailer";

type DemoPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  page?: string;
  company?: string;
};

type DemoRequest = IncomingMessage & {
  body?: unknown;
  method?: string;
};

const MAX_NAME_LENGTH = 60;
const MAX_EMAIL_LENGTH = 254;
const MAX_PAGE_LENGTH = 500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEMO_TO = "connect@observeri.com";

const sendJson = (res: ServerResponse, statusCode: number, payload: Record<string, unknown>) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

const readBody = async (req: DemoRequest): Promise<unknown> => {
  if (req.body) return req.body;
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const rawBody = Buffer.concat(chunks).toString("utf8");
  if (!rawBody) return {};
  return JSON.parse(rawBody);
};

const normalizeString = (value: unknown, maxLength: number) => {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const getRequiredEnv = (name: string) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
};

export default async function handler(req: DemoRequest, res: ServerResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  let payload: DemoPayload;
  try {
    payload = (await readBody(req)) as DemoPayload;
  } catch {
    sendJson(res, 400, { error: "Invalid request body" });
    return;
  }

  if (normalizeString(payload.company, 120)) {
    sendJson(res, 200, { ok: true });
    return;
  }

  const firstName = normalizeString(payload.firstName, MAX_NAME_LENGTH);
  const lastName = normalizeString(payload.lastName, MAX_NAME_LENGTH);
  const email = normalizeString(payload.email, MAX_EMAIL_LENGTH).toLowerCase();
  const page = normalizeString(payload.page, MAX_PAGE_LENGTH);

  if (!firstName || !lastName || !email) {
    sendJson(res, 400, { error: "First name, last name, and email are required" });
    return;
  }

  if (!EMAIL_PATTERN.test(email)) {
    sendJson(res, 400, { error: "Please provide a valid email address" });
    return;
  }

  try {
    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number.parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");
    const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465;
    const transporter = createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const submittedAt = new Date().toISOString();
    const text = [
      "New demo booking from the Observeri website chatbot",
      "",
      `First name: ${firstName}`,
      `Last name: ${lastName}`,
      `Business email: ${email}`,
      `Page: ${page || "Not provided"}`,
      `Submitted at: ${submittedAt}`,
    ].join("\n");

    const html = `
      <h2>New demo booking from the website chatbot</h2>
      <p><strong>First name:</strong> ${escapeHtml(firstName)}</p>
      <p><strong>Last name:</strong> ${escapeHtml(lastName)}</p>
      <p><strong>Business email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Page:</strong> ${escapeHtml(page || "Not provided")}</p>
      <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: DEMO_TO,
      replyTo: email,
      subject: `Demo booking: ${firstName} ${lastName}`,
      text,
      html,
    });

    sendJson(res, 200, { ok: true });
  } catch (error) {
    console.error("Demo booking email failed", error);
    sendJson(res, 500, { error: "Unable to send the demo request" });
  }
}
