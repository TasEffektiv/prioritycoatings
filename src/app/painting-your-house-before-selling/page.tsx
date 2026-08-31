import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata: Metadata = {
  title: "Painting Your House Before Selling | Priority One Coatings",
  description:
    "Wondering if it's worth painting your house before selling? Learn how a fresh coat of paint can boost curb appeal, perceived value and ROI.",
};

const POST_URL = "https://www.prioritycoatings.com.au/painting-your-house-before-selling/";

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

export default function PaintingYourHouseBeforeSellingPage() {
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
                  Painting Your House Before Selling
                </h1>

                <p className="mt-4 text-[15px] text-black/60">August 14, 2023</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2023/08/house-with-yard-sign-sale.jpg"
                    alt="house with yard sign for sale"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    Are you planning to sell your house? If so, you might wonder whether it&rsquo;s worth painting
                    your home before listing it on the market. The answer is a resounding yes! Painting your house
                    before selling it might seem like an extra expense, but it can yield significant returns on
                    investment (ROI). A good paint job can breathe new life into your property, making it more
                    attractive to potential buyers.
                  </p>

                  <p>
                    In this article, we&rsquo;ll explore why painting your house before selling with the best{" "}
                    <Link href="/residential-painters/">residential painters in Sydney</Link> is a smart move.
                  </p>

                  <h3>First Impressions Matter</h3>
                  <p>
                    When buyers walk up to your property, the first thing they notice is the exterior. The visual
                    impact of your house can significantly influence their perception of its overall condition. A
                    well-maintained exterior, achieved through Sydney painting services, can create a praising first
                    impression that sets the tone for their viewing experience.
                  </p>

                  <h3>Increased Perceived Value</h3>
                  <p>
                    Buyers often associate a house with proper maintenance and care. A freshly painted exterior and
                    interior gives the impression that your property has been well taken care of, which can justify
                    a higher asking price. Your investment in painting could translate into a faster sale and a
                    higher selling price. A relatively small investment with dedicated painters like{" "}
                    <Link href="/">Priority One Coatings</Link> can yield a substantial return with great ROI by
                    increasing the perceived value of your house.
                  </p>

                  <h3>Neutral and Inviting Atmosphere</h3>
                  <p>
                    Selecting the right colours for your house is a critical decision. When potential buyers step
                    inside your home, they want to envision themselves living there. Neutral, well-coordinated
                    interior colours like Shades of white, beige, and soft grey can create an inviting atmosphere
                    that allows them to do just that. Painting the interior of your house before selling can help
                    buyers visualise their own furniture and personal style in the space.
                  </p>

                  <h3>Enhanced Curb Appeal</h3>
                  <p>
                    Curb appeal plays a pivotal role in attracting buyers. A fresh, modern colour scheme can make
                    your house stand out in the competitive real estate market. A top-notch paint job can help
                    highlight the architectural features of your home, making it more visually appealing to
                    prospective buyers.
                  </p>

                  <p>
                    In conclusion, painting your house before selling is a strategic move that can offer significant
                    advantages. A new coat of paint is a beneficial investment, from boosting curb appeal and
                    perceived value to creating an inviting atmosphere. To ensure the best results, consider hiring
                    expert house painters like <Link href="/">Priority One Coatings</Link>.
                  </p>

                  <p>
                    With our professional touch of Dulux Accredited Painters and more than 32-year experience, your
                    house will be ready to make a lasting impression.
                  </p>
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Painting Your House Before Selling")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Painting Your House Before Selling")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
