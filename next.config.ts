import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath is handled automatically by the 'actions/configure-pages' step in our GitHub Action.
  // You only need to set it here if you are NOT using the provided GitHub Action.
  // basePath: "/repo-name",
};

export default nextConfig;
