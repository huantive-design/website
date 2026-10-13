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
        <div className="contact-copy"><p className="eyebrow eyebrow-light">Contact Us</p><h1>Send a quick inquiry.</h1><p>Leave your name and email. Product details, quantity, samples and OEM requirements can be confirmed after our first reply.</p><div className="contact-steps"><div><span>01</span><strong>Leave contact details</strong><p>Name and business email are enough to start.</p></div><div><span>02</span><strong>Tell us the product</strong><p>Add a short message if you already know the model or category.</p></div><div><span>03</span><strong>Receive follow-up</strong><p>We confirm specs, MOQ and next steps by email or WhatsApp.</p></div></div><p className="contact-direct">Sales inquiries: <a href={`mailto:${site.email}`}>{site.email}</a><br />WhatsApp: <a href={whatsappLink} target="_blank" rel="noopener noreferrer">{site.whatsapp}</a><br />Factory phone: {site.phone}</p></div>
        <InquiryForm defaultProduct={context} />
      </div>
    </section>
  );
}
