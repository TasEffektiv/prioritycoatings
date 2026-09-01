import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import QuoteForm from "@/components/QuoteForm";
import CertLogos from "@/components/CertLogos";
import TransformSurfaceSection from "./TransformSurfaceSection";

export const metadata: Metadata = {
  title: "Epoxy Floor Coatings Sydney | Priority One Coatings",
  description:
    "Priority One Coatings specialise in high-quality epoxy coatings in Sydney for commercial & industrial premises. Contact us for all kinds of epoxy flooring solutions!",
};

const RELATED_WORKS_GALLERY = [
  "/images/commercial-fitout-1.jpg",
  "/images/commercial-fitouts-2.jpg",
  "/images/commercial-interior-1.jpg",
  "/images/commercial-offfice-1.jpg",
];

const WHY_CHOOSE = [
  {
    title: "Licensed and trained epoxy professionals",
    body: "At Priority One Coatings, we take pride in our team of skilled epoxy coating professionals. Our epoxy specialist team is fully licensed, trained and accredited in epoxy resin floor application. We firmly attend seminars and training to stay up to date. We hire only certified worker to provide property owners the top-class service. With high – grade and insured workmanship we assure 100% customer satisfaction in Sydney metropolitan area. You rely on our epoxy coating contractors for installing epoxy floor with stunning finishing wherever you want. We complete every epoxy project with the same integrity with the expertise in the town.",
  },
  {
    title: "Customisable, high performance industrial flooring",
    body: "For Customisable industrial epoxy floor coatings Priority One Coatings is the go to name. at first, we will listen your customisation requirements and research on it. Then we will provide the custom epoxy solution to suit your business environment, application and facility. With high performance epoxy solution, we will not only meet but exceed your expectations. Our unique durable epoxy floorings are chemical resistant, food safe, water resistant and non-slippery. We use the latest technology and quality materials in our every epoxy project. You can contact us today to get the best tailored solution in Sydney.",
  },
  {
    title: "Extensive experience in floor coatings",
    body: "With over 32 years extensive experience in the epoxy floor coatings industry we provide the high-end service which is second to none. Our epoxy coatings professionals have built a solid reputation in Sydney regional area as the top local flooring experts. It ensures that we have the knowledge and skill to handle your all category epoxy project efficiently and effectively. No project is challenging to our epoxy professionals. We our every epoxy flooring job with the same dedication level. Whether it's about warehouse flooring, garage flooring or any other high traffic area epoxy coatings our stunning and quality finish can't be beatable.",
  },
  {
    title: "After-work service",
    body: "We understand the valuation of your time. That's why we prove our epoxy service after working hour. Our epoxy experts can work with you at evening, weekends or annual holiday with minimum disruption at your place. You need to just share your preferable time slot with us rest is our concern. Our epoxy professionals team handles every project with care, cleanliness and attention to details. We ensure a smooth and hassle-free epoxy resin floor experience for all the Sydney residents. Our epoxy solution with give your floor a long life both for residential and industrial area.",
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
    title: "Surface Preparation",
    body: "To ensure a successful application of epoxy coating, it is crucial to properly prepare the floor. Prior to installing epoxy floor, we take surface preparation as the first step. Our team of epoxy coating professionals in Sydney begins by thoroughly cleaning the floor. Next, we move into fixing cracks or damaged areas in the floor (if there is any). Sanding, stone grinding and diamond grinding are some of the way we use to prep the floor according the floor condition. Sometime it needs short blasting when the floor condition is to rough. We mostly avoid short blasting as it is an aggressive method of preparation. After repairing damage, the epoxy team re-cleans the floor. We pay close attention to any areas that may have been overlooked during preparation. To eliminate any remaining debris or dust, our experts meticulously vacuum the entire surface.",
  },
  {
    step: "02",
    title: "Installation, Repairs and Removal",
    body: "As the second step we execute installation, repair and removal according to our epoxy project requirements. It is a time-consuming process and need a careful attention to detail. The application of the epoxy coat itself takes several days. As a result, epoxy floor installation can take longer than expected. Normally we use 2 coats of resin and hardener with drying time of 12 hour for each coat to complete each project with flawless finish. once the epoxy coating is in place, changing the colour or design of the floor can be a costly process. Epoxy floors can be slippery when wet, much like tiles. That's why our team of epoxy coating experts utilises anti-slip additives when applying the coating to the floor. This helps to make the surface safer to walk on when it's wet, ensuring that you and your loved ones stay safe and secure at all times.",
  },
  {
    step: "03",
    title: "Final Touch",
    body: "After the epoxy and flakes have thoroughly dried, our skilled professionals use a brushing and sweeping process to ensure the surface is smooth and free of imperfections. This is a crucial step in the process, as any bumps or rough areas can compromise the overall quality of the finished product. Once the surface has been thoroughly prepared, we apply a clear coat of high-quality urethane to create a beautiful and durable finish. This transparent layer acts as a protective buffer, shielding the epoxy and flakes from damage and wear. In addition to its protective qualities, urethane provides exceptional chemical resistance, making it an ideal choice for environments exposed to harsh chemicals or other substances. For added durability and resistance, we specifically use fat-resistant urethane. This specialised formula is designed to withstand even the toughest abrasions and chemical exposure, ensuring that your floor looks great and lasts for years.",
  },
];

