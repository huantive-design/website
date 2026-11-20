import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { TrackedContactLink } from "@/components/TrackedContactLink";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | HUANTIVE",
  description: "Contact HUANTIVE for massage device OEM, ODM, wholesale and private-label inquiries.",
  alternates: { canonical: "/contact" },
};

type ContactPageProps = { searchParams: Promise<{ product?: string; intent?: string }> };

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const context = params.product || (params.intent ? params.intent.replaceAll("-", " ") : "");
  const contextMessage = context
    ? `Please send the suitable 100 / 200 / 500 pcs MOQ tier, lead time, packaging options and applicable compliance documents for ${context}.`
    : "Please send the suitable 100 / 200 / 500 pcs MOQ tier, lead time, packaging options and applicable compliance documents for the product I am interested in.";
  return (
    <section className="contact-page">
      <div className="shell contact-grid">
        <div className="contact-copy"><p className="eyebrow eyebrow-light">Contact Us</p><h1>Get MOQ, lead time and OEM options.</h1><p>Leave only the basic contact details. If you know the product model, quantity or target market, add it in the message and we will reply with the available specification, quotation scope, sample route, packaging options and next steps.</p><div className="contact-steps"><div><span>01</span><strong>Leave basic contact details</strong><p>Name and business email are enough to start.</p></div><div><span>02</span><strong>Add product or quantity if ready</strong><p>A model, category, target quantity or destination market helps us quote faster.</p></div><div><span>03</span><strong>Receive a factory reply</strong><p>We confirm MOQ, lead time, packaging options and available compliance documents by email or WhatsApp.</p></div></div><div className="contact-trust-box"><strong>What you receive in the first reply</strong><ul><li>Recommended 100 / 200 / 500 pcs MOQ tier by model</li><li>Lead time and sample route for your target market</li><li>Packaging, logo and document scope for quotation review</li></ul></div><p className="contact-direct">Sales inquiries: <TrackedContactLink href={`mailto:${site.email}`} event="email_click" category="contact_page" label="email">{site.email}</TrackedContactLink><br />WhatsApp: <TrackedContactLink href={whatsappLink} target="_blank" rel="noopener noreferrer" event="whatsapp_click" category="contact_page" label="whatsapp">{site.whatsapp}</TrackedContactLink></p></div>
        <InquiryForm defaultProduct={context} defaultMessage={contextMessage} />
      </div>
    </section>
  );
}
