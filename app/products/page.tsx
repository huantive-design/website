import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export const metadata: Metadata = { title: "Massage Devices | OEM & Wholesale Manufacturer", description: "Explore 22 massage-device platforms for OEM, wholesale and private-label programs across Europe and North America." };

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero"><div className="shell"><p className="eyebrow">Massage device manufacturer</p><h1>22 product platforms.<br />One sourcing team.</h1><p>Explore actual product imagery across massage guns, neck and shoulder massagers, foot and leg recovery, massage pillows, seat cushions and targeted wellness devices.</p></div></section>
      <section className="filter-bar"><div className="shell">{categories.map((category) => <a href={`#${category.slug}`} key={category.slug}>{category.name}</a>)}</div></section>
      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Product portfolio</p><h2>Procurement information first.</h2></div><p>Choose a product type, then request the model-specific specification, MOQ, compliance files and OEM options required for your market.</p></div>
        <div className="product-grid">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}</div>
      </section>
      <section className="section section-muted"><div className="shell category-detail-grid">{categories.map((category, index) => <article id={category.slug} key={category.slug}><span>0{index + 1}</span><h3>{category.name}</h3><p>{category.note}. Open the relevant product page for actual images and request model-specific commercial details.</p></article>)}</div></section>
    </>
  );
}
