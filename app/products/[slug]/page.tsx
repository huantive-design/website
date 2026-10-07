import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { getProduct, getCategory, products, productsByCategory, tradeTerms } from "@/lib/products";
import { site } from "@/lib/site";
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(product.name, product.summary, { model: product.specs?.model, colors: product.specs?.colors, weight: product.specs?.netGrossWeight, images: product.images.slice(0, 3), category: product.category, url: `/products/${product.slug}` })) }} />
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
            {product.specs?.model ? <div><dt>Model</dt><dd>{product.specs.model}</dd></div> : null}
            <div><dt>Product category</dt><dd><Link href={`/products/category/${product.categorySlug}`}>{product.category}</Link></dd></div>
            <div><dt>Business model</dt><dd>OEM / ODM / private label</dd></div>
            <div><dt>Sales enquiries</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
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

      {product.specs ? (
        <section className="section shell" id="specifications">
          <div className="section-heading"><div><p className="eyebrow">Technical specification</p><h2>Verified data for model {product.specs.model}.</h2></div><p>Electrical, dimensional and packaging data for this model. Values are confirmed again on the pro-forma invoice for your destination market.</p></div>
          <div className="spec-table">
            <table>
              <tbody>
                <tr><th scope="row">Model number</th><td>{product.specs.model}</td></tr>
                {product.specs.colors ? <tr><th scope="row">Standard colours</th><td>{product.specs.colors}</td></tr> : null}
                {product.specs.battery ? <tr><th scope="row">Battery</th><td>{product.specs.battery}</td></tr> : null}
                {product.specs.power ? <tr><th scope="row">Rated power / voltage</th><td>{product.specs.power}</td></tr> : null}
                {product.specs.productSize ? <tr><th scope="row">Product size</th><td>{product.specs.productSize}</td></tr> : null}
                {product.specs.netGrossWeight ? <tr><th scope="row">Net / gross weight</th><td>{product.specs.netGrossWeight}</td></tr> : null}
                {product.specs.packageSize ? <tr><th scope="row">Package size</th><td>{product.specs.packageSize}</td></tr> : null}
                {product.specs.cartonSize ? <tr><th scope="row">Carton size and quantity</th><td>{product.specs.cartonSize}</td></tr> : null}
                {product.specs.cartonWeight ? <tr><th scope="row">Carton weight</th><td>{product.specs.cartonWeight}</td></tr> : null}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <section className="section section-muted"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow">Ordering terms</p><h2>Factory terms for this range.</h2></div><p>We manufacture in Wenzhou, Zhejiang with a second plant in Anlu, Hubei. These terms apply across the massager range.</p></div>
        <dl className="terms-grid">
          <div><dt>Branding MOQ</dt><dd>{tradeTerms.moqBranding}</dd></div>
          <div><dt>Custom colour MOQ</dt><dd>{tradeTerms.moqColor}</dd></div>
          <div><dt>Production lead time</dt><dd>{tradeTerms.leadTime}</dd></div>
          <div><dt>Warranty</dt><dd>{tradeTerms.warranty}</dd></div>
          <div><dt>In every set</dt><dd>{tradeTerms.included}</dd></div>
          <div><dt>Motor</dt><dd>{tradeTerms.motor}</dd></div>
          <div><dt>Materials</dt><dd>{tradeTerms.materials}</dd></div>
          <div><dt>Certifications held</dt><dd>{tradeTerms.certifications.join(", ")}</dd></div>
          <div><dt>Payment — bulk</dt><dd>{tradeTerms.paymentBulk}</dd></div>
          <div><dt>Payment — small order</dt><dd>{tradeTerms.paymentSmall}</dd></div>
        </dl>
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
