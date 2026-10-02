import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { getProduct, getCategory, products, productsByCategory } from "@/lib/products";
import { breadcrumbSchema, productSchema } from "@/lib/schema";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: `/products/${product.slug}` },
  } : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.categorySlug);
  const related = productsByCategory(product.categorySlug).filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(product.name, product.summary)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: product.category, path: `/products/category/${product.categorySlug}` },
        { name: product.name, path: `/products/${product.slug}` },
      ])) }} />

      <section className="product-hero section"><div className="shell product-hero-grid">
        <div className="gallery">
          <div className="gallery-main"><Image src={product.images[0]} alt={`${product.name} manufactured for OEM and private-label programs`} fill priority sizes="(max-width: 980px) 100vw, 54vw" /></div>
          <div className="gallery-thumbs">{product.images.slice(1, 4).map((image, index) => <span key={image}><Image src={image} alt={`${product.name} detail view ${index + 1}`} fill sizes="120px" /></span>)}</div>
        </div>
        <div className="product-info">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/products">Products</Link><span aria-hidden="true">/</span>
            <Link href={`/products/category/${product.categorySlug}`}>{product.category}</Link>
          </nav>
          <h1>{product.name}</h1>
          <p className="hero-lede">{product.summary}</p>
          <div className="tag-list">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <dl className="quick-specs">
            <div><dt>Product category</dt><dd><Link href={`/products/category/${product.categorySlug}`}>{product.category}</Link></dd></div>
            <div><dt>Alibaba.com category term</dt><dd>{product.sourceTerm}</dd></div>
            <div><dt>MOQ</dt><dd>Confirm by quotation</dd></div>
            <div><dt>Specifications</dt><dd>Confirm by selected model</dd></div>
          </dl>
          <div className="button-row">
            <Link className="button button-primary" href={`/contact?product=${product.slug}`}>Request a Quote</Link>
            <Link className="button button-secondary" href={`/contact?intent=sample&product=${product.slug}`}>Request a Sample</Link>
          </div>
        </div>
      </div></section>

      <section className="section section-muted"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow">Product overview</p><h2>Built for procurement review.</h2></div><p>Technical values, claims and compliance scope are confirmed against the selected model before quotation.</p></div>
        <div className="due-grid">{product.features.map((feature) => <div key={feature}><span>✓</span>{feature}</div>)}</div>
      </div></section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Target channels</p><h2>Where this platform sells.</h2></div><p>Positioning guidance based on the product format. Final market and channel strategy remain your commercial decision.</p></div>
        <div className="application-grid">{product.applications.map((item) => <article key={item}><strong>{item}</strong></article>)}</div>
      </section>

      <section className="section dark-section"><div className="shell split-grid">
        <div><p className="eyebrow eyebrow-light">Customization</p><h2>Adapt the platform to your program.</h2><p>Scope depends on volume, tooling, compliance, and target launch date.</p><Link className="button button-light" href="/oem-odm">See the OEM process →</Link></div>
        <div className="capability-grid">{product.customization.map((item) => <span key={item}>{item}</span>)}</div>
      </div></section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Buyer due diligence</p><h2>Information supplied with your quotation.</h2></div></div>
        <div className="due-grid">{["Selected-model technical specification", "Applicable test and conformity documentation", "Packaging, carton and loading data", "MOQ, sample policy and lead time", "Warranty and quality-control scope", "Branding and market configuration options"].map((item) => <div key={item}><span>✓</span>{item}</div>)}</div>
        <p className="compliance-notice">Certificates and test reports apply only to the companies, models, samples, materials, standards and dates identified in each document. Applicability and current validity are confirmed for every order and destination market.</p>
      </section>

      {related.length > 0 && (
        <section className="section section-muted"><div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Same category</p><h2>Related {category?.name.toLowerCase()}.</h2></div><Link href={`/products/category/${product.categorySlug}`}>View all in category →</Link></div>
          <div className="category-link-grid">
            {related.map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`}>
                <span className="category-link-thumb"><Image src={item.images[0]} alt="" fill sizes="120px" /></span>
                <strong>{item.name}</strong><small>{item.summary}</small>
              </Link>
            ))}
          </div>
        </div></section>
      )}

      <section className="section final-rfq"><div className="shell rfq-layout">
        <div><p className="eyebrow eyebrow-light">Product inquiry</p><h2>Evaluate this platform.</h2><p>Send target quantity, market, and customization requirements.</p></div>
        <InquiryForm compact defaultProduct={product.name} />
      </div></section>
    </>
  );
}
