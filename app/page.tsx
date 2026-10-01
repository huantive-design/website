import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";
import { organizationSchema } from "@/lib/schema";

const process = ["Inquiry", "Product selection", "Customization", "Sampling", "Testing", "Production", "Quality control", "Delivery"];
const capabilities = ["Logo & identity", "Color & finish", "Packaging", "Functions", "Accessories", "New development"];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <Image src="/images/hero-product-family.png" alt="" fill priority sizes="100vw" />
          <div className="hero-media-wash" />
        </div>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Professional massage & recovery solutions</p>
            <h1>Built for brands.<br />Engineered to scale.</h1>
            <p className="hero-lede">Original product platforms for importers, distributors, retail chains, private-label brands, and high-volume e-commerce programs.</p>
            <div className="button-row"><Link className="button button-primary" href="/contact">Request a Quote</Link><Link className="button button-secondary" href="/contact?intent=catalog">Explore Capabilities</Link></div>
            <div className="hero-notes"><span>OEM & ODM</span><span>Sample support</span><span>Global configurations</span></div>
          </div>
          <div className="hero-stage" aria-label="Original massage and recovery product concept family">
            <div className="stage-caption"><span>Original concept imagery</span><strong>Replace with verified product assets before launch</strong></div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span />Discover</div>
      </section>

      <section className="proof-strip">
        <div className="shell proof-grid">
          {["Years experience", "Global markets", "Monthly capacity", "Product models", "OEM & ODM"].map((item, index) => <div key={item}><strong>{index === 4 ? "Yes" : "—"}</strong><span>{item}</span><small>Data pending</small></div>)}
        </div>
      </section>

      <section className="section shell" data-reveal>
        <div className="section-heading"><div><p className="eyebrow">Product architecture</p><h2>Find the right platform for your market.</h2></div><p>Start with a category, then compare market-ready configurations, customization scope, MOQ, and compliance information.</p></div>
        <div className="category-grid">{categories.map((category, index) => <Link id={category.slug} key={category.slug} className={`category-card category-${index + 1}`} href="/products"><span>0{index + 1}</span><div className="category-art"><i /><b /></div><h3>{category.name}</h3><p>{category.note}</p><strong>Explore category →</strong></Link>)}</div>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Market-ready products</p><h2>Built to shorten your sourcing cycle.</h2></div><Link className="text-link" href="/products">View all platforms →</Link></div>
          <div className="product-grid" data-reveal>{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
        </div>
      </section>

      <section id="oem" className="section dark-section">
        <div className="shell split-grid">
          <div className="customization-art" data-reveal>
            <Image src="/images/oem-components.png" alt="Original unbranded component concept illustrating OEM development" fill sizes="(max-width: 980px) 100vw, 52vw" />
            <div className="media-badge">Concept visualization · No third-party assets</div>
          </div>
          <div data-reveal><p className="eyebrow eyebrow-light">OEM & ODM</p><h2>Your product.<br />Your brand.</h2><p>Build a differentiated line through configurable identity, finish, packaging, accessories, and feature development.</p><div className="capability-grid">{capabilities.map((item) => <span key={item}>{item}</span>)}</div><Link className="button button-primary" href="/contact?intent=oem">Start your project</Link></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Development process</p><h2>A clear path from brief to delivery.</h2></div><p>Each milestone is designed to give buyers visibility before the next commitment.</p></div>
        <ol className="process-list" data-reveal>{process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
      </section>

      <section id="manufacturing" className="section manufacturing-section">
        <div className="shell split-grid reverse-mobile">
          <div data-reveal><p className="eyebrow">Buyer perspective</p><h2>Designed for a faster sourcing decision.</h2><p className="large-copy">A polished product story is useful only when commercial facts remain easy to verify: specifications, customization scope, testing, capacity, and delivery control.</p><div className="fact-list"><div><strong>Product evaluation</strong><span>Clear SKU-level data</span></div><div><strong>Customization review</strong><span>Defined scope and milestones</span></div><div><strong>Production approval</strong><span>Evidence required</span></div></div><p className="pending-note">Verified factory metrics and real production photography will replace placeholders before launch.</p></div>
          <div className="factory-frame" data-reveal><Image src="/images/buyer-evaluation.png" alt="Professional buyer evaluating an original unbranded massage device concept" fill sizes="(max-width: 980px) 100vw, 52vw" /><span>ORIGINAL BUYER EVALUATION SCENE</span></div>
        </div>
      </section>

      <section id="quality" className="section quality-section">
        <div className="shell quality-grid">
          <div><p className="eyebrow eyebrow-light">Quality & compliance</p><h2>Designed to reduce procurement risk.</h2><p>Show the controls and certifications that apply to each specific product—never generic claims.</p></div>
          <div className="qc-grid">{[["IQC","Incoming materials"],["IPQC","In-process checks"],["FQC","Final inspection"],["Trace","Batch records"]].map(([code,label]) => <div key={code}><strong>{code}</strong><span>{label}</span><small>Evidence pending</small></div>)}</div>
        </div>
      </section>

      <section id="solutions" className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Global solutions</p><h2>One platform, different buying models.</h2></div></div>
        <div className="solution-grid">{[["Distributors","Range planning, territory support, and scalable supply."],["Retail chains","Market-ready products, packaging, and launch coordination."],["Private-label brands","Identity, functions, sampling, and new development."],["E-commerce sellers","Fast evaluation, packaging, and repeatable fulfillment."]].map(([title,copy], index) => <article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p><Link href={`/contact?intent=${title.toLowerCase().replaceAll(" ", "-")}`}>Discuss your program →</Link></article>)}</div>
      </section>

      <section className="section case-section shell">
        <div className="section-heading"><div><p className="eyebrow">Project evidence</p><h2>Case studies will live here.</h2></div><p>Customer type, market, quantity, customization, timeline, and outcome should be shown only when verified.</p></div>
        <div className="case-grid">{["Regional distribution program", "Private-label retail launch", "E-commerce product refresh"].map((title, index) => <article key={title}><div className={`case-art case-${index}`}><span>CASE MEDIA PENDING</span></div><p>Anonymous case · Data pending</p><h3>{title}</h3></article>)}</div>
      </section>

      <section className="section final-rfq">
        <div className="shell rfq-layout"><div><p className="eyebrow eyebrow-light">Start a conversation</p><h2>Looking for your next massage product?</h2><p>Share the category, estimated quantity, target market, and customization needs. The commercial response channel will be connected before launch.</p><div className="rfq-badges"><span>Sample available</span><span>OEM & ODM</span><span>24h response target</span></div></div><InquiryForm compact /></div>
      </section>
    </>
  );
}
