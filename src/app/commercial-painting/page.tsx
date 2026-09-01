import type { Metadata } from "next";
import Image from "next/image";
import { Check, CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import ExpandableSection from "./ExpandableSection";

export const metadata: Metadata = {
  title: "Commercial Painters | Commercial Painting Services Sydney",
  description:
    "Quality commercial painting services for office, retail, and government buildings in Sydney. Trusted commercial painting contractors with 30+ years of experience.",
};

const HERO_SLIDES = [
  "/images/1744172_l-min.jpg",
  "/images/5571529_l-min.jpg",
];

const RELATED_WORKS_GALLERY = [
  "/images/commercial-property.jpg",
  "/images/commercial-property-2018.jpg",
  "/images/commercial-property-painting.jpg",
  "/images/commercial-property-sydney-1.jpg",
];

const SERVICES_COLUMNS = [
  [
    "Commercial interior painting",
    "Commercial exterior painting",
    "Texture coating, including roll-on, trowel-applied, sprayed coatings",
    "Anti-graffiti and anti-pollutant finishes",
    "Commercial repaint projects",
    "Line marking",
  ],
  [
    "New construction painting projects",
    "Acrylic and enamel paints, stains and polyurethane finishes",
    "High access painting projects",
    "Abseiling & rope access",
    "Scaffold & boom lift access",
    "Spray painting",
    "Epoxy painting & coatings",
  ],
  [
    "Swing stage access",
    "Emergency & maintenance programs",
    "Fire resistant coatings",
    "Office end-of-lease painting service",
    "Lead paint testing and removal",
    "Anti-graffiti coating",
    "Floor coatings, including epoxies, polyurethane and anti-slip coatings",
  ],
];

const WHY_CHOOSE = [
  {
    title: "Safety Measures",
    body: "Working safely is one of our first priorities, and we never compromise with that. We always meet local guidelines and prevent safety hazards. Our painters are the most valuable resource of our team. Thus, it is essential for us to ensure the safety of both our painters and our customers, who trust us for our professional service.",
  },
  {
    title: "After-hour Service",
    body: "We know that your business is a priority, and we go beyond to ensure that our commercial painting services align seamlessly with your operations. So, we offer convenient after-hour service. Our dedicated team of painters will work meticulously during off-peak hours to complete your job as quickly as possible without compromising the quality.",
  },
  {
    title: "Free quotes",
    body: "When the decision is about your project, we understand that transparency and clarity are crucial. That's why we offer free, no-obligation quotes for all our services. Our expert team will assess your unique requirements and provide a comprehensive quote. It usually outlines the scope of work, materials needed, and an accurate breakdown of costs that can help you make decisions more confidently.",
  },
  {
    title: "Site inspection and survey",
    body: "At Priority One Coatings, we believe in attention to detail. Thus, we offer comprehensive site inspections and surveys as part of our commercial painting process. Our team will carefully inspect your property to assess its specific characteristics, identify any potential challenges, and understand your vision for the space. Also, with the help of proper inspection, we estimate the exact timeframe we need for work and promise a correct delivery date.",
  },
];

const PROCESS: { step: string; title: string; body: string[] }[] = [
  {
    step: "01",
    title: "Surface Treatment",
    body: [
      "With regular wear and tear, the walls of your commercial buildings often turn crusty and lose their spark. In our surface treatment step, we try removing dirt, grease, and any loose or flaking paint to remove that crustiness and for a better paint application. This preparation step also includes sanding, patching, and repairing damaged areas. For commercial buildings, this step is a time-consuming task.",
      "Depending on the building's size, it may take some time before the first coat is applied. Therefore, first, our commercial painters avoid speeding up the process as it results in disasters and more paint cracks. We try to invest a significant amount of time in preparation as a smooth base ensures a long-lasting finish. Secondly, we prepare the surface before painting to get the perfect outcome because even the best quality paints cannot create a flawless finish when the wall is not ready.",
    ],
  },
  {
    step: "02",
    title: "Protecting",
    body: [
      "In this step, we take necessary precautions to protect surrounding areas, furniture, fixtures, and flooring from paint splatters or damage. Your office or shop might be full of valuable stuff, and moving everything is sometimes impossible. For this reason, we cover floors, furniture, and other objects with drop cloths or plastic sheets.",
      "Also, if you are repainting the space, there might be partial areas where paint is not required. So, we mask off areas that should not be painted using painter's tape. As we are very serious about safety, we make sure none of your assets gets damaged for our painting process.",
    ],
  },
  {
    step: "03",
    title: "Priming",
    body: [
      "Primer is a step often overlooked by many painters, but one that makes all the difference when painting commercial buildings. It helps improve paint adhesion, seals porous surfaces, and provides a uniform base for the paint. Our skilled commercial painters use the primer as a protective layer of the new layer of paint.",
      "This step prolongs the durability and preserves the integrity of the fresh coat. In addition, we use a suitable primer for the prepared surfaces depending on the wall type. For example, we use tinted primers for masking existing bold colours so that they do not require multiple coats of paint to look neat.",
    ],
  },
  {
    step: "04",
    title: "Strategic Scheduling",
    body: [
      "Once we are done with the priming, we start our painting process. Commercial buildings tend to face more activity and pedestrian traffic, which makes painting them more critical and challenging. But not with us because we always follow our schedule and work in a timeline that causes minimum to no disturbance in your business schedule. As already said, we never compromise with quality, so using the top branded paints is a mandatory step to follow for all our skilled commercial painters.",
      "We use professional techniques and equipment to ensure a smooth and consistent paint application. We never ignore any faulty areas of the wall. If we find any during the painting process, we fix it and then paint it. Whether it's complicated trim work, textured surfaces, or large-scale areas, our painters have the knowledge and experience to achieve a polished look that elevates the aesthetic appeal of your commercial space.",
    ],
  },
];

const INSURANCES = [
  "Public Liability Insurance",
  "Home Warranty Insurance",
  "Workers Compensation Insurance",
  "Occupational Health & Safety Compliant with complete OH&S System in place",
];

const PROPERTY_TYPES = [
  "Aged Care Facilities",
  "Community Centres",
  "Retirement Villages",
  "Motels",
  "Sport facilities",
  "Government Buildings",
  "Heritage Sites",
  "Retail Precincts",
  "Office spaces",
  "Medical clinics",
  "Transport & logistics projects",
  "Car parks",
  "Retail stores",
  "Hotels",
  "Restaurants",
  "Shopping centres",
  "Childcare centres",
  "Schools & Tertiary institutes",
  "Churches",
  "Factories",
  "Warehouses",
  "Hospitals",
  "Entertainment venues",
  "Office towers",
];

const FAQS = [
  {
    q: "When do you need to paint a commercial space?",
    a: "The easiest way to know when to paint your office is just to look. What does your building look like now? If your building needs it, you will probably be able to see it with the naked eye. If there is cracking, blistering or chalking on the surface, it needs to be repainted. The same goes for mildew and algae. These failings in your current paint can lead to severe damage to your exterior surface and expensive repairs, if not painted immediately. So, when in doubt, consult with commercial painters near you as soon as possible.",
  },
  {
    q: "What are the colours recommended for my business office?",
    a: "Colour consultancy is a task that we take quite seriously as we believe a space's colour can change the total atmosphere. That is why we do not recommend suggesting the colour palette randomly; rather, we would assess your shop or office, understand your business type and brand identity, and suggest a colour that goes best with the project.",
  },
  {
    q: "How do I select the right commercial painter for me?",
    a: "Selecting the right commercial painter is important to ensure a successful painting project. Here are some qualities you should ask for when choosing a commercial painter: experience and expertise, reputation and references, licensing and insurance, communication and professionalism, and portfolio and proof of previous work.",
  },
  {
    q: "What type of paint do you use?",
    a: "Maintaining quality is our priority, and we never compromise with that. Our painters are Dulux accredited and only use the most high-quality paint available. So, you get a perfect and long-lasting finish at the most affordable rate.",
  },
  {
    q: "Why do I need commercial painting contractors for my project?",
    a: "When the question is about commercial painting, hiring professionals is the only way to make it look organised and up-to-date. Experienced contractors have the knowledge and expertise to handle large-scale projects efficiently, provide expert colour consultation, surface preparation, and paint application techniques, and have access to advanced tools and high-quality paint required for the project's efficient completion.",
  },
  {
    q: "How many weeks does it take to complete a commercial property?",
    a: "The duration of our commercial painting process can differ on several factors, for example, the size and condition of the property, special customisation and the number of coats required. We will assess your property requirements and provide you with a date. We always maintain our time and try to finish the work quickly and efficiently.",
  },
  {
    q: "How much does it cost for your painting service?",
    a: "Deciding on price generally is not really the way we follow. Our best try is to inspect the place thoroughly, know your requirements, understand the size and condition of the space and then declare a price that matches your budget.",
  },
  {
    q: "Is the price quote free?",
    a: "Yes, quotation is 100% free and has no obligation on your part. You'll get an accurate and reliable estimate from us to know how much you can expect to pay for your project. We are completely transparent about our pricing. There are no hidden fees or charges you have to pay.",
  },
  {
    q: "Are you licensed and insured?",
    a: "As an expert in the painting field, we always maintain proper safety and strictly follow local guidelines. We are definitely licensed and provide insurance coverage. We provide Public Liability Insurance, Home Warranty Insurance, Workers' Compensation Insurance, and Occupational Health & Safety Compliant with a complete OH&S System in place for commercial painting services.",
  },
  {
    q: "What other services do you provide?",
    a: "Our commercial painting service is on the preference list for every business owner in Sydney. But we are also famous for strata painting, residential painting, lead paint removal, epoxy floor coatings and many more.",
  },
];

export default function CommercialPaintingPage() {
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
              Commercial Painting Sydney
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
              A Professional Interior &amp; Exterior Commercial Painting Service
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
                  className="hero-slide absolute inset-0 bg-cover bg-center opacity-0"
                  style={{ backgroundImage: `url(${src})`, animationDelay: `${i * 5}s` }}
                />
              ))}
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full items-center">
                <div className="w-full pl-[20px] min-[1025px]:pl-[100px]">
                  <h2 className="font-heading text-[30px] leading-[39px] font-black text-white min-[768px]:text-[45px] min-[768px]:leading-[53px] min-[1081px]:text-[60px] min-[1081px]:leading-[72px] min-[1367px]:text-[64px] min-[1367px]:leading-[76px]">
                    Since 1988,
                    <br /> Sydney&rsquo;s Trusted
                    <br /> Commercial Painting Company
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
                Expert Commercial Painters in Sydney for Your Commercial Projects
              </h2>
              <p className="mt-5 text-base leading-[30px] text-black">
                Being a business owner in Sydney, you understand the importance of the appearance
                of your commercial space. It needs to look clean and up-to-date to attract new
                customers. Moreover, a well-maintained property tends to hold more value than
                others. Whether you want to give your building a new look or try to maintain the
                overall appeal, painting it can be a great idea.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                If you plan to improve your commercial building aesthetics, your search history
                must contain phrases like commercial painters near me or commercial painters
                Sydney. You might find many suggestions, but you need an expert commercial
                painting company to fulfil your project requirements, including both interior and
                exterior painting.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                With over 30 years of experience in interior and exterior commercial painting of
                offices, factories, apartment buildings, and commercial premises in Sydney, our
                skilled and dedicated painters will meet and exceed your expectations.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="shrink-0 shadow-[0_0_30px_0_rgba(0,0,0,0.16)] mt-10 lg:ml-[26px] lg:-mt-[118px]">
                <QuoteForm
                  compact
                  widthClassName="lg:max-w-[630px]"
                  nameFieldWidthClassName="w-full lg:w-[500px]"
                  netlifyFormName="Commercial Painting Sydney Form"
                  netlifyActionPath="/forms/commercial-painting-quote.html"
                />
              </div>
            </div>
          </div>
        </section>

        <ExpandableSection />

        {/* One-Stop Solution + services list */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="bg-brand-navy px-4 py-16 text-center sm:px-8 md:py-24 lg:px-[110px]">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                One-Stop Solution for Your Commercial Space
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/80">
                When we give the commitment to take care of your office or shop, we actually mean
                it. At our company, we have experts to find a solution for every problem and give
                your commercial space a complete makeover. As maintaining quality for every
                service is a must for us, we are the ultimate solution for all our commercial
                clients in Sydney. Our team works very hard and is always ready to put in that
                extra effort to gain another member of our satisfied customer list. As we already
                claimed, versatility is our strength for commercial painting and every other
                painting service we provide.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Though we do not follow the word impossible and try to achieve anything you ask
                for your property, here we present an example list of commercial painting services
                that our customers ask for regularly-
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-3">
                {SERVICES_COLUMNS.map((column, i) => (
                  <ul key={i} className="space-y-4 text-left">
                    {column.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-white">
                        <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-teal" strokeWidth={1.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Priority One Coatings */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1360px] px-6 text-center">
            <h2 className="font-heading text-[25px] font-bold leading-[35px] text-black min-[768px]:text-[30px] min-[768px]:leading-[40px] min-[1025px]:text-[41px] min-[1025px]:leading-[49px]">
              Why Choose Priority One Coatings for Commercial Painting Sydney?
            </h2>
            <p className="mt-6 text-base leading-[30px] text-black">
              While searching for commercial painters in Sydney, you will get many suggestions,
              but not every company can reflect on why they are different. With years of
              experience and a team of Dulux Accredited painters, we can prove our painting
              service as one of the bests in Sydney. In addition, we have some other vital reasons
              that make our Sydney painters as specialists in commercial and industrial painting.
              We are the first option for any property owner who needs a painting service in
              Sydney Metropolitan area.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-[1400px] px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_CHOOSE.map(({ title, body }) => (
                <div
                  key={title}
                  className="flex flex-col items-center gap-[15px] bg-white px-5 py-14 text-center shadow-[0_0_50px_0_rgba(0,0,0,0.05)]"
                >
                  <div className="flex h-[82px] w-[82px] shrink-0 items-center justify-center rounded-full border-2 border-brand-teal bg-white p-[14px]">
                    <Check size={28} className="text-brand-teal" strokeWidth={3} />
                  </div>
                  <h3 className="text-[23px] font-bold leading-[27px] text-black">{title}</h3>
                  <p className="text-[15px] leading-[22px] text-black/80">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call CTA */}
        <section className="bg-white py-10 md:py-16">
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
                  Hire Local Commercial Painters Sydney Businesses Trust
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
        <section
          className="relative flex items-center overflow-hidden bg-[#003c73] bg-[length:65%_100%] bg-[top_left] bg-no-repeat lg:min-h-[700px]"
          style={{
            backgroundImage:
              "url(/images/commercial-sca-folding-image.jpg)",
          }}
        >
          <div className="mx-auto flex w-full max-w-[1400px] justify-end px-6 py-16 lg:py-24">
            <div className="w-full max-w-[636px] bg-white px-8 py-10 shadow-lg sm:pt-20 sm:pr-[50px] sm:pb-[60px] sm:pl-[85px]">
              <h2 className="font-heading text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                Insurances
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-grey">
                We provide a range of insurance coverage for commercial painting services in
                Sydney.
              </p>
              <ol className="mt-5 grid grid-cols-1 gap-3">
                {INSURANCES.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-black"
                  >
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
                Our Commercial Painting Process in Sydney
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black">
                From picking the right colours to achieving a flawless finish, the commercial
                painting process surely requires careful planning, preparation, and skilled
                execution. However, no matter what the business owner requires, our experienced
                painting company tries its best to achieve that during the promised time. By
                following a systematic step-by-step method, our professional painters can ensure
                high-quality results that meet the client&rsquo;s expectations and stand the test
                of time. Though the commercial painting process can vary depending on the specific
                project and requirements, here is an essential step-by-step method we follow for
                almost every commercial painting service we provide.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map(({ step, title, body }) => (
                <div
                  key={step}
                  className="rounded-[0.05rem] bg-white p-7 text-center shadow-[0_0_15px_0_rgba(0,0,0,0.06)]"
                >
                  <h3 className="text-xl font-bold text-black">{title}</h3>
                  {body.map((p, i) => (
                    <p key={i} className="mt-3 text-sm leading-relaxed text-brand-grey">
                      {p}
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
                    "url(/images/painters-in-sydney.jpg)",
                }}
              />
              <div className="relative mx-auto max-w-[1400px] px-6">
                <h3 className="font-heading text-[32px] font-bold leading-[42px] text-white min-[768px]:text-[30px] min-[768px]:leading-[40px] min-[1025px]:text-[41px] min-[1025px]:leading-[49px]">
                  Get A Quote From Sydney&rsquo;s Trusted Commercial Painters
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
              Commercial painting is a very sensitive task as it holds the recognition of your
              business. Therefore, you should only trust the painting company with long-term
              experience and a positive image in the market. Priority One Coatings has been
              serving for more than 32 years and has received so many positive reviews from its
              clients during these years. In this experiencing journey of us, we have completed
              painting various shops, offices, stores, restaurants and many more. You can check
              here the pictures of some of the commercial paintings we have completed so far.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {RELATED_WORKS_GALLERY.map((src) => (
                <div key={src} className="relative aspect-square w-full overflow-hidden">
                  <Image src={src} alt="Commercial painting project" fill className="object-cover" />
                </div>
              ))}
            </div>
            <a
              href="/recent-commercial-projects/"
              className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-black transition-opacity hover:opacity-70"
            >
              View Our Portfolio
              <svg aria-hidden="true" viewBox="0 0 20 14" className="h-[14px] w-5 fill-current">
                <path d="M12.6 0.6 11.2 2l3.3 3.3H0v2h14.5L11.2 10.6 12.6 12l6-6z" />
              </svg>
            </a>
          </div>
        </section>

        {/* Property types */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="bg-brand-navy px-4 py-16 text-center sm:px-8 md:py-24 lg:px-[110px]">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Commercial Painting Services for Every Type of Property
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/80">
                At Priority One Coatings, we provide high-quality commercial painting services
                across Sydney. Whether you need interior or exterior painting for offices, retail
                spaces, or industrial properties, we deliver exceptional results with minimal
                disruption. Our Sydney painters have successfully worked on the following
                projects, and the list is growing every day-
              </p>
              <ul className="mt-10 grid grid-cols-2 gap-x-10 gap-y-4 text-left sm:grid-cols-4 sm:grid-flow-col sm:grid-rows-6">
                {PROPERTY_TYPES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-white">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-teal" strokeWidth={1.5} />
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
                We understand that you may have particular questions regarding our commercial
                painting services. When you contact us, we can give you a details idea about
                everything you need to know. However, to provide you with an immediate solution,
                here is a list of the most asked questions by our regular commercial clients and
                their answers prepared for you.
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
              Need Professional Commercial Painting Contractors Sydney?
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
