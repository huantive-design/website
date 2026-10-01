import type { Metadata } from "next";
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
  return product ? { title: product.name, description: product.summary } : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(product.name, product.summary)) }} />
      <section className="product-hero section"><div className="shell product-hero-grid">
        <div className="gallery"><div className="gallery-main"><span className="product-silhouette large"><i /><b /></span><small>Primary product image pending</small></div><div className="gallery-thumbs"><span>Detail</span><span>Accessory</span><span>Package</span></div></div>
        <div className="product-info"><p className="eyebrow">{product.category} · {product.code}</p><h1>{product.name}</h1><p className="hero-lede">{product.summary}</p><div className="tag-list">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><dl className="quick-specs">{product.specs.slice(0,3).map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl><div className="button-row"><Link className="button button-primary" href={`/contact?product=${product.slug}`}>Request a Quote</Link><Link className="button button-secondary" href={`/contact?intent=sample&product=${product.slug}`}>Request a Sample</Link></div></div>
      </div></section>
      <section className="section section-muted"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Technical information</p><h2>Built for procurement review.</h2></div><p>All values marked “to be confirmed” must be replaced with approved SKU data.</p></div><dl className="spec-table">{product.specs.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl></div></section>
      <section className="section dark-section"><div className="shell split-grid"><div><p className="eyebrow eyebrow-light">Customization</p><h2>Adapt the platform to your program.</h2><p>Scope depends on volume, tooling, compliance, and target launch date.</p></div><div className="capability-grid">{product.customization.map((item) => <span key={item}>{item}</span>)}</div></div></section>
      <section className="section shell"><div className="section-heading"><div><p className="eyebrow">Product due diligence</p><h2>What will be added before launch.</h2></div></div><div className="due-grid">{["6–8 verified product images", "Complete technical specification", "Applicable test and certification evidence", "Packaging, carton, and loading data", "MOQ, sample policy, and lead time", "Warranty and quality-control scope"].map((item) => <div key={item}><span>✓</span>{item}</div>)}</div></section>
      <section className="section final-rfq"><div className="shell rfq-layout"><div><p className="eyebrow eyebrow-light">Product inquiry</p><h2>Evaluate this platform.</h2><p>Send target quantity, market, and customization requirements.</p></div><InquiryForm compact defaultProduct={product.name} /></div></section>
      <div className="mobile-sticky"><Link href={`/contact?product=${product.slug}`}>Quote</Link><Link href={`/contact?intent=sample&product=${product.slug}`}>Sample</Link></div>
    </>
  );
}
