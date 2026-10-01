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
          <Image src="/company/showroom.jpg" alt="" fill priority sizes="100vw" />
          <div className="hero-media-wash" />
        </div>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">China massage device manufacturer</p>
            <h1>Built in-house.<br />Engineered to scale.</h1>
            <p className="hero-lede">OEM and ODM massage devices for importers, distributors, retail chains, private-label brands and high-volume e-commerce programs across Europe and North America.</p>
            <div className="button-row"><Link className="button button-primary" href="/contact">Request a Quote</Link><Link className="button button-secondary" href="/contact?intent=catalog">Explore Capabilities</Link></div>
            <div className="hero-notes"><span>OEM & ODM</span><span>Sample support</span><span>Global configurations</span></div>
          </div>
          <div className="hero-stage" aria-label="Massage and recovery product family">
            <div className="stage-caption"><span>Actual product showroom</span><strong>22 product platforms online</strong></div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span />Discover</div>
      </section>

      <section className="proof-strip">
        <div className="shell proof-grid">
          {[["18+","Years experience"],["15+","R&D engineers"],["260+","Team members"],["3M","Annual capacity"],["34,000+ m²","Factory space"]].map(([value,item]) => <div key={item}><strong>{value}</strong><span>{item}</span><small>Group profile data</small></div>)}
        </div>
      </section>

      <section className="section shell" data-reveal>
        <div className="section-heading"><div><p className="eyebrow">Product architecture</p><h2>Find the right platform for your market.</h2></div><p>Start with a category, then compare market-ready configurations, customization scope, MOQ, and compliance information.</p></div>
        <div className="category-grid">{categories.map((category, index) => <Link id={category.slug} key={category.slug} className={`category-card category-${index + 1}`} href="/products"><span>0{index + 1}</span><div className="category-art"><i /><b /></div><h3>{category.name}</h3><p>{category.note}</p><strong>Explore category →</strong></Link>)}</div>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Market-ready products</p><h2>Built to shorten your sourcing cycle.</h2></div><Link className="text-link" href="/products">View all platforms →</Link></div>
          <div className="product-grid" data-reveal>{products.slice(0, 6).map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
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
          <div data-reveal><p className="eyebrow">Integrated manufacturing</p><h2>Development, production and quality control under one group.</h2><p className="large-copy">Three production bases and more than 34,000 m² of combined factory space support massage-device development and repeatable supply.</p><div className="fact-list"><div><strong>Annual massage-device capacity</strong><span>Approx. 3 million sets</span></div><div><strong>R&D team</strong><span>15+ engineers</span></div><div><strong>Workforce</strong><span>260+ team members</span></div></div><Link className="text-link" href="/our-story">Explore our manufacturing story →</Link></div>
          <div className="factory-frame" data-reveal><Image src="/company/factory-campus.png" alt="Huangtai and Wanyang Group manufacturing campus" fill sizes="(max-width: 980px) 100vw, 52vw" /><span>ACTUAL MANUFACTURING CAMPUS</span></div>
        </div>
      </section>

      <section id="quality" className="section quality-section">
        <div className="shell quality-grid">
          <div><p className="eyebrow eyebrow-light">Quality & compliance</p><h2>Evidence matched to each quoted model.</h2><p>Selected products have supporting EU LVD, UK electrical safety, RoHS, REACH, FCC and UL/CSA test documentation. Applicability is confirmed per model and destination market.</p><Link className="text-link" href="/our-story">Review compliance scope →</Link></div>
          <div className="qc-grid">{[["IQC","Incoming materials"],["IPQC","In-process checks"],["FQC","Final inspection"],["Docs","Model-specific files"]].map(([code,label]) => <div key={code}><strong>{code}</strong><span>{label}</span><small>Scope confirmed per order</small></div>)}</div>
        </div>
      </section>

      <section id="solutions" className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Global solutions</p><h2>One platform, different buying models.</h2></div></div>
        <div className="solution-grid">{[["Distributors","Range planning, territory support, and scalable supply."],["Retail chains","Market-ready products, packaging, and launch coordination."],["Private-label brands","Identity, functions, sampling, and new development."],["E-commerce sellers","Fast evaluation, packaging, and repeatable fulfillment."]].map(([title,copy], index) => <article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{copy}</p><Link href={`/contact?intent=${title.toLowerCase().replaceAll(" ", "-")}`}>Discuss your program →</Link></article>)}</div>
      </section>

      <section className="section case-section shell">
        <div className="section-heading"><div><p className="eyebrow">Inside the group</p><h2>Real places. Real processes.</h2></div><p>Review our actual workshop, inspection area and showroom before starting a sourcing conversation.</p></div>
        <div className="case-grid">{[["/company/cutting-workshop.jpg","Material cutting"],["/company/inspection-area.jpg","Inspection area"],["/company/showroom.jpg","Product showroom"]].map(([image,title]) => <article key={title}><div className="case-art real-case"><Image src={image} alt={title} fill sizes="(max-width: 640px) 50vw, 33vw" /></div><p>Huangtai & Wanyang Group</p><h3>{title}</h3></article>)}</div>
      </section>

      <section className="section final-rfq">
        <div className="shell rfq-layout"><div><p className="eyebrow eyebrow-light">Start a conversation</p><h2>Looking for your next massage product?</h2><p>Share the category, estimated quantity, target market and customization needs. Until the sales mailbox is connected, use the published factory phone for urgent requests.</p><div className="rfq-badges"><span>Sample available</span><span>OEM & ODM</span><span>24h response target</span></div></div><InquiryForm compact /></div>
      </section>
    </>
  );
}
