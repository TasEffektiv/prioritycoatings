"use client";

import { FormEvent, useState } from "react";

export default function QuoteForm({
  widthClassName = "lg:max-w-[590px]",
  compact = false,
  nameFieldWidthClassName = "w-full",
  netlifyFormName,
  netlifyActionPath,
}: {
  widthClassName?: string;
  compact?: boolean;
  nameFieldWidthClassName?: string;
  /**
   * When set, the form submits to Netlify Forms via AJAX using this form name
   * instead of the local fake-submit behaviour. Requires netlifyActionPath.
   */
  netlifyFormName?: string;
  /**
   * Static (non-SSR) HTML file Netlify's build-time form scanner can see and
   * that the AJAX POST should target — posting to an SSR route like "/"
   * never reaches Netlify's forms proxy.
   */
  netlifyActionPath?: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitted" | "error">("idle");
  const isNetlifyEnabled = Boolean(netlifyFormName && netlifyActionPath);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isNetlifyEnabled) {
      setStatus("submitted");
      return;
    }

    const form = e.currentTarget;
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, value.toString()));

    try {
      const res = await fetch(netlifyActionPath as string, {
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

  const inputHeight = compact ? "h-[30px]" : "";
  const textareaHeight = compact ? "h-[100px]" : "";
  const buttonHeight = compact ? "h-[53px]" : "py-3.5";

  return (
    <div
      className={`w-full min-w-0 rounded-[0.05rem] bg-white px-8 pt-12 pb-[65px] sm:px-[65px] lg:ml-auto lg:w-full ${widthClassName}`}
    >
      <h4 className="mb-7 text-2xl font-bold leading-[1.2] text-brand-ink sm:text-[41px]">Request A Quote</h4>
      {status === "submitted" ? (
        <p className="rounded-[0.05rem] bg-brand-light p-4 text-sm text-brand-ink">
          Thanks — your request has been received. Our team will be in touch shortly.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          {...(isNetlifyEnabled
            ? {
                name: netlifyFormName,
                method: "POST",
                "data-netlify": "true",
                netlify: "true",
                "data-netlify-honeypot": "bot-field",
              }
            : {})}
        >
          {isNetlifyEnabled && (
            <>
              <input type="hidden" name="form-name" value={netlifyFormName} />
              <div
                style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
                aria-hidden="true"
              >
                <label>
                  Leave this field blank
                  <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
            </>
          )}
          <input
            required
            type="text"
            name="your-name"
            placeholder="Name*"
            className={`border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal ${inputHeight} ${nameFieldWidthClassName}`}
          />
          <div className="flex flex-col gap-5 sm:flex-row">
            <input
              required
              type="email"
              name="your-email"
              placeholder="Email Address*"
              className={`w-full border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal ${inputHeight}`}
            />
            <input
              type="tel"
              name="tel-phone"
              placeholder="Phone Number"
              className={`w-full border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal ${inputHeight}`}
            />
          </div>
          <textarea
            name="your-message"
            placeholder="Message"
            rows={compact ? undefined : 5}
            className={`w-full resize-y border-0 border-b border-black/50 px-0 pb-[5px] text-[15px] text-brand-ink placeholder:text-gray-500 outline-none focus:border-brand-teal ${textareaHeight}`}
          />
          {status === "error" && (
            <p className="text-sm text-red-600">
              Sorry, something went wrong sending your request. Please try again or call us directly.
            </p>
          )}
          <button
            type="submit"
            className={`w-full rounded-[0.05rem] bg-brand-navy font-heading text-lg font-bold text-white transition-colors hover:bg-brand-navy-deep ${buttonHeight}`}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
