import { Award, BadgeDollarSign, ShieldCheck, Headphones, Check } from "lucide-react";

const FEATURES = [
  { label: "High Quality", icon: Award },
  { label: "Competitive Pricing", icon: BadgeDollarSign },
  { label: "Licensed & Insured", icon: ShieldCheck },
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
    <section className="bg-brand-navy py-16 md:py-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-lg font-medium text-white/85">
            Here&rsquo;s what makes us stand-out in the painting and decorating industry
          </p>
          <div className="my-6 h-px w-16 bg-brand-teal" />
          <div className="space-y-6">
            {FEATURES.map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-teal/15">
                  <Icon size={24} className="text-brand-teal" />
                </span>
                <span className="text-base font-semibold text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Why is Priority One Coatings the Right Painting Company for You?
          </h2>

          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-white/90">
                <Check size={16} className="mt-1 shrink-0 text-brand-teal" />
                {b}
              </li>
            ))}
          </ul>

          <div className="my-8 h-px w-full bg-white/15" />

          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
              <Headphones size={26} className="text-brand-teal" />
            </span>
            <div>
              <p className="text-sm text-white/80">We Service all areas of Sydney</p>
              <a href="tel:+0298085900" className="text-xl font-bold text-white hover:text-brand-teal">
                02 9808 5900
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
