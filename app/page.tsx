import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";
import { organizationSchema } from "@/lib/schema";

const process = ["Brief", "Product fit", "Customization", "Sample", "Testing", "Production", "Inspection", "Delivery"];
const capabilities = ["Industrial design", "Color & finish", "Logo & identity", "Packaging", "Function development", "Accessory sets"];
const categoryVisuals = [
  { ...categories[0], image: "/products/3/image-1.jpg", copy: "Kneading, heat and wearable formats" },
  { ...categories[1], image: "/products/8/image-1.jpg", copy: "Compression and enclosed recovery systems" },
  { ...categories[2], image: "/products/11/image-1.jpg", copy: "Percussion, heat and cooling concepts" },
  { ...categories[3], image: "/products/16/image-1.jpg", copy: "Compact pillows and full-back seat pads" },
  { ...categories[4], image: "/products/21/image-1.jpg", copy: "Hand, waist, ankle and facial devices" },
];
const spotlight = [products[10], products[7], products[18]];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />

      <section className="editorial-hero">
        <div className="hero-wordmark" aria-hidden="true">RECOVERY</div>
        <div className="shell editorial-hero-grid">
          <div className="editorial-copy">
            <p className="eyebrow">Massage device manufacturer · China</p>
            <h1>Recovery products.<br /><em>Built to become brands.</em></h1>
            <p>OEM and ODM massage devices developed for distributors, retail chains, private-label brands and e-commerce operators across Europe and North America.</p>
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
        <div className="source-header"><div><p className="eyebrow">Source by category</p><h2>Built around the way<br />your customers recover.</h2></div><p>Explore verified product imagery and select a platform. Technical specifications, MOQ and compliance scope are confirmed against the exact model you quote.</p></div>
        <div className="source-grid">{categoryVisuals.map((category, index) => <Link className={`source-card source-card-${index + 1}`} href={`/products#${category.slug}`} key={category.slug}><Image src={category.image} alt={category.name} fill sizes="(max-width: 720px) 100vw, 33vw" /><div className="source-card-overlay" /><div className="source-card-copy"><span>0{index + 1}</span><h3>{category.name}</h3><p>{category.copy}</p><b>Explore →</b></div></Link>)}</div>
      </section>

      <section className="spotlight-section">
        <div className="shell spotlight-head"><div><p className="eyebrow eyebrow-light">Product spotlight</p><h2>Formats buyers already understand.<br /><em>Execution they can trust.</em></h2></div><Link href="/products">View all 22 products →</Link></div>
        <div className="spotlight-track">{spotlight.map((product, index) => <article key={product.slug} className="spotlight-card"><div className="spotlight-image"><Image src={product.images[0]} alt={product.name} fill sizes="75vw" /></div><div className="spotlight-copy"><span>0{index + 1}</span><h3>{product.name}</h3><p>{product.summary}</p><Link href={`/products/${product.slug}`}>Explore platform →</Link></div></article>)}</div>
      </section>

      <section id="oem" className="engineering-section">
        <div className="engineering-media"><Image src="/images/oem-components.png" alt="Original component concept illustrating massage device OEM development" fill sizes="100vw" /></div>
        <div className="shell engineering-grid"><div /><div className="engineering-copy" data-reveal><p className="eyebrow eyebrow-light">OEM & ODM</p><h2>From an existing platform<br />to your next product.</h2><p>Choose a proven product direction or develop a differentiated program around your target market, channel and price position.</p><div className="capability-grid">{capabilities.map((item) => <span key={item}>{item}</span>)}</div><Link className="button button-primary" href="/contact?intent=oem">Discuss your brief</Link></div></div>
      </section>

      <section id="manufacturing" className="factory-story">
        <Image src="/company/factory-campus.png" alt="Huangtai and Wanyang Group manufacturing campus" fill sizes="100vw" />
        <div className="factory-story-shade" />
        <div className="shell factory-story-copy" data-reveal><p className="eyebrow eyebrow-light">Integrated manufacturing</p><h2>Development, production<br />and quality control.</h2><p>Three production bases and more than 34,000 m² of combined factory space support repeatable massage-device programs for international buyers.</p><div className="factory-facts"><span><b>3M</b>Approx. annual capacity</span><span><b>15+</b>R&D engineers</span><span><b>260+</b>Team members</span></div><Link className="button button-light" href="/our-story">Explore our story</Link></div>
      </section>

      <section className="section process-section shell">
        <div className="source-header"><div><p className="eyebrow">One accountable process</p><h2>Clear from brief<br />to delivery.</h2></div><p>Every milestone is visible before the next commitment, helping buyers control product fit, customization, testing and delivery risk.</p></div>
        <ol className="process-list process-editorial">{process.map((step,index) => <li key={step}><span>{String(index + 1).padStart(2,"0")}</span><strong>{step}</strong></li>)}</ol>
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

      <section className="final-rfq editorial-rfq"><div className="shell rfq-layout"><div><p className="eyebrow eyebrow-light">Build your next range</p><h2>Tell us what your market needs.</h2><p>Share the product direction, estimated quantity, destination market and customization scope. Until the sales mailbox is connected, urgent requests can use the published factory phone.</p><div className="rfq-badges"><span>Sample support</span><span>OEM & ODM</span><span>Europe & North America</span></div></div><InquiryForm compact /></div></section>
    </>
  );
}
