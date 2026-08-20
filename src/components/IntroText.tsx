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

export default function IntroText() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mt-16 text-2xl font-extrabold leading-tight text-black sm:mt-20 sm:text-3xl">
                Get Your Painting Job Done by Priority One Coatings
              </h2>
              <p className="mt-6 font-heading text-base font-normal leading-relaxed text-black">
                We have highly skilled painting contractors near you providing all kinds of
                painting services. In Sydney metropolitan area, we specialise in interior and
                exterior painting, and our painters are proficient in finishing works promptly
                while sticking to a budget. Years of experience across multiple painting
                sectors have proven that our Sydney painters are able to deliver the highest
                standard of work.
              </p>
              <p className="mt-4 font-heading text-base font-normal leading-relaxed text-black">
                At Priority One Coatings, our painters Sydney team excel in painting all types
                of residential and commercial buildings both inside and out. We collaborate
                extensively with every property owner to thoroughly comprehend their unique
                needs, budget, and intended results. Our Sydney painters get the painting job
                completed with great details and minimal disruption.
              </p>
              <p className="mt-4 font-heading text-base font-normal leading-relaxed text-black">
                No matter how small or big your painting project is, our highly trained
                painters will never let you down. We also have tons of experience painting
                homes and offices. All of our expert painters in Sydney CBD are licensed and
                insured, offering you peace of mind at every turn.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[0.05rem]">
                <Image
                  src="https://www.prioritycoatings.com.au/wp-content/uploads/2023/05/transform-the-appearance-of-your-property.jpg"
                  alt="transform the appearance of your property"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                  When You Want Quality Painting Services in Sydney, We Have Got You Covered!
                </h3>
                <p className="mt-6 font-heading text-base font-normal leading-relaxed text-black">
                  We use traditional and old school techniques to achieve a premium and
                  luxurious look at your place. We work mostly with our repeat Sydney
                  resident as they find top quality and satisfaction with us.
                </p>
                <p className="mt-4 font-heading text-lg font-semibold leading-relaxed text-[#00529e]">
                  Our timeliness and client service are unmatched. Our paint is non-toxic,
                  eco-friendly and pet-friendly; suitable for your family members of all
                  ages. Our paint job will protect your property from harsh Sydney weather
                  conditions for years. We are reliable painters; our consistency is second
                  to none in NSW.
                </p>
                <p className="mt-4 font-heading text-base font-normal leading-relaxed text-black">
                  As one of the best Sydney painting services, we provide superior quality
                  at a competitive price and with minimum time duration. We do more than
                  just painting; preparation and aftercare are also part of our service.
                  From the initial quote to the thorough cleanup, we are experienced in all
                  we do. For us, no assignment is difficult.
                </p>
              </div>
            </div>

            <div className="mt-14 text-center">
              <h3 className="mx-auto max-w-3xl text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                Our local, experienced painters Sydney team can renovate any <br />
                commercial or residential building.
              </h3>
              <p className="mx-auto mt-6 max-w-3xl font-heading text-base font-normal leading-relaxed text-black">
                As an active member of Master Painters Australia, we always remain updated
                and complete every project with the same high standard of workmanship. We
                are also a prominent member of Strata Community Australia. It allows us to
                uphold the position of best professional painters Sydney, providing
                top-notch Body Corporates services.
              </p>
              <p className="mx-auto mt-4 max-w-3xl font-heading text-base font-normal leading-relaxed text-black">
                We help Sydney homeowners to select the right colour for every project to
                give the property a touch of perfection. Our painters in Sydney take pride
                in their work and avoid taking any shortcuts. You can check our previous
                client&rsquo;s excellent experiences through our testimonials.
              </p>
              <p className="mx-auto mt-4 max-w-3xl font-heading text-base font-normal leading-relaxed text-black">
                At Priority One Coatings, Quality #1 is assured for all of your
                residential, commercial and industrial painting projects. We aim to give
                you the most incredible customer service experience while giving your
                property design and decor our utmost attention.
              </p>
              <p className="mx-auto mt-4 max-w-3xl font-heading text-base font-normal leading-relaxed text-black">
                Until the completion of the painting project, we are completely upfront
                about our services and only use original, high-quality painting materials
                and equipment.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block" />
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className={`flex w-fit flex-col items-center gap-1 font-heading text-base font-bold text-black ${
              expanded ? "mt-10" : "mt-12"
            }`}
          >
            {expanded ? "Read Less" : "Read More"}
            <ArrowIcon className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
