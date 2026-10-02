import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { categories, products } from "@/lib/products";
import { siteUrl } from "@/lib/url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  const now = new Date();

  const staticRoutes = [
    { route: "", priority: 1 },
    { route: "/products", priority: 0.9 },
    { route: "/oem-odm", priority: 0.8 },
    { route: "/blog", priority: 0.75 },
    { route: "/our-story", priority: 0.6 },
    { route: "/contact", priority: 0.7 },
  ].map(({ route, priority }) => ({ url: `${base}${route}`, lastModified: now, priority }));

  const categoryRoutes = categories.map((category) => ({
    url: `${base}/products/category/${category.slug}`,
    lastModified: now,
    priority: 0.85,
  }));

  const productRoutes = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
