"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const SERVICES = [
  {
    title: "Commercial Fitouts",
    desc: "We provide painting services for office and industrial buildings, specialising in hospitals, educational institutes and pharmaceutical plants...",
    img: "https://prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-offfice-2013.jpg",
    href: "/commercial-fitouts/",
  },
  {
    title: "Residential Painters",
    desc: "For over 32 years, we have provided homeowners across Sydney with a refreshing blend of quality and professionalism in their home painting services. ...",
    img: "https://prioritycoatings.com.au/wp-content/uploads/2022/09/house-painting-2013.jpg",
    href: "/residential-painters/",
  },
  {
    title: "Lead Paint Removal",
    desc: "Lead paint processing and removal is a specialised area; our lead paint abatement contractors are accredited and highly trained to ensure a safe work environment...",
    img: "https://prioritycoatings.com.au/wp-content/uploads/2022/09/lead-removing-repainting-1.jpg",
    href: "/lead-paint-removal/",
  },
  {
    title: "Commercial Painting Service",
    desc: "Throughout Sydney, Priority One Coatings reputation for excellence as a commercial painting company has been forged over a span of 32 years in the industry",
    img: "https://prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-property-sydney.jpg",
    href: "/commercial-painting/",
  },
  {
    title: "Strata Painting",
    desc: "With over 32 years of experience, Priority One Coatings is the best choice for all your strata painting needs. Our strata painters in Sydney are extensive and professional...",
    img: "https://prioritycoatings.com.au/wp-content/uploads/2022/09/strata-painting-sydney.jpg",
    href: "/strata-painters-sydney/",
  },
  {
    title: "Epoxy Floor Coating",
    desc: "With over 32 years of experience, Priority One Coatings has been one of the best painting companies in Sydney for all your Texture Coating jobs.",
    img: "https://prioritycoatings.com.au/wp-content/uploads/2022/04/service-sample.jpg",
    href: "/epoxy-floor-coatings/",
  },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 3,
    breakpoints: {
      "(max-width: 1023px)": { slidesToScroll: 2 },
      "(max-width: 639px)": { slidesToScroll: 1 },
    },
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi]);

  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center mix-blend-multiply"
        style={{
          backgroundImage:
            "url(https://www.prioritycoatings.com.au/wp-content/uploads/2022/04/service-bg.png)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-3xl font-extrabold text-white sm:text-4xl">
          Our Painting Services
        </h2>

        <div className="mt-16 overflow-hidden" ref={emblaRef}>
          <div className="-ml-9 flex">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="min-w-0 shrink-0 grow-0 basis-full pl-9 sm:basis-1/2 lg:basis-1/3"
              >
                <div className="group relative flex h-full flex-col pt-16">
                  <div className="absolute inset-x-0 bottom-0 top-16 bg-white/[0.87] transition-all duration-500 group-hover:top-20 group-hover:bg-white" />
                  <div className="relative flex flex-1 flex-col px-9">
                    <div className="relative -mt-16 h-[249px] w-full shrink-0 overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col pb-9 pt-6 text-center">
                      <h3 className="text-xl font-bold text-black">{s.title}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-black/70">{s.desc}</p>
                      <a
                        href={s.href}
                        className="mt-auto inline-flex items-center gap-2 self-center pt-5 pr-6 text-[15px] font-bold tracking-wide text-brand-teal opacity-0 transition-opacity duration-500 hover:opacity-70 group-hover:opacity-100"
                      >
                        Learn More
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 20 14"
                          className="h-[10px] w-[14px] shrink-0 fill-current"
                        >
                          <path d="M12.6 0.6 11.2 2l3.3 3.3H0v2h14.5L11.2 10.6 12.6 12l6-6z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-10">
          <button
            onClick={scrollPrev}
            disabled={!canPrev}
            className="flex items-center gap-2 font-heading text-lg font-bold text-white transition-opacity disabled:opacity-50"
          >
            <svg aria-hidden="true" viewBox="0 0 20 14" className="h-[14px] w-5 rotate-180 fill-current">
              <path d="M12.6 0.6 11.2 2l3.3 3.3H0v2h14.5L11.2 10.6 12.6 12l6-6z" />
            </svg>
            Prev
          </button>
          <button
            onClick={scrollNext}
            disabled={!canNext}
            className="flex items-center gap-2 font-heading text-lg font-bold text-white transition-opacity disabled:opacity-50"
          >
            Next
            <svg aria-hidden="true" viewBox="0 0 20 14" className="h-[14px] w-5 fill-current">
              <path d="M12.6 0.6 11.2 2l3.3 3.3H0v2h14.5L11.2 10.6 12.6 12l6-6z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
