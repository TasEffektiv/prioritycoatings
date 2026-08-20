"use client";

import { FormEvent, useState } from "react";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-full min-w-0 rounded-[0.05rem] bg-white px-8 pt-12 pb-[65px] sm:px-[65px] lg:ml-auto lg:w-full lg:max-w-[590px]">
      <h4 className="mb-7 text-2xl font-bold leading-[1.2] text-brand-ink sm:text-[41px]">Request A Quote</h4>
      {submitted ? (
        <p className="rounded-[0.05rem] bg-brand-light p-4 text-sm text-brand-ink">
          Thanks — your request has been received. Our team will be in touch shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            required
            type="text"
            name="your-name"
            placeholder="Name*"
            className="w-full border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
          />
          <div className="flex flex-col gap-5 sm:flex-row">
            <input
              required
              type="email"
              name="your-email"
              placeholder="Email Address*"
              className="w-full border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
            />
            <input
              type="tel"
              name="tel-phone"
              placeholder="Phone Number"
              className="w-full border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
            />
          </div>
          <textarea
            name="your-message"
            placeholder="Message"
            rows={5}
            className="w-full resize-y border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
          />
          <button
            type="submit"
            className="w-full rounded-[0.05rem] bg-brand-navy py-3.5 font-heading text-lg font-bold text-white transition-colors hover:bg-brand-navy-deep"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
