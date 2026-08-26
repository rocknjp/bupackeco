// SMTP email via corporate mailbox (qingdaobaina.com).
// Configure in .env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, INQUIRY_NOTIFY_EMAIL
// Graceful no-op when not configured (inquiry is still stored in the admin dashboard).

import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (transporter) return transporter;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  const port = Number(SMTP_PORT || 465);
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // true for 465, false for 587 (STARTTLS)
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transporter;
}

export async function sendMail(options: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ sent: boolean; error?: string }> {
  const t = getTransporter();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const to = process.env.INQUIRY_NOTIFY_EMAIL || "hello@qingdaobaina.com";

  if (!t || !from) {
    console.warn(
      `[mailer] SMTP not configured — email "${options.subject}" skipped (stored in dashboard only)`
    );
    return { sent: false, error: "SMTP not configured" };
  }

  try {
    await t.sendMail({
      from: `BUpackEco Website <${from}>`,
      to,
      replyTo: options.replyTo,
      subject: options.subject,
      html: options.html,
    });
    return { sent: true };
  } catch (err) {
    console.error("[mailer] send failed:", err);
    return { sent: false, error: String(err) };
  }
}

function row(label: string, value?: string | null): string {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px;background:#f4f6f4;font-weight:600;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 12px;">${value}</td></tr>`;
}

/** Notification email for a new "Other packaging" / contact inquiry */
export function inquiryEmailHtml(fields: Record<string, string>): string {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => row(k, v))
    .join("");

  return `
  <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;">
    <div style="background:#1a5c3a;color:#fff;padding:16px 24px;border-radius:8px 8px 0 0;">
      <h2 style="margin:0;font-size:18px;">📦 New Packaging Inquiry — bupackeco.com</h2>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;font-size:14px;color:#1f2937;">
      ${rows}
    </table>
    <p style="font-size:12px;color:#6b7280;margin-top:12px;">
      This inquiry is also saved in the admin dashboard → Inquiries.
      Reply directly to this email to reach the customer (Reply-To is set to their email).
    </p>
  </div>`;
}
