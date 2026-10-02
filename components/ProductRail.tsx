"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { Product } from "@/lib/products";

export function ProductRail({ products, idPrefix }: { products: Product[]; idPrefix: string }) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    const node = track.current;
    if (!node) return;
    node.scrollBy({ left: direction * Math.min(node.clientWidth * 0.8, 640), behavior: "smooth" });
  };

  return (
    <div className="rail">
      <div className="rail-track" ref={track} id={`${idPrefix}-track`}>
        {products.map((product) => (
          <article className="rail-card" key={product.slug}>
            <Link className="rail-media" href={`/products/${product.slug}`}>
              <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 640px) 70vw, 300px" />
            </Link>
            <div className="rail-body">
              <p className="rail-cat">{product.category}</p>
              <h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
              <p className="rail-desc">{product.summary}</p>
              <div className="rail-actions">
                <Link href={`/contact?product=${product.slug}`}>Request quote</Link>
                <Link className="rail-secondary" href={`/products/${product.slug}`}>Details</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="rail-nav">
        <button type="button" onClick={() => scroll(-1)} aria-label="Scroll products backward" aria-controls={`${idPrefix}-track`}><i className="arrow-left" aria-hidden="true" /></button>
        <button type="button" onClick={() => scroll(1)} aria-label="Scroll products forward" aria-controls={`${idPrefix}-track`}><i className="arrow-right" aria-hidden="true" /></button>
      </div>
    </div>
  );
}
