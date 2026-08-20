import Image from "next/image";

const LOGOS = [
  { src: "https://www.prioritycoatings.com.au/wp-content/uploads/2023/06/mpa.png", alt: "Master Painters Australia Logo", w: 133, h: 100 },
  { src: "https://www.prioritycoatings.com.au/wp-content/uploads/2023/06/trades.png", alt: "Ebix Trades Monitor Logo", w: 179, h: 90 },
  { src: "https://www.prioritycoatings.com.au/wp-content/uploads/2023/06/strata.png", alt: "Strata Community Association NSW Logo", w: 246, h: 110 },
  { src: "https://www.prioritycoatings.com.au/wp-content/uploads/2023/06/dulud.png", alt: "Dulux Accredited Painter Logo", w: 177, h: 100 },
  { src: "https://www.prioritycoatings.com.au/wp-content/uploads/2022/04/bird.png", alt: "Accreditation logo", w: 90, h: 110 },
  { src: "https://www.prioritycoatings.com.au/wp-content/uploads/2022/04/4-2.png", alt: "Accreditation logo", w: 141, h: 113 },
];

export default function CertLogos() {
  return (
    <section className="border-b border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6">
        {LOGOS.map((logo) => (
          <Image
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            width={logo.w}
            height={logo.h}
            className="h-auto w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );
}
