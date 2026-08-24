import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import PremiumFitoutsSection from "./PremiumFitoutsSection";

export const metadata: Metadata = {
  title: "Commercial Fitouts Sydney | Priority One Coatings",
  description:
    "Sydney's best commercial office fitouts solutions. Priority One Coatings has been delivering commercial fitouts across the Sydney region for over 32 years.",
};

const HERO_SLIDES = [
  "https://prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-fitout.jpg",
  "https://prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-fitouts-1.jpg",
  "https://prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-interior.jpg",
  "https://prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-offfice.jpg",
];

const RELATED_WORKS_GALLERY = [
  "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-fitout-1.jpg",
  "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-fitouts-2.jpg",
  "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-interior-1.jpg",
  "https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-offfice-1.jpg",
];

const SERVICES_LIST = [
  "New office fitouts",
  "Office relocations",
  "Office renovations",
  "Office refurbishments",
  "Office floors and office ceilings",
  "Office partitions",
  "Internal office alterations",
  "Office data cabling",
  "Office furniture fittings",
  "Interior paintings",
  "Electrical installations",
  "Carpet installations",
];

const FEATURES = [
  {
    title: "Quality Assurance",
    body: "We are fully licensed and a member of Master Painters Australia, which tells how qualified we are! We complete every office interior project with premium quality materials and trained carpenters. With solid expertise, our professional commercial fitout team give attention to every detail with organisational efficiency to provide you with a top-notch corporate fitout solution. Our every fitout construction process results in a high-end office fitout. No matter how difficult to find the best solution for you, our qualified commercial fitout contractors deliver high-quality builds for all category businesses. Assuring the best quality in any office interior project is our priority.",
  },
  {
    title: "Comprehensive Price Estimate",
    body: "Every office differs from others, and all business owners want the best office interior within budget. Our office fit out specialists are always there for you to estimate the exact price for your office fitout. By simply entering the required information in our provided form at the top right of this page, you can request a quota for your office relocation or refurbishments. We will calculate and share the exact cost with the help of our commercial fitout Sydney professionals. You will find no hidden or after cost with us. We do the same what we say.",
  },
  {
    title: "System Design Efficiency",
    body: "Our professional office fit out team understand that each office has its own requirements. That's why when we think about any fit-out project, we think differently. At first, we give our full focus on knowing the ins and out of your business environment. Based on that our fit-out specialists efficiently design the best-fit office fitouts for you. We also keep employee productivity in mind as it is connected with the physical environment of the office. Our office interior designs are not only creative but also intent to the next level to exceed your expectation.",
  },
  {
    title: "Procurement",
    body: "With over 32-year experience, we evolved as more than a commercial fitout company. Our unique team of Sydney office fit out professionals brings us to this level in the market. We pride ourselves on our ability to customise office interior fitouts at the town’s top level. You will get the high quality custom fit outs at the most optimal cost structure. Our procurement experts will wow you with their offshore procurement capabilities. You can find us any time anywhere in Sydney to bring you the best custom fit-out for your office.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Site Investigation",
    body: "At our company, we understand that every commercial fit-out project is unique and presents its own set of challenges. That's why we emphasise conducting a comprehensive site investigation as an essential first step in our process. Our team of experienced commercial fit-out contractors will visit your office to conduct a thorough survey. We will focus on gaining first-hand knowledge of the space and identifying any potential obstacles.\n\nDuring the site survey, we will work closely with you to identify your goals and requirements for your workplace. Our office fit-out contractors will make enquiry all the aspects of your business, such as the number of employees, workflow patterns, branding guidelines and functionality requirements. Whether it is about your new office setup or old office refurbishment, we will investigate every site to give you 100% satisfaction after the competition of the fit-out job.",
  },
  {
    step: "02",
    title: "Planning and design",
    body: "Once the site investigation is complete, we move to planning and design as the next step. We develop a detailed office fit-out plan and design your workplace according to it. When our creative commercial fit-out designers work on your office design, the area of concern will be the layout, partitioning and allocation of different areas. We will also plan on selecting colours and materials to match your brand and give your office interior an aesthetic and productive environment.\n\nWhen our Sydney fit-out, professionals prepare the layout design using updated technology to give you accurate adjustments and visualisation. We consider positioning workstations, desks, chairs, storage units, salving, reception counters, display racks (for retail spaces) and any other necessary furniture or equipment that is essential for your workspace. Our every fit-out design result in an efficient, seamless one with our practical planning.",
  },
  {
    step: "03",
    title: "Construction and installation",
    body: "Once the design is in place, our fit-out team will move into the construction and installation phase. In this phase, we will construct the necessary partitions and furniture and fit them according to the layout we designed before. Electrical and carpet installation will take place in this step. Our painters will also paint your interior office matching your brand colour to provide you with an intense result.\n\nLighting, HVAC system and other necessary fittings will be done with our quality workmanship at this point. Finally, we will construct and install every single part of your office with your concern. With a versatile commercial fit-out company, we can prepare the best office interior for all categories of business owners. No task is difficult for us. We have experience in implementing fit-outs for a wide range of industries.",
  },
  {
    step: "04",
    title: "Sustainable project life cycle",
    body: "Our team of expert contractors has extensive experience in sourcing and implementing environmentally friendly materials. We understand that sustainability is critical in today's business landscape. We will help your business go green. We always use sustainable materials to make a real difference in the Sydney fit-out market.\n\nOur contractors are well-versed in accredited sustainability programs and are equipped with the knowledge to help you achieve your sustainability goals. We use 100% recyclable materials in our fitout process. We are also committed to using Low VOC (volatile organic compound) products that are safe for the environment and human health. Our Safety Data Sheets are available for all fit-out jobs to ensure transparency and accountability in our approach.",
  },
];

