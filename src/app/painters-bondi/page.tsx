import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Residential & Commercial Painters Bondi | Priority Coatings",
  description:
    "We are professional painters offering all types of interior and exterior painting services in Bondi. Call us for free quotes and get quality painting services.",
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

export default function PaintersBondiPage() {
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
              Professional &amp; Affordable Painters &ndash; Bondi
            </h1>
          </div>
        </section>

        {/* Intro text + quote form, side by side */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-base leading-[30px] text-black">
                If you are interested in painting and decorating your home or office, a call to
                our painters in Bondi should be your next move. Priority One Coating&rsquo;s
                professionalism is based on 28 years&rsquo; experience in the commercial and{" "}
                <strong>
                  <a
                    href="/residential-painters/"
                    className="text-brand-teal hover:text-brand-teal-dark"
                  >
                    residential painting
                  </a>
                </strong>{" "}
                industry. Painting Bondi houses and those in the greater Sydney area requires both
                professionalism and care to make sure your property stands up to sea breezes and
                severe weather conditions. Our Bondi painters are experienced in all aspects of
                residential, commercial, and{" "}
                <strong>
                  <a
                    href="/strata-painters-sydney/"
                    className="text-brand-teal hover:text-brand-teal-dark"
                  >
                    strata painting
                  </a>
                </strong>
                , including exterior and interior, epoxy floor coatings and lead removal.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                As a Dulux accredited member of Master Painters Australia and Strata Community
                Australia, we take pride in the quality of our service and workmanship. Our team
                is experienced and fully licensed and insured to guarantee hassle-free solutions
                at your doorstep.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Contact Priority One Coatings today for more information or to start your next
                Bondi painting project.
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
            title="Priority One Coatings service area - Bondi NSW"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6623.734618704702!2d151.2669577!3d-33.893071049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b2764633189f%3A0x5017d681632aad0!2sBondi%20NSW%202026!5e0!3m2!1sen!2sau!4v1685880484283!5m2!1sen!2sau"
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
              Looking for professional painters in Bondi?
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
