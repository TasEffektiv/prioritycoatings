import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every live WordPress URL is indexed with a trailing slash (e.g.
  // /residential-painters/), and internal links (Footer, blog post hrefs,
  // Breadcrumb usages) already assume that convention. Without this flag
  // Next's own canonical route is the no-slash form, which fights those
  // existing links and doesn't match what's currently indexed/bookmarked.
  trailingSlash: true,
  async redirects() {
    return [
      // A DR60 external backlink (ireceptar.cz) points here with a stray
      // invisible Unicode character appended to the URL, 404ing an
      // otherwise-working page. Catch any trailing junk segment to recover
      // the link rather than leaving it broken.
      {
        source: "/how-to-remove-water-stains-from-walls-and-ceilings/:junk",
        destination: "/how-to-remove-water-stains-from-walls-and-ceilings/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.prioritycoatings.com.au" },
      { protocol: "https", hostname: "prioritycoatings.com.au" },
    ],
    // 40 covers decorative section backgrounds that are partially obscured
    // by overlays/blend modes, where extra compression is imperceptible.
    // 55 covers the hero slideshow: a full-bleed photo, but under a 30%
    // black scrim plus white text, giving some compression headroom without
    // the aggressiveness of 40.
    qualities: [40, 55, 70, 75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
