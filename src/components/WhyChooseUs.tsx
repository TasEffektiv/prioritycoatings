import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const ITEMS = [
  {
    title: "Fully Insured",
    body: "Insurance is a sign of safety and security; to us, it is one of your major concerns. Our company follows every rule and local guideline to practice a safe working environment for both our workers and clients. That's why we carry comprehensive insurance coverage, including general liability insurance, workers' compensation insurance, Home Warranty Insurance and Occupational Health & Safety Compliant with a complete OH&S System in place. So, with our service, you are protected against any possible liabilities or unforeseen incidents.",
  },
  {
    title: "Timely Completion",
    body: "Priority One Coatings is compliant with the industry's best painting contractors in Sydney. We believe in discipline and punctuality. Our reliable team of painters has a record of completing every project on time. No matter what property you want to paint or repaint with us, you won't have to wait any extra minutes. We provide service even at weekends to have all our paint job done in a timely manner. Our dedicated painting company remains open 7 days a week until late to serve Sydney residents whenever they need us.",
  },
  {
    title: "38+ Years of Experience",
    body: "When considering the right painters for your property, knowledge and skill is a crucial factors and must-have for any painting company. We have gained a vast understanding of paints and projects in our long journey of more than 38 years. Our longevity in the industry is the proof of excellence and consistency in our service. Over the years, we have achieved thousands of satisfied customers who gave us hope and encouragement to work hard and continuously improve our services.",
  },
  {
    title: "Quality Workmanship",
    body: "With our painters in Sydney CBD, we offer the best painting service to all property owners. Our workmanship quality is second to none. We are fully trained and skilled to provide top-quality local painting services. Our Dulux Accredited painters always ensure to fulfil all your requirements and turn your dream home or office come true. The final result you will get with our number one worker will exceed your expectation as we set the next level of industry standard.",
  },
  {
    title: "After-Hour Service",
    body: "If the concern is regarding painting, every customer is afraid of the lengthy-time period it takes. Also, the disruption between daily activities becomes the biggest concern, especially for commercial clients. With us, your worries are over because time scheduling is easiest with us. Our flexible working hours allow us to work during evenings, weekends, or any other specific hours convenient for you. Our expert painters are prepared to fulfil all your requirements and deliver excellent results within the desired timeframe.",
  },
  {
    title: "Professional Team",
    body: "Our expert painters offer nothing but a top-notch painting service Sydney-wide. When you search for professional painters near me, you will get Priority One Coatings' name at the top of the list. Whether you want to coat your interior or exterior of residential, commercial, industrial, strata or heritage building, our high-quality finish and professionalism will remain unmatched in the painting industry. We are a member of the Master Painters Association, the most prominent body in the painting industry that describes our qualifications.",
  },
];

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-brand-teal/40 bg-white p-8">
      <CheckCircle2 size={40} className="text-brand-teal" strokeWidth={1.5} />
      <h3 className="mt-4 text-lg font-bold text-black">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-grey">{body}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      className="bg-white bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{
        backgroundImage:
          "url(https://www.prioritycoatings.com.au/wp-content/uploads/2023/06/bg-box.png)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-6">
        <h2 className="text-center text-3xl font-extrabold text-black sm:text-4xl">
          Why Choose Priority One Coatings
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-24 lg:grid-cols-3 lg:gap-10">
          <div className="flex flex-col gap-8">
            <Card {...ITEMS[0]} />
            <Card {...ITEMS[1]} />
          </div>

          <div className="flex flex-col gap-8 lg:-mt-[75px]">
            <Card {...ITEMS[2]} />

            <div className="bg-brand-navy p-8 text-center">
              <p className="text-lg font-semibold text-white">
                Click here to get a quick response from the best quality &amp; affordable
                price painters in Sydney.
              </p>
              <Link
                href="/contact-us/"
                className="mt-6 inline-block rounded-[0.05rem] bg-brand-teal px-7 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:bg-brand-teal-dark"
              >
                Request A Quote
              </Link>
            </div>

            <Card {...ITEMS[3]} />
          </div>

          <div className="flex flex-col gap-8">
            <Card {...ITEMS[4]} />
            <Card {...ITEMS[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}
