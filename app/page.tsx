import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductRail } from "@/components/ProductRail";
import { categories, products } from "@/lib/products";
import { categoryFaqSchema, organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Massage Device Manufacturer | OEM & ODM Factory in China",
  description:
    "China massage device manufacturer supplying massage guns, neck and shoulder massagers, foot and leg recovery, massage pillows and targeted devices for OEM, ODM and wholesale programs in Europe and North America.",
  alternates: { canonical: "/" },
};

const pick = (...slugs: string[]) => slugs.map((slug) => products.find((product) => product.slug === slug)).filter((product): product is (typeof products)[number] => Boolean(product));
const bestSellers = pick("hot-cold-massage-gun", "deep-tissue-massage-gun", "compression-leg-massager-boots", "shiatsu-foot-massager-machine", "shiatsu-massage-pillow", "full-back-massage-seat-cushion");
const newPlatforms = pick("mini-massage-gun", "cooling-massage-gun", "wearable-neck-massager", "heated-lumbar-massager-belt", "ems-facial-massager", "air-compression-leg-massager");
const solutions = [
  { label: "Heated massage guns", href: "/products/category/massage-guns", image: "/products/11/image-1.jpg" },
  { label: "Compression leg recovery", href: "/products/category/leg-massagers", image: "/products/8/image-1.jpg" },
  { label: "Full-back seat cushions", href: "/products/category/massage-pillows-cushions", image: "/products/19/image-1.jpg" },
];
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

      <section className="tb-hero">
        <div className="tb-hero-media">
          <Image src="/products/11/image-1.jpg" alt="Hot and cold massage gun manufactured for OEM programs" fill priority sizes="100vw" />
        </div>
        <div className="shell tb-hero-inner">
          <div className="tb-hero-copy">
            <p className="tb-tag">OEM &amp; ODM manufacturing</p>
            <h1>Recovery devices,<br />built for your brand</h1>
            <p>Massage guns, neck and shoulder massagers, foot and leg recovery, pillows and targeted devices — manufactured in China for international retail and distribution programs.</p>
            <div className="tb-hero-actions">
              <Link className="button button-dark" href="/contact">Request a quote</Link>
              <Link className="button button-outline" href="/products">Explore products</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="tb-section shell">
        <div className="tb-head">
          <h2>Science-backed devices for recovery and wellness</h2>
          <Link href="/products">View all 22 products →</Link>
        </div>
        <ProductRail products={bestSellers} idPrefix="best" />
      </section>

      <section className="tb-claim">
        <div className="shell tb-claim-grid">
          <article>
            <div className="tb-claim-media"><Image src="/company/factory-campus.png" alt="Massage device manufacturing campus" fill sizes="(max-width: 980px) 100vw, 50vw" /></div>
            <div className="tb-claim-body">
              <h3>Integrated manufacturing across three bases</h3>
              <p>More than 34,000 m² of combined factory space supports repeatable massage-device programs for international buyers.</p>
              <Link href="/our-story">Explore our story →</Link>
              <p className="tb-stat"><strong>3M</strong> approximate annual device capacity</p>
            </div>
          </article>
          <article>
            <div className="tb-claim-media"><Image src="/images/oem-components.png" alt="Component development for massage device OEM programs" fill sizes="(max-width: 980px) 100vw, 50vw" /></div>
            <div className="tb-claim-body">
              <h3>Private-label development from brief to delivery</h3>
              <p>Choose a proven platform or develop a differentiated product around your market, channel and price position.</p>
              <Link href="/oem-odm">See the OEM process →</Link>
              <p className="tb-stat"><strong>15+</strong> R&amp;D engineers supporting development</p>
            </div>
          </article>
        </div>
      </section>

      <section className="tb-section shell">
        <div className="tb-head tb-head-center">
          <h2>Therapeutic solutions for <em>every</em> body</h2>
        </div>
        <div className="tb-solution-grid">
          {solutions.map((item) => (
            <Link className="tb-solution" href={item.href} key={item.label}>
              <span className="tb-solution-media"><Image src={item.image} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" /></span>
              <strong>{item.label}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="tb-section tb-section-soft">
        <div className="shell">
          <div className="tb-head">
            <h2>Platforms ready for your next range</h2>
            <Link href="/products">Browse catalog →</Link>
          </div>
          <ProductRail products={newPlatforms} idPrefix="new" />
        </div>
      </section>

      <section className="tb-finder">
        <div className="shell tb-finder-grid">
          <div className="tb-finder-media"><Image src="/products/16/image-1.jpg" alt="Massage pillow platform available for private label" fill sizes="(max-width: 980px) 100vw, 46vw" /></div>
          <div className="tb-finder-copy">
            <p className="tb-tag">Find your product fit</p>
            <h2>Not sure which platform suits your market?</h2>
            <p>Send your target channel, price position and estimated quantity. We match your brief to an existing platform or propose a differentiated development route.</p>
            <Link className="button button-dark" href="/contact?intent=oem">Discuss your brief</Link>
          </div>
        </div>
      </section>

      <section className="shell tb-category-strip">
        <div className="tb-head"><h2>Shop by category</h2><Link href="/products">All categories →</Link></div>
        <div className="tb-category-grid">
          {categories.map((category) => (
            <Link href={`/products/category/${category.slug}`} key={category.slug}>
              <span className="tb-category-media"><Image src={category.image} alt="" fill sizes="(max-width: 720px) 50vw, 200px" /></span>
              <strong>{category.name}</strong>
              <small>{category.buyerNote}</small>
            </Link>
          ))}
        </div>
      </section>

      <section id="quality" className="tb-research">
        <div className="shell">
          <h2>Quality and compliance evidence</h2>
          <div className="tb-research-grid">
            <article>
              <p>Selected products have supporting <strong>EU LVD, UK electrical safety, RoHS, REACH, FCC and UL/CSA</strong> test documentation. Applicability is confirmed by model and destination market.</p>
              <Link href="/our-story">Review compliance scope →</Link>
            </article>
            <article>
              <p>Production runs under <strong>IQC, IPQC and FQC</strong> checkpoints. Inspection scope and reporting format are confirmed per order before shipment release.</p>
              <Link href="/oem-odm">See the process →</Link>
            </article>
            <article>
              <p>Every quotation includes the <strong>model-specific specification</strong>, packaging and loading data, MOQ, sample policy and lead time.</p>
              <Link href="/contact">Request documentation →</Link>
            </article>
          </div>
        </div>
      </section>

      <section id="manufacturing" className="tb-trust">
        <div className="shell tb-trust-grid">
          <div><strong>18+</strong><span>Years in massage devices</span></div>
          <div><strong>260+</strong><span>Team members</span></div>
          <div><strong>3</strong><span>Production bases</span></div>
          <div><strong>34,000+ m²</strong><span>Combined factory space</span></div>
        </div>
      </section>

      <section className="tb-section shell">
        <div className="tb-head tb-head-center"><h2>Sourcing FAQ</h2></div>
        <div className="faq-list">{homeFaqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
      </section>

      <section className="final-rfq editorial-rfq">
        <div className="shell rfq-layout">
          <div>
            <p className="eyebrow eyebrow-light">Build your next range</p>
            <h2>Tell us what your market needs.</h2>
            <p>Share the product direction, estimated quantity, destination market and customization scope. Until the sales mailbox is connected, urgent requests can use the published factory phone.</p>
            <div className="rfq-badges"><span>Sample support</span><span>OEM &amp; ODM</span><span>Europe &amp; North America</span></div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
