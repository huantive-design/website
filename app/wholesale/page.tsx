import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { categories } from "@/lib/products";
import { breadcrumbSchema, categoryFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Wholesale Massage Devices Supplier | Distributor Factory Quote",
  description:
    "Source wholesale massage devices from HUANTIVE for distributors, retailers and e-commerce programs. Compare category mix, MOQ, carton data, packaging, QC and factory quote details.",
  alternates: { canonical: "/wholesale" },
};

const distributorChecks = [
  { title: "Category mix", copy: "Build a range across massage guns, neck massagers, leg recovery, foot massagers, cushions and targeted devices instead of sourcing isolated SKUs." },
  { title: "Carton data", copy: "Request package size, carton quantity, carton weight and loading details before calculating landed cost and warehouse planning." },
  { title: "Market configuration", copy: "Confirm plug, manual language, label information, packaging copy and available documents for the destination market." },
  { title: "Retail readiness", copy: "Evaluate product photography, box messaging, instructions, barcode placement and claim wording before wholesale launch." },
  { title: "Repeat-order stability", copy: "Ask how the supplier controls approved samples, production changes, warranty handling and replenishment lead time." },
  { title: "After-sales route", copy: "Clarify defect reporting, spare parts, replacement handling and improvement feedback before the first shipment." },
];

const faqs = [
  { q: "Which massage devices are suitable for wholesale distribution?", a: "Common wholesale categories include massage guns, neck and shoulder massagers, foot massagers, air compression leg massagers, massage pillows, seat cushions and targeted body massagers." },
  { q: "What should distributors ask before comparing prices?", a: "Ask for model specifications, MOQ, lead time, package size, carton data, available documents, warranty terms and customization options." },
  { q: "Can wholesale products also be private labeled?", a: "Yes. Depending on the model and order quantity, wholesale programs can include logo, packaging, manual language, color and selected configuration changes." },
  { q: "Why does carton data matter for wholesale buyers?", a: "Carton size and weight affect freight cost, storage, damage risk and landed margin, especially for larger products such as foot massagers and recovery boots." },
];

export default function WholesalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Wholesale", path: "/wholesale" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFaqSchema(faqs)) }} />

      <section className="page-hero">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><b>Wholesale</b></nav>
          <p className="eyebrow">Wholesale massage devices</p>
          <h1>Build a wholesale massage device range for your market.</h1>
          <p>HUANTIVE supplies distributors, retail chains and e-commerce operators with massage and recovery device platforms for repeatable wholesale and private-label programs.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/contact?intent=wholesale">Request wholesale quote</Link>
            <Link className="button button-secondary" href="/products">View all products</Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Distributor checks</p><h2>Wholesale sourcing depends on more than unit price.</h2></div><p>Use these checks to compare commercial readiness, logistics cost and repeat-order reliability.</p></div>
        <div className="scope-grid">{distributorChecks.map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Wholesale categories</p><h2>Plan the range by buyer demand and logistics profile.</h2></div><p>Each category has different packaging, freight and after-sales considerations, so wholesale planning should happen before quotation.</p></div>
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
        <div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Wholesale massage device FAQ</h2></div></div>
        <div className="faq-list">{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
      </section>

      <section className="final-rfq editorial-rfq">
        <div className="shell rfq-layout">
          <div>
            <p className="eyebrow eyebrow-light">Wholesale quotation</p>
            <h2>Send the range and destination market.</h2>
            <p>Include target categories, estimated quantity, market, packaging requirements and preferred shipment schedule.</p>
            <div className="rfq-badges"><span>Distributor supply</span><span>Carton data</span><span>Repeat orders</span></div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
