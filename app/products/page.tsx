import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

const buyerPaths = [
  { label: "Need OEM / ODM development", href: "/oem-odm", note: "Review private-label process, packaging scope, MOQ and lead time." },
  { label: "Source massage guns", href: "/products/category/massage-guns", note: "Compare hot-cold, mini, deep-tissue and cooling massage gun platforms." },
  { label: "Source neck massagers", href: "/products/category/neck-shoulder-massagers", note: "Review wearable, shiatsu, heated and wrap-style neck massager formats." },
  { label: "Source compression recovery", href: "/products/category/leg-massagers", note: "Compare air compression leg massagers and recovery boot platforms." },
];
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Massage Device Manufacturer | 22 OEM Product Platforms",
  description:
    "China massage device manufacturer with 22 product platforms across massage guns, neck and shoulder massagers, foot and leg recovery, massage pillows and targeted devices. OEM, ODM and wholesale supply.",
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
    </>
  );
}
