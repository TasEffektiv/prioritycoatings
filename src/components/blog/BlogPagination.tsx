import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

function pageHref(basePath: string, page: number) {
  return page <= 1 ? `${basePath}/` : `${basePath}/page/${page}/`;
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

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex flex-wrap items-center justify-center gap-1 py-[30px] text-[15px] font-medium">
      {currentPage > 1 && (
        <Link
          href={pageHref(basePath, currentPage - 1)}
          className="mr-[15px] flex items-center gap-1.5 text-black transition-colors hover:text-brand-teal"
        >
          <ArrowLeft size={14} /> Previous
        </Link>
      )}
      {pages.map((page) =>
        page === currentPage ? (
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
          className="ml-[15px] flex items-center gap-1.5 text-black transition-colors hover:text-brand-teal"
        >
          Next <ArrowRight size={14} />
        </Link>
      )}
    </nav>
  );
}
