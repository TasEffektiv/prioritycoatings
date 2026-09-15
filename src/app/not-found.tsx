import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | Priority One Coatings",
  description: "The page you're looking for can't be found.",
};

export default function NotFound() {
  return (
    <div id="top">
      <Header />
      <main>
        <section className="mx-auto max-w-[1400px] px-6 py-24 text-center sm:py-32">
          <p className="font-heading text-lg font-bold text-brand-teal">404</p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold text-black sm:text-4xl">
            Oops! That page can&rsquo;t be found.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-ink">
            The page you&rsquo;re looking for may have been moved or no longer exists. Try heading
            back to the homepage, or get in touch if we can help you find what you need.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-[0.05rem] bg-brand-navy px-10 py-3.5 font-heading text-lg font-bold text-white transition-colors hover:bg-brand-navy-deep"
            >
              Back To Home
            </Link>
            <Link
              href="/contact-us/"
              className="rounded-[0.05rem] border border-brand-navy px-10 py-3.5 font-heading text-lg font-bold text-brand-navy transition-colors hover:bg-brand-light"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
