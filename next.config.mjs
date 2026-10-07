/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    // The hero poster is a 1620px-wide source; without trimming the candidate
    // list Next.js preloads the 3840w entry and upscales it, which inflates the
    // LCP payload for no visual gain.
    deviceSizes: [640, 750, 828, 1080, 1200, 1620, 1920],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // Hero media is content-addressed by filename: a new cut ships under a
        // new name, so it can be cached immutably at the edge and in-browser.
        source: "/video/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, s-maxage=31536000, immutable" },
        ],
      },
      {
        source: "/products/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, s-maxage=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
