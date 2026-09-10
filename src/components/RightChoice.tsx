import { Award, BadgeDollarSign, ShieldCheck, Headphones } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  { label: "High Quality", icon: Award },
  { label: "Competitive Pricing", icon: BadgeDollarSign },
];

const BULLETS = [
  "Valuable insights from 38+ years of experience",
  "100% customer satisfaction",
  "Painting solutions at an affordable price",
  "Wide variety of high-quality painting services in Sydney",
  "Safety standards ensured and maintained at all times",
  "Fully insured and licensed painting contractor",
  "Thorough clean up after our work is done",
  "Dulux accredited and member of the Master Painters Association",
];

export default function RightChoice() {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2">
      {/* Left: standout features over a background photo */}
      <div className="relative flex items-center overflow-hidden px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <Image
          src="/images/section-banner-image-min2.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={70}
          loading="lazy"
          className="-z-10 object-cover"
        />
        <div className="relative z-10 w-full max-w-[605px] bg-[#003c73f5] px-6 py-10 sm:px-[60px] sm:py-[60px] lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[650px] lg:max-w-none lg:-translate-x-[507px] lg:-translate-y-1/2">
          <p className="text-xl font-extrabold leading-[29px] text-white">
            Here&rsquo;s what makes us stand-out in the painting and decorating industry
          </p>
          <div className="my-6 h-px w-full bg-white/25" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {FEATURES.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <Icon size={36} className="shrink-0 text-white" strokeWidth={1.5} />
                <span className="text-xl font-semibold leading-8 text-white">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <ShieldCheck size={36} className="shrink-0 text-white" strokeWidth={1.5} />
            <span className="text-xl font-semibold leading-8 text-white">Licensed &amp; Insured</span>
          </div>
        </div>
      </div>

      {/* Right: why choose copy */}
      <div className="relative overflow-hidden bg-brand-teal px-6 py-16 sm:px-10 lg:py-24 lg:pr-6 lg:pl-[260px]">
        <Image
          src="/images/home-right-bg.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          quality={40}
          loading="lazy"
          className="-z-10 object-cover object-[top_right] mix-blend-multiply"
        />
        <h2 className="font-heading text-[22px] font-bold leading-[35px] text-white sm:text-[30px] sm:leading-[40px] lg:text-[40px] lg:leading-[43px]">
          Why is Priority One
          <br />
          Coatings the Right Painting
          <br />
          Company for You?
        </h2>

        <ul className="mt-8 list-disc space-y-2.5 pl-[22px] text-lg leading-[25px] text-white marker:text-white">
          {BULLETS.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className="my-8 h-px w-full bg-white/25" />

        <div className="flex items-center gap-4">
          <Headphones size={40} className="shrink-0 text-white" strokeWidth={1.5} />
          <div>
            <p className="text-base font-semibold leading-[30px] text-white">
              We Service all areas of Sydney
            </p>
            <a
              href="tel:+0298085900"
              className="text-2xl font-bold leading-[30px] text-white transition-colors hover:text-brand-navy sm:text-[41px]"
            >
              02 9808 5900
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
