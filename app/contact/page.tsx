import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Request a Quote", description: "Submit your B2B massage and recovery product requirements." };

export default function ContactPage({ searchParams }: { searchParams: { product?: string; intent?: string } }) {
  const context = searchParams.product || (searchParams.intent ? searchParams.intent.replaceAll("-", " ") : "");
  return (
    <section className="contact-page">
      <div className="shell contact-grid">
        <div className="contact-copy"><p className="eyebrow eyebrow-light">Request for quotation</p><h1>Tell us what you are building.</h1><p>Start with the essentials. Product selection, customization details, samples, testing, and commercial terms can be refined after the first review.</p><div className="contact-steps"><div><span>01</span><strong>Share your brief</strong><p>Product, quantity, market, and timing.</p></div><div><span>02</span><strong>Review feasibility</strong><p>Platform, customization, testing, and MOQ.</p></div><div><span>03</span><strong>Plan next step</strong><p>Sample, quotation, development, or production.</p></div></div><p className="pending-note light">Factory phone: +86 577 6305 0999. Sales email delivery is pending final configuration.</p></div>
        <InquiryForm defaultProduct={context} />
      </div>
    </section>
  );
}
