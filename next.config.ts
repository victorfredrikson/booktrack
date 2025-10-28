import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["books.google.com"], // allow Google Books thumbnails
  },
};

export default nextConfig;
