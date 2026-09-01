"use client";

import Image from "next/image";
import { useState } from "react";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="23"
      viewBox="0 0 16 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1.26437 14.3943C1.44187 14.2164 1.68245 14.1158 1.93374 14.1145C2.18503 14.1131 2.42668 14.2111 2.6061 14.3871L7.04601 18.8131L7.04601 1.94785C7.04601 1.69647 7.14586 1.45538 7.32359 1.27762C7.50132 1.09986 7.74237 1 7.99372 1C8.24507 1 8.48612 1.09986 8.66385 1.27762C8.84158 1.45538 8.94143 1.69647 8.94143 1.94785L8.94143 18.8131L13.3855 14.3798C13.5657 14.2053 13.807 14.1084 14.0578 14.1097C14.3086 14.1111 14.5489 14.2107 14.7272 14.3871C14.8144 14.4752 14.8833 14.5796 14.9301 14.6944C14.9769 14.8091 15.0007 14.932 15 15.0559C14.9993 15.1798 14.9742 15.3024 14.9262 15.4167C14.8781 15.5309 14.8081 15.6346 14.72 15.7217L8.66873 21.7303C8.58102 21.8124 8.48005 21.879 8.37011 21.9274C8.2548 21.9766 8.1305 22.0013 8.00512 21.9999C7.75722 22.0001 7.51906 21.9034 7.34152 21.7303L1.2903 15.7217C1.2008 15.6367 1.12907 15.5347 1.07927 15.4217C1.02947 15.3087 1.00259 15.1869 1.00018 15.0635C0.997765 14.94 1.01988 14.8173 1.06523 14.7024C1.11058 14.5876 1.17827 14.4828 1.26437 14.3943Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export default function StrataExperienceSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white pb-10 md:pb-16">
      <div className="mx-auto max-w-[1400px] px-6">
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="text-center">
              <h2 className="font-heading text-[25px] font-bold leading-[35px] text-black min-[1025px]:text-[41px] min-[1025px]:leading-[49px]">
                Experienced Strata Painters at Your Service
              </h2>
              <p className="mt-6 text-base leading-[30px] text-black">
                In Sydney, lots of residents live in strata-regulated dwellings, but due to a lack
                of proper maintenance, these popular forms of residence lose their sparkle. A
                fresh layer of paint can be a solution here that can hide all the flaws of your
                structure and increase the property value. But as individuals own the apartments,
                and the common places have shared ownership, working on strata surely is a
                complex and sensitive task.
              </p>
              <p className="mt-4 text-base leading-[30px] text-black">
                Strata painting is a specialised service, not an easy job for every painting
                company. You need the expert support of professional strata painters in Sydney to
                rescue your strata buildings from all the painting hassles.
              </p>
              <p className="mt-4 text-base leading-[30px] text-black">
                Whether your strata need interior or exterior, our team can complete strata
                painting jobs successfully every time. Because of our on-time and hassle-free
                services, we have been a trusted painting company for many body corporations and
                strata managers for a long time.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
              <div className="relative h-[320px] w-full overflow-hidden sm:h-[420px]">
                <Image
                  src="/images/sarta-thumb.jpg"
                  alt="Strata title properties"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                  Professional Strata Painting Company in Sydney
                </h3>
                <p className="mt-5 text-base leading-[30px] text-black">
                  Having more than 32 years of experience, we proudly claim Priority One Coatings
                  to be the best choice for your strata properties in Sydney. Our team of
                  certified painters can work on projects of any size, whether small or large.
                  From townhouse complexes and multi-level modern high rises to any residential
                  estate, our strata painters in Sydney got you covered.
                </p>
                <p className="mt-4 text-lg font-semibold leading-[30px] text-brand-blue">
                  Painting your strata structure at the right time is necessary for maintaining
                  its appearance and protecting it from external damage. We believe in the theory
                  of beautiful inside out; thus, we always use high-quality materials that work as
                  a protective layer for your residence.
                </p>
                <p className="mt-4 text-base leading-[30px] text-black">
                  Our Sydney painter&rsquo;s expert hands always provide the highest standards of
                  quality in service with top-notch products. Our fully tailored service allows
                  you maximum customisation. Our best try is to fulfil every client&rsquo;s unique
                  requirements and colour preferences to achieve customer satisfaction.
                </p>
              </div>
            </div>

            <div className="mt-14 text-center">
              <h3 className="font-heading text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                Hire Specialist Strata Painting Contractors
              </h3>
              <p className="mt-6 text-base leading-[30px] text-black">
                Worried about the timely delivery of your strata painting project? Our team has a
                solution for this too. We realise the value of time and the necessity of timely
                delivery. Thus, we make sure to utilise each second be it a regular working day or
                after-hour service and deliver a professional-looking strata project within the
                due date. You are also free to choose our work schedule, which we will strictly
                follow.
              </p>
              <p className="mt-4 text-base leading-[30px] text-black">
                We assure you our strata painters are the best in Sydney because we offer the best
                quality at a reasonable price. In addition, our painting company cares about its
                customers and offers professional service within your budget. So, if you are a
                strata owner in Sydney and your residence needs a painting makeover, make sure to
                call us today.
              </p>
            </div>
          </div>
        </div>

        <div className={expanded ? "mt-10 text-center" : "text-center"}>
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mx-auto flex w-fit flex-col items-center gap-1 font-heading text-base font-bold text-black"
          >
            {expanded ? "Read Less" : "Read More"}
            <ArrowIcon className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
