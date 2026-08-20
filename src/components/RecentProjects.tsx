import { ArrowRight, Phone } from "lucide-react";

const PROJECTS = [
  {
    title: "Commercial",
    img: "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-2013.jpg",
    href: "/recent-commercial-projects/",
  },
  {
    title: "Residential",
    img: "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/house-painting-sydney.jpg",
    href: "/recent-residential-projects/",
  },
  {
    title: "Strata",
    img: "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/strata-painting.jpg",
    href: "/recent-strata-projects/",
  },
];

const LEAD_REMOVAL = {
  title: "Lead Removal",
  img: "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/lead-removing-repainting.jpg",
  href: "/recent-lead-removal-projects/",
};

function ProjectCard({ title, img, href, tall }: { title: string; img: string; href: string; tall?: boolean }) {
  return (
    <a
      href={href}
      className={`group relative block overflow-hidden rounded-[0.05rem] bg-cover bg-center ${
        tall ? "h-64" : "h-80"
      }`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:from-black/90" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
        <h6 className="text-xl font-extrabold text-white">{title}</h6>
        <span className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-white opacity-0 transition-opacity group-hover:opacity-100">
          Learn More <ArrowRight size={16} />
        </span>
      </div>
    </a>
  );
}

export default function RecentProjects() {
  return (
    <section className="bg-brand-light py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">
          Our Recent Projects
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
        <div className="mt-6">
          <ProjectCard {...LEAD_REMOVAL} tall />
        </div>

        <div className="mt-10 text-center">
          <a
            href="/portfolio/"
            className="inline-block rounded-[0.05rem] border-2 border-brand-navy px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            View Our Portfolio
          </a>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 border-t border-gray-200 pt-10 text-center">
          <h4 className="text-xl font-bold text-brand-navy sm:text-2xl">
            Call Us For A Free Quote
          </h4>
          <a
            href="tel:+0298085900"
            className="flex items-center gap-2 rounded-[0.05rem] bg-brand-teal px-8 py-3.5 font-heading text-lg font-bold text-white transition-colors hover:bg-brand-teal-dark"
          >
            <Phone size={20} /> 02 9808 5900
          </a>
        </div>
      </div>
    </section>
  );
}
