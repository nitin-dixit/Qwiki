import type { NextConfig } from "next";
import { URL } from "node:url";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [new URL(`${process.env.BLOB_BASE_URL}/**`)],
  },
};

export default nextConfig;
