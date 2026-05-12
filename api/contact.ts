import type { IncomingMessage, ServerResponse } from "node:http";
import { createTransport } from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string;
};

type ContactRequest = IncomingMessage & {
  body?: unknown;
  method?: string;
};

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sendJson = (res: ServerResponse, statusCode: number, payload: Record<string, unknown>) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

const readBody = async (req: ContactRequest): Promise<unknown> => {
  if (req.body) {
    return req.body;
  }

  const chunks: Buffer[] = [];

  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");

  if (!rawBody) {
    return {};
  }

  return JSON.parse(rawBody);
};

const normalizeString = (value: unknown, maxLength: number) => {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
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

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
};

export default async function handler(req: ContactRequest, res: ServerResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  let payload: ContactPayload;

  try {
    payload = (await readBody(req)) as ContactPayload;
  } catch {
    sendJson(res, 400, { error: "Invalid request body" });
    return;
  }

  if (normalizeString(payload.company, 120)) {
    sendJson(res, 200, { ok: true });
    return;
  }

  const name = normalizeString(payload.name, MAX_NAME_LENGTH);
  const email = normalizeString(payload.email, MAX_EMAIL_LENGTH).toLowerCase();
  const subject = normalizeString(payload.subject, MAX_SUBJECT_LENGTH) || "New contact form submission";
  const message = normalizeString(payload.message, MAX_MESSAGE_LENGTH);

  if (!email || !message) {
    sendJson(res, 400, { error: "Email and message are required" });
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
    const contactTo = process.env.CONTACT_TO || "saim2018live@gmail.com";
    const secure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;

    const transporter = createTransport({
      host: smtpHost,
      port: smtpPort,
      secure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const submittedAt = new Date().toISOString();
    const displaySubject = `[Observeri contact] ${subject}`;
    const text = [
      "New contact form submission",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Submitted at: ${submittedAt}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name || "Not provided")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    await transporter.sendMail({
      from: smtpUser,
      to: contactTo,
      replyTo: email,
      subject: displaySubject,
      text,
      html,
    });

    sendJson(res, 200, { ok: true });
  } catch (error) {
    console.error("Contact form email failed", error);
    sendJson(res, 500, { error: "Unable to send message" });
  }
}
