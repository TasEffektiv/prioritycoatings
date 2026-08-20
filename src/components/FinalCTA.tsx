export default function FinalCTA() {
  return (
    <section className="bg-brand-teal py-14">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
        <h3 className="text-xl font-extrabold text-white sm:text-2xl">
          Looking for professional painters in Sydney?
        </h3>
        <a
          href="/contact-us/"
          className="shrink-0 rounded-[0.05rem] bg-white px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wide text-brand-teal transition-colors hover:bg-brand-navy hover:text-white"
        >
          Request A Quote
        </a>
      </div>
    </section>
  );
}
