import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Painters Bronte | Priority Coatings",
  description:
    "Get your commercial & residential painting projects done by experienced local painters in Bronte. Highly skilled & reliable local painters! Call 02 9808 5900!",
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

export default function PaintersBrontePage() {
  return (
    <div id="top">
      <Header />
      <main>
        {/* Hero: navy title band */}
        <section
          className="relative bg-[#143049] bg-cover bg-[top_left] bg-no-repeat bg-blend-multiply"
          style={{
            backgroundImage:
              "url(/images/lead-paint.jpg)",
          }}
        >
          <div className="mx-auto max-w-[1400px] px-6 py-16 text-center sm:py-20 lg:py-24">
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.2] text-white sm:text-[40px] lg:text-[52px]">
              Professional &amp; Affordable Painters &ndash; Bronte
            </h1>
          </div>
        </section>

        {/* Intro text + quote form, side by side */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-base leading-[30px] text-black">
                Priority One Coatings has specialised in serving the unique needs of our local
                community. Throughout our 28 years in the industry, we have been offering our
                painting services in Bronte and surrounding suburbs of Sydney. Our team includes
                experts in textured coatings,{" "}
                <strong>
                  <a
                    href="/epoxy-floor-coatings/"
                    className="text-brand-teal hover:text-brand-teal-dark"
                  >
                    epoxy floor coatings
                  </a>
                </strong>
                , waterproofing, wallpapering, lead paint removal, rust protection and heritage
                paint.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Our painters in Bronte are specialists in painting both residential and commercial
                properties and our{" "}
                <strong>
                  <a
                    href="/commercial-painting/"
                    className="text-brand-teal hover:text-brand-teal-dark"
                  >
                    commercial painting contractors
                  </a>
                </strong>{" "}
                and residential painters in Bronte cover all interior and exterior project ranging
                from one-bedroom unit to large commercial projects. We understand how important
                great attention to detail can be and the necessity of creating minimal disruption
                to our clients.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Contact Priority One Coatings for painters in Bronte today.
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
            title="Priority One Coatings service area - Bronte NSW"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13245.737093801343!2d151.2637219!3d-33.904221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b27612b90709%3A0x5017d681632ae50!2sBronte%20NSW%202024!5e0!3m2!1sen!2sau!4v1685879939232!5m2!1sen!2sau"
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
              Looking for professional painters in Bronte?
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
