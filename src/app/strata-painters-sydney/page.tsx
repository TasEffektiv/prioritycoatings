import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import StrataExperienceSection from "./StrataExperienceSection";

export const metadata: Metadata = {
  title: "Experienced Strata Painters Sydney | Priority One Coatings",
  description:
    "Priority can help you when you need strata painters. Strata managers all over Sydney rely on us when it comes to painting strata properties. Call us (02 9808 5900) today!",
};

const RELATED_WORKS_GALLERY = [
  "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/strata-2015.jpg",
  "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/strata-painting-1.jpg",
  "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/strata-painting-sydney-1.jpg",
  "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/strata-work.jpg",
];

const PROPERTY_TYPES = [
  "Residential unit blocks",
  "Townhouse complexes",
  "Complexes and apartment buildings",
  "Warehouse complexes",
  "Strata residential estates",
];

const SERVICES = [
  {
    title: "Full exteriors-interiors",
    body: "We try our best to make your strata look brand new with our complete interior and exterior painting service. While doing the exteriors, we try to refresh the overall look of the building and enhance the overall aesthetics. Our Dulux accredited painters understand the condition of the surface, do the necessary repair and use the best suitable paint for a long-lasting exterior finish. In terms of interior, along with painting, we provide complete renovation services for common areas such as lobbies, staircases, and community spaces. Our team discuss with you about everything to understand the result you desire and complete the full process that meets the needs of the residents.",
  },
  {
    title: "Render repairs and fire doors",
    body: "To get the most desired strata-painting outcome repairing service is a must. Thus, we meet every repair need of your strata, from render repairs to fire doors. Our professional team will inspect the whole area to find areas that need immediate repair. We assess the condition of the damage and provide possible solutions for that. We use high-quality materials and restore the render to its original condition. Our team always matches the repaired render with the existing finish to ensure a seamless finish. Also, our expert team will help you choose suitable fire doors based on your building's requirements and install them with proper safety precautions.",
  },
  {
    title: "Line marking",
    body: "Faded line marking is a common problem in high-traffic areas as regular wear and tear don't let the marks stay for a longer time. That is why we replace that area with new line markings to ensure that your property's parking areas, roadways, and common spaces are well-organised and safe. We use high-quality paints and precision equipment to ensure the lines are perfect and last longer. Our markings are properly sized, positioned, and coloured, which makes us a professional in this area. Our team can mark boundaries, safety zones, and other specific markings based on your requirements and order. Also, safety is our concern, so we follow the local guidelines of Sydney in all our provided services.",
  },
  {
    title: "Epoxy Floor Coatings",
    body: "To give your space an overall makeover, we replace the existing floor with durable, aesthetically pleasing, and easy-to-maintain surfaces, which are known as epoxy floor coatings. We offer professional epoxy floor coating services customised specifically for strata projects. From starting with surface preparation to cleaning and degreasing, we handle everything. We use high-quality epoxy coatings, and based on the traffic of the place, we use different variants of coatings. For example, a non-slip coating is used in common areas. Our coating is different because it not only gives your place a better look but also durability because it is resistant to chemicals and stains.",
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
    step: "1",
    title: "Strata maintenance and repairs",
    body: "When we think about a well-maintained property, the initial steps to achieve is getting a quality service that gives protection in the long run and repairing the damages timely. Our strata painting process starts with a detailed assessment of the strata building, recognising areas in need of painting, maintenance, and repairs. We repair every area that seems damaged before any of our painting processes. After that, we prepare the surface for a better result. The surface preparation includes removing all the dirt and cracked paint. Then we use our special touch, a protective coating to the building's exterior to protect it from pests, moisture, and harsh weather conditions. This coating works as a barrier and gives our service a long-lasting effect.",
  },
  {
    step: "2",
    title: "Curb Appeal",
    body: "When it comes to looks making your strata property attractive and organised is our target to achieve. We priotise the importance of curb appeal and the impact it can have on the prestige and value of a strata property. So, our team concentrates on enhancing appeal through professional painting services, giving attention to detail, and expert colour consultation. Our Dulux accredited painters provide the best colour consultation services in Sydney to assist you in choosing the most suitable paint for your strata property. Our expert painters use industry-leading techniques and equipment to apply the paint evenly, be it in the exterior or interior section. Also, we inspect every detail in the finishing touch to achieve perfection.",
  },
  {
    step: "3",
    title: "Top to Bottom Treatment",
    body: "Our speciality is we understand that small things can make a big difference. So, we believe in addressing every aspect of the strata property, confirming that no area is neglected. Starting from the highest points of the building to the slightest details, our team efficiently cleans, paints, treats, and maintains every inch of the property. We fix any damage to the walls and ceilings before painting. Our team gives special attention to trims, doors, and windows, as it works for both safety and aesthetics. We happily take pride in our precise painting techniques that help us achieve clean lines and smooth finishes. As an overall treatment, we also cover the common areas, balconies and railings for a proper finish.",
  },
];

