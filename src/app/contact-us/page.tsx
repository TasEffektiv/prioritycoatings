import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Priority One Coatings",
  description:
    "Get in touch with Priority One Coatings — Sydney's trusted painting & decorating company since 1988. Call, email, or send us a message for a free quote.",
};

const CONTACT_DETAILS = [
  {
    label: "Office Address",
    value: (
      <>
        Unit 7, 46-48 Buffalo Road,
        <br />
        Gladesville NSW 2111
      </>
    ),
  },
  {
    label: "Postal Address",
    value: (
      <>
        P.O. Box 3413, Putney
        <br />
        NSW 2112
      </>
    ),
  },
  {
    label: "Phone",
    value: <a href="tel:+0298085900" className="hover:text-brand-teal">02 9808 5900</a>,
  },
  {
    label: "Mobile",
    value: <a href="tel:+0418272035" className="hover:text-brand-teal">0418 272 035</a>,
  },
  {
    label: "Email",
    value: (
      <>
        <a href="mailto:jenny@prioritycoatings.com.au" className="hover:text-brand-teal">
          jenny@prioritycoatings.com.au
        </a>
        <br />
        <a href="mailto:danny@prioritycoatings.com.au" className="hover:text-brand-teal">
          danny@prioritycoatings.com.au
        </a>
      </>
    ),
  },
  {
    label: "Fax",
    value: "02 9808 5177",
  },
];

export default function ContactUsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="Contact Us" />

        <section className="relative z-10 py-16 md:py-24">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-start">
            <div className="pt-5">
              <h2 className="border-b-[3px] border-brand-blue pb-4 font-heading text-2xl font-extrabold text-black sm:text-[32px]">
                Get in Touch
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                {CONTACT_DETAILS.map(({ label, value }) => (
                  <div key={label}>
                    <h5 className="font-heading text-lg font-bold text-black">{label}</h5>
                    <p className="mt-1 text-base leading-relaxed text-brand-ink">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

        <section className="relative -mt-[70px] md:-mt-[100px] lg:-mt-[139px]">
          <iframe
            loading="lazy"
            title="Priority One Coatings Unit 7, 46-48 Buffalo Road, Gladesville NSW 2111"
            aria-label="Priority One Coatings Unit 7, 46-48 Buffalo Road, Gladesville NSW 2111"
            src="https://maps.google.com/maps?q=Priority%20One%20Coatings%20Unit%207%2C%2046-48%20Buffalo%20Road%2C%20Gladesville%20NSW%202111&t=m&z=13&output=embed&iwloc=near"
            className="h-[350px] w-full border-0 md:h-[450px] lg:h-[590px]"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
