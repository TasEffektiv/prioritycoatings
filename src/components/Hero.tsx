import QuoteForm from "./QuoteForm";

const SLIDES = [
  "/images/banner-one.jpg",
  "/images/banner-three.jpg",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className="hero-slide absolute inset-0 bg-cover bg-center opacity-0"
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${i * 5}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-14 md:py-20 lg:min-h-[774px] lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-16">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="font-heading text-2xl font-extrabold leading-[1.3] text-white sm:text-4xl lg:text-[52px]">
            PAINTERS SYDNEY for <br />
            <span className="sm:whitespace-nowrap">QUALITY PAINTING Since 1988</span>
          </h2>
          <h3 className="mt-6 max-w-[820px] text-base font-semibold leading-[1.48] text-white/90 sm:text-xl lg:text-[27px]">
            <span className="sm:whitespace-nowrap">Affordable residential &amp; commercial painting services in Sydney.</span>{" "}
            <br className="hidden md:block" />
            Quality workmanship, premium finishes and reliable <br className="hidden md:block" />
            local painters for over 38 years.
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="/contact-us/"
              className="rounded-[0.05rem] bg-brand-teal px-[70px] py-[15px] font-heading text-lg font-bold text-white shadow-lg transition-colors hover:bg-brand-teal-dark"
            >
              Contact Us
            </a>
            <a
              href="#recent-projects"
              className="rounded-[0.05rem] bg-brand-blue px-[30px] py-[15px] font-heading text-lg font-bold whitespace-nowrap text-white shadow-lg transition-colors hover:bg-brand-navy"
            >
              View Our Recent Works
            </a>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