const INDUSTRIES = [
  "Medical and cosmetics",
  "Corporate office",
  "Retail and shop",
  "Hotel and hospitality",
  "Wellness and beauty",
  "Fitness",
  "Sports and leisure",
  "Display suites",
];

const INSURANCES = [
  "Public Liability Insurance",
  "Home Warranty Insurance",
  "Workers Compensation Insurance",
  "Occupational Health & Safety Compliant with complete OH&S System in place",
];

const FAQS = [
  {
    q: "How long will my office fitout project take?",
    a: "A small office space fit out project can be completed in just a few days. However, if you have a large-scale office, it might take between four to six weeks in general.",
  },
  {
    q: "What size office fitout projects do you undertake?",
    a: "We cover all sizes of office fitouts, whether large, medium or small. We make sure to provide an end-to-end service at the most reasonable price and on time.",
  },
  {
    q: "What is the average cost of office fitout?",
    a: "Office fitout costs can vary depending on a number of factors, including office size, materials, level of customisation, office desks, office furniture, workplace technology and required fixtures. We recommend you reach out to us to get accurate estimations for your office fitouts.",
  },
  {
    q: "Do you undertake alterations to existing office layouts?",
    a: "Yes, this is one of our core projects. We work on business restructures, downsizing and mergers. These business structures often need to alter existing fitouts and refurbish an outdated office to incorporate additional staff.",
  },
  {
    q: "What is the best way to plan the layout of an office fit-out?",
    a: "In many cases, businesses choose to work with a commercial fit out company, which will take on the role of project manager for the entire refurbishment process. This includes liaising with other professionals such as furniture suppliers, lighting designers, and ceiling and partition companies.",
  },
  {
    q: "Do you have insurance and certifications for fit out works?",
    a: "We are covered by Public Liability Insurance, Workers Compensation Contract Work insurance and Professional Indemnity Insurance. All our tradesmen carry SafeWork NSW General Construction Induction Training White Cards.",
  },
  {
    q: "Do you do fitout works in Central Business District (CBD) offices?",
    a: "Whichever CBD office blocks, we can come in and coordinate the fitout works according to your business requirements. These Central Business Districts include but are not limited to North Sydney, Sydney City, Norwest, Bondi Junction, Eastern Creek, Parramatta, North Ryde and Chatswood.",
  },
  {
    q: "We have our own drawings; can you quote on these?",
    a: "Sure indeed. Priority One Coatings can fitout your offices according to your special drawings and requirements.",
  },
  {
    q: "Does your company undertake all aspects of commercial fit-outs?",
    a: "At Priority One Coatings, our commercial fitout contractors in Sydney provide clients with a schedule of work related to the remodeling and a plan for how this will affect your day-to-day business before the job is done and handed over to the clients.",
  },
];

