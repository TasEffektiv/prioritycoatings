import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Painters Northern Beaches | Priority Coatings",
  description:
    "For commercial & residential painting projects, call Dulux accredited painters in Northern Beaches. Fully insured painting services at reasonable rates. Contact now!",
};

const WHY_CHOOSE_US = [
  "28 years of experience in domestic, commercial and strata painting",
  "High-quality service at an affordable price",
  "All sized jobs are important to us!",
  "We finish the work with minimum disruption to you",
];

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

export default function PaintersNorthernBeachesPage() {
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
              Planning a painting project in Northern Beaches?
            </h1>
          </div>
        </section>

        {/* Intro text + quote form, side by side */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-base leading-[30px] text-black">
                If you need good quality{" "}
                <strong>
                  <a href="/" className="text-brand-teal hover:text-brand-teal-dark">
                    painting and decorating services
                  </a>
                </strong>{" "}
                in Northern Beaches, Priority One Coatings are the people to talk to. Having been
                active in Sydney for nearly 28 years, we have the knowledge and expertise to help
                transform your home and complete your project with minimal fuss.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-[30px] text-black">
                {WHY_CHOOSE_US.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-[30px] text-black">
                Our friendly, dedicated team will work with you to understand your requirements
                and help find a solution that works. From colour selection and decorative
                decisions, through to completion and after-sales service, we will have you well
                looked after every step of the way.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                We are experienced working with both residential and commercial clients. Starting
                from all types of coatings, we take care of all exterior and interior design
                specifications and other painting related services.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                For further discussion, call us on{" "}
                <a href="tel:0298085900" className="text-brand-teal hover:text-brand-teal-dark">
                  02 9808-5900
                </a>{" "}
                and get a quote.
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
            title="Priority One Coatings service area - Northern Beaches NSW"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212431.6328206518!2d151.2855025!3d-33.702627850000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d54fe57ff8d69%3A0x8394225c7c9a5aaa!2sNorthern%20Beaches%2C%20NSW!5e0!3m2!1sen!2sau!4v1685881721618!5m2!1sen!2sau"
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
      </main>
      <Footer />
    </div>
  );
}