const PROPERTY_LIST = [
  "Mechanical workshop epoxy flooring",
  "Warehouse epoxy flooring",
  "Commercial kitchens",
  "Garage epoxy flooring",
  "Flake epoxy flooring",
  "Metallic epoxy flooring",
  "High traffic applications",
  "Heavy duty flooring",
  "Food industry epoxy flooring",
  "Industrial flooring",
  "Epoxy flooring over existing tiles",
];

const FAQS = [
  {
    q: "What is epoxy flooring?",
    a: "Epoxy flooring is a floor coating made up of multiple layers of epoxy. This epoxy is being applied with a depth of at least two millimetres. Epoxy is basically a mixture of two ingredients, resins and hardeners, that make the floor strong by chemically reacting from a rigid plastic material. It also makes the floor long-lasting and most demanding for high-traffic areas.",
  },
  {
    q: "Where to use epoxy flooring?",
    a: "The epoxy floor gives a seamless finish to any area you want, whether residential or industrial. It is mainly recommended for high traffic, work and entertainment sites like garages, car parks, restaurants, workshops, laundries, shopping centres, warehouses, domestic and commercial kitchens, living rooms, playrooms, gyms and offices.",
  },
  {
    q: "Is epoxy floor good for home?",
    a: "Epoxy is a very safe coating for your hard floors. It is slip-resistant and less abrasive than concrete and other industrial floorings. It is also water-resistant and protects your floor from any spills, including harsh chemicals that can damage other types of flooring.",
  },
  {
    q: "How to clean my new Epoxy flooring?",
    a: "You can use a broom, a dust mop or a leaf blower to clean an epoxy floor lightly. For deeper cleaning, the perfect option is applying standard ammonia water with a mop. Avoid using soap as it makes the floor very slippery when wet and tends to leave a murky surface.",
  },
  {
    q: "Does epoxy flooring scratch easily?",
    a: "Epoxy floors do not scratch easily because it is a hard-plastic coating, but like any surface, sharp objects may leave scruffy marks on the surface.",
  },
  {
    q: "Is it waterproof?",
    a: "Yes, the epoxy floor is incredibly waterproof. Many industries use this for waterproofing. You can contact us to know more about the epoxy floor, and you can also share your requirements to get a free quote",
  },
  {
    q: "How long does it take to install an Epoxy floor?",
    a: "Depending on the installation area and coating system, it takes 3-4 days to install an epoxy floor.",
  },
  {
    q: "Can I recoat my epoxy floor?",
    a: "As long as the floor does not have delamination issues, you can usually coat the old epoxy floor directly to create a brand-new finish.",
  },
  {
    q: "Is epoxy floors customisable?",
    a: "Yes, we can customise your epoxy floor according to your personal choice adding multicolour flakes, colour tints and glitter to suit any décor.",
  },
  {
    q: "Is it a good option for outside spaces?",
    a: "Epoxy floors are an excellent option for outside spaces with the ability to withstand outdoor elements. It offers an attractive, safe and low-maintenance option for outdoors. So, you should consider epoxy flooring when deciding on outside floors.",
  },
  {
    q: "Which is better, epoxy or tiles?",
    a: "Tiles can be durable, but they are also prone to cracking and chipping. Epoxy floors can last without chipping, cracking, fading, or peeling. In addition, epoxy will withstand heavy wear and tear, such as vehicles, toolboxes being pulled over it, or heavy objects falling on top of it. This is an essential factor if you consider installation in garages or high traffic areas where tiles can crack or break.",
  },
];

