const fallback = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://website-phi-drab-46.vercel.app";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallback).replace(/\/$/, "");