const FAQS = [
  {
    q: "When do I need a Strata painting scheme?",
    a: "You need to be clear about why you need to go for a strata painting project. While some people do it to improve their property value and appearance, others may have to do it as part of their general maintenance work. For example, if you plan to renovate your property, you may also need to go for strata painting service. Once you understand this, you will definitely make the right decision.",
  },
  {
    q: "What should I look for when hiring a Strata painting contractor?",
    a: "Having reliable contractors is a crucial part of a strata painting project. Your contractors must show their commitment to top work, safety and the environment. The strata painters also demonstrate certifications, experience and technical skills to prove they are qualified for the job. Do not hesitate to ask what equipment they have for industrial or commercial painting projects.",
  },
  {
    q: "What colour should I choose for my Strata project?",
    a: "The colour selection depends on several factors, including the architectural style, surrounding environment or strata guidelines. But if you are asking about colour consultation, then our answer is absolutely yes. Our team will inspect your space and give colour suggestions that go best with your property. We will help you throughout our service period to understand your personal priorities and work accordingly.",
  },
  {
    q: "How much do you charge for strata painting?",
    a: "It is not possible to hold the price of our strata painting service without seeing the project in person, as the price depends on a lot of things, including the size, requirements and condition of the building. But don't worry about the budget as in our company you will provide the best quality at the most affordable rate. Moreover, we can work and plan our service according to your budget plan.",
  },
  {
    q: "Do you have insurance for strata painting?",
    a: "As professional painting companies in Sydney, we provide various insurances for strata painting. We provide Public Liability Insurance, Home Warranty Insurance, Workers' Compensation Insurance, and Occupational Health & Safety Compliant with a complete OH&S System in place for strata painting service.",
  },
  {
    q: "What does your strata paint service include?",
    a: "We take care of your strata from top to bottom. Starting from interior and exterior painting to repairs, fire door installation, epoxy floor coatings and everything you need to update your building.",
  },
  {
    q: "How long will you take to paint my building?",
    a: "Since each strata painting job is different in terms of size, the number of colors, and home condition, it is difficult to give an exact timeline. Our highly experienced strata painters promise to do the best and most efficient job possible depending on the situation. There are always variables that can change the duration of a job, like the weather.",
  },
  {
    q: "Can I set the time of your work?",
    a: "Yes, of course, you can. We work in a schedule that causes little to no disturbance in your daily routine. So, if you want to set the schedule of our work, you can, as we also provide after-hour services, so there is no limitation in scheduling.",
  },
  {
    q: "What other painting services do you provide?",
    a: "We are widely known for our strata painting service in Sydney. But we are also famous for many commercial painting, residential painting, lead paint removal, epoxy floor coatings and many more.",
  },
  {
    q: "What steps should I follow before hiring a Strata painting service in Sydney?",
    a: "A suitable scope of work means defining what should and shouldn't be painted. Having board approval before calling a strata painting service in Sydney will save time and money. Paint inspectors can help you decide what to repaint and what product to use. If your strata choose to split the scope of work, the first step is to check and review your existing surfaces and note any areas of concern.",
  },
];

