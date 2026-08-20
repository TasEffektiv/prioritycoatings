import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { MapPin, Phone, Smartphone, Mail, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Priority One Coatings",
  description:
    "Get in touch with Priority One Coatings — Sydney's trusted painting & decorating company since 1988. Call, email, or send us a message for a free quote.",
};

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Unit 7, 46-48 Buffalo Rd, Gladesville NSW 2111",
  },
  {
    icon: MapPin,
    label: "Postal Address",
    value: "P.O. Box 3413, Putney NSW 2112",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "02 9808 5900",
    href: "tel:+0298085900",
  },
  {
    icon: Smartphone,
    label: "Mobile",
    value: "0418 272 035",
    href: "tel:+61418272035",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jenny@prioritycoatings.com.au",
    href: "mailto:jenny@prioritycoatings.com.au",
  },
  {
    icon: Printer,
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

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-6 max-w-[520px] text-base leading-relaxed text-brand-ink">
                Have a question or ready to start your project? Reach out to our team using the
                details below, or send us a message and we&rsquo;ll get back to you shortly.
              </p>

              <ul className="mt-10 space-y-7">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-teal">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <span>
                      <strong className="block font-heading text-sm font-bold uppercase tracking-wide text-brand-navy">
                        {label}
                      </strong>
                      {href ? (
                        <a
                          href={href}
                          className="text-base leading-relaxed text-brand-ink transition-colors hover:text-brand-teal"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="block text-base leading-relaxed text-brand-ink">{value}</span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <QuoteForm heading="Send Message" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
