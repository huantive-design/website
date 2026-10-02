import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";
import { categoryFaqSchema, organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Massage Device Manufacturer | OEM & ODM Factory in China",
  description:
    "China massage device manufacturer supplying massage guns, neck and shoulder massagers, foot and leg recovery, massage pillows and targeted devices for OEM, ODM and wholesale programs in Europe and North America.",
  alternates: { canonical: "/" },
};

const capabilities = ["Industrial design", "Color & finish", "Logo & identity", "Packaging", "Function development", "Accessory sets"];
const spotlight = [products[6], products[14], products[17]];
const homeFaqs = [
  { q: "Are you a manufacturer or a trading company?", a: "We are a manufacturer. Development, production and quality control run across three production bases with more than 34,000 m² of combined factory space." },
  { q: "Do you accept OEM and private-label orders?", a: "Yes. Logo, color, material, function scope and packaging are customized against the selected model. Full ODM development is available with volume and tooling commitment." },
  { q: "Which markets do you supply?", a: "We supply distributors, retail chains, private-label brands and e-commerce operators primarily across Europe and North America." },
  { q: "How do I get specifications and MOQ?", a: "Send the product direction, estimated quantity and destination market. Model-specific specification, MOQ, compliance scope and lead time are issued with your quotation." },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFaqSchema(homeFaqs)) }} />

      <section className="editorial-hero">
        <div className="hero-wordmark" aria-hidden="true">RECOVERY</div>
        <div className="shell editorial-hero-grid">
          <div className="editorial-copy">
            <p className="eyebrow">Massage device manufacturer · China</p>
            <h1>Massage devices.<br /><em>Built to become brands.</em></h1>
            <p>OEM and ODM massage device manufacturing for distributors, retail chains, private-label brands and e-commerce operators across Europe and North America.</p>
            <div className="button-row"><Link className="button button-primary" href="/contact">Start a project</Link><Link className="button button-secondary" href="/products">Explore products</Link></div>
          </div>
          <div className="editorial-product">
            <div className="hero-halo" />
            <Image src="/products/11/image-1.jpg" alt="Hot and cold massage gun available for OEM development" fill priority sizes="(max-width: 980px) 100vw, 56vw" />
            <div className="hero-product-note"><span>Featured platform</span><strong>Hot & Cold Massage Gun</strong><Link href="/products/hot-cold-massage-gun">View product →</Link></div>
          </div>
        </div>
        <div className="hero-index"><span>01</span><i /><span>06</span></div>
      </section>

      <section className="credibility-rail">
        <div className="shell credibility-grid">
          {[["18+","Years in massage devices"],["15+","R&D engineers"],["260+","Team members"],["34,000+ m²","Combined factory space"],["3M","Annual device capacity"]].map(([value,label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="section source-section shell" data-reveal>
        <div className="source-header"><div><p className="eyebrow">Shop by category</p><h2>Six categories.<br />Twenty-two platforms.</h2></div><p>Each category has a dedicated page with its product platforms, customization scope and buyer FAQ. Specifications, MOQ and compliance scope are confirmed against the exact model you quote.</p></div>
        <div className="source-grid">{categories.slice(0, 5).map((category, index) => <Link className={`source-card source-card-${index + 1}`} href={`/products/category/${category.slug}`} key={category.slug}><Image src={category.image} alt={category.name} fill sizes="(max-width: 720px) 100vw, 33vw" /><div className="source-card-overlay" /><div className="source-card-copy"><span>0{index + 1}</span><h3>{category.name}</h3><p>{category.buyerNote}</p><b>Explore →</b></div></Link>)}</div>
        <Link className="source-more" href={`/products/category/${categories[5].slug}`}><strong>06 · {categories[5].name}</strong><span>{categories[5].buyerNote}</span><b>Explore category →</b></Link>
      </section>

      <section className="spotlight-section">
        <div className="shell spotlight-head"><div><p className="eyebrow eyebrow-light">Product spotlight</p><h2>Formats buyers already understand.<br /><em>Execution they can trust.</em></h2></div><Link href="/products">View all 22 products →</Link></div>
        <div className="spotlight-track">{spotlight.map((product, index) => <article key={product.slug} className="spotlight-card"><div className="spotlight-image"><Image src={product.images[0]} alt={product.name} fill sizes="75vw" /></div><div className="spotlight-copy"><span>0{index + 1}</span><h3>{product.name}</h3><p>{product.summary}</p><Link href={`/products/${product.slug}`}>Explore platform →</Link></div></article>)}</div>
      </section>

      <section id="oem" className="engineering-section">
        <div className="engineering-media"><Image src="/images/oem-components.png" alt="Original component concept illustrating massage device OEM development" fill sizes="100vw" /></div>
        <div className="shell engineering-grid"><div /><div className="engineering-copy" data-reveal><p className="eyebrow eyebrow-light">OEM & ODM</p><h2>From an existing platform<br />to your next product.</h2><p>Choose a proven product direction or develop a differentiated program around your target market, channel and price position.</p><div className="capability-grid">{capabilities.map((item) => <span key={item}>{item}</span>)}</div><Link className="button button-primary" href="/oem-odm">See the OEM process</Link></div></div>
      </section>

      <section id="manufacturing" className="factory-story">
        <Image src="/company/factory-campus.png" alt="Huangtai and Wanyang Group manufacturing campus" fill sizes="100vw" />
        <div className="factory-story-shade" />
        <div className="shell factory-story-copy" data-reveal><p className="eyebrow eyebrow-light">Integrated manufacturing</p><h2>Development, production<br />and quality control.</h2><p>Three production bases and more than 34,000 m² of combined factory space support repeatable massage-device programs for international buyers.</p><div className="factory-facts"><span><b>3M</b>Approx. annual capacity</span><span><b>15+</b>R&D engineers</span><span><b>260+</b>Team members</span></div><Link className="button button-light" href="/our-story">Explore our story</Link></div>
      </section>

      <section id="quality" className="evidence-section">
        <div className="shell evidence-grid"><div><p className="eyebrow eyebrow-light">Quality evidence</p><h2>Documentation matched<br />to the quoted model.</h2><p>Selected products have supporting EU LVD, UK electrical safety, RoHS, REACH, FCC and UL/CSA test documentation. Applicability is confirmed by model and destination market.</p><Link href="/our-story">Review compliance scope →</Link></div><div className="evidence-cards">{[["IQC","Incoming materials"],["IPQC","In-process control"],["FQC","Final inspection"],["DOCS","Model-specific files"]].map(([code,label]) => <article key={code}><strong>{code}</strong><span>{label}</span><small>Confirmed per order</small></article>)}</div></div>
      </section>

      <section className="section selected-products shell">
        <div className="source-header"><div><p className="eyebrow">Selected product platforms</p><h2>Start with a proven form.<br />Make it yours.</h2></div><Link href="/products">Browse all products →</Link></div>
        <div className="product-grid">{products.slice(0,6).map((product,index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
      </section>

      <section className="real-proof shell">
        <figure><Image src="/company/cutting-workshop.jpg" alt="Material cutting in the massage device workshop" fill sizes="50vw" /><figcaption><span>01</span>Material preparation</figcaption></figure>
        <figure><Image src="/company/inspection-area.jpg" alt="Inspection area in the massage device factory" fill sizes="50vw" /><figcaption><span>02</span>In-process inspection</figcaption></figure>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Sourcing FAQ</h2></div></div>
          <div className="faq-list">{homeFaqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
        </div>
      </section>

      <section className="final-rfq editorial-rfq"><div className="shell rfq-layout"><div><p className="eyebrow eyebrow-light">Build your next range</p><h2>Tell us what your market needs.</h2><p>Share the product direction, estimated quantity, destination market and customization scope. Until the sales mailbox is connected, urgent requests can use the published factory phone.</p><div className="rfq-badges"><span>Sample support</span><span>OEM & ODM</span><span>Europe & North America</span></div></div><InquiryForm compact /></div></section>
    </>
  );
}
