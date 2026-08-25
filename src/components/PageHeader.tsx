import Link from "next/link";

export default function PageHeader({
  title,
  parent,
}: {
  title: string;
  parent?: { label: string; href?: string };
}) {
  return (
    <section
      className="relative overflow-hidden bg-[#143049] bg-cover bg-[top_left] bg-no-repeat bg-blend-multiply py-[30px] md:py-[50px] lg:py-[100px]"
      style={{
        backgroundImage:
          "url(https://www.prioritycoatings.com.au/wp-content/uploads/2022/04/lead-paint.jpg)",
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
          {parent && (
            <>
              {parent.href ? (
                <Link href={parent.href} className="text-white transition-colors hover:text-brand-teal">
                  {parent.label}
                </Link>
              ) : (
                <span className="text-white">{parent.label}</span>
              )}
              <span className="text-white">&gt;</span>
            </>
          )}
          <span className="text-brand-teal">{title}</span>
        </div>
      </div>
    </section>
  );
}
