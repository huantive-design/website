"use client";

import { FormEvent, useState } from "react";

export function InquiryForm({ compact = false, defaultProduct = "" }: { compact?: boolean; defaultProduct?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    const response = await fetch("/api/inquiry", { method: "POST", body: new FormData(form) });
    if (response.ok) {
      form.reset();
      setState("success");
    } else setState("error");
  }

  return (
    <form className={compact ? "rfq-form compact" : "rfq-form"} onSubmit={submit}>
      <div className="field-grid">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Company<input name="company" required autoComplete="organization" /></label>
        <label>Business email<input name="email" type="email" required autoComplete="email" /></label>
        <label>Country<input name="country" required autoComplete="country-name" /></label>
        <label>Product<input name="product" required defaultValue={defaultProduct} placeholder="Product or category" /></label>
        <label>Estimated quantity<input name="quantity" required inputMode="numeric" placeholder="e.g. 1,000 units" /></label>
      </div>
      <label>Project details<textarea name="message" rows={compact ? 3 : 5} placeholder="Target market, customization, timeline..." /></label>
      <label className="file-field">Requirement file (optional)<input type="file" name="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" /></label>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
      <button className="button button-primary" disabled={state === "sending"}>{state === "sending" ? "Sending..." : "Submit inquiry"}</button>
      {state === "success" && <p className="form-status success">Thank you. Your inquiry has been recorded for follow-up.</p>}
      {state === "error" && <p className="form-status error">Submission could not be completed. Please check the fields and try again.</p>}
      <p className="form-note">Form delivery email is pending configuration before production launch.</p>
    </form>
  );
}
