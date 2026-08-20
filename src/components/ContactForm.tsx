"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="w-full min-w-0 rounded-[0.05rem] bg-white px-8 pb-8 shadow-[0_0_25px_rgba(0,0,0,0.08)] sm:px-10 sm:pb-10">
      <h2 className="border-b-4 border-brand-navy pb-4 font-heading text-2xl font-extrabold text-black sm:text-[32px]">
        Send Message
      </h2>
      {submitted ? (
        <p className="mt-7 rounded-[0.05rem] bg-brand-light p-4 text-sm text-brand-ink">
          Thanks — your message has been received. Our team will be in touch shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
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
              placeholder="Email*"
              className="w-full border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
            />
            <input
              required
              type="tel"
              name="tel-phone"
              placeholder="Phone*"
              className="w-full border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
          />
          <textarea
            required
            name="your-message"
            placeholder="Message*"
            rows={5}
            className="w-full resize-y border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
          />
          <button
            type="submit"
            className="w-full rounded-[0.05rem] bg-brand-navy py-3.5 font-heading text-lg font-bold text-white transition-colors hover:bg-brand-navy-deep sm:w-auto sm:px-16"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
