import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";

const BASE_URL = "https://www.prioritycoatings.com.au";

// Every route in this site is a static folder under src/app with its own
// page.tsx (no route groups, dynamic segments, or API routes) — walking the
// filesystem is the single source of truth, so the sitemap can never drift
// from the pages that actually exist.
function discoverRoutes(): string[] {
  const appDir = path.join(process.cwd(), "src", "app");
  const routes: string[] = [];

  function walk(dir: string, routePath: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some((entry) => entry.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(entry.name));
    if (hasPage) routes.push(routePath || "/");

    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), `${routePath}/${entry.name}`);
      }
    }
  }

  walk(appDir, "");
  return routes;
}

const SERVICE_PAGES = new Set([
  "/about-us",
  "/contact-us",
  "/commercial-fitouts",
  "/epoxy-floor-coatings",
  "/lead-paint-removal",
  "/residential-painters",
  "/commercial-painting",
  "/strata-painters-sydney",
]);

const SERVICE_AREA_PREFIX = "/painters-";

const PORTFOLIO_PAGES = new Set([
  "/portfolio",
  "/testimonials",
  "/recent-commercial-projects",
  "/recent-residential-projects",
  "/recent-strata-projects",
  "/recent-lead-removal-projects",
]);

const LEGAL_PAGES = new Set(["/privacy-policy", "/terms-and-conditions"]);

const BLOG_LAST_MODIFIED = new Map(
  POSTS.map((post) => [post.href.replace(/\/$/, "") || "/", new Date(post.date)])
);

function classify(route: string): {
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
} {
  if (route === "/") return { priority: 1.0, changeFrequency: "weekly" };
  if (SERVICE_PAGES.has(route)) return { priority: 0.9, changeFrequency: "monthly" };
  if (route.startsWith(SERVICE_AREA_PREFIX)) return { priority: 0.8, changeFrequency: "monthly" };
  if (PORTFOLIO_PAGES.has(route)) return { priority: 0.7, changeFrequency: "monthly" };
  if (LEGAL_PAGES.has(route)) return { priority: 0.3, changeFrequency: "yearly" };
  if (route === "/blog" || route.startsWith("/blog/page/") || route.startsWith("/category/")) {
    return { priority: 0.6, changeFrequency: "weekly" };
  }
  return { priority: 0.5, changeFrequency: "monthly" };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = discoverRoutes().sort();

  return routes.map((route) => {
    const { priority, changeFrequency } = classify(route);
    const lastModified = BLOG_LAST_MODIFIED.get(route) ?? new Date();

    return {
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