export default function CommercialFitoutsPage() {
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
              Commercial Fitouts Sydney
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
              Refurbish Your Office into an Inspirational and Productive Workspace
            </p>
          </div>
        </section>

        {/* Hero: inset photo band */}
        <section className="relative -mt-20 sm:-mt-28 lg:-mt-40">
          <div className="px-1 md:px-0">
            <div className="relative mx-auto h-[300px] w-full max-w-[1230px] overflow-hidden md:h-[400px] lg:h-[542px] min-[1450px]:max-w-[1600px]">
              {HERO_SLIDES.map((src, i) => (
                <div
                  key={src}
                  className="fitout-slide absolute inset-0 bg-cover bg-center opacity-0"
                  style={{ backgroundImage: `url(${src})`, animationDelay: `${i * 5}s` }}
                />
              ))}
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full items-center">
                <div className="w-full pl-[20px] min-[1025px]:pl-[100px]">
                  <h2 className="font-heading text-[30px] leading-[39px] font-black text-white min-[768px]:text-[45px] min-[768px]:leading-[53px] min-[1081px]:text-[60px] min-[1081px]:leading-[72px] min-[1367px]:text-[64px] min-[1367px]:leading-[76px]">
                    Sydney&rsquo;s Best
                    <br /> Commercial Office
                    <br /> Fitouts Solutions
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
                We Are the Experienced Commercial Fitout Contractors in Sydney
              </h2>
              <p className="mt-5 text-base leading-[30px] text-black">
                Moving into a new office environment can be exciting, but decorating the perfect
                one is challenging. An office fitout is a cost-effective solution. It can
                transform an average workspace into a functional and aesthetically pleasing one.
                In this case, choosing the right commercial fit out contractors is the priority.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Priority One Coatings is there for you with available fitouts. We have been
                delivering commercial fitouts in the Sydney regional area for over 32 years. Our
                team of professionals can help businesses of all sizes, big or small. We set an
                exceptional standard in the market with our creativity and high quality.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Whether you want to renovate a new workplace or refurbish an existing office, we
                can help you in every way to achieve your desired goal. We have fully trained and
                skilled workers to form the best commercial fitout companies Sydney-wide.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                To understand business owner requirements, we closely examine every fitouts
                project and spend much time listening to them. We are committed to supporting you
                throughout the entire process of office designing, from the initial consultation
                to construction and the after-work phase.
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

        <PremiumFitoutsSection />

        {/* Properties we work on - services list */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="bg-brand-navy px-4 py-16 text-center sm:px-8 md:py-24 lg:px-[110px]">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Properties We Work On
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/80">
                We specialise in executing all category office fitout jobs, whatever you
                require to have your dream office come true. Whether it&rsquo;s a new office or
                office refreshments, our trained fitout team have a firm focus on providing you
                with the best commercial fitout solution in the market. We aim to deliver an
                ideal workplace on time and on a competitive budget.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                We offer more than office design and construction. Our end-to-end office design
                will wow your employee and clients as well. Our Sydney professional fitout team
                provide a wide range of services throughout Sydney CBD and beyond. Our services
                are:
              </p>
              <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 text-left sm:grid-cols-3 sm:grid-flow-col sm:grid-rows-4">
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

        {/* Next level expertise + feature cards */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1360px] px-6 text-center">
            <h2 className="font-heading text-[25px] font-bold leading-[35px] text-black min-[768px]:text-[30px] min-[768px]:leading-[40px] min-[1025px]:text-[41px] min-[1025px]:leading-[49px]">
              Our Next Level Expertise
            </h2>
            <p className="mt-6 text-base leading-[30px] text-black">
              We are a team of experts who holds an abundance of knowledge about the commercial
              fitouts industry. Our fitout professionals have qualifications across interior
              design and decoration, building and construction, and project management. Priority
              One Coatings can store next-level office fitouts for Sydney residents. We take
              pride in delivering magnificent fitout on time and within the budget. Our dedicated
              fitout team help commercial premises to get a highly productive office environment
              with industry-standard redecoration or refurbishment. We will bring your office
              spaces to life, creating office and commercial fitouts that support your visions
              and goals.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-[1400px] px-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map(({ title, body }) => (
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
                  "linear-gradient(rgba(0,57,109,0.89), rgba(0,57,109,0.89)), url(https://www.prioritycoatings.com.au/wp-content/uploads/2023/07/painters-in-sydney.jpg)",
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
        <section className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[320px] w-full lg:h-auto lg:min-h-[420px]">
            <Image
              src="https://www.prioritycoatings.com.au/wp-content/uploads/2022/09/commercial-offfice.jpg"
              alt="Commercial office reception fitout"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex items-start justify-center bg-brand-navy px-6 py-12 sm:justify-start sm:px-10 lg:py-16">
            <div className="w-full max-w-[340px] bg-white p-8 shadow-lg lg:-mt-6">
              <h2 className="font-heading text-2xl font-extrabold leading-tight text-black">
                Insurances
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-grey">
                We provide a range of insurance coverage for commercial fit out services.
              </p>
              <ol className="mt-5 space-y-3">
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
                Commercial Fitout Process
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-grey">
                We follow an intense commercial fitout process to give every business owner
                their dream office in reality. At first, we listen and then tailor a plan to
                suit your requirements best. Preparing a creative design is also a part of our
                working process. Finally, the construction and fitting installing phase allows
                us to build the perfect office for you.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-grey">
                We took a very short time and a reasonable budget to execute our fit-out
                project, providing a world-class experience. Our focus is to achieve positive
                outcomes. We strive to support your business by facilitating a smooth
                transition back to the office and helping it to flourish.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map(({ step, title, body }) => (
                <div
                  key={step}
                  className="rounded-[0.05rem] bg-white p-7 text-center shadow-[0_0_15px_0_rgba(0,0,0,0.06)]"
                >
                  <h3 className="text-xl font-bold text-black">{title}</h3>
                  {body.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="mt-3 text-sm leading-relaxed text-brand-grey">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="relative mt-16 hidden grid-cols-4 items-center sm:grid">
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
              Commercial Office Fitout Related Works
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-ink">
              Priority One Coatings is a leading provider of commercial fit-out solutions. We
              offer exceptional quality and expertise across a wide range of industries. With
              experience and a proven track record of delivering outstanding results, our team
              brings valuable skills to every project.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-ink">
              From office and industrial fit-outs to the most delicate and sensitive
              environments, such as hospitals, educational institutions, and pharmaceutical
              plants. From small retail shops to large shopping malls, we can build every
              workplace you need. We do what we say. We offer services all over workplace
              developments. You can review our portfolio to learn all about our office fit-out
              projects.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {RELATED_WORKS_GALLERY.map((src) => (
                <div key={src} className="relative aspect-square w-full overflow-hidden">
                  <Image src={src} alt="Commercial fitout project" fill className="object-cover" />
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

        {/* Industries */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="bg-brand-navy px-4 py-16 text-center sm:px-8 md:py-24 lg:px-[110px]">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Properties We Work On
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/80">
                Our experience over decades and expertise in the office fitout industry makes us
                professional to work on all category commercial premises. No one can beat our
                industry-standard and stunning finish office interior design. Our fitout
                specialists take every fitout project seriously and execute them with
                high-quality materials. Redecoration, renovation or refurbishing your office,
                Priority One Coatings will provide you with top-notch fitout service. Your
                satisfaction is always our priority. We offer fitout services for verities of
                industries in the Sydney regional area. Some of them are:
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 text-left sm:grid-cols-4 sm:grid-flow-col sm:grid-rows-2">
                {INDUSTRIES.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-base text-white">
                    <CheckCircle2 size={20} className="shrink-0 text-brand-teal" strokeWidth={1.5} />
                    {item}
                  </div>
                ))}
              </div>
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
                If you have any enquiry about our commercial fitout service, you can read our
                frequently asked question section to find your answers. We enriched this section
                with insights that different business owners asked at different times. You can
                also contact us directly to know more.
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
              Looking for Affordable Commercial Fitouts Sydney?
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
