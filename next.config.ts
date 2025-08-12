import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
  experimental: {
    serverMinification: true,
  },
};

export default nextConfig;
