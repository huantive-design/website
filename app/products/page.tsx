import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export const metadata: Metadata = { title: "Product Platforms", description: "Explore B2B massage and recovery product platforms for private-label and wholesale programs." };

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero"><div className="shell"><p className="eyebrow">Product platforms</p><h1>Source with clarity.</h1><p>Compare categories, commercial readiness, and customization paths. Verified specifications will replace all marked placeholders before launch.</p></div></section>
      <section className="filter-bar"><div className="shell">{categories.map((category) => <a href={`#${category.slug}`} key={category.slug}>{category.name}</a>)}</div></section>
      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Selected models</p><h2>Procurement information first.</h2></div><p>Each card is structured for SKU-level data: critical parameters, MOQ, certification scope, and OEM availability.</p></div>
        <div className="product-grid">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
      </section>
      <section className="section section-muted"><div className="shell category-detail-grid">{categories.map((category, index) => <article id={category.slug} key={category.slug}><span>0{index + 1}</span><h3>{category.name}</h3><p>{category.note}. Product data and filters will expand when the SKU sheet is supplied.</p></article>)}</div></section>
    </>
  );
}