export default function StrataPaintersSydneyPage() {
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
          <div className="mx-auto max-w-[1400px] px-6 pt-14 pb-28 text-center sm:pt-16 sm:pb-40 lg:pt-20 lg:pb-56">
            <h1 className="font-heading text-[38px] font-extrabold leading-[1.15] text-white sm:text-[45px] lg:text-[64px] lg:leading-[76px]">
              Strata Painting Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
              Priority One Coatings provides high-quality strata painting services in Sydney
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
                    "url(https://prioritycoatings.com.au/wp-content/uploads/2022/09/81541046_l-min.jpg)",
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full items-center">
                <div className="w-full pl-[20px] min-[1025px]:pl-[100px]">
                  <h2 className="font-heading text-[30px] leading-[39px] font-black text-white min-[768px]:text-[45px] min-[768px]:leading-[53px] min-[1081px]:text-[60px] min-[1081px]:leading-[72px] min-[1367px]:text-[64px] min-[1367px]:leading-[76px]">
                    Top-Notch Strata Painters
                    <br /> Sydney With 32 Years
                    <br /> Of Professional
                    <br /> Experience
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
                The Best Choice for Strata Painting Services
              </h2>
              <p className="mt-5 text-base leading-[30px] text-black">
                With over 32 years of experience, Priority One Coatings is the best choice for all
                your strata painting needs. Our team of strata painters are capable of working on
                small or large-scale projects, both exterior and interior, without any problem. In
                addition, we have completed painting work on full exteriors, common internal
                areas, fireproof coatings, high rise etc.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                We have a highly experienced and skilled team of professional painters who are
                flexible and considerate of residents&rsquo; needs. Our strata painting service
                prides itself on using the highest quality products, materials and techniques. So,
                rest assured; you can entirely rely on us to complete the project on time and
                within budget.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                If you are looking for professional strata painters in Sydney, contact us today
                and get a free quote.
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

        <StrataExperienceSection />

        {/* Properties we work on (navy box) */}
        <section className="bg-white pb-16 md:pb-24">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="bg-[#013f75] px-6 pb-14 pt-10 text-center sm:pb-20 lg:px-28 lg:pb-24 lg:pt-16">
              <h2 className="font-heading text-[25px] font-bold leading-[35px] text-white min-[768px]:text-[30px] min-[768px]:leading-[40px] min-[1025px]:text-[38px] min-[1025px]:leading-[49px]">
                We Are Capable of Working on Every Strata Project
              </h2>
              <p className="mt-6 text-base leading-[30px] text-white">
                Our team of certified painters can work on projects of any size, whether small or
                large. From townhouse complexes and multi-level modern high rises to any strata
                residential estate, our strata painters in Sydney got you covered. No matter if
                your strata need interior or exterior, our team is capable of completing strata
                painting jobs successfully every time. In addition, we have finished painting
                services on full exteriors, common internal areas, fireproof coatings, high rise
                etc. Because of our on-time and hassle-free services, we have been a trusted
                painting company for many body corporations and strata managers for a long time.
                We can work on the following projects along with any property you ask us to.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 text-left sm:grid-cols-3 sm:grid-flow-col sm:grid-rows-2">
                {PROPERTY_TYPES.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={26} className="shrink-0 text-brand-teal" strokeWidth={1.5} />
                    <span className="text-lg font-bold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strata services */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1360px] px-6 text-center">
            <h2 className="font-heading text-[25px] font-bold leading-[35px] text-black min-[768px]:text-[30px] min-[768px]:leading-[40px] min-[1025px]:text-[41px] min-[1025px]:leading-[49px]">
              Strata Services by Priority One Coatings
            </h2>
            <p className="mt-6 text-base leading-[30px] text-black">
              Harsh weather or poor finish, no matter the reason, every strata needs proper
              maintenance from time to time. The strata owners often search for a company that can
              serve them with a complete solution for their property to lessen the hassle. We
              believe only repainting is not enough when we talk about maintaining strata; it
              needs versatile services to preserve the overall outlook. For this reason, we have
              found out your necessities and made a list of services that are needed every day
              while taking care of your property. Our strata painting contractors are just one
              call away to handle all your painting problems, no matter how damaged your premises
              are. The services we provide include the following-
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-[1400px] px-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-[0.05rem] bg-white p-7 text-center shadow-[0_0_15px_0_rgba(0,0,0,0.06)]"
                >
                  <CheckCircle2
                    size={56}
                    className="mx-auto text-brand-teal"
                    strokeWidth={1}
                  />
                  <h3 className="mt-5 text-xl font-bold leading-tight text-black">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/80">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call CTA */}
        <section className="bg-white pb-10 md:pb-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="relative overflow-hidden bg-[#003f75] py-16 sm:py-20 lg:py-24">
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.11]"
                style={{
                  backgroundImage:
                    "url(https://www.prioritycoatings.com.au/wp-content/uploads/2023/07/painters-in-sydney.jpg)",
                }}
              />
              <div className="relative mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-8 px-6 text-center">
                <h4 className="font-heading text-2xl font-bold text-white sm:text-[32px] lg:text-[41px]">
                  Call Us For A Free Quote
                </h4>
                <a
                  href="tel:+0298085900"
                  className="flex items-center gap-2 rounded-[0.05rem] bg-brand-teal px-10 py-[15px] font-heading text-lg font-bold text-white transition-colors hover:bg-brand-blue sm:px-[70px]"
                >
                  <Phone size={20} /> 02 9808 5900
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Insurances */}
        <section
          className="relative overflow-hidden bg-[#003c73] bg-[length:65%_100%] bg-[top_left] bg-no-repeat lg:min-h-[700px]"
          style={{
            backgroundImage:
              "url(https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/36753797_l-min.jpg)",
          }}
        >
          <div className="relative mx-auto flex max-w-[1400px] justify-end px-6 py-16 lg:min-h-[700px] lg:py-24">
            <div className="w-full max-w-[636px] bg-white px-8 py-10 shadow-lg sm:pt-20 sm:pr-[50px] sm:pb-[60px] sm:pl-[85px]">
              <h2 className="font-heading text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                Insurances
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black">
                We provide a range of insurance coverage for strata painting.
              </p>
              <ol className="mt-5 space-y-2">
                {INSURANCES.map((item, i) => (
                  <li key={item} className="flex gap-2 text-lg font-semibold leading-[30px] text-black">
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
                Strata Painting Process
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black">
                At Priority One Coatings, we understand the importance of maintaining and
                improving the appearance and durability of strata buildings. Our complete process
                for strata painting and maintenance ensures that every building feature is treated
                with care and attention. Our team of skilled strata painters is renowned for their
                efficient work, professional expertise, and ability to deliver exceptional
                results. From protecting the building against moisture to significantly improving
                its appeal, our top-to-bottom method guarantees a thorough transformation. Of
                course, every project has its requirements, and our customised service is designed
                to satisfy every need. Still, our team practices the following specific processes
                to maintain the professional quality of our company.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {PROCESS.map(({ step, title, body }) => (
                <div
                  key={step}
                  className="rounded-[0.05rem] bg-white p-7 text-center shadow-[0_0_15px_0_rgba(0,0,0,0.06)]"
                >
                  <h3 className="text-xl font-bold text-black">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black">{body}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-16 hidden grid-cols-3 items-center sm:grid">
              <div className="absolute left-[16.5%] right-[16.5%] top-1/2 h-px -translate-y-1/2 bg-brand-teal/40" />
              {PROCESS.map(({ step }) => (
                <div key={step} className="relative z-10 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-teal bg-brand-light font-heading text-xl font-bold text-brand-teal">
                    {step}
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
                    "url(https://www.prioritycoatings.com.au/wp-content/uploads/2023/07/painters-in-sydney.jpg)",
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
              Strata Painting Related Works
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-grey">
              Strata painting differs from regular residential painting; thus, you should only
              hire a painting company with proven experience working on strata projects. Words are
              not enough when you risk your property for painting and repairing; always looking
              for visual proof of previous work is the wise option. That is why we focus on our
              portfolio section, where we present our customers with our finished projects so that
              they can understand our high-quality service.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-grey">
              Having more than 32 years of experience, we have worked with many strata projects,
              be it for painting, maintenance service, floor coatings or repainting; we have been
              leading the list of our satisfied customers.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {RELATED_WORKS_GALLERY.map((src) => (
                <div key={src} className="relative aspect-square w-full overflow-hidden">
                  <Image src={src} alt="Strata painting project" fill className="object-cover" />
                </div>
              ))}
            </div>
            <a
              href="/portfolio/"
              className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-black transition-opacity hover:opacity-70"
            >
              View Our Portfolio
              <svg aria-hidden="true" viewBox="0 0 20 14" className="h-[14px] w-5 fill-current">
                <path d="M12.6 0.6 11.2 2l3.3 3.3H0v2h14.5L11.2 10.6 12.6 12l6-6z" />
              </svg>
            </a>
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
                Explore the world of Strata Painting with our informative FAQ section. As
                professional strata painters in Sydney, we get a lot of questions regarding the
                timeframe, procedure, and quality of our service. Based on those regular
                enquiries, we have made this FAQ section that solves your initial doubts
                instantly, and you get a free quote for your property more quickly.
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
              Do You Need Great Strata Painting Services at a Great Price?
            </h3>
            <a
              href="/contact-us/"
              className="shrink-0 rounded-[0.05rem] bg-brand-blue px-14 py-[15px] font-heading text-lg font-bold text-white transition-colors hover:bg-brand-teal"
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
