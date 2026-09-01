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

export default function ExpandableSection() {
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
                Our Commercial Painting Contractors Work Sydney Wide
              </h2>
              <p className="mt-6 text-base leading-[30px] text-black">
                No matter if you own a small retail store or a big mall, our Dulux Accredited
                painters have a solution to all your painting needs. Whether interior and
                exterior painting or ongoing painting maintenance, our commercial painting
                contractors are the go-to choice for several prestigious governments and private
                organisations in Sydney.
              </p>
              <p className="mt-4 text-base leading-[30px] text-black">
                We never compromise the paint quality and ensure our Sydney painters work with the
                top painting brands. Our commercial painting company offers tailored painting
                services and colour suggestions that meet your requirements. We provide colour
                consultation based on the unique brand identity of your company.
              </p>
              <p className="mt-4 text-base leading-[30px] text-black">
                A lot of wear and tear on the building often turns your business premise into an
                unhygienic and neglected place, creating a poor impression on the visitors. Our
                commercial painting services are special in Sydney because they will never let
                your business space lose its sparkle.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <Image
                src="/images/sarta-thumb.jpg"
                alt="Commercial property painting project"
                width={2510}
                height={1671}
                className="h-auto w-full"
              />
              <div>
                <h3 className="font-heading text-2xl font-extrabold leading-tight text-black sm:text-3xl">
                  Hire the Best Local Commercial Painting Company in Sydney
                </h3>
                <p className="mt-6 text-base leading-[30px] text-black">
                  Whether a spruce-up or complete renovation is required, our commercial painters
                  always ensure a high-quality finish. In addition, our qualified commercial
                  painting contractors guarantee 100% customer satisfaction by giving on-time
                  service all over Sydney.
                </p>
                <p className="mt-4 text-base leading-[30px] text-black">
                  So, if you want to update the paintwork of your office and building facilities
                  in Sydney, contact Priority One Coatings today. Our high-quality commercial
                  painting services to various industries, including hospitality, healthcare,
                  education, and retail, make us the best choice for all Sydney business owners.
                </p>
              </div>
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
