"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-3xl font-extrabold text-black sm:text-4xl">
          Testimonials
        </h2>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="min-w-0 shrink-0 grow-0 basis-full px-3 sm:basis-1/2 lg:basis-1/3">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-10">
          <button
            onClick={scrollPrev}
            aria-label="Previous testimonial"
            className="flex items-center gap-2 text-lg font-bold text-brand-navy opacity-40 transition-opacity hover:opacity-100"
          >
            <ArrowLeft size={18} /> Prev
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next testimonial"
            className="flex items-center gap-2 text-lg font-bold text-brand-navy transition-opacity hover:opacity-70"
          >
            Next <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://g.page/r/CS0byqu3rKdlEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-[0.05rem] bg-brand-blue px-[30px] py-[15px] font-heading text-lg font-bold text-white transition-colors hover:bg-brand-navy"
          >
            Review Us on Google
          </a>
        </div>
      </div>
    </section>
  );
}
