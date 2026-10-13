import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | HUANTIVE",
  description: "Contact HUANTIVE for massage device OEM, ODM, wholesale and private-label inquiries.",
};

export default function ContactPage({ searchParams }: { searchParams: { product?: string; intent?: string } }) {
  const context = searchParams.product || (searchParams.intent ? searchParams.intent.replaceAll("-", " ") : "");
  return (
    <section className="contact-page">
      <div className="shell contact-grid">
        <div className="contact-copy"><p className="eyebrow eyebrow-light">Contact Us</p><h1>Get MOQ, lead time and OEM options.</h1><p>Leave only the basic contact details. If you know the product model, quantity or target market, add it in the message and we will reply with the available specification, quotation scope, sample route, packaging options and next steps.</p><div className="contact-steps"><div><span>01</span><strong>Leave basic contact details</strong><p>Name and business email are enough to start.</p></div><div><span>02</span><strong>Add product or quantity if ready</strong><p>A model, category, target quantity or destination market helps us quote faster.</p></div><div><span>03</span><strong>Receive a factory reply</strong><p>We confirm MOQ, lead time, packaging options and available compliance documents by email or WhatsApp.</p></div></div><p className="contact-direct">Sales inquiries: <a href={`mailto:${site.email}`}>{site.email}</a><br />WhatsApp: <a href={whatsappLink} target="_blank" rel="noopener noreferrer">{site.whatsapp}</a><br />Factory phone: {site.phone}</p></div>
        <InquiryForm defaultProduct={context} defaultMessage="Please send MOQ, lead time, packaging options and applicable compliance documents for the product I am interested in." />
      </div>
    </section>
  );
}
