"use client";

import { FormEvent, FocusEvent, useEffect, useState } from "react";
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
  const [started, setStarted] = useState(false);
  const [sourceUrl, setSourceUrl] = useState("");

  useEffect(() => {
    setSourceUrl(window.location.href);
  }, []);

  function markFormStart(event: FocusEvent<HTMLFormElement>) {
    if (started) return;
    const target = event.target as HTMLElement;
    if (!target.closest("input, textarea, select")) return;
    setStarted(true);
    trackConversion({ event: "form_start", category: "rfq_form", label: defaultProduct || defaultIntent || "general" });
  }

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
          event: "form_submit",
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
    <form className={compact ? "rfq-form compact" : "rfq-form"} onSubmit={submit} onFocus={markFormStart}>
      <div className="field-grid simplified-field-grid">
        <label>Name<input name="name" required autoComplete="name" /></label>
        <label>Business email<input name="email" type="email" required autoComplete="email" /></label>
        <label>Company<input name="company" autoComplete="organization" placeholder="Optional" /></label>
        <label>Phone / WhatsApp<input name="phone" autoComplete="tel" placeholder="Optional" /></label>
      </div>
      <input type="hidden" name="intent" value={defaultIntent || "quotation"} />
      <input type="hidden" name="product" value={defaultProduct} />
      <input type="hidden" name="sourceUrl" value={sourceUrl} />
      <label>MOQ tier<select name="moqTier" defaultValue=""><option value="">Select if known</option><option value="100 pcs">100 pcs trial order</option><option value="200 pcs">200 pcs small wholesale</option><option value="500 pcs">500 pcs bulk / private-label planning</option></select></label>
      <label>Target market<input name="market" placeholder="US, UK, EU or other" /></label>
      <label>Message<textarea name="message" rows={compact ? 3 : 4} defaultValue={defaultMessage} placeholder="Which product are you interested in? Quantity or customization can be added if available." /></label>
      <label>Requirement file<input name="file" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png" /></label>
      <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" />
      <button className="button button-primary" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Get MOQ & Lead Time"}
      </button>
      <p className="rfq-microcopy">No account is required. A product model, target quantity or destination market is enough for the first quotation reply.</p>
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
