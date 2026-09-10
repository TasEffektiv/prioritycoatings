import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.prioritycoatings.com.au" },
      { protocol: "https", hostname: "prioritycoatings.com.au" },
    ],
    // 40 covers decorative section backgrounds that are partially obscured
    // by overlays/blend modes, where extra compression is imperceptible.
    qualities: [40, 70, 75],
  },
};

export default nextConfig;
