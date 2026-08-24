import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Priority One Coatings",
  description:
    "Established in 1988, Priority One Coatings is a Sydney painting & decorating company with old school values, delivering premium residential, commercial, and strata painting services.",
};

const SERVICES_LIST = [
  "Residential house painting",
  "Commercial painting",
  "Strata painting",
  "Epoxy floor coatings",
  "Lead paint removal",
  "Commercial office fitouts",
];

export default function AboutUsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="About Us" />

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-[2fr_3fr] lg:items-start">
            <div>
              <div className="relative w-full">
                <Image
                  src="https://www.prioritycoatings.com.au/wp-content/uploads/2022/06/au.jpg"
                  alt="commercial building"
                  width={2558}
                  height={1304}
                  className="h-auto w-full object-contain"
                />
              </div>
              <p className="mt-3 text-center text-sm text-brand-grey">The Sands Manly</p>
            </div>

            <div>
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                About Priority One Coatings
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-ink">
                Established in 1988, <strong className="font-bold">Priority One Coatings</strong>{" "}
                is a Sydney painting &amp; decorating company with old school values. We employ
                only the best tradesmen and provide a professional, organised approach to
                delivering premium residential, commercial, and strata painting services. With
                over three decades of industry experience, we combine traditional workmanship
                with modern techniques to achieve exceptional, long-lasting finishes for any
                project large or small.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-ink">
                Our team of highly skilled and qualified painters is committed to delivering
                quality workmanship, reliable service, and outstanding customer satisfaction.
                Whether you&rsquo;re refreshing your family home, repainting a commercial
                property, or managing a large strata complex, we approach every project with
                professionalism, attention to detail, and respect for your property.
              </p>

              <h3 className="mt-10 font-heading text-2xl font-bold text-black">
                Experienced Residential, Commercial &amp; Strata Painters
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-ink">
                At Priority One Coatings, we specialise in a comprehensive range of painting
                services, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-brand-ink marker:text-black">
                {SERVICES_LIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <h3 className="mt-10 font-heading text-2xl font-bold text-black">
                Trusted by Property Owners, Builders &amp; Strata Managers
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-ink">
                Over the years, we&rsquo;ve developed strong working relationships with
                homeowners, builders, property managers, strata managers, and body corporates
                throughout Sydney. We understand the importance of clear communication, careful
                project planning, and minimising disruption to residents, tenants, and
                businesses during every stage of the project.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-ink">
                Our commitment to reliability, safety, and quality has resulted in much of our
                work coming from repeat clients and referrals&mdash;a reflection of the trust
                we&rsquo;ve earned within the industry.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
