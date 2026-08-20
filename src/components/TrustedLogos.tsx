import Image from "next/image";

const LOGOS = [
  "https://prioritycoatings.com.au/wp-content/uploads/2022/04/taylor-new.png",
  "https://prioritycoatings.com.au/wp-content/uploads/2022/04/nsw-government-new.png",
  "https://prioritycoatings.com.au/wp-content/uploads/2022/04/nsw-rugby-league.png",
  "https://prioritycoatings.com.au/wp-content/uploads/2022/04/carlile-swimming.png",
  "https://prioritycoatings.com.au/wp-content/uploads/2022/04/fdc-new.png",
  "https://prioritycoatings.com.au/wp-content/uploads/2022/04/colliers-international.png",
  "https://prioritycoatings.com.au/wp-content/uploads/2022/04/linkedin.png",
];

export default function TrustedLogos() {
  const track = [...LOGOS, ...LOGOS];
  return (
    <section className="border-y border-gray-100 bg-brand-light py-14">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-xl font-bold text-brand-navy sm:text-2xl">
          Trusted by companies across Sydney, NSW
        </h2>

        <div className="relative mt-10 overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-16">
            {track.map((src, i) => (
              <Image
                key={`${src}-${i}`}
                src={src}
                alt="Trusted partner logo"
                width={140}
                height={70}
                className="h-12 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-16"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
