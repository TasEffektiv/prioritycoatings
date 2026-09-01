import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import ExpandableSection from "./ExpandableSection";

export const metadata: Metadata = {
  title: "Expert Residential Painters Sydney | Priority One Coatings",
  description:
    "Our expert house painters offer the highest quality of interior & exterior residential painting in Sydney. For affordable house painting services, contact us!",
};

const RELATED_WORKS_GALLERY = [
  "/images/house-painting-3.jpg",
  "/images/house-painting-2013-4.jpg",
  "/images/lead-paint-removal-and-repaint-1.jpg",
  "/images/wall-repaint-2.jpg",
];

const SERVICES_LIST = [
  "Interior House Painting",
  "Exterior House Painting",
  "Colour Consultation",
  "Fence Painting",
  "Surface Preparation",
  "Restoration and repairs",
  "Specialist painted finishes",
  "Textured Coatings",
  "Floor Coatings",
  "Heritage Painting",
  "Waterproofing",
  "Wallpapering",
  "Lead Paint Removal",
  "Rust Protection",
  "Stair and Railings",
  "Roof Painting",
  "Garage Door Painting",
  "Trim and Moulding",
  "Doors and Window Paint",
  "Deck and Patio Painting",
];

const PROCESS: { step: string; title: string; body: string[] }[] = [
  {
    step: "01",
    title: "Punctuality",
    body: [
      "Time is a valuable asset, and we believe that. Delays can be frustrating in the case of house painting, so we meticulously plan our projects and allocate resources effectively. When you choose us for your residential painting needs, you can expect a team that values punctuality as a core principle. Our target is not just about following our schedule; it's about delivering on our promise and giving you a hassle-free experience throughout the entire residential painting process. You will experience promptness from the initial query, as once you contact us, our responsive team will respond and fix a date for the house inspection as soon as possible. As we are an experienced painting contractor in Sydney, we will provide you with the exact date depending on the size and condition of the project. Once we confirm a deadline, our painters strive to finish the work promptly so that you can get your desired house at the right time and plan other activities based on your schedule.",
    ],
  },
  {
    step: "02",
    title: "Arrangements",
    body: [
      "Re-arranging the room to prepare for work is a must, and we may ask for your assistance in doing so. Our attention to detail extends beyond the painting itself. We believe that the preparation stage is vital in achieving exceptional results. Working together, we create a clean and organised environment and set the stage for a seamless painting process and a beautifully finished room.",
      "Also, the safety of your furniture and belongings is of utmost importance to us. That's why we take extra precautions to protect them from any paint stains or damage. We try using high-quality protective coverings that take great care in handling your items during the painting process. We might also need to remove elements such as artwork, wall hangings, and decorative items along with furniture. This re-arranging step is an important part of the preparation as this helps us prepare a blank canvas, and we can focus solely on providing a flawless paint finish more quickly and efficiently.",
    ],
  },
  {
    step: "03",
    title: "Painting",
    body: [
      "Here comes our main task, which is applying paint to your house walls. We pride ourselves on using top-notch products, wearing neat and clean uniforms, and being courteous and safety conscious. Quality is our first priority; this is why we only use high-quality paints that are known for their durability, longevity, and vibrant colours. In the painting process, it is essential to understand that every surface requires a specific type of paint and finish to achieve optimal results. Our deluxe accredited painters know which type of paint and finish suits the surface of your space and also provide different treatments for your internal and external walls.",
      "Additionally, the customisation facility in our service allows every customer to choose the colour and finish by themselves. Our commitment to customisation extends beyond just colours selection. We also offer variation in finishes, allowing you to achieve the desired texture and sheen that best enhances your space.",
    ],
  },
  {
    step: "04",
    title: "Final Touch",
    body: [
      "Once we give the final touch to your freshly painted walls, our commitment to your satisfaction will continue. This process is about expanding the list of satisfied customers because we will complete the project only when you are 100% pleased. We invite you to inspect our work thoroughly, ensuring that every detail meets your expectations. Your feedback is everything to us, as it helps us maintain the standards of quality and craftsmanship.",
      "We work to maintain a long-term relationship with our customers, and for this reason, they remember us in their future painting needs. That is why even if you ask for any modification after the final touch, we will try our best to achieve that finish. We understand that adjustments or modifications may sometimes be necessary, even after the final touch. We will happily make the necessary changes to accommodate your requests and achieve your desired finish. Your vision and happiness are of utmost importance to us.",
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
  "Single-family homes",
  "Multi-family homes",
  "Apartment buildings",
  "Condominium",
  "Townhouses and any type of property",
];

const FAQS = [
  {
    q: "Do you provide insurance protection?",
    a: "Being one of Sydney's most trusted painting companies, we provide various insurances for residential painting. We provide insurance coverage for public liability, home warranty, worker's compensation and other health and safety complaints.",
  },
  {
    q: "What areas your painting company serves?",
    a: "We have been providing service all over Sydney for over 32 years. So, no matter where your house is, if you are a Sydney resident, Priority One Coatings will be at your service on your desired timetable.",
  },
  {
    q: "Do I need to prepare the surface before you paint?",
    a: "As an experienced deluxe accredited painters' team, we know the surface needs to be well-prepared for a high-quality finish before painting. Don't worry; we won't burden you with this responsibility. Our professional painters will take the necessary steps to prepare your house walls for the best quality painting finish.",
  },
  {
    q: "How do I know when to repaint my house?",
    a: "Some people repaint the house when they buy it just to change the colour, while others repaint it just before selling the home to make it more attractive. However, for your house painting in Sydney, you usually need to paint your house every 5-10 years, and if it's old, every 4-7 years. Coastal homes need to be painted more often due to the effects of saltiness. Several factors that determine the life of the current painting work are the amount of preparatory work done last time (polishing, scraping) and the quality of the paint used.",
  },
  {
    q: "How much do you cost?",
    a: "It is not a wise idea to declare a common price when every residence in Sydney has its requirements. We have a free quote option where we can get a proper idea of the condition of your house and can confirm the exact budget you need to save for the service.",
  },
  {
    q: "Can you help me select colour options for my home?",
    a: "Determining the colour scheme is a big commitment, especially when painting the interior or exterior of the house. Fortunately, you don't have to make this big decision alone. Our house painters in Sydney can work with different colour schemes on a daily basis to help you make the right choice for your home.",
  },
  {
    q: "Do you clean up the place after painting?",
    a: "Our company is well known for its hygiene maintenance and clean service. We never leave a place all messy and full of stains. We give equal importance to our after-service impression. So, the way we prepare your house perfectly for our work; just like that, while leaving, we make sure the place looks brand new.",
  },
  {
    q: "How soon can you start the painting process?",
    a: "Punctuality is Priority One Coatings' strength. As we always value our customers' time, responding as quickly as possible is our plan. As soon as you request our service with your house address and all the other contact details, our skilled team is ready to respond. Based on your time preference, we can start the residential painting process.",
  },
  {
    q: "What happens if my house has cracked and peeling paint?",
    a: "Cracking of paint is a regular problem when your paint is old. Don't be tense about it. We have a solution for that. Before painting, we properly clean the surface, get rid of all the flakes and make the wall a smooth base. After that, we prime and then paint, so peeling in the wall is not a problem for us.",
  },
  {
    q: "How long will it take to paint my house?",
    a: "This process may take as much as 45 days after you contact us. However, the actual time estimate will depend on the condition of the paint finish, the type of work required, the schedule, and the weather conditions if the project includes exterior work. Our residential painters in Sydney can inspect your house's condition during the consultation with you and let you know how long it might take to complete your painting project.",
  },
  {
    q: "What do you do if it rains?",
    a: "As we work on your preferred time, you don't have to worry about the scheduling. But who knows the weather's mood? If we're hired for exterior painting and heavy rain starts, we might need to reschedule the plan. Our residential painters perform the fastest service in Sydney, so don't worry about delayed service. We will reschedule and try our best to complete the service within a given timeframe.",
  },
  {
    q: "What other painting services do you provide?",
    a: "Our house painting service has been on the favourite list of many house owners in Sydney. But the fun fact is we are famous for many other benefits, for example, commercial painting, strata painting, lead paint removal, epoxy floor coatings and many more.",
  },
];

export default function ResidentialPaintersPage() {
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
              Residential Painting Sydney
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
              Strives for Excellence in Every Stroke of Paint
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
                    "url(/images/residential-painting-banner-min.jpg)",
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full items-center">
                <div className="w-full pl-[20px] min-[1025px]:pl-[100px]">
                  <h2 className="font-heading text-[30px] leading-[39px] font-black text-white min-[768px]:text-[45px] min-[768px]:leading-[53px] min-[1081px]:text-[60px] min-[1081px]:leading-[72px] min-[1367px]:text-[64px] min-[1367px]:leading-[76px]">
                    Your Home
                    <br /> Transformation
                    <br /> Starts Here
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
                Give Your House A Fresh Look with Expert Residential Painters Sydney
              </h2>
              <p className="mt-5 text-base leading-[30px] text-black">
                The house we live in is our identity in society. All house owners want their
                properties to look unique and appealing. But while maintaining all the other
                components of our residence, we often forget about focusing on the right painting
                solution for our living place.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Be it interior or exterior, a new coat of paint can bring back a fresh breath to
                your house. The problem is that painting our living area sounds like a big hassle,
                right? But not with the dedicated house painter in Sydney.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                The professional and trained team of Priority One Coatings will make your house
                painting job so smooth you will never forget to recommend us every time. We aim to
                understand your unique residential painting needs all over Sydney and fulfil each
                of them with care and enthusiasm.
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

        <ExpandableSection />

        {/* House Painting Services Offered - services list */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="bg-brand-navy px-4 py-16 text-center sm:px-8 md:py-24 lg:px-[110px]">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                House Painting Services Offered by Priority One Coatings
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/80">
                Our responsive team promises you quick replies from the initial enquiry to the
                journey&rsquo;s end. So, no matter what your requirement is, tell us, and we will
                make that happen. By the end of our service, you will get an up-to-date house with
                an excellent painting finish.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Along with offering Sydney-wide house painting services, we also fulfil a list of
                other necessary residential requirements of the house owners. Our residential
                painting service in Sydney includes the following:
              </p>
              <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 text-left sm:grid-cols-4 sm:grid-flow-col sm:grid-rows-5">
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

        {/* Process */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="text-center">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                Our Residential Painting Process
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black">
                Say goodbye to crusty walls and hello to a bright living space with our premium
                residential painting service that too at the most affordable rate. Our residential
                painting process is designed to exceed your expectations, leaving you with a
                beautifully transformed home you&rsquo;ll love. In this long journey of providing
                excellent service, we have finished projects with different surfaces and clients
                with unique requirements. We proudly state that we have fulfilled each of them with
                perfection, be it interior or exterior painting. Regardless of the size of your
                residence, our professional painters follow a standard process for every project in
                Sydney. The entire procedure includes the following steps.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map(({ step, title, body }) => (
                <div
                  key={step}
                  className="rounded-[0.05rem] bg-white p-7 text-center shadow-[0_0_50px_0_rgba(0,0,0,0.05)]"
                >
                  <div className="mx-auto flex h-[82px] w-[82px] items-center justify-center rounded-full border-2 border-brand-teal bg-white">
                    <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M27.9071 2.10708L27.9202 2.09399L27.9328 2.08043C28.8231 1.1216 30.3683 1.0825 31.3929 2.10708L32.1 1.39998L31.3929 2.10708C32.4023 3.11653 32.407 4.69434 31.4788 5.707L15.1929 21.9929C14.7076 22.4782 14.0758 22.7 13.4 22.7C12.7242 22.7 12.0924 22.4782 11.6071 21.9929L2.50711 12.8929C1.49763 11.8834 1.49763 10.3166 2.50711 9.30708C3.51658 8.2976 5.08342 8.2976 6.09289 9.30708L12.6929 15.9071L13.4 16.6142L14.1071 15.9071L27.9071 2.10708Z"
                        fill="#00A2B1"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-black">{title}</h3>
                  {body.map((p, i) => (
                    <p key={i} className="mt-3 text-sm leading-relaxed text-black/80">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call CTA */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="relative overflow-hidden bg-[#003f75] py-16 sm:py-20 lg:py-24">
              <div
                className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.11]"
                style={{
                  backgroundImage:
                    "url(/images/painters-in-sydney.jpg)",
                }}
              />
              <div className="relative mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-8 px-6 text-center">
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
        <section
          className="relative overflow-hidden bg-[#003c73] bg-[length:65%_100%] bg-[top_left] bg-no-repeat lg:min-h-[700px]"
          style={{
            backgroundImage:
              "url(/images/residential-middle-section-image-min.jpg)",
          }}
        >
          <div className="relative mx-auto flex max-w-[1400px] justify-end px-6 py-16 lg:min-h-[700px] lg:py-24">
            <div className="w-full max-w-[636px] bg-white px-8 py-10 shadow-lg sm:pt-20 sm:pr-[50px] sm:pb-[60px] sm:pl-[85px]">
              <h2 className="font-heading text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                Insurances
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black">
                We provide a range of insurance coverage for residential painting services.
              </p>
              <ol className="mt-5 space-y-3">
                {INSURANCES.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-2 text-base font-semibold leading-relaxed text-brand-grey"
                  >
                    <span className="shrink-0 text-brand-teal">{i + 1}.</span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Expert Residential Painters at Your Service */}
        <section className="bg-brand-light py-10 md:py-16">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[640/436] w-full overflow-hidden">
                <Image
                  src="/images/bulding1.jpg"
                  alt="Residential property"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-heading text-[25px] font-bold leading-[35px] text-black min-[768px]:text-[30px] min-[768px]:leading-[40px] min-[1025px]:text-[35px] min-[1025px]:leading-[42px]">
                  Expert Residential Painters at Your Service
                </h2>
                <p className="mt-5 text-base leading-[30px] text-black">
                  We have a team of highly professional house painters in Sydney who are licensed
                  and experienced in their jobs. Priority One Coatings team focuses on
                  communication to understand every customer&rsquo;s needs. Our residential
                  painters in Sydney understand the importance of a perfect surface to give you a
                  long-lasting painting outcome. Thus, preparing the walls of your house is our
                  concern, no matter how crusty and old it is.
                </p>
                <p className="mt-4 text-base leading-[30px] text-black">
                  We take colour consultancy quite seriously. Our Dulux Accredited Painters will
                  suggest the right colour that goes with your residence type while also focusing
                  on modern colour palates. We provide trendy colour suggestions and use
                  high-quality paints for every property. The type of the residence is not really a
                  big deal for us as we can efficiently work for-
                </p>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-[30px] text-black">
                  {PROPERTY_TYPES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
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
              Residential Painting Related Works
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-grey">
              Don&rsquo;t just trust the words while choosing the right painters in Sydney for your
              resident. Look at the previous works and trust the visual proof. Our portfolio is our
              pride as we have successfully completed many big and small projects. No matter the
              house&rsquo;s shape and texture, we have gained successful results for each one. Our
              satisfied clients still search for us whenever they need any painting service within
              Sydney. Thanks to our gallery that we can share some of them with you. Here is a
              glimpse of our residential painting service in Sydney that we have been offering for
              over 32 years.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {RELATED_WORKS_GALLERY.map((src) => (
                <div key={src} className="relative aspect-square w-full overflow-hidden">
                  <Image src={src} alt="Residential painting project" fill className="object-cover" />
                </div>
              ))}
            </div>
            <a
              href="/recent-residential-projects/"
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
                As a Sydney resident, you might have a lot of queries about our services. So,
                don&rsquo;t hesitate to reach us for any of your questions. But for the time being,
                we can provide the essential information that most of our clients search for. So,
                uncover the answers to your basic residential painting queries with our FAQ
                section.
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
              Looking For The Best Residential Painters In Sydney?
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
