import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { breadcrumbSchema, categoryFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Massage Device Compliance Documents | OEM Buyer Guide",
  description:
    "Review massage device compliance documents before OEM production: model scope, certificates, test reports, labeling, manuals, packaging claims and destination-market responsibilities.",
  alternates: { canonical: "/compliance" },
};

const evidenceAreas = [
  { title: "Model scope", copy: "Documents must match the selected model, configuration, certificate holder, standard, issue date and destination market." },
  { title: "Electrical configuration", copy: "Adapters, batteries, charging ports, wireless functions, heat or cooling features can change which documents need review." },
  { title: "Material and chemical checks", copy: "Material-related requirements should be discussed early when buyers change colors, finishes, fabrics or contact materials." },
  { title: "Packaging claims", copy: "Retail boxes, manuals and listings should use conservative comfort and function language unless stronger claims are properly supported." },
  { title: "Factory QC evidence", copy: "Inspection flow, sample approval records and pre-shipment checks help connect compliance files to real production quality." },
  { title: "Importer responsibility", copy: "The factory can provide available evidence, while the party placing the product on the market controls final local compliance decisions." },
];

const faqs = [
  { q: "Can one certificate cover every massage device model?", a: "Not necessarily. Buyers should review each document by exact model, configuration, certificate holder, standard, issue date and destination market." },
  { q: "When should compliance documents be checked?", a: "Documents should be checked before packaging copy, quotation approval and bulk production, not after the order is already finished." },
  { q: "What claims should massage device brands avoid?", a: "Avoid unsupported medical or treatment claims. Safer wording focuses on comfort, relaxation, recovery routines and product function unless stronger claims are properly reviewed." },
  { q: "Which HUANTIVE pages support compliance review?", a: "Buyers should review the Quality page, Manufacturing page, OEM process page and product-specific quotation details before approving a program." },
];

export default function CompliancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Compliance", path: "/compliance" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFaqSchema(faqs)) }} />

      <section className="page-hero">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><b>Compliance</b></nav>
          <p className="eyebrow">Compliance document review</p>
          <h1>Check massage device documents before production decisions.</h1>
          <p>A B2B guide for buyers reviewing model-specific test reports, certificate scope, packaging claims and quality evidence for OEM massage device programs.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/contact?intent=compliance">Request document review</Link>
            <Link className="button button-secondary" href="/quality">View quality process</Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Evidence scope</p><h2>Compliance review is model-specific, not category-wide.</h2></div><p>This page is designed for procurement teams that need to reduce launch risk before approving samples, labels and production.</p></div>
        <div className="scope-grid">{evidenceAreas.map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="section section-muted">
        <div className="shell split-grid">
          <div>
            <p className="eyebrow">Practical workflow</p>
            <h2>Review documents before the product story is locked.</h2>
            <p>Buyers often finalize packaging and online listings too early. A safer process reviews available documents first, then confirms which claims, labels and instructions fit the target market.</p>
          </div>
          <div className="procurement-copy">
            <p>Start with exact model number, configuration and target market.</p>
            <p>Match each report or certificate to the product being quoted.</p>
            <p>Keep claims conservative unless stronger evidence is confirmed.</p>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Massage device compliance FAQ</h2></div></div>
        <div className="faq-list">{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
      </section>

      <section className="final-rfq editorial-rfq">
        <div className="shell rfq-layout">
          <div>
            <p className="eyebrow eyebrow-light">Document review</p>
            <h2>Ask for model-specific evidence.</h2>
            <p>Send the selected product, destination market and configuration so available documents can be reviewed before quotation and production.</p>
            <div className="rfq-badges"><span>Model scope</span><span>Packaging claims</span><span>QC evidence</span></div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
