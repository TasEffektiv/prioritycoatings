export default function FinalCTA() {
  return (
    <section className="bg-[#f3f3f3] py-16">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
        <h3 className="text-2xl font-bold text-black sm:text-[40px]">
          Looking for professional painters in Sydney?
        </h3>
        <a
          href="/contact-us/"
          className="shrink-0 rounded-[0.05rem] bg-brand-blue px-14 py-[15px] font-heading text-lg font-bold text-white transition-colors hover:bg-brand-navy"
        >
          Request A Quote
        </a>
      </div>
    </section>
  );
}
