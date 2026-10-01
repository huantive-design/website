import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className={`product-visual visual-${index % 3}`} aria-label={`View ${product.name}`}>
        <span className="product-silhouette"><i /><b /></span>
        <span className="visual-label">Product image pending</span>
      </Link>
      <div className="product-copy">
        <p className="card-kicker">{product.category} · {product.code}</p>
        <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.summary}</p>
        <div className="tag-list">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="card-actions"><Link href={`/products/${product.slug}`}>View details</Link><Link href={`/contact?product=${product.slug}`}>Get quote →</Link></div>
      </div>
    </article>
  );
}
