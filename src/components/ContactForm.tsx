"use client";

import { FormEvent, useState } from "react";

const NETLIFY_FORM_NAME = "Contact Us Page Form";
const NETLIFY_ACTION_PATH = "/forms/contact-us.html";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, value.toString()));

    try {
      const res = await fetch(NETLIFY_ACTION_PATH, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Form submission failed with status ${res.status}`);
      setStatus("submitted");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="w-full min-w-0 rounded-[0.05rem] bg-white px-8 pt-5 pb-8 shadow-[0_0_10px_rgba(0,0,0,0.06)] sm:px-10 sm:pb-10">
      <h2 className="border-b-[3px] border-brand-blue pb-4 font-heading text-2xl font-extrabold text-black sm:text-[32px]">
        Send Message
      </h2>
      {status === "submitted" ? (
        <p className="mt-7 rounded-[0.05rem] bg-brand-light p-4 text-sm text-brand-ink">
          Thanks — your message has been received. Our team will be in touch shortly.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mt-7 space-y-5"
          name={NETLIFY_FORM_NAME}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
          <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
            <label>
              Leave this field blank
              <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <input
            required
            type="text"
            name="your-name"
            placeholder="Name*"
            className="w-full border-0 border-b border-black/50 px-0 pb-[5px] text-base text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
          />
          <div className="flex flex-col gap-5 sm:flex-row">
            <input
              required
              type="email"
              name="your-email"
              placeholder="Email*"
              className="w-full border-0 border-b border-black/50 px-0 pb-[5px] text-base text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
            />
            <input
              required
              type="tel"
              name="tel-phone"
              placeholder="Phone*"
              className="w-full border-0 border-b border-black/50 px-0 pb-[5px] text-base text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full border-0 border-b border-black/50 px-0 pb-[5px] text-base text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
          />
          <textarea
            required
            name="your-message"
            placeholder="Message*"
            rows={5}
            className="w-full resize-y border-0 border-b border-black/50 px-0 pb-[5px] text-base text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal"
          />
          {status === "error" && (
            <p className="text-sm text-red-600">
              Sorry, something went wrong sending your message. Please try again or call us directly.
            </p>
          )}
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
