import { site } from "./site";
import { siteUrl } from "./url";

const base = siteUrl;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: base,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 952-992, Xingrong Road, Wanquan Town",
      addressLocality: "Wenzhou",
      addressRegion: "Zhejiang",
      postalCode: "325409",
      addressCountry: "CN",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: base,
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function productSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@type": "Organization", name: site.legalName },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
}

export function categoryFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${base}${item.path}`,
    })),
  };
}
