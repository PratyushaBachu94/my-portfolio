import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disables image optimization for static sites
  },
};
module.exports = nextConfig;
