import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import ExpertsSection from "./ExpertsSection";

export const metadata: Metadata = {
  title: "Lead Paint Removal Specialists Sydney | Priority One Coatings",
  description:
    "We offer safe lead-based paint removal in Sydney with expert & trained staff. Priority One Coatings has experienced Sydney painters for removing lead paint.",
};

const RELATED_WORKS_GALLERY = [
  "/images/lead-paint-removal-and-repaint.jpg",
  "/images/lead-removal-repainting.jpg",
  "/images/lead-removing-and-repainting.jpg",
  "/images/lead-removing-repainting-3.jpg",
];

const SERVICES_LIST = [
  "Lead paint consultation and quote",
  "Lead paint advice",
  "Lead paint testing",
  "Site evaluation",
  "Lead paint removal",
  "Lead waste management and disposal",
  "Clearance inspection after lead removal",
  "A thorough clean up",
  "Painting after lead-based paint removal",
];

const SPECIALITY = [
  {
    title: "Safety Measure",
    body: "Maintaining safety in every lead-based paint removal project is always our priority. Our trained and experienced lead removal professionals always meet industry standards and regulations to complete the whole process of preventing safety hazards. We follow the WorkSafe safety and prevention instructions to prevent any risk related to the lead removal process. Our professionals also ensure that all the family members and neighbours stay alert and take precautions before we start to lead stripping. We always maintain a strict protocol to ensure our team members and customers are safe in the lead-based paint removal process.",
  },
  {
    title: "Quality Solutions",
    body: "Our Dulux-accredited painters never compromise with quality. We are recognised as the top-quality lead paint removal solution provider across Sydney CBD. Our Sydney painters use premium quality painting materials to execute each lead project with 100% customer satisfaction. We provide the same quality finish whether it is commercial, residential, industrial, strata or heritage property. The machines and technology our lead removal team uses are the latest in the market and designed to produce less dust in the lead removing process. Our promise to all Sydney residents is to ensure the best finishing end-to-end lead treatment.",
  },
  {
    title: "Skilled Technicians",
    body: "With over 32 years of experience, we got the top position in the market. Our highly trained and skilled technicians can provide you with the best finish lead removal solution that will exceed your expectation. We accumulate industry-leading expertise to execute all the interior and exterior lead paint removal. We use comprehensive removal equipment to ensure the removal of lead-based paint entirely from any surface. Priority One Coatings is a member of the Master Painters Association, which give us the opportunity to attend verities of training program and seminars on lead removal. It helps our professionals stay updated and enhance their skills aspects to every paint job.",
  },
  {
    title: "Damage Control",
    body: "From lead paint testing to removal and disposal, we always remain concerned about getting done our every lead project and controlling all possible damages. Our Sydney experts use the safest removal methods. We commonly use extraction sander with HEPA filtration, which helps us to capture the dust at the source with the appropriate Australian Standards respirator. We cover the entrance and surfaces with a double plastic sheet to prevent dust from doing any damage inside and outside. Our lead removal experts conduct a clear inspection and air monitoring to confirm our lead removal work has been completed properly.",
  },
];

const INSURANCES = [
  "Public Liability Insurance",
  "Home Warranty Insurance",
  "Workers Compensation Insurance",
  "Occupational Health & Safety Compliant with complete OH&S System in place",
];

