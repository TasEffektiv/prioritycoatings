import Image from "next/image";

const LOGOS = [
  "/images/taylor-new.png",
  "/images/nsw-government-new.png",
  "/images/nsw-rugby-league.png",
  "/images/carlile-swimming.png",
  "/images/fdc-new.png",
  "/images/colliers-international.png",
  "/images/linkedin.png",
];

export default function TrustedLogos() {
  const track = [...LOGOS, ...LOGOS];
  return (
    <section className="border-y border-gray-200 bg-white py-14">
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-xl font-bold text-black sm:text-2xl">
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
                className="h-12 w-auto object-contain sm:h-16"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
