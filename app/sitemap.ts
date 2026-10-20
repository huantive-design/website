import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { categories, products } from "@/lib/products";
import { siteUrl } from "@/lib/url";

const priorityBlogSlugs = new Set([
  "private-label-massage-gun-moq-sample-cost-oem-options",
  "mini-vs-full-size-massage-gun-retail-channel",
  "compare-neck-massager-designs-wholesale-buyers",
  "choose-massage-gun-manufacturer-private-label",
  "massage-gun-private-label-packaging-customization",
  "air-compression-recovery-boots-oem-sourcing",
  "massage-gun-specifications-oem-sampling",
  "build-wholesale-massage-device-product-range",
]);

const priorityProductSlugs = new Set([
  "mini-massage-gun",
  "deep-tissue-massage-gun",
  "hot-cold-massage-gun",
  "wearable-neck-massager",
  "shiatsu-neck-shoulder-massager",
  "compression-leg-massager-boots",
]);

const priorityCategorySlugs = new Set(["massage-guns", "neck-shoulder-massagers", "leg-massagers"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  const now = new Date();

  const staticRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/products", priority: 0.95, changeFrequency: "weekly" as const },
    { route: "/blog", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/sourcing", priority: 0.88, changeFrequency: "monthly" as const },
    { route: "/private-label", priority: 0.88, changeFrequency: "monthly" as const },
    { route: "/oem-odm", priority: 0.86, changeFrequency: "monthly" as const },
    { route: "/wholesale", priority: 0.84, changeFrequency: "monthly" as const },
    { route: "/compliance", priority: 0.8, changeFrequency: "monthly" as const },
    { route: "/manufacturing", priority: 0.78, changeFrequency: "monthly" as const },
    { route: "/quality", priority: 0.78, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/our-story", priority: 0.6, changeFrequency: "monthly" as const },
  ].map(({ route, priority, changeFrequency }) => ({ url: `${base}${route}`, lastModified: now, changeFrequency, priority }));

  const categoryRoutes = categories.map((category) => ({
    url: `${base}/products/category/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: priorityCategorySlugs.has(category.slug) ? 0.9 : 0.82,
  }));

  const productRoutes = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: priorityProductSlugs.has(product.slug) ? "weekly" as const : "monthly" as const,
    priority: priorityProductSlugs.has(product.slug) ? 0.86 : 0.76,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: priorityBlogSlugs.has(post.slug) ? "weekly" as const : "monthly" as const,
    priority: priorityBlogSlugs.has(post.slug) ? 0.84 : 0.66,
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...blogRoutes];
}
