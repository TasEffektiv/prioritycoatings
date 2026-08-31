import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata: Metadata = {
  title: "Plan for Your Next Commercial Painting Project | Priority One Coatings",
  description:
    "Planning a commercial painting project? Follow these steps to schedule, budget and choose the right commercial painters in Sydney with Priority One Coatings.",
};

const POST_URL = "https://www.prioritycoatings.com.au/plan-for-your-next-commercial-painting-project/";

function ShareIcon({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy text-white transition-colors hover:bg-brand-teal"
    >
      {children}
    </a>
  );
}

export default function PlanForYourNextCommercialPaintingProjectPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <section className="bg-[#f6f7fc] pb-[60px] pt-[30px]">
          <div className="mx-auto max-w-[1430px] px-[15px]">
            <Link
              href="/blog/"
              className="mb-[25px] inline-flex items-center gap-2 font-heading text-sm font-bold text-brand-navy transition-colors hover:text-brand-teal"
            >
              &larr; Back to Blog
            </Link>

            <div className="flex flex-col gap-[25px] lg:flex-row">
              <article className="lg:w-2/3">
                <h1 className="font-heading text-[32px] font-bold leading-[1.2] text-brand-navy sm:text-[40px]">
                  Plan for Your Next Commercial Painting Project
                </h1>

                <p className="mt-4 text-[15px] text-black/60">August 28, 2023</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2023/08/painter-spraying-powder-paint-from-gun.jpg"
                    alt="painter spraying powder paint from gun"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    First impressions can express a lot, and a professionally painted commercial environment can
                    convey the right message to your clients. So, if you&rsquo;re thinking of making your property
                    more appealing and attracting more customers, a new layer of paint can be an excellent option.
                    But is it that easy to execute a painting project in your commercial building?
                  </p>

                  <p>
                    Well, it&rsquo;s not that simple, but with the right plan in your hand, it&rsquo;s possible to
                    manage everything successfully. If you&rsquo;re confused about what plan we&rsquo;re talking
                    about, don&rsquo;t worry; this read is all about that. Let&rsquo;s look at the steps of planning
                    you will need:
                  </p>

                  <h3>Fix a Schedule</h3>
                  <p>
                    To select the right time, consider avoiding any pick-time of a month when the sale is high or
                    when comparatively more clients visit and schedule a date. Also, it&rsquo;s better to choose
                    professional{" "}
                    <strong>
                      <Link href="/commercial-painting/">commercial painters in Sydney</Link>
                    </strong>{" "}
                    who offer after-hour services that cause minimal to no disturbance.
                  </p>

                  <h3>Brainstorm on colour and finish</h3>
                  <p>
                    Knowing what type of colour and finish you prefer is always a good option. Go through the
                    internet, gather ideas on recent colour trends or patterns, and select some for your building.
                    In this way you can express your choice and the painting company can show the perfect result
                    similar to that.
                  </p>

                  <h3>Calculate the budget</h3>
                  <p>
                    Every penny matters in business, so decide how much money you can spend. It&rsquo;s not
                    necessary to break the bank to get the best results, as in Sydney, you can find high-quality
                    painting services in a very affordable range. All you need to do is discover those hidden gems.
                  </p>

                  <h3>Find the right commercial painting company</h3>
                  <p>
                    Once you&rsquo;re prepared, it&rsquo;s time for searching the right painters for the painting
                    project. It&rsquo;s the most crucial step as the perfect finishing of your space depends
                    primarily on their hands. Try to match this list while confirming your painting contractor in
                    Sydney&mdash;
                  </p>

                  <ul>
                    <li>Uses quality products</li>
                    <li>Has experience in the industry</li>
                    <li>Asks for a reasonable rate</li>
                    <li>Has license and insurance</li>
                    <li>Has proof of previous work</li>
                  </ul>

                  <p>
                    Considering all these features, we suggest you select <strong>Priority One Coatings</strong> as
                    your painting contractor.
                  </p>

                  <h3>Why Priority One Coatings?</h3>
                  <p>
                    Experience of 32+ years in the painting industry and owning tons of satisfied customers makes us
                    the perfect choice for any painting project. You don&rsquo;t have to fix any schedule with us as
                    we offer after-hour service. Our Dulux-accredited painters will provide expert colour
                    consultation, so you don&rsquo;t have to worry about it.
                  </p>

                  <h5 className="text-center">
                    In easy words, to get the most hassle-free painting service in Sydney, book{" "}
                    <strong>Priority One Coatings</strong> today.
                  </h5>
                </div>

                <div className="mt-10 flex items-center gap-3 border-t border-black/10 pt-8">
                  <span className="font-heading text-sm font-bold text-brand-navy">Share This Article</span>
                  <ShareIcon
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(POST_URL)}`}
                    label="Share on Facebook"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.183 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.757 8.437-4.92 8.437-9.94Z" />
                    </svg>
                  </ShareIcon>
                  <ShareIcon
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Plan for Your Next Commercial Painting Project")}`}
                    label="Share on X"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231ZM17.083 19.77h1.833L7.084 4.126H5.117Z" />
                    </svg>
                  </ShareIcon>
                  <ShareIcon
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(POST_URL)}`}
                    label="Share on LinkedIn"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.114 20.452H3.558V9h3.556v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                    </svg>
                  </ShareIcon>
                  <ShareIcon
                    href={`mailto:?subject=${encodeURIComponent("Plan for Your Next Commercial Painting Project")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
                    label="Share via Email"
                  >
                    <Mail size={15} />
                  </ShareIcon>
                </div>

                <div className="mt-8">
                  <Link
                    href="/blog/"
                    className="font-heading text-sm font-bold text-brand-teal transition-colors hover:text-brand-teal-dark"
                  >
                    &larr; Back to Blog
                  </Link>
                </div>
              </article>

              <BlogSidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
