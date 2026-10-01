import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { getProduct, products } from "@/lib/products";
import { productSchema } from "@/lib/schema";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? {
    title: `${product.name} Manufacturer & OEM Supplier`,
    description: `${product.summary} Request OEM, wholesale and private-label details from our China manufacturing team.`,
  } : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(product.name, product.summary)) }} />
      <section className="product-hero section"><div className="shell product-hero-grid">
        <div className="gallery"><div className="gallery-main"><Image src={product.images[0]} alt={`${product.name} product view`} fill priority sizes="(max-width: 980px) 100vw, 54vw" /></div><div className="gallery-thumbs">{product.images.slice(1, 4).map((image, index) => <span key={image}><Image src={image} alt={`${product.name} detail ${index + 1}`} fill sizes="120px" /></span>)}</div></div>
        <div className="product-info"><p className="eyebrow">{product.category} · China B2B Manufacturer</p><h1>{product.name}</h1><p className="hero-lede">{product.summary}</p><p className="keyword-note">Buyer-intent focus: {product.primaryKeyword}</p><div className="tag-list">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><dl className="quick-specs"><div><dt>Alibaba category term</dt><dd>{product.sourceTerm}</dd></div><div><dt>MOQ</dt><dd>Confirm by quotation</dd></div><div><dt>Specifications</dt><dd>Confirm by selected model</dd></div></dl><div className="button-row"><Link className="button button-primary" href={`/contact?product=${product.slug}`}>Request a Quote</Link><Link className="button button-secondary" href={`/contact?intent=sample&product=${product.slug}`}>Request a Sample</Link></div></div>
      </div></section>
      <section className="section section-muted"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Product overview</p><h2>Built for procurement review.</h2></div><p>Technical values, claims and compliance scope are confirmed against the selected model before quotation.</p></div><div className="due-grid">{product.features.map((feature) => <div key={feature}><span>✓</span>{feature}</div>)}</div></div></section>
      <section className="section dark-section"><div className="shell split-grid"><div><p className="eyebrow eyebrow-light">Customization</p><h2>Adapt the platform to your program.</h2><p>Scope depends on volume, tooling, compliance, and target launch date.</p></div><div className="capability-grid">{product.customization.map((item) => <span key={item}>{item}</span>)}</div></div></section>
      <section className="section shell"><div className="section-heading"><div><p className="eyebrow">Buyer due diligence</p><h2>Information supplied with your quotation.</h2></div></div><div className="due-grid">{["Selected-model technical specification", "Applicable test and conformity documentation", "Packaging, carton and loading data", "MOQ, sample policy and lead time", "Warranty and quality-control scope", "Branding and market configuration options"].map((item) => <div key={item}><span>✓</span>{item}</div>)}</div><p className="compliance-notice">Certificates and test reports apply only to the companies, models, samples, materials, standards and dates identified in each document. Applicability and current validity are confirmed for every order and destination market.</p></section>
      <section className="section final-rfq"><div className="shell rfq-layout"><div><p className="eyebrow eyebrow-light">Product inquiry</p><h2>Evaluate this platform.</h2><p>Send target quantity, market, and customization requirements.</p></div><InquiryForm compact defaultProduct={product.name} /></div></section>
    </>
  );
}
