import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { BlogPost, getPost } from "@/lib/blog";
import { categories, getCategory, productsByCategory } from "@/lib/products";
import { breadcrumbSchema, categoryFaqSchema, itemListSchema } from "@/lib/schema";

type CategoryPageProps = { params: Promise<{ slug: string }> };

const categoryGuideMap: Record<string, string[]> = {
  "massage-guns": [
    "private-label-massage-gun-moq-sample-cost-oem-options",
    "mini-vs-full-size-massage-gun-retail-channel",
    "massage-gun-specifications-oem-sampling",
    "choose-massage-gun-manufacturer-private-label",
  ],
  "neck-shoulder-massagers": ["compare-neck-massager-designs-wholesale-buyers", "wholesale-shiatsu-neck-massagers-specifications"],
  "leg-massagers": ["air-compression-recovery-boots-oem-sourcing", "build-wholesale-massage-device-product-range"],
  "foot-massagers": ["build-wholesale-massage-device-product-range"],
  "massage-pillows-cushions": ["build-wholesale-massage-device-product-range"],
  "targeted-body-massagers": ["quality-documents-massage-device-buyers-request"],
};

function isBlogPost(post: BlogPost | undefined): post is BlogPost {
  return Boolean(post);
}

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.metaTitle,
    description: category.metaDescription,
    alternates: { canonical: `/products/category/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const items = productsByCategory(category.slug);
  const sourcingGuides = (categoryGuideMap[category.slug] ?? []).map((guideSlug) => getPost(guideSlug)).filter(isBlogPost);
  const massageGunComparison = category.slug === "massage-guns" ? items.map((product) => ({
    product,
    role:
      product.slug === "mini-massage-gun"
        ? "Compact retail, gifting and travel programs"
        : product.slug === "deep-tissue-massage-gun"
          ? "Full-size sports recovery and distributor ranges"
          : product.slug === "hot-cold-massage-gun"
            ? "Thermal-feature differentiation for premium recovery lines"
            : product.slug === "cooling-massage-gun"
              ? "Cooling-positioned performance retail and specialist channels"
              : "Massage gun sourcing program",
  })) : [];

  const faqs = [
    {
      q: `Do you support OEM and private label for ${category.name.toLowerCase()}?`,
      a: "Yes. Logo, color, material, packaging and market configuration are developed against the selected model. Tooling-level changes are quoted separately after the brief is confirmed.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "MOQ starts from 100 pcs, subject to actual model, customization scope and destination market, and is confirmed in writing with your quotation.",
    },
    {
      q: "Can we order samples before production?",
      a: "Sample support is available for evaluation. Sample lead time, cost and deduction policy are confirmed per model before the order is placed.",
    },
    {
      q: "Which compliance documents can you provide?",
      a: "Available certificates, declarations and test reports are reviewed against the selected model, configuration, certificate holder, standard, issue date and destination market before quotation or shipment.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: category.name, path: `/products/category/${category.slug}` },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFaqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(sourcingGuides.map((guide) => ({ name: guide.title, path: `/blog/${guide.slug}` })))) }} />

      <section className="category-hero">
        <div className="category-hero-media"><Image src={category.image} alt={`${category.name} manufactured for OEM programs`} fill priority sizes="100vw" /></div>
        <div className="shell category-hero-copy">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/products">Products</Link><span aria-hidden="true">/</span><b>{category.name}</b>
          </nav>
          <h1>{category.heading}</h1>
          <p>{category.intro}</p>
          <div className="button-row">
            <Link className="button button-primary" href={`/contact?category=${category.slug}`}>Request a quote</Link>
            <Link className="button button-light" href={`/contact?intent=sample&category=${category.slug}`}>Request a sample</Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="eyebrow">{items.length} product platforms</p><h2>Available platforms in this category.</h2></div>
          <p>Every platform below uses actual product imagery. Specifications, MOQ and compliance scope are confirmed against the exact model you quote.</p>
        </div>
        <div className="product-grid">{items.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
      </section>

      {massageGunComparison.length > 0 ? (
        <section className="section shell">
          <div className="section-heading">
            <div><p className="eyebrow">Massage gun comparison</p><h2>Choose by model role and verified data.</h2></div>
            <p>Mini, deep tissue, hot-cold and cooling-positioned massage guns should not use the same purchase story. Compare the model role, available specifications and missing confirmation points before requesting samples.</p>
          </div>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead><tr><th>Platform</th><th>Best-fit buyer role</th><th>Available proof on page</th><th>Quotation focus</th></tr></thead>
              <tbody>
                {massageGunComparison.map(({ product, role }) => (
                  <tr key={product.slug}>
                    <th scope="row"><Link href={`/products/${product.slug}`}>{product.name}</Link></th>
                    <td>{role}</td>
                    <td>{product.specs ? [product.specs.model, product.specs.battery, product.specs.power, product.specs.cartonSize].filter(Boolean).join("; ") : product.features.slice(0, 3).join("; ")}</td>
                    <td>{product.slug === "hot-cold-massage-gun" ? "Confirm thermal-head model, temperature range, runtime, battery, package size and carton data before comparing quotations." : "Confirm logo or packaging MOQ, sample route, accessory scope, lead time and destination-market documents for the selected model."}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">Buyer guide</p><h2>How to evaluate {category.name.toLowerCase()} for sourcing.</h2></div>
            <p>Use this category page to shortlist models before asking for samples, quotations or private-label changes.</p>
          </div>
          <div className="scope-grid">
            <article><strong>Manufacturer fit</strong><p>Confirm the exact platform, function set, target market and channel before comparing pricing.</p></article>
            <article><strong>OEM / private label</strong><p>Review logo, colour, packaging, manual language and accessory options against your order volume.</p></article>
            <article><strong>Wholesale checks</strong><p>Ask for model-level specifications, carton data, sample policy, lead time and applicable compliance documents.</p></article>
          </div>
          {sourcingGuides.length > 0 ? (
            <div className="guide-link-grid category-guide-links">
              {sourcingGuides.map((guide) => (
                <Link className="guide-link-card" href={`/blog/${guide.slug}`} key={guide.slug}>
                  <small>{guide.primaryKeyword}</small>
                  <strong>{guide.title}</strong>
                  <b>Read buyer guide →</b>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>{category.name} sourcing FAQ</h2></div></div>
        <div className="faq-list">
          {faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Other categories</p><h2>Continue sourcing.</h2></div></div>
        <div className="category-link-grid">
          {categories.filter((item) => item.slug !== category.slug).map((item) => (
            <Link key={item.slug} href={`/products/category/${item.slug}`}>
              <span className="category-link-thumb"><Image src={item.image} alt="" fill sizes="120px" /></span>
              <strong>{item.name}</strong><small>{item.buyerNote}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="final-rfq editorial-rfq">
        <div className="shell rfq-layout">
          <div>
            <p className="eyebrow eyebrow-light">Category inquiry</p>
            <h2>Source {category.name.toLowerCase()} directly.</h2>
            <p>Share the target model, estimated quantity, destination market and customization scope.</p>
            <div className="rfq-badges"><span>Sample support</span><span>OEM & ODM</span><span>Europe & North America</span></div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
