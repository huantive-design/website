import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <article className="product-card">
      <Link href={`/products/${product.slug}`} className={`product-visual visual-${index % 3}`} aria-label={`View ${product.name}`}>
        <Image src={product.images[0]} alt={`${product.name} for OEM and wholesale programs`} fill sizes="(max-width: 640px) 50vw, (max-width: 980px) 50vw, 33vw" />
        <span className="visual-label">Actual product image</span>
      </Link>
      <div className="product-copy">
        <p className="card-kicker">{product.category} · B2B Manufacturer</p>
        <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
        <p>{product.summary}</p>
        <div className="tag-list">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <div className="card-actions"><Link href={`/products/${product.slug}`}>View details</Link><Link href={`/contact?product=${product.slug}`}>Get quote →</Link></div>
      </div>
    </article>
  );
}
