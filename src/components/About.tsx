import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white pt-16 md:pt-24">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Image
            src="/images/professional-image-min.png"
            alt="professional painting service image collage"
            width={683}
            height={559}
            className="h-auto w-full"
          />
        </div>
        <div className="order-1 lg:order-2">
          <h1 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl">
            Professional Sydney Painters for <br />
            Quality Residential, Strata <br />
            &amp; Commercial Painting
          </h1>
          <p className="mt-6 font-heading text-base font-normal leading-relaxed text-black">
            Need affordable painters in Sydney? Since 1988, Priority One Coatings is one of
            the leading painting service providers in metropolitan Sydney. We are a
            family-owned painting company in Sydney known for its workmanship and delivery
            of quality services. As trusted Dulux accredited painters, we can perform
            commercial, residential and strata painting projects. Our painting services in
            Sydney also include epoxy floor coatings, commercial fitouts and lead paint
            removal.
          </p>
          <p className="mt-4 font-heading text-lg font-semibold leading-relaxed text-[#00529e]">
            For over 38 years, our professional painters in Sydney have been providing
            top-quality painting and decorating services. In the process, we have become
            the trusted brand to some of the largest companies and institutions in NSW.
            During this time, we have worked on several residential and commercial
            painting projects, from house painting and renovation to office fitouts and
            industrial buildings all over Sydney.
          </p>
        </div>
      </div>
    </section>
  );
}