const PROCESS = [
  {
    step: "01",
    title: "Lead Assessment",
    body: "Our first step is to evaluate the physical condition of the building and determine the extent of the lead paint contamination. Our professional lead removal experts examine all surfaces and layers to identify lead appearance in residential, commercial and industrial sites. We take time and give a close look to evaluate paint coating to determine lead-based paint existence and create tailored plans according to each property owner's individual needs. Our trusted lead abatement contractors complete the assessment process initially with test kits and, if needed, with the help of accredited laboratories listed by WorkSafe in the town. We then use our knowledge of principles and regulations to ensure that our lead paint removal services are provided in compliance with federal, state, and local laws.",
  },
  {
    step: "02",
    title: "Most Suitable Lead Removal Method",
    body: "Next, based on the assessment, our lead removal experts choose the most effective method for removing lead abatement. With the best knowledgeable and accredited employee, we always use the safest removal methods, including scraping, chemical strippers, wet hand sanding, low-temperature heat process and dry power sanding with HEPA vacuum attachment sanding to strip lead paint. Before starting lead removal, we set up the site properly to avoid all kind of risk and hazards. Our highly trained professionals usually start working with exterior and end with the interior. With double plastic sheets, we wrap up the total area where needed; thus, lead dust can't get exposed. A thorough clean-up and disposal of lead-contaminated waste is part of Priority One Coatings service. Our lead-base paint removal contractors take every necessary safety precaution to ensure that both our workers and the occupants of the building are protected from exposure through the whole lead removal process.",
  },
  {
    step: "03",
    title: "Repair, Renovation and Painting",
    body: "Once the lead paint has been safely removed, our qualified painters follow the Australian property painting standards and guidelines to repair, renovate, and paint every part of the premises. A thorough cleaning and clearance verification is part of our process. We take help from certified Waste Transfer Station for the safe handling of disposal and hazardous materials. Our repairing and renovation cover all the necessary activities like window and door replacement, demolition and weatherisation. We review and revise any measures implemented to control risks associated with lead exposure, as required by regulations. Our goal is to provide a safe and healthy environment for everyone involved in the project, and we take great pride in our ability to go above and beyond legal standards. We are fully trainned to execute the required renovation in the lead removal process. Our commitment to professionalism, effective cleaning, and removal methods ensures that lead exposure does not affect construction.",
  },
];

const FAQS = [
  {
    q: "How is lead paint different from other paint?",
    a: "Lead paint is an outdated product that contains toxic chemicals in large amounts, which threatens health. Whereas all paints available these days contains no lead.",
  },
  {
    q: "How do I know if there's lead-based paint?",
    a: "The easiest way to know is to check when your building was last painted. If it was before or during the 1970s, you have a sure chance of having lead paint in your house. You can test it using a test kit available to determine the presence of lead-based paint. If the swab gives a negative result, but the age of the house indicates that it is possible to use lead paint, you can have it tasted by professionals.",
  },
  {
    q: "If I find lead paint in my building, am I in danger?",
    a: "As most lead paint is old these days, there is a chance to be crumbling, peeling and chalking away. If you find paint in these conditions, it's a sign of danger. If you find lead paint on your premises, it is good to contact priority one coatings to remove it as soon as possible.",
  },
  {
    q: "Can I remove lead-based paint on my own?",
    a: "No, you can't remove lead-based paint on your own. Only professionals can do it because it is a niche process, and there is a health risk too.",
  },
  {
    q: "What are the inappropriate removing methods?",
    a: "Lead paint should not be removed in methods that create fumes or dust, such as dry sanding, dry scraping, sandblasting, heating or burning. At priority one coating, we use none of these techniques in lead paint removal.",
  },
  {
    q: "What are some appropriate removal methods?",
    a: "The most frequently practiced lead paint removal methods include encapsulation-, which is a paint-like protective coating, enclosure, replacement etc. After the lead test, the professionals can suggest to you the most effective lead paint stripping and removing options for your wall.",
  },
  {
    q: "Is a clearance inspection necessary for lead paint removal?",
    a: "Clearance inspection is necessary for lead paint removal because this process risks releasing hazardous chemicals in the dust. In this case, Priority One Coatings can be your best partner. We always clean the premises very carefully after work, and clearance inspection is a part of our work.",
  },
  {
    q: "Is it illegal if I find lead paint and do nothing about it?",
    a: "Yes, there is a potential legal and health risk associated with the presence of lead in materials. The Work Health Safety Act 2011 considers any material with more than 1% lead content hazardous, and employers are responsible for ensuring a safe working environment. Even in a domestic setting, failing to address lead exposure could lead to legal issues, especially if you are a landlord.",
  },
  {
    q: "How Priority can help with lead removal?",
    a: "Priority One Coatings provides high-quality lead based paint removal services all over Sydney, executed by highly-trained and accredited professionals. Our lead paint abatement contractors go beyond legal standards and incorporate professional work area preparation, effective cleaning, and removal methods into every lead paint removal project to the occupants and construction workers. We believe this is essential for consistent customer satisfaction.",
  },
];

