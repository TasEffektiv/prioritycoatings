import Link from "next/link";

export default function PageHeader({ title }: { title: string }) {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,40,77,0.85), rgba(0,40,77,0.85)), url(https://www.prioritycoatings.com.au/wp-content/uploads/2022/04/lead-paint.jpg)",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6">
        <h1 className="font-heading text-4xl font-extrabold text-white sm:text-5xl lg:text-[64px]">
          {title}
        </h1>
        <div className="hidden items-center gap-2 font-heading text-sm font-semibold sm:flex">
          <Link href="/" className="text-white transition-colors hover:text-brand-teal">
            Home
          </Link>
          <span className="text-white">&gt;</span>
          <span className="text-brand-teal">{title}</span>
        </div>
      </div>
    </section>
  );
}
