import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILE_BYTES = 8 * 1024 * 1024;

// Nodemailer needs the Node runtime; the edge runtime has no TCP sockets.
export const runtime = "nodejs";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

type Field = { key: string; label: string; required: boolean };

const fields: Field[] = [
  { key: "name", label: "Contact name", required: true },
  { key: "company", label: "Company", required: true },
  { key: "email", label: "Email", required: true },
  { key: "phone", label: "Phone / WhatsApp", required: false },
  { key: "country", label: "Country / market", required: true },
  { key: "intent", label: "Enquiry type", required: false },
  { key: "product", label: "Product or category", required: true },
  { key: "quantity", label: "Target quantity", required: true },
  { key: "message", label: "Project details", required: false },
];

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: silently accept so bots do not learn they were filtered.
  if (form.get("website")) return NextResponse.json({ ok: true });

  const values: Record<string, string> = {};
  for (const field of fields) {
    values[field.key] = String(form.get(field.key) || "").trim();
  }

  const missing = fields.filter((field) => field.required && !values[field.key]).map((field) => field.label);
  if (missing.length) {
    return NextResponse.json({ error: `Missing required fields: ${missing.join(", ")}` }, { status: 400 });
  }
  if (!emailPattern.test(values.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const file = form.get("file");
  const hasFile = file instanceof File && file.size > 0;
  if (hasFile && (file as File).size > MAX_FILE_BYTES) {
    return NextResponse.json({ error: "Attachment exceeds the 8 MB limit." }, { status: 413 });
  }

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.INQUIRY_TO || site.email;

  if (!host || !user || !pass) {
    console.error("inquiry: SMTP environment variables are missing");
    return NextResponse.json(
      {
        error: `Online delivery is temporarily unavailable. Please email ${site.email} or message us on WhatsApp ${site.whatsapp}.`,
      },
      { status: 503 },
    );
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });

  const rows = fields
    .filter((field) => values[field.key])
    .map(
      (field) =>
        `<tr><td style="padding:7px 14px 7px 0;color:#6b6b6b;font:600 12px Arial,sans-serif;white-space:nowrap;vertical-align:top">${field.label}</td>` +
        `<td style="padding:7px 0;color:#1a1a1a;font:14px Arial,sans-serif">${escapeHtml(values[field.key]).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const text = fields
    .filter((field) => values[field.key])
    .map((field) => `${field.label}: ${values[field.key]}`)
    .join("\n");

  const subject = `New inquiry — ${values.company} (${values.country}) — ${values.product}`;

  try {
    const info = await transporter.sendMail({
      // Envelope sender must stay on the authenticated domain for SPF/DKIM to pass.
      from: `"${site.name} website" <${user}>`,
      to,
      replyTo: `"${values.name}" <${values.email}>`,
      subject,
      text: `${text}\n\nSubmitted via ${site.name} website.`,
      html:
        `<div style="font:14px Arial,sans-serif;color:#1a1a1a;max-width:640px">` +
        `<p style="font:700 17px Arial,sans-serif;margin:0 0 4px">New website inquiry</p>` +
        `<p style="color:#6b6b6b;font-size:13px;margin:0 0 18px">Reply directly to this email to answer the buyer.</p>` +
        `<table style="border-collapse:collapse;width:100%">${rows}</table>` +
        (hasFile ? `<p style="color:#6b6b6b;font-size:13px;margin:18px 0 0">Attachment included: ${escapeHtml((file as File).name)}</p>` : "") +
        `</div>`,
      attachments: hasFile
        ? [
            {
              filename: (file as File).name || "requirement",
              content: Buffer.from(await (file as File).arrayBuffer()),
            },
          ]
        : [],
    });

    console.log(`inquiry: delivered id=${info.messageId} accepted=${info.accepted?.length ?? 0}`);
    return NextResponse.json({ ok: true });
  } catch (error) {
    // Never leak credentials or raw SMTP dialogue to the client.
    console.error("inquiry: send failed", error instanceof Error ? error.message : error);
    return NextResponse.json(
      {
        error: `We could not send your inquiry just now. Please email ${site.email} or message us on WhatsApp ${site.whatsapp}.`,
      },
      { status: 502 },
    );
  }
}
