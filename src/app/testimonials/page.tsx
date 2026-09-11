import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Our Client's Word of Mouth | Priority One Coatings",
  description:
    "At Priority One Coatings, our excellence is defined by our client's reviews. Check out our client's word of mouth for our professional painters in Sydney.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader path="/testimonials" title="Testimonials" />

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
