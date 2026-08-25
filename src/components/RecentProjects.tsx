import { Phone } from "lucide-react";

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
      className={`group relative block overflow-hidden bg-cover bg-center transition-[background-size] duration-500 group-hover:[background-size:110%] ${
        tall ? "h-64" : "h-80"
      }`}
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

export default function RecentProjects() {
  return (
    <section id="recent-projects" className="scroll-mt-24 bg-brand-light py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-3xl font-extrabold text-black sm:text-4xl">
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

        <div
          className="relative mt-16 overflow-hidden bg-cover bg-center py-16 sm:py-20 lg:py-24"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,57,109,0.89), rgba(0,57,109,0.89)), url(https://www.prioritycoatings.com.au/wp-content/uploads/2023/07/painters-in-sydney.jpg)",
          }}
        >
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-8 px-6 text-center">
            <h4 className="font-heading text-2xl font-bold text-white sm:text-[32px] lg:text-[41px]">
              Call Us For A Free Quote
            </h4>
            <a
              href="tel:+0298085900"
              className="flex items-center gap-2 rounded-[0.05rem] bg-brand-teal px-10 py-[15px] font-heading text-lg font-bold text-white transition-colors hover:bg-brand-teal-dark sm:px-[70px]"
            >
              <Phone size={20} /> 02 9808 5900
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
