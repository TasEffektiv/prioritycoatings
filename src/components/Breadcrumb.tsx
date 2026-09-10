import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { label: string; path: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ label: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="border-b border-black/5 bg-white">
      <ol className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-2 gap-y-1 px-6 py-3 font-heading text-xs font-semibold uppercase tracking-wide text-brand-navy/60">
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span className="text-brand-teal">{crumb.label}</span>
              ) : (
                <Link href={crumb.path} className="transition-colors hover:text-brand-teal">
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(trail.map((c) => ({ ...c, path: c.path.replace(/\/$/, "") || "/" })))} />
    </nav>
  );
}
