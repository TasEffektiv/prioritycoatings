import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Painters Haberfield | Your Local Painters | Priority One Coatings",
  description:
    "For any interior and exterior painting projects, contact experienced and reliable painters in Haberfield. Highly trained & affordable painters! Get a free Quote!",
};

const SERVICES_LIST = [
  "Strata & Body Corporate",
  "Commercial Buildings",
  "Residential Buildings",
  "Aged Care Facilities",
  "Schools and Colleges",
  "Office towers",
  "New Construction",
  "Hospitals",
  "Entertainment Venues",
  "Carparks",
  "Government Buildings",
  "Shopping Centres",
  "Heritage Sites",
  "Townhouses",
  "Condominium",
];

const REPUTATION_LIST = [
  "A hard-working team that brings the same enthusiasm to every job",
  "Excellent customer service – our clients’ convenience is number one",
  "Working closely with customers to understand their needs",
  "Almost 28 years in the industry perfecting our service",
  "Fully accredited, insured and recognised by Dulux",
];

export default function PaintersHaberfieldPage() {
  return (
    <div id="top">
      <Header />
      <main>
        {/* Hero: navy title band */}
        <section
          className="relative bg-[#143049] bg-cover bg-[top_left] bg-no-repeat bg-blend-multiply"
          style={{
            backgroundImage:
              "url(https://www.prioritycoatings.com.au/wp-content/uploads/2022/04/lead-paint.jpg)",
          }}
        >
          <div className="mx-auto max-w-[1400px] px-6 py-16 text-center sm:py-20 lg:py-24">
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.2] text-white sm:text-[40px] lg:text-[52px]">
              Budget Friendly Painting Services in Haberfield
            </h1>
          </div>
        </section>

        {/* Intro text + quote form, side by side */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-base leading-[30px] text-black">
                If you&rsquo;re after{" "}
                <strong>
                  <a href="/" className="text-brand-teal hover:text-brand-teal-dark">
                    painting and decorating contractor
                  </a>
                </strong>{" "}
                in Haberfield, <strong>Priority One Coatings</strong> is well worth a look. We
                have built up a reputation for ourselves in Sydney behind:
              </p>
              <ul className="mt-5 space-y-2">
                {REPUTATION_LIST.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-[30px] text-black">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-[30px] text-black">
                Our friendly crew in Haberfield are experts in interior and exterior painting, as
                well as general decorating. Our colour consultants can help you find the look
                you&rsquo;re after.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                We have the skills and experience to take on both residential and commercial
                jobs. We frequently work on domestic house repaints, strata work and office
                fit-outs for example.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Clients&rsquo; satisfaction is always a top priority for our painters in
                Haberfield and we pride ourselves on accommodating our service and quote around
                your needs.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                In our 28 years&rsquo; of service in the field of painting and decoration, we
                have successfully build a very good reputation all over Sydney, which is
                reflected in great customer reviews.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Speak to the best painting contractors in Haberfield by calling{" "}
                <strong>Priority One Coatings</strong> today on
                <br />
                <a
                  href="tel:+0298085900"
                  className="text-brand-teal hover:text-brand-teal-dark"
                >
                  02 9808-5900
                </a>
                .
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="shrink-0 shadow-[0_0_30px_0_rgba(0,0,0,0.16)]">
                <QuoteForm
                  compact
                  widthClassName="lg:max-w-[630px]"
                  nameFieldWidthClassName="w-full lg:w-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Complete painting solution - services list */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="bg-[#013f75] px-4 py-16 text-center sm:px-8 md:py-24 lg:px-[110px]">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                A complete painting solution for residential, commercial, strata, and
                <br className="hidden sm:block" /> industrial properties:
              </h2>
              <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 text-left sm:grid-cols-3 sm:grid-flow-col sm:grid-rows-5">
                {SERVICES_LIST.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-white">
                    <CheckCircle2 size={20} className="shrink-0 text-brand-teal" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Testimonials />

        <CertLogos />

        {/* Map */}
        <section className="bg-white">
          <iframe
            title="Priority One Coatings service area - Haberfield NSW"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13249.545604087636!2d151.13904979999998!3d-33.87970105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afa4f5d797e5%3A0x1c017d6b3fba8b40!2sHaberfield%20NSW%202045!5e0!3m2!1sen!2sau!4v1685881067574!5m2!1sen!2sau"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* Final CTA */}
        <section className="bg-[#f3f3f3] py-16">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
            <h3 className="text-2xl font-bold text-black sm:text-[40px]">
              Looking for professional painters in Haberfield?
            </h3>
            <a
              href="/contact-us/"
              className="shrink-0 rounded-[0.05rem] bg-brand-blue px-14 py-[15px] font-heading text-lg font-bold text-white transition-colors hover:bg-brand-navy"
            >
              Request A Quote
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
