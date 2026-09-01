import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

function pageHref(basePath: string, page: number) {
  return page <= 1 ? `${basePath}/` : `${basePath}/page/${page}/`;
}

function getPageNumbers(currentPage: number, totalPages: number): (number | "ellipsis")[] {
  const delta = 2;
  const pages: (number | "ellipsis")[] = [1];

  const rangeStart = Math.max(2, currentPage - delta);
  const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

  if (rangeStart > 2) {
    pages.push("ellipsis");
  }

  for (let page = rangeStart; page <= rangeEnd; page++) {
    pages.push(page);
  }

  if (rangeEnd < totalPages - 1) {
    pages.push("ellipsis");
  }

  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return pages;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
}) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav className="flex flex-wrap items-center justify-center gap-1 py-[30px] text-[15px] font-medium">
      {currentPage > 1 && (
        <Link
          href={pageHref(basePath, currentPage - 1)}
          aria-label="Previous page"
          className="mr-[15px] flex h-9 w-9 items-center justify-center rounded-full border border-[#0052cc] text-[#0052cc] transition-colors hover:bg-[#0052cc] hover:text-white"
        >
          <ArrowLeft size={16} />
        </Link>
      )}
      {pages.map((page, index) =>
        page === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="px-[10px] py-1 text-black">
            ...
          </span>
        ) : page === currentPage ? (
          <span key={page} className="px-[18px] py-1 font-bold text-[#0052cc]">
            {page}
          </span>
        ) : (
          <Link
            key={page}
            href={pageHref(basePath, page)}
            className="px-[18px] py-1 text-black transition-colors hover:text-brand-teal"
          >
            {page}
          </Link>
        )
      )}
      {currentPage < totalPages && (
        <Link
          href={pageHref(basePath, currentPage + 1)}
          aria-label="Next page"
          className="ml-[15px] flex h-9 w-9 items-center justify-center rounded-full border border-[#0052cc] text-[#0052cc] transition-colors hover:bg-[#0052cc] hover:text-white"
        >
          <ArrowRight size={16} />
        </Link>
      )}
    </nav>
  );
}
