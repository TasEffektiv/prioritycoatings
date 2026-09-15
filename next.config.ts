import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every live WordPress URL is indexed with a trailing slash (e.g.
  // /residential-painters/), and internal links (Footer, blog post hrefs,
  // Breadcrumb usages) already assume that convention. Without this flag
  // Next's own canonical route is the no-slash form, which fights those
  // existing links and doesn't match what's currently indexed/bookmarked.
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.prioritycoatings.com.au" },
      { protocol: "https", hostname: "prioritycoatings.com.au" },
    ],
    // 40 covers decorative section backgrounds that are partially obscured
    // by overlays/blend modes, where extra compression is imperceptible.
    qualities: [40, 70, 75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
