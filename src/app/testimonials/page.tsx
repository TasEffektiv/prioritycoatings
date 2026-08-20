import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Priority One Coatings",
  description:
    "See what our clients say about Priority One Coatings — trusted Sydney painters delivering reliable, high-quality residential, commercial and strata painting services.",
};

export default function TestimonialsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="Testimonials" />

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="mb-6 break-inside-avoid">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