export default function LeadPaintRemovalPage() {
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
          <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-28 text-center sm:pt-16 sm:pb-40 lg:pt-20 lg:pb-56">
            <h1 className="font-heading text-[38px] font-extrabold leading-[1.15] text-white sm:text-[45px] lg:text-[64px] lg:leading-[76px]">
              Lead Paint Removal
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
              Priority One Coatings provide safe lead paint removal and lead paint-stripping
              services for households and commercial premises in Sydney.
            </p>
          </div>
        </section>

        {/* Hero: inset photo band */}
        <section className="relative -mt-20 sm:-mt-28 lg:-mt-40">
          <div className="px-1 md:px-0">
            <div className="relative mx-auto h-[300px] w-full max-w-[1230px] overflow-hidden md:h-[400px] lg:h-[542px] min-[1450px]:max-w-[1600px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/images/lead-removing-repainting-2.jpg)",
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full items-center">
                <div className="w-full pl-[20px] min-[1025px]:pl-[100px]">
                  <h2 className="font-heading text-[30px] leading-[39px] font-black text-white min-[768px]:text-[45px] min-[768px]:leading-[53px] min-[1081px]:text-[60px] min-[1081px]:leading-[72px] min-[1367px]:text-[64px] min-[1367px]:leading-[76px]">
                    We Are Certified
                    <br /> Lead Treatment
                    <br /> Specialist
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro text + overlapping quote form, side by side */}
        <section className="relative z-20 bg-white pb-10 md:pb-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-start">
            <div className="pt-[50px] min-[768px]:pt-[70px]">
              <h2 className="font-heading text-[28px] font-bold leading-[35px] text-black min-[768px]:text-[35px] min-[768px]:leading-[40px] min-[1025px]:text-[41px] min-[1025px]:leading-[49px]">
                We Remove Lead Paint Safely
              </h2>
              <p className="mt-5 text-base leading-[30px] text-black">
                If your property was built before 1970, it might contain lead-based paint. Lead
                paint can be hazardous to people of all ages, especially children, pregnant
                women, and babies. Inhaling leaking lead paint can damage the brain permanently.
                Ancient buildings&rsquo; lead-based paint poses severe health risks. Keeping these
                consequences in mind when refurbishing, remodelling or repainting these
                properties, the lead-safe method must be followed to maintain your family&rsquo;s
                health safety. Only experienced and licensed professionals can execute it.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Priority One Coatings offers lead paint removal services all over Sydney
                metropolitan area to turn your place into a safe one. We have been removing lead
                paint for over 32 years. Our trained team know exactly how to assess your
                property.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                We take a comprehensive approach to lead paint removal. Our lead abatement
                professionals start by assessing the scope of the lead contamination and
                identifying any potential risks. From there, we create a customised plan for
                removing the lead paint.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="shrink-0 shadow-[0_0_30px_0_rgba(0,0,0,0.16)] mt-10 lg:ml-[26px] lg:-mt-[118px]">
                <QuoteForm
                  compact
                  widthClassName="lg:max-w-[630px]"
                  nameFieldWidthClassName="w-full lg:w-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        <ExpertsSection />

        {/* Our Speciality */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1360px] px-6 text-center">
            <h2 className="font-heading text-[25px] font-bold leading-[35px] text-black min-[768px]:text-[30px] min-[768px]:leading-[40px] min-[1025px]:text-[41px] min-[1025px]:leading-[49px]">
              Our Speciality
            </h2>
            <p className="mt-6 text-base leading-[30px] text-black">
              With a professional and experienced team, Priority One Coatings provide a complete
              lead abatement service efficiently. We specialise in safe working and protect our
              community from the unbearable risk of lead exposure. Our highly skilled lead
              removal contractors execute every lead project with the same finishing, from lead
              assessment to removal and handover. We follow the safest method and high-quality
              materials to provide the next level of accuracy in every lead-based project.
              Whether it is the interior or exterior lead removal job, completing every project
              with zero damage is our trained lead team&rsquo;s speciality.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-[1400px] px-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {SPECIALITY.map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-[0.05rem] bg-white p-7 text-center shadow-[0_0_15px_0_rgba(0,0,0,0.06)]"
                >
                  <CheckCircle2 size={56} className="mx-auto text-brand-teal" strokeWidth={1} />
                  <h3 className="mt-5 text-xl font-bold leading-tight text-black">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-grey">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call CTA */}
        <section className="bg-white pb-10 md:pb-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div
              className="relative overflow-hidden bg-cover bg-center py-16 sm:py-20 lg:py-24"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,57,109,0.89), rgba(0,57,109,0.89)), url(/images/painters-in-sydney.jpg)",
              }}
            >
              <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-8 px-6 text-center">
                <h4 className="font-heading text-2xl font-bold text-white sm:text-[32px] lg:text-[41px]">
                  Call Us For A Free Quote
                </h4>
                <a
                  href="tel:+0298085900"
                  className="flex items-center gap-2 rounded-[0.05rem] bg-brand-teal px-10 py-[15px] font-heading text-lg font-bold text-white transition-colors hover:bg-brand-teal-dark sm:px-[70px]"
                >
                  <Phone size={20} /> 02 9808 5900
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Insurances */}
        <section className="relative overflow-hidden bg-[#003c73] lg:min-h-[700px]">
          <div
            className="absolute inset-y-0 left-0 hidden w-1/2 bg-cover bg-top lg:block"
            style={{
              backgroundImage:
                "url(/images/lead-removal-1.jpg)",
            }}
          />
          <div className="relative mx-auto flex max-w-[1400px] justify-end px-6 py-16 lg:min-h-[700px] lg:py-24">
            <div className="w-full max-w-[636px] bg-white px-8 py-10 shadow-lg sm:pt-20 sm:pr-[50px] sm:pb-[60px] sm:pl-[85px]">
              <h2 className="font-heading text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                Insurances
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-grey">
                We provide a range of insurance coverage for Lead Paint Removal.
              </p>
              <ol className="mt-5 grid grid-cols-1 gap-3">
                {INSURANCES.map((item, i) => (
                  <li key={item} className="flex gap-2 text-sm leading-relaxed text-black">
                    <span className="shrink-0 font-bold text-brand-teal">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-brand-light py-10 md:py-16">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                Lead Paint Removal Process
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black">
                Our lead-based paint removal process is compliant with the industry&rsquo;s best
                work practices across the Sydney regional area. We go beyond legal standards and
                incorporate professional work area preparation, effective cleaning, and removal
                methods into every lead paint removal project to ensure occupants&rsquo; and
                construction workers&rsquo; safety. As a result, construction is not get affected
                by lead exposure. We take lead paint removal seriously and strive to exceed
                industry standards in every project we undertake. We understand that lead-based
                paint can be a hazard to occupants and construction workers, so we take great
                care in every step of the removal process.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {PROCESS.map(({ step, title, body }) => (
                <div
                  key={step}
                  className="rounded-[0.05rem] bg-white p-7 text-center shadow-[0_0_15px_0_rgba(0,0,0,0.06)]"
                >
                  <h3 className="text-xl font-bold text-black">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-grey">{body}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-16 hidden grid-cols-3 items-center sm:grid">
              <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px -translate-y-1/2 bg-brand-teal/40" />
              {PROCESS.map(({ step }) => (
                <div key={step} className="relative z-10 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-teal bg-brand-light font-heading text-xl font-bold text-brand-teal">
                    {parseInt(step, 10)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get your free quote */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="relative overflow-hidden bg-[#003f75] py-16 text-center sm:py-24">
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.11]"
                style={{
                  backgroundImage:
                    "url(/images/painters-in-sydney.jpg)",
                }}
              />
              <div className="relative mx-auto max-w-[1400px] px-6">
                <h3 className="font-heading text-[32px] font-bold leading-[42px] text-white min-[768px]:text-[30px] min-[768px]:leading-[40px] min-[1025px]:text-[41px] min-[1025px]:leading-[49px]">
                  Get Your Free Quote
                </h3>
                <a
                  href="/contact-us/"
                  className="mt-8 inline-block rounded-[0.05rem] bg-brand-teal px-14 py-[15px] font-heading text-lg font-bold text-white transition-colors hover:bg-brand-blue"
                >
                  Request A Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related works */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1400px] px-6 text-center">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-black sm:text-4xl">
              Related Works
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-ink">
              Priority One Coatings sets industry standards with the most effective and
              efficient lead removal expert team. We work all over Sydney to save our community
              from lead exposure and health risk with our professionalism. Our accredited
              painters work with many property owners, and most of them have reached us through
              referrals. 32 years of experience in the lead removal industry has given us the
              confidence and expertise to execute any lead treatment, whether it is a
              residential, commercial, strata or heritage property. You can check out our
              testimonials and portfolio to know more about our lead-based paint removals.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {RELATED_WORKS_GALLERY.map((src) => (
                <div key={src} className="relative aspect-square w-full overflow-hidden">
                  <Image src={src} alt="Lead paint removal and repainting project" fill className="object-cover" />
                </div>
              ))}
            </div>
            <a
              href="/recent-lead-removal-projects/"
              className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-black transition-opacity hover:opacity-70"
            >
              View Our Portfolio
              <svg aria-hidden="true" viewBox="0 0 20 14" className="h-[14px] w-5 fill-current">
                <path d="M12.6 0.6 11.2 2l3.3 3.3H0v2h14.5L11.2 10.6 12.6 12l6-6z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Service We Offer */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="bg-brand-navy px-4 py-16 text-center sm:px-8 md:py-24 lg:px-[110px]">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Service We Offer
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/80">
                Priority One Coatings brings a decade of expertise to the lead removal industry,
                covering the interior and exterior of all residential, commercial, industrial,
                strata and heritage properties.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                As a member of the Master Painters Association, our ability to provide lead
                treatment is the best practice in the market. As we know, lead is a toxic
                substance and can pose health hazards over time; our lead experts take minimal
                time and follow full-on environmental safety standards to provide high-quality
                and safe lead removal in every aspect. As Sydney&rsquo;s number one lead removing
                service provider, we offer a wide range of services:
              </p>
              <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 text-left sm:grid-cols-3 sm:grid-flow-col sm:grid-rows-3">
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

        {/* FAQ */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <h2 className="font-heading text-[28px] font-extrabold leading-tight text-black sm:text-[32px]">
                Frequently Asked Question
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-grey">
                Different Sydney residents ask us various questions about lead paint removal
                solutions at different times. So, we have listed them and written them here in
                the frequently asked question section to provide you with the required knowledge
                about our lead-based paint removal service.
              </p>
            </div>
            <Faq items={FAQS} />
          </div>
        </section>

        <CertLogos />

        {/* Final CTA */}
        <section className="bg-[#f3f3f3] py-16">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
            <h3 className="text-2xl font-bold text-black sm:text-[40px]">
              Do you need lead paint or lead dust removed?
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