export default function EpoxyFloorCoatingsPage() {
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
              Epoxy Floor Coatings
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
              We Ensure Aesthetic, Protective and Durable Epoxy Floor Coating Finishes in Sydney
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
                    "url(/images/epoxy-banner-min.jpg)",
                }}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex h-full items-center">
                <div className="w-full pl-[20px] min-[1025px]:pl-[100px]">
                  <h2 className="font-heading text-[30px] leading-[39px] font-black text-white min-[768px]:text-[45px] min-[768px]:leading-[53px] min-[1081px]:text-[60px] min-[1081px]:leading-[72px] min-[1367px]:text-[64px] min-[1367px]:leading-[76px]">
                    Premium Epoxy Floor
                    <br /> Coatings by Sydney&rsquo;s
                    <br /> Local Experts
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
                Comprehensive, Cost Effective and Durable Epoxy Flooring Solution
              </h2>
              <p className="mt-5 text-base leading-[30px] text-black">
                If you&rsquo;re seeking a way to protect your concrete floors while enhancing the
                professional appearance of your commercial area, then epoxy flooring could be an
                excellent choice.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                At Priority One Coatings, we understand that a great floor is more than just
                something to walk on. We offer high-quality epoxy coating services. We provide a
                durable, low-maintenance, aesthetic-looking residential, commercial, and
                industrial surface.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Our team of experts will work with you to choose the perfect colour and texture
                for your floor. We specially formulate epoxy floor coatings to withstand heavy
                foot and vehicle traffic, chemicals, abrasion, and impact. They are resistant to
                stains, dust, and debris. We can assure you that your floor will look great for
                years.
              </p>
              <p className="mt-5 text-base leading-[30px] text-black">
                Our epoxy flooring Sydney systems are also easy to clean and maintain. It makes
                them perfect for high-traffic areas like garages, restaurants, hospitals, and
                manufacturing facilities. With Priority One Coating epoxy floor, you can spend
                less while cleaning and more time accomplishing the things you love.
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

        <TransformSurfaceSection />

        {/* Why Choose Us + feature cards */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1360px] px-6 text-center">
            <h2 className="font-heading text-[25px] font-bold leading-[35px] text-black min-[768px]:text-[30px] min-[768px]:leading-[40px] min-[1025px]:text-[41px] min-[1025px]:leading-[49px]">
              Why Choose Us
            </h2>
            <p className="mt-6 text-base leading-[30px] text-black">
              Priority One Coatings is the epoxy coatings expert with trained and skilled
              professionals in the town. As the best epoxy flooring contractors, we use the
              highest quality materials and the latest technology to ensure fully functional and
              extremely durable floors. We have extensive experience in the preparation,
              application and installation of all residential, commercial and industrial
              properties.
            </p>
            <p className="mt-4 text-base leading-[30px] text-black">
              With the team of Dulux Accredited painters, our customisation ability is next level
              to match in Sydney. Our free consultancy and no-obligation quotes are always
              available for you. We can execute epoxy projects during holidays for you; thus, you
              don&rsquo;t have to face any disruption in your daily work.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-[1400px] px-6">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_CHOOSE.map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-[0.05rem] bg-white p-7 text-center shadow-[0_0_50px_0_rgba(0,0,0,0.05)]"
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
            <div
              className="relative overflow-hidden bg-cover bg-center py-16 sm:py-20 lg:py-24"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,63,117,0.89), rgba(0,63,117,0.89)), url(/images/painters-in-sydney.jpg)",
              }}
            >
              <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-8 px-6 text-center">
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
        <section className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-[320px] w-full lg:h-auto lg:min-h-[420px]">
            <Image
              src="/images/insurance-banner-min.jpg"
              alt="Priority One Coatings tradesperson at work"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex items-start justify-center bg-[#003c73] px-6 py-12 sm:justify-start sm:px-10 lg:py-16">
            <div className="w-full max-w-[340px] bg-white p-8 shadow-lg lg:-mt-6">
              <h2 className="font-heading text-2xl font-extrabold leading-tight text-black">
                Insurances
              </h2>
              <p className="mt-3 text-base leading-[30px] text-black">
                We provide a range of insurance coverage for Lead Paint Removal.
              </p>
              <ol className="mt-5 list-decimal space-y-2 pl-5 marker:font-bold marker:text-brand-teal">
                {INSURANCES.map((item) => (
                  <li key={item} className="pl-1 text-[18px] font-semibold leading-[30px] text-black">
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
                Our process of epoxy floor coatings
              </h2>
              <p className="mt-6 text-base leading-relaxed text-black">
                Epoxy floors are useful and effective solution which can enhance the longevity of
                your floor life. It helps high traffic area to remain strong against spills and
                accidents. To achieve the world class epoxy resin floor finish we follow a
                complete process. Our process of epoxy floor coatings is suitable for all
                commercial and industrial workplaces. This epoxy flooring process is affordable
                and valuable. It can be completed successfully in a few days, so it won&rsquo;t
                impede the workflow. We aim to give our customers all the information they need
                about epoxy floors.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              <div className="absolute left-[16.66%] right-[16.66%] top-1/2 h-px -translate-y-1/2 bg-brand-teal/40" />
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
              Epoxy Floor Coatings Related Works
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-grey">
              Priority one coatings is a company that focuses on all type of epoxy flooring to
              make your floor a perfect one. Whether you want to coat your residential,
              commercial or garage floor our professional Sydney epoxy team is specialise in
              every sector. Our dedicated epoxy coating contractors are trained to provide most
              presentable and long-lasting floor in the town. Setting up your floor will be the
              best investment you can do for your property. You can go through our portfolio and
              testimonials to know the exact scenario of our epoxy service.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {RELATED_WORKS_GALLERY.map((src) => (
                <div key={src} className="relative aspect-square w-full overflow-hidden">
                  <Image src={src} alt="Epoxy flooring project" fill className="object-cover" />
                </div>
              ))}
            </div>
            <a
              href="/recent-commercial-projects/"
              className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-black transition-colors hover:text-brand-teal"
            >
              View Our Portfolio
              <svg aria-hidden="true" viewBox="0 0 20 14" className="h-[14px] w-5 fill-current">
                <path d="M12.6 0.6 11.2 2l3.3 3.3H0v2h14.5L11.2 10.6 12.6 12l6-6z" />
              </svg>
            </a>
          </div>
        </section>

        {/* We Cover the Property */}
        <section className="bg-white py-10 md:py-16">
          <div className="mx-auto max-w-[1600px] px-6">
            <div className="bg-brand-navy px-4 py-16 text-center sm:px-8 md:py-24 lg:px-[110px]">
              <h2 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                We Cover the Property
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white">
                We provide epoxy floor coatings for every possible high-traffic area in NSW. With
                our experienced technicians and qualified estimators, we have set the industry
                standard. Providing the finest quality epoxy flooring material, Priority One
                Coatings ensure a safer, cleaner and more attractive workplace environment. Our
                epoxy resin floors are easy to clean and long-lasting. To fulfil your
                requirements aspect to all category epoxy coatings, we are fully licenced and
                insured. Our team of Sydney experts ensures short drying and curing times. We
                cover a wide range of areas with epoxy coatings services, including:
              </p>
              <ul className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 text-left sm:grid-cols-3 sm:grid-flow-col sm:grid-rows-4">
                {PROPERTY_LIST.map((item) => (
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
                Please read our frequently asked section to know more about our epoxy floor
                coatings service. If you have any more questions about our epoxy flooring
                service, you can also contact us directly by email or phone call.
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
              Need Epoxy Flooring Specialist Servicing in Sydney?
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
