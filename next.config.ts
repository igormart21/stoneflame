import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Server rendering + ISR on Vercel, so Shopify changes (stock, price, images)
  // show up on the site without a rebuild.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      // Product images are served from Shopify's CDN
      { protocol: "https", hostname: "cdn.shopify.com" },
    ],
  },
};

export default nextConfig;
