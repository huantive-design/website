import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductCard } from "@/components/ProductCard";
import { categories, getCategory, productsByCategory } from "@/lib/products";
import { breadcrumbSchema, categoryFaqSchema } from "@/lib/schema";

type CategoryPageProps = { params: Promise<{ slug: string }> };

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
  const faqs = [
    {
      q: `Do you support OEM and private label for ${category.name.toLowerCase()}?`,
      a: "Yes. Logo, color, material, packaging and market configuration are developed against the selected model. Tooling-level changes are quoted separately after the brief is confirmed.",
    },
    {
      q: "What is the minimum order quantity?",
      a: "MOQ depends on the model, customization scope and destination market. It is confirmed in writing with your quotation rather than published as a single figure.",
    },
    {
      q: "Can we order samples before production?",
      a: "Sample support is available for evaluation. Sample lead time, cost and deduction policy are confirmed per model before the order is placed.",
    },
    {
      q: "Which compliance documents can you provide?",
      a: "Selected products have supporting EU LVD, UK electrical safety, RoHS, REACH, FCC and UL/CSA test documentation. Applicability is always confirmed by model and destination market.",
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

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>{category.name} sourcing FAQ</h2></div></div>
          <div className="faq-list">
            {faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
          </div>
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
            <p>Share the target model, estimated quantity, destination market and customization scope. Until the sales mailbox is connected, urgent requests can use the published factory phone.</p>
            <div className="rfq-badges"><span>Sample support</span><span>OEM & ODM</span><span>Europe & North America</span></div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
