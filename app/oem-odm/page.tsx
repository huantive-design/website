import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { categories } from "@/lib/products";
import { breadcrumbSchema, categoryFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Massage Device OEM & ODM Manufacturer | Private Label Factory",
  description:
    "OEM and ODM massage device manufacturer in China. Private-label development, customization, sampling, testing and production for distributors and brands in Europe and North America.",
  alternates: { canonical: "/oem-odm" },
};

const steps = [
  { title: "Brief", copy: "Target market, channel, price position and product direction are confirmed in writing." },
  { title: "Product fit", copy: "We match your brief to an existing platform or define a differentiated development route." },
  { title: "Customization", copy: "Logo, color, material, function scope and packaging are specified per model." },
  { title: "Sample", copy: "Evaluation samples are produced for functional and commercial review." },
  { title: "Testing", copy: "Applicable electrical, material and market-specific test documentation is arranged." },
  { title: "Production", copy: "Mass production runs against the approved sample and agreed specification." },
  { title: "Inspection", copy: "IQC, IPQC and FQC checkpoints are applied before shipment release." },
  { title: "Delivery", copy: "Packaging, carton data, loading plan and shipping documents are issued per order." },
];

const scopes = [
  { title: "Industrial design", copy: "Housing form, ergonomics and surface treatment adapted to your brand." },
  { title: "Color & finish", copy: "Pantone-referenced color and texture development per retail position." },
  { title: "Logo & identity", copy: "Printing, molding and engraving options confirmed by material." },
  { title: "Packaging", copy: "Retail box, gift set, manual and multilingual artwork." },
  { title: "Function development", copy: "Mode logic, heat profile, battery and control layout changes." },
  { title: "Accessory sets", copy: "Attachment heads, cases, chargers and bundled accessories." },
];

const faqs = [
  { q: "What is the difference between OEM and ODM in your factory?", a: "OEM applies your brand and customization to an existing platform. ODM develops a differentiated product around your market brief, which involves additional engineering, tooling and lead time." },
  { q: "Can you develop a product that does not exist in your catalog?", a: "Yes, subject to volume and tooling commitment. Feasibility, development cost and timeline are assessed against your target price and launch date before work starts." },
  { q: "Do you support compliance for EU, UK and North American markets?", a: "Selected products have supporting EU LVD, UK electrical safety, RoHS, REACH, FCC and UL/CSA test documentation. Applicability is confirmed by model and destination market for each order." },
  { q: "How long does a private-label program take?", a: "Lead time depends on customization depth, testing scope and production schedule. A milestone plan is issued with your quotation instead of a single published figure." },
];

export default function OemOdmPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "OEM & ODM", path: "/oem-odm" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFaqSchema(faqs)) }} />

      <section className="page-hero">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><b>OEM & ODM</b></nav>
          <p className="eyebrow">OEM & ODM manufacturing</p>
          <h1>Private-label massage<br />device development.</h1>
          <p>We manufacture massage and recovery devices for distributors, retail chains, private-label brands and e-commerce operators. Start from a proven platform or develop a differentiated product around your market.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/contact?intent=oem">Discuss your brief</Link>
            <Link className="button button-secondary" href="/products">Explore platforms</Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Customization scope</p><h2>What can be changed.</h2></div><p>Scope depends on volume, tooling investment, compliance requirements and your target launch date.</p></div>
        <div className="scope-grid">{scopes.map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">One accountable process</p><h2>From brief to delivery.</h2></div><p>Every milestone is visible before the next commitment, helping you control product fit, customization, testing and delivery risk.</p></div>
          <ol className="step-list">{steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step.title}</strong><p>{step.copy}</p></li>)}</ol>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Available categories</p><h2>Six manufacturing categories.</h2></div><p>Each category page lists the exact platforms available for OEM and private-label development.</p></div>
        <div className="category-link-grid">
          {categories.map((category) => (
            <Link key={category.slug} href={`/products/category/${category.slug}`}>
              <span className="category-link-thumb"><Image src={category.image} alt="" fill sizes="120px" /></span>
              <strong>{category.name}</strong><small>{category.buyerNote}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>OEM and ODM FAQ</h2></div></div>
          <div className="faq-list">{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
        </div>
      </section>

      <section className="final-rfq editorial-rfq">
        <div className="shell rfq-layout">
          <div>
            <p className="eyebrow eyebrow-light">Start a program</p>
            <h2>Tell us what your market needs.</h2>
            <p>Share the product direction, estimated quantity, destination market and customization scope. Until the sales mailbox is connected, urgent requests can use the published factory phone.</p>
            <div className="rfq-badges"><span>Sample support</span><span>OEM & ODM</span><span>Europe & North America</span></div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
