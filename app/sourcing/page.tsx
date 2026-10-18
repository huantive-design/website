import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { categories } from "@/lib/products";
import { breadcrumbSchema, categoryFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Massage Device Sourcing Guide | OEM Supplier Evaluation",
  description:
    "Evaluate massage device suppliers for OEM and wholesale programs: product fit, factory capability, quality control, compliance documents, MOQ, lead time, packaging and after-sales support.",
  alternates: { canonical: "/sourcing" },
};

const checks = [
  { title: "Supplier role", copy: "Confirm whether the partner controls production, quality, packaging and repeat-order communication, or mainly coordinates third-party supply." },
  { title: "Product fit", copy: "Match the device format to your sales channel, target user, price position and claim boundaries before comparing unit prices." },
  { title: "OEM scope", copy: "Separate logo, color, packaging, manual language, accessories and deeper ODM changes because each item affects MOQ and lead time." },
  { title: "Quality route", copy: "Review IQC, IPQC, functional testing, final inspection and pre-shipment sampling for the selected product category." },
  { title: "Document scope", copy: "Check available reports by exact model, certificate holder, standard, issue date, configuration and destination market." },
  { title: "Commercial support", copy: "Clarify sample route, quotation validity, packaging data, warranty process, defect reporting and repeat-order planning." },
];

const faqs = [
  { q: "What should buyers check before choosing a massage device supplier?", a: "Buyers should check supplier identity, OEM scope, product fit, quality-control process, available documents, MOQ, lead time, packaging data and after-sales process." },
  { q: "Should I source from a factory or a trading company?", a: "A factory is usually better when you need repeatable OEM production, technical discussion and quality accountability. A trading company may be acceptable only when its role and responsibility are clear." },
  { q: "Which pages should procurement teams review first?", a: "Start with product category pages, then review OEM and ODM process, manufacturing capability, quality process and product-specific sourcing guides before sending an RFQ." },
  { q: "What should a sourcing RFQ include?", a: "Include product category, target market, estimated order quantity, customization scope, sample request, packaging expectation, document needs and launch timeline." },
];

export default function SourcingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Sourcing", path: "/sourcing" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFaqSchema(faqs)) }} />

      <section className="page-hero">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><b>Sourcing</b></nav>
          <p className="eyebrow">Massage device sourcing</p>
          <h1>Evaluate OEM massage device suppliers before sampling.</h1>
          <p>A procurement-focused guide for importers, distributors and private-label brands comparing massage device factories for Europe and North America.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/contact?intent=sourcing">Send sourcing RFQ</Link>
            <Link className="button button-secondary" href="/products">Browse product platforms</Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Supplier checklist</p><h2>Six checks that separate useful quotations from generic replies.</h2></div><p>These checks help buyers avoid thin supplier pages and focus on evidence that supports real purchasing decisions.</p></div>
        <div className="scope-grid">{checks.map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Search by product type</p><h2>Move from category intent to model-level RFQ.</h2></div><p>Each category page links to product platforms, specification notes, FAQ content and quotation paths.</p></div>
          <div className="category-link-grid">
            {categories.map((category) => (
              <Link key={category.slug} href={`/products/category/${category.slug}`}>
                <strong>{category.name}</strong><small>{category.buyerNote}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Massage device sourcing FAQ</h2></div></div>
        <div className="faq-list">{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
      </section>

      <section className="final-rfq editorial-rfq">
        <div className="shell rfq-layout">
          <div>
            <p className="eyebrow eyebrow-light">Supplier evaluation</p>
            <h2>Send a clearer sourcing brief.</h2>
            <p>Share the product type, quantity, target market and customization requirements so HUANTIVE can respond with model-specific MOQ, lead time and document scope.</p>
            <div className="rfq-badges"><span>OEM supplier review</span><span>Private label</span><span>Factory quotation</span></div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
