import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata: Metadata = {
  title: "How to Repair Peeling Paint on Wall | Priority One Coatings",
  description:
    "Peeling paint from walls looks terrible and can deter your family, tenants, or prospective employees. Explore this step-by-step guide and learn how to fix it.",
};

const POST_URL = "https://www.prioritycoatings.com.au/how-to-repair-peeling-paint-on-wall/";

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

export default function HowToRepairPeelingPaintOnWallPage() {
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
                  How to Repair Peeling Paint on Wall
                </h1>

                <p className="mt-4 text-[15px] text-black/60">October 5, 2023</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2023/10/paint-peeling-off-rough-concrete-wall-scaled.jpg"
                    alt="paint peeling off rough concrete wall"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    A troublemaker that arrives unannounced, strips the charm of your wall and leaves behind
                    unsightly blemishes is what we call peeling paint. It makes your space look messy and creates a
                    sense of negligence. As you walk past those tell-tale flakes each day, it feels like your walls
                    are asking for a makeover.
                  </p>

                  <p>
                    Fear not; this visibly unappealing condition can be solved if repaired at the right time and in
                    the correct order. If you own a property in Sydney, the best way to do that is to let
                    professional <strong><Link href="/">wall painting contractors in Sydney</Link></strong> handle
                    it. Still, you should know the steps explained below to get the procedure done precisely and to
                    make your walls look great again.
                  </p>

                  <h3>Four Steps to Fix the Peeling Paint of Your Walls:</h3>

                  <h4>Scrape it Down</h4>
                  <p>
                    Start the job using a scraper or putty knife to gently remove the loose and peeling paint. It
                    needs to be done carefully so as not to damage the wall itself. That&rsquo;s why you need help
                    from expert painters in Sydney. In this step, you can get rid of the mess of stripped paint.
                  </p>

                  <h4>Smooth out the Surface</h4>
                  <p>
                    After scraping off the flaking paint, the wall might still feel uneven. That&rsquo;s where
                    sandpaper comes in handy. The rough sandpaper can be used at the beginning and finished with a
                    smoother one to make the wall even.
                  </p>

                  <h4>Put the Best Primer</h4>
                  <p>
                    Now, it&rsquo;s time to give your wall a particular treatment. Primer is the most crucial element
                    in the surface preparation step. As It helps the new paint stick better and gives a
                    long-lasting finish, experienced painting services of Sydney invest in a good quality primer.
                    So, after priming, let it dry properly, and your wall will be all set for the final step.
                  </p>

                  <h4>Repaint the Walls</h4>
                  <p>
                    The last stage is to bring back the beauty to your walls with a fresh coat of paint. Pick a
                    paint colour you love or get colour consultation from Dulux accredited painters. Then, finish
                    the paint job and make sure the painter blends the new paint with the rest of the wall so it
                    looks seamless.
                  </p>

                  <p>
                    By following this step-by-step process, you can surely get rid of the cracked paint, but have
                    you ever wondered why the peeling happens? Well, suppose the paint is peeling too early after a
                    paint job. In that case, the reason might be not prepping the surface correctly and not
                    following specific guidelines like temperature monitoring or picking the right paint. These
                    situations often arise when you choose inexperienced painters to paint your space.
                  </p>

                  <p>
                    So, to save time and money, go for skilled painting services in Sydney like{" "}
                    <strong>Priority One Coatings</strong>, who have over 32 years of experience in the painting
                    industry. Their painters follow proper prep steps and use high-quality paint to avoid any
                    future damage.
                  </p>

                  <h5 className="text-center">
                    Thus, to get excellent painting service at the most affordable rate,{" "}
                    <a href="tel:+61298085900">call us today</a>.
                  </h5>

                  <p className="text-sm text-black/50">
                    Image by{" "}
                    <a
                      href="https://www.freepik.com/free-photo/paint-peeling-off-rough-concrete-wall_6601049.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Freepik
                    </a>
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How to Repair Peeling Paint on Wall")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How to Repair Peeling Paint on Wall")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
