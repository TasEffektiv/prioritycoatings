import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata: Metadata = {
  title: "How Paint Colour Can Change The Perceived Size Of A Room | Priority One Coatings",
  description:
    "Discover how the right paint colours and shades can make a small room feel bigger, a long room feel shorter, or a low ceiling feel higher.",
};

const POST_URL = "https://www.prioritycoatings.com.au/how-paint-colour-change-size-of-room/";

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

export default function HowPaintColourChangeSizeOfRoomPage() {
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
                  How Paint Colour Can Change The Perceived Size Of A Room
                </h1>

                <p className="mt-4 text-[15px] text-black/60">August 21, 2023</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/interior-design-with-photoframes-couch.jpg"
                    alt="interior design with photo frames and couch"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    In many ways, it goes without saying, but paint colour selection is extremely important as far
                    as creating a feel or atmosphere in a particular room. That&rsquo;s part of the reason the
                    colour section is so important &ndash; it can be the difference between a room feeling
                    comfortable or relaxed and feeling a little awkward.
                  </p>

                  <p>
                    Interestingly, picking certain colours and lighting can give a room the appearance of being much
                    larger or smaller than it is, which can help add to the comfort levels.
                  </p>

                  <p>
                    This article will discuss just a few of the ways this can be achieved, something to think about
                    if you are doing interior painting.
                  </p>

                  <h3>Ideal shades for smaller rooms</h3>
                  <p>
                    A common question from homeowners is how to go about decorating a small room in a way that
                    makes it feel bigger. Generally, cool, light tones and shades are the way to go, not only
                    because they make the best use of any natural light that enters the room but because they have
                    a &lsquo;receding&rsquo; quality that visually opens the room up. Something to think about is
                    that in smaller spaces, you want to maximise natural light as much as possible and avoid using a
                    number of different shades. Using just one makes it difficult for the eyes to recognise the
                    room&rsquo;s edges.
                  </p>

                  <h3>Making a long room look shorter</h3>
                  <p>
                    There&rsquo;s no doubt that large, long rooms can be problematic, particularly when their main
                    use is for entertaining. A popular way of dealing with this is to separate the space in some
                    way; folding screens, bookcases or shelving are just a few of the ways. Picking out the right
                    colours can also help. Darker colours and warm shades on the most remote and distant wall can
                    have the effect of making it seem much closer, especially if the walls adjacent (the longer
                    walls) are painted in lighter colours.
                  </p>

                  <h3>Dealing with low ceilings</h3>
                  <p>
                    High ceilings are generally preferred; in fact, studies have shown that rooms with higher
                    ceilings can help make us think in a more open-minded way. Ultimately, more space is generally a
                    good thing as people don&rsquo;t like to be confined. You can make a low ceiling seem higher
                    with the same bright colours on the walls and ceiling. This has the optical effect of blurring
                    the line somewhat between where the wall ends and the ceiling begins. If it suits the aesthetic
                    of your room, you can also have a mirror on the ceiling.
                  </p>

                  <p>
                    A professional{" "}
                    <Link href="/residential-painters/">house painter in Sydney</Link> can advise you on the ideal
                    colours for your space, so if you are looking to redecorate or paint, it&rsquo;s worthwhile to
                    chat with an expert. For more information on wall painting, don&rsquo;t hesitate to contact{" "}
                    <strong>Priority One Coatings</strong>.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How Paint Colour Can Change The Perceived Size Of A Room")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How Paint Colour Can Change The Perceived Size Of A Room")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
