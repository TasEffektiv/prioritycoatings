import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Priority One Coatings",
  description:
    "Browse Priority One Coatings' portfolio of commercial, residential, strata and lead removal projects across Sydney.",
};

const CATEGORIES = [
  {
    title: "Commercial",
    img: "/images/commercial-2013.jpg",
    href: "/recent-commercial-projects/",
  },
  {
    title: "Residential",
    img: "/images/house-painting-sydney.jpg",
    href: "/recent-residential-projects/",
  },
  {
    title: "Strata",
    img: "/images/strata-painting.jpg",
    href: "/recent-strata-projects/",
  },
  {
    title: "Lead Removal",
    img: "/images/lead-removing-repainting.jpg",
    href: "/recent-lead-removal-projects/",
  },
];

function CategoryCard({ title, img, href }: { title: string; img: string; href: string }) {
  return (
    <a
      href={href}
      className="group relative block h-80 overflow-hidden bg-cover bg-center transition-[background-size] duration-500 hover:[background-size:110%]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="inline-block bg-brand-teal px-4 py-2 text-sm font-bold text-white">
          {title}
        </span>
        <span className="mt-3 flex items-center gap-2 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Learn More
          <svg aria-hidden="true" viewBox="0 0 20 14" className="h-[10px] w-[14px] shrink-0 fill-current">
            <path d="M12.6 0.6 11.2 2l3.3 3.3H0v2h14.5L11.2 10.6 12.6 12l6-6z" />
          </svg>
        </span>
      </div>
    </a>
  );
}

export default function PortfolioPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="Portfolio" />

        <section className="bg-white py-[50px] md:py-[80px]">
          <div className="mx-auto max-w-[1400px] px-6">
            <p className="mb-10 max-w-3xl text-base leading-relaxed text-brand-ink md:text-lg">
              PRIORITY ONE COATINGS currently undertakes work for major builders and also
              smaller builders. We offer a personal one on one service that sets us apart from
              our competitors. Our team prides itself on customer satisfaction.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {CATEGORIES.map((c) => (
                <CategoryCard key={c.title} {...c} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
