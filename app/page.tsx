import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CertificateCarousel } from "@/components/CertificateCarousel";
import { HeroVideo } from "@/components/HeroVideo";
import { ProductRail } from "@/components/ProductRail";
import { procurementBlogPosts } from "@/lib/procurementBlogPosts";
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
const featuredCategories = [
  {
    label: "Massage Guns",
    note: "Percussion recovery platforms for wholesale and private-label programs",
    href: "/products/category/massage-guns",
    image: "https://sc04.alicdn.com/kf/A817bdb24cda44c46ae1f5517f3b871c76.jpg",
  },
  {
    label: "Neck & Shoulder Massagers",
    note: "Wearable and structured formats for neck, shoulder and upper-back ranges",
    href: "/products/category/neck-shoulder-massagers",
    image: "https://sc04.alicdn.com/kf/A65748abe6fa9432cb8662b1dd877762dp.jpg",
  },
];
const solutions = [
  { label: "Heated massage guns", href: "/products/category/massage-guns", image: "/products/11/image-1.jpg" },
  { label: "Compression leg recovery", href: "/products/category/leg-massagers", image: "/products/8/image-1.webp" },
  { label: "Full-back seat cushions", href: "/products/category/massage-pillows-cushions", image: "/products/19/image-1.jpg" },
];
const coreSourcingPages = [
  { label: "Massage device manufacturer", href: "/products", note: "Browse all 22 OEM product platforms for B2B sourcing." },
  { label: "OEM / ODM massage devices", href: "/oem-odm", note: "Review private-label development, packaging and production flow." },
  { label: "Massage device sourcing guide", href: "/sourcing", note: "Evaluate suppliers, QC, documents, MOQ and RFQ readiness." },
  { label: "Private label massage devices", href: "/private-label", note: "Plan logo, packaging, samples and repeatable brand programs." },
  { label: "Wholesale massage devices", href: "/wholesale", note: "Compare categories, carton data, landed cost and distributor support." },
  { label: "Compliance documents", href: "/compliance", note: "Check model-specific evidence before approving claims and packaging." },
  { label: "Massage gun manufacturer", href: "/products/category/massage-guns", note: "Compare hot-cold, mini, deep-tissue and cooling massage gun platforms." },
  { label: "Air compression leg massager supplier", href: "/products/category/leg-massagers", note: "Review calf sleeves and recovery boot platforms for wholesale programs." },
];
const procurementGuides = procurementBlogPosts.map((post) => ({
  title: post.title,
  href: `/blog/${post.slug}`,
  keyword: post.primaryKeyword,
  excerpt: post.excerpt,
}));
const certificates = [
  { src: "https://sc04.alicdn.com/kf/Af336e50e1c9d431a932a4e764588e8673.jpg", alt: "Factory ISO 9001 quality management system certificate image" },
  { src: "https://sc04.alicdn.com/kf/A7e7c2b9d35a14550950a725fa44b6b20l.jpg", alt: "UK electrical equipment safety certificate image" },
  { src: "https://sc04.alicdn.com/kf/A58e5ae3b4d6a4f41bc665c0e1b101737Z.jpg", alt: "REACH test report certificate image" },
  { src: "https://sc04.alicdn.com/kf/Ac514a3dd8c354465bd7af6f394fc0defy.jpg", alt: "EU low voltage directive certificate image" },
  { src: "https://sc04.alicdn.com/kf/A7c049f219f604aa5a10f111e1dfd9b2dn.jpg", alt: "amfori BSCI monitoring summary report image" },
  { src: "https://sc04.alicdn.com/kf/A5030cc751f824ca1adebacb767c43511y.jpg", alt: "CE certificate image" },
  { src: "https://sc04.alicdn.com/kf/Acc5c113e5bc543b9b3d63f0828e3318aO.jpg", alt: "UKCA certificate image" },
  { src: "https://sc04.alicdn.com/kf/Afa27abaec4c8451098f42ae308b7fc83p.jpg", alt: "RoHS certificate image" },
  { src: "https://sc04.alicdn.com/kf/A9e50d1089be84ae48a84e2aff59730c3H.jpg", alt: "FCC supplier declaration of conformity image" },
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
        <HeroVideo
          src="/video/hero-massage-devices.mp4"
          poster="/video/hero-poster.jpg"
          posterAlt="Massage and recovery devices manufactured for OEM and ODM programs"
        />
        <div className="shell tb-hero-inner">
          <div className="tb-hero-copy">
            <p className="tb-tag">OEM &amp; ODM manufacturing</p>
            <h1>Massage device manufacturer for OEM &amp; wholesale buyers</h1>
            <p>Source massage guns, neck and shoulder massagers, foot and leg recovery devices, pillows and targeted massagers from a China factory serving private-label, retail and distribution programs.</p>
            <div className="tb-hero-actions">
              <Link className="button button-dark" href="/contact?intent=quotation">Request factory quote</Link>
              <Link className="button button-outline" href="/oem-odm">Review OEM process</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-category-banner" aria-label="Featured product categories">
        {featuredCategories.map((category, index) => (
          <Link className="featured-category-card" href={category.href} key={category.label}>
            <img src={category.image} alt={`${category.label} category`} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
            <span className="featured-category-overlay" />
            <span className="featured-category-copy">
              <strong>{category.label}</strong>
              <small>{category.note}</small>
              <b>View category →</b>
            </span>
          </Link>
        ))}
      </section>

      <section className="seo-hub shell" aria-labelledby="core-sourcing-pages">
        <div>
          <p className="tb-tag">Core sourcing pages</p>
          <h2 id="core-sourcing-pages">Start with the pages Google and buyers should understand first.</h2>
        </div>
        <div className="seo-hub-grid">
          {coreSourcingPages.map((page) => (
            <Link href={page.href} key={page.href}>
              <strong>{page.label}</strong>
              <span>{page.note}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="tb-section shell tb-wide-shell">
        <div className="tb-head">
          <h2>Factory platforms for procurement review</h2>
          <Link href="/products">View all 22 products →</Link>
        </div>
        <ProductRail products={bestSellers} idPrefix="best" />
      </section>

      <section className="procurement-guide-band shell" aria-labelledby="procurement-guides-title">
        <div className="procurement-guide-head">
          <p className="tb-tag">Procurement SEO guides</p>
          <h2 id="procurement-guides-title">Decision guides for wholesale, OEM and private-label buyers.</h2>
          <p>These recently published pages target high-intent B2B searches and link buyers back to category, product, OEM and quotation pages.</p>
        </div>
        <div className="procurement-guide-grid">
          {procurementGuides.map((guide) => (
            <Link className="procurement-guide-card" href={guide.href} key={guide.href}>
              <small>{guide.keyword}</small>
              <strong>{guide.title}</strong>
              <span>{guide.excerpt}</span>
              <b>Read sourcing guide →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="tb-claim">
        <div className="shell tb-wide-shell tb-claim-grid">
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

      <section className="tb-section shell tb-wide-shell">
          <div className="tb-head tb-head-center">
          <h2>Commercial product directions for B2B buyers</h2>
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
        <div className="shell tb-wide-shell">
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

      <CertificateCarousel certificates={certificates} />

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

    </>
  );
}
