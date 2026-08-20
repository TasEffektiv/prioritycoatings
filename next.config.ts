import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.prioritycoatings.com.au" },
      { protocol: "https", hostname: "prioritycoatings.com.au" },
    ],
  },
};

export default nextConfig;
