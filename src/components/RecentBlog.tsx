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

function BlogCard({ post }: { post: (typeof POSTS)[number] }) {
  return (
    <a
      href={post.href}
      className="group flex flex-col overflow-hidden border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="px-5">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.img}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-white px-5 pb-5 pt-5">
        <p className="text-sm text-brand-blue">{post.date}</p>
        <h4 className="mt-2 text-base font-bold leading-snug text-brand-navy">{post.title}</h4>
        <div className="mt-4 h-0 overflow-hidden transition-all duration-500 group-hover:h-6">
          <span className="flex -translate-y-2 items-center gap-1.5 text-sm font-semibold text-brand-teal transition-transform duration-500 group-hover:translate-y-0">
            Read More <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </a>
  );
}

export default function RecentBlog() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:mt-[140px]">
            <BlogCard post={POSTS[0]} />
          </div>

          <div className="flex flex-col gap-5 lg:mt-[28px]">
            <BlogCard post={POSTS[1]} />
            <div className="flex min-h-[220px] flex-col items-center justify-center gap-4 bg-brand-teal p-8 text-center">
              <p className="text-sm text-white">
                Visit our blog page frequently for painting and decorating tips from our experts.
              </p>
              <a
                href="/blog/"
                className="rounded-[0.05rem] border border-white px-6 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand-teal"
              >
                View All Posts
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <BlogCard post={POSTS[2]} />
            <div className="flex min-h-[200px] flex-col items-center justify-center bg-brand-navy p-8 text-center">
              <p className="font-heading text-3xl font-bold text-white">Recent Blog</p>
            </div>
          </div>

          <div className="lg:mt-[112px]">
            <BlogCard post={POSTS[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
