import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { categories } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Massage Device Manufacturing | HUANTIVE Factory Capability",
  description:
    "Review HUANTIVE massage device manufacturing capability: production bases, factory space, product development, OEM category coverage and B2B quotation support for global buyers.",
  alternates: { canonical: "/manufacturing" },
};

const milestones = [
  ["2006", "Business founded and entered massage-device manufacturing."],
  ["2013", "Wenzhou production base established to strengthen integrated manufacturing."],
  ["2018", "Zhejiang base expanded product development and supply capacity."],
  ["2023", "Hubei production base added further group manufacturing capability."],
];

const capabilities = [
  { title: "Product development", copy: "Existing product platforms and ODM projects are reviewed against target market, channel, positioning and technical feasibility." },
  { title: "Assembly and production", copy: "Massage guns, neck and shoulder massagers, foot and leg devices, cushions and targeted massagers are produced through category-specific workflows." },
  { title: "OEM configuration", copy: "Logo, colour, finish, accessories, retail box, manual language and carton labels are confirmed by selected model and order scope." },
  { title: "Quotation support", copy: "Buyers receive model-specific specifications, packaging data, MOQ, lead time and documentation scope with the quotation." },
];

export default function ManufacturingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Manufacturing", path: "/manufacturing" },
      ])) }} />

      <section className="page-hero manufacturing-hero">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><b>Manufacturing</b></nav>
          <p className="eyebrow">Manufacturing capability</p>
          <h1>Massage device factory capability for OEM buyers.</h1>
          <p>{site.legalName} integrates product development, production, inspection and B2B delivery support for massage and recovery device programs.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/contact?intent=quotation">Request factory quote</Link>
            <Link className="button button-secondary" href="/products">View product platforms</Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Factory scale</p><h2>Production capability buyers can evaluate.</h2></div><p>These figures are presented as manufacturing context for sourcing teams. Final capacity allocation, lead time and production schedule are confirmed by selected model and order volume.</p></div>
        <div className="story-stats">
          <div><strong>18+</strong><span>Years in massage devices</span></div>
          <div><strong>260+</strong><span>Team members</span></div>
          <div><strong>3</strong><span>Production bases</span></div>
          <div><strong>34,000+ m²</strong><span>Combined factory space</span></div>
          <div><strong>3M</strong><span>Approximate annual device capacity</span></div>
        </div>
      </section>

      <section className="story-media-grid shell">
        <figure><Image src="/company/factory-campus.png" alt="HUANTIVE massage device manufacturing campus" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Manufacturing campus</figcaption></figure>
        <figure><Image src="/company/cutting-workshop.jpg" alt="Material cutting process in the massage device workshop" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Workshop process</figcaption></figure>
      </section>

      <section className="section section-muted">
        <div className="shell split-grid">
          <div><p className="eyebrow">Development path</p><h2>Manufacturing capacity built over time.</h2><p>The factory story matters to B2B buyers because repeatable delivery depends on facilities, people, tooling, inspection and category knowledge working together.</p></div>
          <ol className="timeline">{milestones.map(([year, copy]) => <li key={year}><strong>{year}</strong><p>{copy}</p></li>)}</ol>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">What buyers can source</p><h2>Six manufacturing categories.</h2></div><p>Each category page lists available product platforms for OEM, wholesale and private-label development.</p></div>
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
          <div className="section-heading"><div><p className="eyebrow">Manufacturing support</p><h2>From product fit to shipment release.</h2></div><p>Project details are confirmed in writing before production, including product configuration, packaging and documentation scope.</p></div>
          <div className="scope-grid">{capabilities.map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.copy}</p></article>)}</div>
        </div>
      </section>

      <section className="final-rfq editorial-rfq">
        <div className="shell rfq-layout">
          <div>
            <p className="eyebrow eyebrow-light">Factory quotation</p>
            <h2>Share your target product and market.</h2>
            <p>Send product direction, estimated quantity, destination market and customization scope for model-specific quotation support.</p>
            <div className="rfq-badges"><span>OEM & ODM</span><span>Private label</span><span>Wholesale supply</span></div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
