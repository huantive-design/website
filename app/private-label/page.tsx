import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { breadcrumbSchema, categoryFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Private Label Massage Devices | OEM Program Guide",
  description:
    "Plan a private-label massage device program with HUANTIVE: model selection, logo, packaging, manuals, samples, MOQ, lead time, quality checks and after-sales support.",
  alternates: { canonical: "/private-label" },
};

const programSteps = [
  { title: "Choose the commercial role", copy: "Decide whether the product will be a hero device, entry SKU, bundle item, retail line extension or distributor catalogue product." },
  { title: "Select a factory platform", copy: "Start from massage guns, neck massagers, foot massagers, compression leg devices, cushions or targeted body massagers." },
  { title: "Define brand-visible changes", copy: "Logo, color, finish, retail box, manual language, barcode, accessory set and carton label are confirmed against order scope." },
  { title: "Approve samples", copy: "Evaluate comfort, function, packaging, instructions, claims and market fit before freezing the production configuration." },
  { title: "Confirm documents and QC", copy: "Review specification sheet, applicable documents, inspection flow and packaging files by exact model and market." },
  { title: "Plan repeat orders", copy: "Clarify warranty route, spare parts, defect reporting and repeat-order lead time before the first shipment." },
];

const faqs = [
  { q: "What can be customized in a private-label massage device program?", a: "Depending on model and quantity, customization may include logo, color, product finish, packaging artwork, manual language, accessories, carton labels and selected configuration details." },
  { q: "Is private label different from ODM?", a: "Private label usually starts from an existing product platform with brand and packaging customization. ODM involves deeper product development or structural changes." },
  { q: "Which product categories are suitable for a first private-label launch?", a: "Massage guns, neck and shoulder massagers, massage pillows and selected leg massagers are practical starting points because buyers can sample existing platforms before deeper customization." },
  { q: "What information should I send for quotation?", a: "Send product direction, target market, estimated first order quantity, logo or packaging needs, sample request and launch schedule." },
];

export default function PrivateLabelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Private Label", path: "/private-label" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFaqSchema(faqs)) }} />

      <section className="page-hero">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><b>Private Label</b></nav>
          <p className="eyebrow">Private-label massage devices</p>
          <h1>Build a massage device range under your own brand.</h1>
          <p>HUANTIVE supports private-label buyers with platform selection, packaging discussion, sample approval, model-specific documents and repeatable OEM production.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/contact?intent=private-label">Request private-label quote</Link>
            <Link className="button button-secondary" href="/oem-odm">Review OEM process</Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Program route</p><h2>Private label is a commercial system, not only logo printing.</h2></div><p>Strong programs connect product fit, visible differentiation, quality evidence and launch timing before production starts.</p></div>
        <ol className="step-list">{programSteps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step.title}</strong><p>{step.copy}</p></li>)}</ol>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Product directions</p><h2>Choose a category that fits your channel.</h2></div><p>Use existing product platforms for a faster launch, then add brand-visible differentiation where it improves conversion and repeat purchase.</p></div>
          <div className="scope-grid">
            <article><strong>Massage guns</strong><p>Compact, hot-cold and deep-tissue formats for recovery brands, retail chains and e-commerce bundles.</p></article>
            <article><strong>Neck and shoulder massagers</strong><p>Wearable, shiatsu and wrap-style formats for wellness, office comfort and gift channels.</p></article>
            <article><strong>Leg recovery devices</strong><p>Air compression leg massagers and recovery boots for wellness, sports recovery and distributor programs.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Private-label massage device FAQ</h2></div></div>
        <div className="faq-list">{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
      </section>

      <section className="final-rfq editorial-rfq">
        <div className="shell rfq-layout">
          <div>
            <p className="eyebrow eyebrow-light">Private-label quotation</p>
            <h2>Brief the first launch clearly.</h2>
            <p>Send your product category, target market, quantity, logo or packaging plan and sample schedule.</p>
            <div className="rfq-badges"><span>Logo and packaging</span><span>Sample approval</span><span>Repeat production</span></div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
