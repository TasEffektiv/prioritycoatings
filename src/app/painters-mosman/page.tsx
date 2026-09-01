import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Painters Mosman | Priority Coatings",
  description:
    "Guaranteed quality for residential & commercial painting projects in Mosman. Highly skilled & professional Mosman painters. Call 02 9808 5900 & Get a free quote NOW!",
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

export default function PaintersMosmanPage() {
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
              High Quality Painting Solutions in Mosman
            </h1>
          </div>
        </section>

        {/* Intro text + quote form, side by side */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-base leading-[30px] text-black">
                Priority One Coating is a renowned name in painting and decorating service for the
                following reasons:
              </p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-[30px] text-black">
                <li>We guarantee the highest quality finish on every job</li>
                <li>We have 28 years in the industry</li>
                <li>No job is too big or small &ndash; we bring the same effort to each</li>
                <li>We are Dulux accredited and are recognised by other painting organisation</li>
              </ul>
              <p className="mt-5 text-base leading-[30px] text-black">
                Our Service Range includes{" "}
                <strong>
                  <a
                    href="/commercial-fitouts/"
                    className="text-brand-teal hover:text-brand-teal-dark"
                  >
                    commercial fit outs
                  </a>
                </strong>
                , Epoxy floor coatings,{" "}
                <strong>
                  <a
                    href="/residential-painters/"
                    className="text-brand-teal hover:text-brand-teal-dark"
                  >
                    residential painting
                  </a>
                </strong>
                , strata work, lead removal and programmed maintenance. With colour consultants
                and experienced painters on hand, we are able to deliver long-lasting painting
                solutions that can transform the interior and exterior of your home.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                At Priority Coatings, we also pride ourselves on high-quality workmanship, paying
                special attention to our clients&rsquo; detail requirements and understanding that
                every house and design is different.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Good customer service means that we make things convenient for you with minimal
                disruption to your day-to-day life.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Find out more about our services by speaking to an expert in painting and
                decorating.
                <br />
                Call{" "}
                <a href="tel:0298085900" className="text-brand-teal hover:text-brand-teal-dark">
                  02 9808-5900
                </a>{" "}
                today for an obligation-free discussion.
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
            title="Priority One Coatings service area - Mosman NSW"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26515.032558339077!2d151.24861819999998!3d-33.82833360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac3bad92ffa3%3A0x1c017d6b3fba8ce0!2sMosman%20NSW%202088!5e0!3m2!1sen!2sau!4v1685880867172!5m2!1sen!2sau"
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
