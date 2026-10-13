"use client";

import { FormEvent, useState } from "react";
import { site, whatsappLink } from "@/lib/site";
import { trackConversion } from "@/components/TrackedLink";

export function InquiryForm({
  compact = false,
  defaultProduct = "",
  defaultIntent = "",
  defaultMessage = "",
}: {
  compact?: boolean;
  defaultProduct?: string;
  defaultIntent?: string;
  defaultMessage?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const form = event.currentTarget;

    try {
      const response = await fetch("/api/inquiry", { method: "POST", body: new FormData(form) });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        const submitted = new FormData(form);
        trackConversion({
          event: "inquiry_submit",
          category: "rfq_form",
          label: String(submitted.get("product") || submitted.get("intent") || "general"),
        });
        form.reset();
        setState("success");
        return;
      }
      setState("error");
      setMessage(data?.error || `Something went wrong. Please email ${site.email}.`);
    } catch {
      setState("error");
      setMessage(`Network error. Please email ${site.email} or message us on WhatsApp.`);
    }
  }

  return (
    <form className={compact ? "rfq-form compact" : "rfq-form"} onSubmit={submit}>
      <div className="field-grid simplified-field-grid">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Business email<input name="email" type="email" required autoComplete="email" /></label>
        <label>Company<input name="company" autoComplete="organization" placeholder="Optional" /></label>
        <label>Phone / WhatsApp<input name="phone" autoComplete="tel" placeholder="Optional" /></label>
      </div>
      <input type="hidden" name="intent" value={defaultIntent || "quotation"} />
      <input type="hidden" name="product" value={defaultProduct} />
      <label>Message<textarea name="message" rows={compact ? 3 : 4} defaultValue={defaultMessage} placeholder="Which product are you interested in? Quantity or customization can be added if available." /></label>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
      <button className="button button-primary" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Get MOQ & Lead Time"}
      </button>
      {state === "success" && (
        <p className="form-status success">
          Thank you. Your inquiry has been sent to our sales team — we reply within 24 hours on business days.
        </p>
      )}
      {state === "error" && (
        <p className="form-status error">
          {message}{" "}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion({ event: "whatsapp_click", category: "rfq_form", label: defaultProduct || defaultIntent || "general" })}>Open WhatsApp</a>
        </p>
      )}
      <p className="form-note">
        Your details are used only to answer this enquiry. Direct contact:{" "}
        <a href={`mailto:${site.email}`} onClick={() => trackConversion({ event: "email_click", category: "rfq_form", label: defaultProduct || defaultIntent || "general" })}>{site.email}</a> · WhatsApp{" "}
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={() => trackConversion({ event: "whatsapp_click", category: "rfq_form", label: defaultProduct || defaultIntent || "general" })}>{site.whatsapp}</a>
      </p>
    </form>
  );
}
