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
                <div className="group relative px-6 pt-16">
                  <div className="absolute inset-x-6 bottom-0 top-16 bg-[#e9f1f6]" />
                  <div className="relative">
                    <div className="relative -mt-16 aspect-[293/249] w-full overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-2 pb-9 pt-6 text-center">
                      <h3 className="text-xl font-bold text-black">{s.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-black/70">{s.desc}</p>
                      <a
                        href={s.href}
                        className="mt-4 inline-block text-sm font-bold text-brand-teal opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        Learn More
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
            className="font-heading text-lg font-bold text-white transition-opacity disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={scrollNext}
            disabled={!canNext}
            className="font-heading text-lg font-bold text-white transition-opacity disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
