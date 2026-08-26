// Public inquiry endpoint — "Other packaging" form on /quote and the contact form.
// Stores the inquiry (visible in admin dashboard) and emails hello@qingdaobaina.com.

import { NextRequest, NextResponse } from "next/server";
import { addInquiry } from "@/lib/data/inquiries";
import { sendMail, inquiryEmailHtml } from "@/lib/mailer";

function clean(value: unknown, max = 2000): string {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const name = clean(body.name, 100);
    const email = clean(body.email, 150);
    const message =
      clean(body.message, 3000) ||
      "(No additional message — sample kit / quote request)";

    if (!name || !email.includes("@")) {
      return NextResponse.json(
        { error: "Name and a valid email are required" },
        { status: 400 }
      );
    }

    const fields: Record<string, string> = {
      "Packaging type": clean(body.packagingType, 100),
      "Where used": clean(body.use, 100),
      Dimensions: clean(body.dims, 60),
      Quantity: clean(body.quantity, 40),
      Material: clean(body.material, 100),
      Printing: clean(body.printing, 100),
      Finishing: Array.isArray(body.finishes)
        ? body.finishes.map((f: string) => clean(f, 50)).filter(Boolean).join(", ")
        : "",
      "Artwork status": clean(body.artworkStatus, 60),
      "Target price": clean(body.targetPrice, 60),
      Timeline: clean(body.timeline, 60),
      Product: clean(body.product, 120),
      Stage: clean(body.stage, 120),
      Website: clean(body.website, 200),
      "WhatsApp / Phone": clean(body.phone, 60),
      "Registered account": clean(body.accountEmail, 150),
      Message: message,
    };

    const inquiry = await addInquiry({
      name,
      email,
      company: clean(body.company, 150),
      website: clean(body.website, 200) || undefined,
      stage: clean(body.stage, 120) || "—",
      product: fields["Packaging type"] || clean(body.product, 120) || "Other / custom packaging",
      quantity: fields["Quantity"] || "—",
      message,
      source: body.source === "contact" ? "contact" : "other-packaging",
      phone: fields["WhatsApp / Phone"] || undefined,
      packagingType: fields["Packaging type"] || undefined,
      dims: fields["Dimensions"] || undefined,
      material: fields["Material"] || undefined,
      printing: fields["Printing"] || undefined,
      finishes: Array.isArray(body.finishes) ? body.finishes : undefined,
      artworkStatus: fields["Artwork status"] || undefined,
      targetPrice: fields["Target price"] || undefined,
      timeline: fields["Timeline"] || undefined,
      accountEmail: fields["Registered account"] || undefined,
    });

    const emailResult = await sendMail({
      subject: `New Inquiry — ${inquiry.product} (${name})`,
      html: inquiryEmailHtml({
        "Inquiry ID": inquiry.id,
        Name: name,
        Email: email,
        Company: inquiry.company,
        ...fields,
        Source: inquiry.source ?? "contact",
      }),
      replyTo: email,
    });

    return NextResponse.json({
      success: true,
      id: inquiry.id,
      emailSent: emailResult.sent,
    });
  } catch (err) {
    console.error("[inquiry] failed:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email hello@qingdaobaina.com" },
      { status: 500 }
    );
  }
}
