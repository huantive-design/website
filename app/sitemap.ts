import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const routes = ["", "/products", "/contact"].map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
  return [...routes, ...products.map((product) => ({ url: `${base}/products/${product.slug}`, lastModified: new Date() }))];
}
