import type { Metadata } from "next";
import { BUSINESS_NAME } from "./schema";

// The one social-share image every page falls back to. Blog posts/service
// pages don't currently have their own dedicated 1200x630 share image, so
// this is a reasonable default rather than a per-page match.
const DEFAULT_OG_IMAGE = "/android-chrome-512x512.png";

/**
 * Builds a page's metadata with Open Graph and Twitter fields mirroring its
 * title/description — the live site's Yoast setup generates unique OG tags
 * per page; without this, every page shared to social falls back to the
 * root layout's homepage-level title/description.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const canonical = path.endsWith("/") ? path : `${path}/`;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_AU",
      siteName: BUSINESS_NAME,
      title,
      description,
      url: canonical,
      images: [ogImage],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [ogImage],
    },
  };
}
