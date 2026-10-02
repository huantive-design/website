// Canonical production host. Vercel's generated preview/default domains must not
// win over the custom domain, otherwise canonical tags and sitemap URLs split
// ranking signals across two hostnames.
const fallback = "https://www.huantive.com";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallback).replace(/\/$/, "");
