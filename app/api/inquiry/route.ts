import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const form = await request.formData();
  if (form.get("website")) return NextResponse.json({ ok: true });

  const required = ["name", "company", "email", "country", "product", "quantity"];
  const missing = required.some((key) => !String(form.get(key) || "").trim());
  const email = String(form.get("email") || "");
  const file = form.get("file");

  if (missing || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid inquiry" }, { status: 400 });
  }
  if (file instanceof File && file.size > 8 * 1024 * 1024) {
    return NextResponse.json({ error: "File is too large" }, { status: 413 });
  }

  return NextResponse.json(
    { error: "Inquiry email delivery is not configured yet. Please contact the factory by phone." },
    { status: 503 },
  );
}
