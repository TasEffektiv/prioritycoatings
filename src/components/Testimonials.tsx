"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "I have found PRIORITY ONE COATINGS to be reliable, professional and committed to achieving a quality job within programme constraints.",
    name: "Stuart King",
    title: "Construction Manager, Intrec Management Pty Ltd.",
  },
  {
    quote:
      "Observatory Tower, a prestige high rise residential apartment building in Sydney's CBD, uses PRIORITY ONE COATINGS for external and internal painting. Their service and standard of work is of the highest quality and we are pleased to recommend them.",
    name: "Glen Webber",
    title: "Building Manager, Francis Management Building Services Pty Ltd",
  },
  {
    quote:
      "Danny, I am writing to acknowledge the high quality of workmanship that we constantly receive on our projects from PRIORITY ONE COATINGS. You & your painters attention to detail & understanding of the works to be completed & the tight timeframes we that we encounter on various projects, is always a high priority. I have had no hesitation is recommending you & your company to anybody & look forward to a long & continued working relationship for many years to come.",
    name: "Matthew Vella",
    title: "Managing Director, Kinvel Projects",
  },
  {
    quote: "A tough job done with complete professionalism!",
    name: "Paul Lennon",
    title: "Project Manager, Hamilton Island Enterprises",
  },
  {
    quote:
      "PRIORITY ONE COATINGS were highly recommended and I find them to be a highly professional contractor.",
    name: "Richard Crecca",
    title: "Maintenance Manager, Baulderstone Pty Ltd",
  },
];

export default function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-2xl font-extrabold text-brand-navy sm:text-3xl">
          Testimonials
        </h2>

        <div className="relative mt-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="min-w-0 shrink-0 grow-0 basis-full">
                  <div className="mx-auto flex max-w-2xl flex-col items-center rounded-[0.05rem] bg-brand-light p-8 text-center sm:p-12">
                    <Quote size={36} className="mb-4 text-brand-teal" fill="currentColor" />
                    <p className="text-lg italic leading-relaxed text-brand-ink">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <p className="mt-6 font-bold text-brand-navy">{t.name}</p>
                    <p className="text-sm text-brand-grey">{t.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 rounded-full border border-gray-300 bg-white p-2 text-brand-navy hover:border-brand-teal hover:text-brand-teal sm:block"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-4 rounded-full border border-gray-300 bg-white p-2 text-brand-navy hover:border-brand-teal hover:text-brand-teal sm:block"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://g.page/r/CS0byqu3rKdlEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-[0.05rem] border-2 border-brand-navy px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            Review Us on Google
          </a>
        </div>
      </div>
    </section>
  );
}
