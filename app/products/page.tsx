import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { procurementBlogPosts } from "@/lib/procurementBlogPosts";
import { categories, products } from "@/lib/products";

const buyerPaths = [
  { label: "Need OEM / ODM development", href: "/oem-odm", note: "Review private-label process, packaging scope, MOQ and lead time." },
  { label: "Evaluate suppliers", href: "/sourcing", note: "Use a factory sourcing checklist before samples and quotations." },
  { label: "Plan private-label launch", href: "/private-label", note: "Define logo, packaging, sample approval and repeat production." },
  { label: "Build wholesale range", href: "/wholesale", note: "Compare category mix, carton data, landed cost and after-sales route." },
  { label: "Review compliance evidence", href: "/compliance", note: "Check model-specific reports, labels, manuals and claim boundaries." },
  { label: "Source compression recovery", href: "/products/category/leg-massagers", note: "Compare air compression leg massagers and recovery boot platforms." },
];
const productGuideLinks = procurementBlogPosts.map((post) => ({
  href: `/blog/${post.slug}`,
  title: post.title,
  keyword: post.primaryKeyword,
}));
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Massage Device Manufacturer | OEM Wholesale Product Platforms",
  description:
    "Explore HUANTIVE massage device platforms for OEM, wholesale and private-label buyers. Compare massage guns, neck massagers, foot massagers, recovery devices and request factory pricing.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema(categories.map((category) => ({ name: category.name, path: `/products/category/${category.slug}` })))) }} />

      <section className="page-hero">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><b>Products</b></nav>
          <p className="eyebrow">Massage device manufacturer</p>
          <h1>Massage and recovery<br />device manufacturing.</h1>
          <p>Six product categories and 22 manufacturing platforms for distributors, retail chains, private-label brands and e-commerce operators across Europe and North America.</p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="eyebrow">Buyer paths</p><h2>Choose the sourcing route<br />that matches your search intent.</h2></div>
          <p>These core commercial pages are prioritized for buyers comparing manufacturers, OEM scope, wholesale product lines and quotation requirements.</p>
        </div>
        <div className="buyer-path-grid">
          {buyerPaths.map((path) => (
            <Link className="buyer-path-card" href={path.href} key={path.href}>
              <strong>{path.label}</strong>
              <span>{path.note}</span>
              <b>Open page →</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="eyebrow">Browse by category</p><h2>Start with the product type<br />your market buys.</h2></div>
          <p>Each category page carries its own specification scope, buyer FAQ and inquiry route. Technical values, MOQ and compliance documents are confirmed against the exact model you quote.</p>
        </div>
        <div className="category-card-grid">
          {categories.map((category, index) => (
            <Link className="category-card" href={`/products/category/${category.slug}`} key={category.slug}>
              <span className="category-card-media"><Image src={category.image} alt={`${category.name} manufacturing`} fill sizes="(max-width: 720px) 100vw, 33vw" /></span>
              <span className="category-card-body">
                <small>0{index + 1}</small>
                <strong>{category.name}</strong>
                <em>{category.buyerNote}</em>
                <b>Explore category →</b>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-muted">
        <div className="shell">
          <div className="section-heading">
            <div><p className="eyebrow">All product platforms</p><h2>Complete manufacturing portfolio.</h2></div>
            <p>Every card below links to a model-level page with actual product imagery, customization scope and a direct quotation route.</p>
          </div>
          <div className="product-grid">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div><p className="eyebrow">Sourcing articles</p><h2>Procurement guides connected to this catalog.</h2></div>
          <p>Use these guides to compare specifications, supplier fit, OEM/ODM routes and RFQ details before selecting a product platform.</p>
        </div>
        <div className="guide-link-grid">
          {productGuideLinks.map((guide) => (
            <Link className="guide-link-card" href={guide.href} key={guide.href}>
              <small>{guide.keyword}</small>
              <strong>{guide.title}</strong>
              <b>Open guide →</b>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
