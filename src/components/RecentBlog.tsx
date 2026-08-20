import Image from "next/image";
import { ArrowRight } from "lucide-react";

const POSTS = [
  {
    title: "How to Fix a Bad Paint Job: Common Painting Mistakes",
    date: "April 30, 2026",
    img: "https://www.prioritycoatings.com.au/wp-content/uploads/2026/05/how-to-fix-bad-paint-job-blog-banner.jpg",
    href: "/how-to-fix-a-bad-paint-job/",
  },
  {
    title: "Painting Commercial Building: The Best Practice Guide",
    date: "May 20, 2026",
    img: "https://www.prioritycoatings.com.au/wp-content/uploads/2026/05/colorful-building-facade-in-city.jpg",
    href: "/painting-commercial-building-the-best-practice-guide/",
  },
  {
    title: "Essential Things to Know Before Painting Your Home Interiors",
    date: "May 10, 2026",
    img: "https://www.prioritycoatings.com.au/wp-content/uploads/2026/05/repair-in-the-apartment-paints-the-wall-with-paint.jpg",
    href: "/things-to-know-before-painting-home-interiors/",
  },
  {
    title: "Winter Exterior Painting In Sydney: Essential Tips",
    date: "June 10, 2026",
    img: "https://www.prioritycoatings.com.au/wp-content/uploads/2026/06/residential-house-with-front-yard-in-snow.jpg",
    href: "/winter-exterior-house-painting-dos-and-donts/",
  },
];

export default function RecentBlog() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">Recent Blog</h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((post, i) => (
            <div key={post.title} className="contents">
              <a
                href={post.href}
                className="group flex flex-col overflow-hidden rounded-[0.05rem] border border-gray-100 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
                    {post.date}
                  </p>
                  <h4 className="mt-2 flex-1 text-base font-bold leading-snug text-brand-navy">
                    {post.title}
                  </h4>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand-teal">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </a>
              {i === 1 && (
                <div className="flex flex-col items-center justify-center gap-4 rounded-[0.05rem] bg-brand-navy p-6 text-center sm:col-span-2 lg:col-span-1">
                  <p className="text-sm font-medium text-white">
                    Visit our blog page frequently for painting and decorating tips from our
                    experts.
                  </p>
                  <a
                    href="/blog/"
                    className="rounded-[0.05rem] bg-brand-teal px-6 py-3 font-heading text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-teal-dark"
                  >
                    View All Posts
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
