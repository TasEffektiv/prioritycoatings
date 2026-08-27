import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Limewash, Paint, or Render Your Brick House | Priority One Coatings",
  description:
    "Limewash, paint or render — compare the pros, cons and lifespan of each brick finish to choose the right option for your Sydney home.",
};

const POST_URL = "https://www.prioritycoatings.com.au/limewash-vs-paint-vs-render-for-brick-homes/";

const CATEGORY_LINKS: Record<string, string> = {
  "Commercial Painting": "/category/commercial-painting/",
  DIY: "/category/diy/",
  News: "/category/news/",
  "Residential painting": "/category/residential-painting/",
};

const CATEGORIES = Object.keys(CATEGORY_LINKS);

const RECENT_POSTS = [
  {
    title: "Dulux Colour Forecast for 2026",
    href: "/dulux-colour-forecast-for-2026/",
  },
  {
    title: "Commercial Painting FAQs By Trusted Sydney Painters",
    href: "/commercial-painting-faqs-by-trusted-sydney-painters/",
  },
  {
    title: "How to Determine if Your House Has Lead Paint",
    href: "/how-to-determine-if-your-house-has-lead-paint/",
  },
  {
    title: "How to Choose the Right Painter's Tape",
    href: "/how-to-choose-the-right-painters-tape/",
  },
  {
    title: "Mistakes to Avoid When Hiring Residential Painters in Sydney",
    href: "/mistakes-to-avoid-when-hiring-residential-painters/",
  },
];

const COMPARISON_ROWS: { concern: string; option: string; why: string }[] = [
  { concern: "Preserve the original brick look", option: "Limewash", why: "Enhances brick character without hiding texture" },
  { concern: "Improve breathability and moisture control", option: "Limewash", why: "Allows brick to release trapped moisture" },
  { concern: "Refresh the look without major renovation", option: "Paint", why: "Delivers a change with minimal disruption" },
  { concern: "Add colour flexibility", option: "Paint", why: "Offers the widest range of shades and finishes" },
  { concern: "Cover stained, mismatched, or patched bricks", option: "Paint", why: "Creates an even surface appearance" },
  { concern: "Achieve a modern or architectural finish", option: "Render", why: "Completely transforms the exterior" },
  { concern: "Hide structural or visual brick flaws", option: "Render", why: "Creates a new façade over the brick" },
  { concern: "Increase street appeal for resale", option: "Paint or Render", why: "Strong visual impact for buyers" },
  { concern: "Long-term exterior solution", option: "Render", why: "Durable finish when applied correctly" },
  { concern: "Heritage home update", option: "Limewash", why: "Respects the home's original materials" },
];

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

export default function LimewashPaintOrRenderPage() {
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
                  Limewash, Paint, or Render Your Brick House
                </h1>

                <p className="mt-4 text-[15px] text-black/60">January 20, 2026</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/01/limewash-paint-or-render-your-brick-house-blog-banner.jpg"
                    alt="Limewash, paint, or render your brick house blog banner"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    If you have existing stone or brick that you no longer like the colour of and wish to soften
                    the appearance, you may have thought of several possibilities. For brick houses, the most
                    common confusion arises when you ask yourself, &ldquo;Should I limewash, paint or render my
                    brick?&rdquo;
                  </p>

                  <p>
                    To choose the right exterior finish for a brick surface, you, as a homeowner, first need to
                    know about each option. In this guide, we will learn about three common finishes for brick
                    and help you make more informed decisions for a brick house.
                  </p>

                  <h3>Limewash for bricks</h3>

                  <figure className="relative my-8 aspect-[1024/579] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/01/buckets-of-paint-and-lime-for-whitewashing-1024x579.jpg"
                      alt="Buckets of paint and lime for whitewashing"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Limewash is a mixture of water and crushed, burned limestone that is used to make lime
                    putty. When limestones are heated, their characteristics are altered, resulting in a softer,
                    more absorbent substance that can be used on porous surfaces. Limewash produces a unique,
                    smooth, and matte finish that gives it a more aged, natural appearance.
                  </p>
                  <p>
                    The most popular way to make limewash is to combine water and slaked lime or chalk. Other
                    natural pigments are also added to some limewash mixtures. It truly has been used for
                    generations on the exteriors of homes, giving the surfaces a gentle, white hue. Therefore,
                    applying limewash on bricks can totally change the outside of a house.
                  </p>
                  <p>
                    A long-lasting covering that shields your surface from the weather is provided by a limewash
                    finish. It also penetrates the brick and cannot peel off like paint. Many people use this
                    approach for their concrete and stone walls in addition to their brick dwellings.
                  </p>

                  <h4>What are the pros of limewash?</h4>
                  <p>Here&rsquo;s a list of advantages of choosing the finish of limewash for your brick surface-</p>
                  <ul>
                    <li>
                      <strong>Low Amount of VOC</strong> &ndash; Unlike paint, limewash doesn&rsquo;t smell
                      strongly and is less toxic. It also has trace amounts of volatile organic compounds
                      (VOCs). Over time, it won&rsquo;t peel or flake off because it&rsquo;s non-film-forming.
                      As it is breathable, moisture and water damage can be avoided, and the surface can
                      &ldquo;breathe.&rdquo;
                    </li>
                    <li>
                      <strong>Affordable and Accessible</strong> &ndash; Limewashing is accessible and
                      reasonably priced as compared to other exterior options. The procedure is fairly easy,
                      and you can find all the things you need at your neighbourhood hardware shop.
                    </li>
                    <li>
                      <strong>Resistant to Weather</strong> &ndash; Homes that are often situated in areas with
                      severe weather, such as rain and snow, may experience damage to their exteriors. Curb-side
                      attractiveness will remain strong because limewash is resistant to these conditions and
                      won&rsquo;t chip or crack.
                    </li>
                    <li>
                      <strong>Highly Alkaline</strong> &ndash; The high alkalinity of limewash sterilises your
                      bricks to stop the growth of undesirable germs or even mould and mildew. Because of this,
                      limewash is a great option for spaces like kitchens and bathrooms.
                    </li>
                    <li>
                      <strong>Minimal Upkeep</strong> &ndash; A lime wash takes less upkeep than a painted wall,
                      which needs touch-ups every year. After applying it, you can put it out of your mind and
                      spend years enjoying your beautiful brick house.
                    </li>
                  </ul>

                  <h4>What are the downsides of limewash?</h4>
                  <ul>
                    <li>
                      <strong>Inconsistencies in Batch</strong> &ndash; Several smaller batches of limewash will
                      probably differ from one another. The mix will have minor changes that could alter the
                      final product&rsquo;s appearance.
                    </li>
                    <li>
                      <strong>Not Suitable for Painted Bricks</strong> &ndash; Limewash will not stick to a
                      painted brick that has already been coated because it penetrates the brick. For optimal
                      results, always apply to brick surfaces that aren&rsquo;t painted.
                    </li>
                  </ul>

                  <h4>How long does limewash last?</h4>
                  <p>
                    Limewash typically lasts between five and ten years, although it&rsquo;s crucial to
                    periodically check on its condition. Fading or noticeable discolouration is an indicator
                    that limewash may need to be reapplied.
                  </p>

                  <h3>Paint for bricks</h3>

                  <figure className="relative my-8 aspect-[1024/618] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/01/workers-hand-with-a-brush-painting-a-brick-wall-with-white-paint-1024x618.jpg"
                      alt="Worker's hand with a brush painting a brick wall with white paint"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    The first question that people often ask regarding this is, &ldquo;Can you paint
                    bricks?&rdquo; Well, brick houses can be painted, and this practice is growing in popularity
                    throughout Australia. Painting bricks gives you the chance to update and customise your
                    home&rsquo;s appearance, giving it a gorgeous, new look that can be well-preserved with the
                    correct maintenance.
                  </p>
                  <p>
                    Masonry paint, which offers weather resistance and the capacity to stick to mineral
                    surfaces, is specifically made to be applied to external walled surfaces like brick, stone,
                    and concrete. These paints are usually water-based, though they can take many different
                    forms.
                  </p>
                  <p>
                    If you&rsquo;re determined to paint your brick, pick a{" "}
                    <Link href="/residential-painters/">highly experienced professional house painter in Sydney</Link>{" "}
                    who is familiar with the particular needs of painting brick surfaces. To
                    reduce the possibility of future issues, they can make use of the right supplies and ensure
                    that the right preparation and application methods are used. When painting new
                    construction, wait 28 days after brickwork is finished.
                  </p>

                  <h4>Is painting over brick a good idea?</h4>
                  <p>Let&rsquo;s look at the advantages of painting bricks to decide whether it&rsquo;s a good idea or not-</p>
                  <ul>
                    <li>
                      <strong>Offers extra safety</strong> &ndash; Because of being sensitive to the weather,
                      bricks may gradually degrade. Paint helps your walls endure the severe effects of weather
                      by forming a protective layer that keeps the surface from being further damaged.
                    </li>
                    <li>
                      <strong>Improves the visual attractiveness</strong> &ndash; Painted brick gives your
                      home&rsquo;s exterior or interior a new texture that improves its allure. It&rsquo;s
                      particularly helpful if your brickwork has deteriorated over time, allowing it to regain
                      its original beauty.
                    </li>
                    <li>
                      <strong>Makes maintenance easier</strong> &ndash; Brick surfaces are easy to maintain
                      after painting. By acting as a barrier, the paint lessens wear on the material and stops
                      the growth of weeds, moss, and algae.
                    </li>
                  </ul>

                  <h4>What are the negatives of painting brick surfaces?</h4>
                  <p>
                    <strong>Long-lasting transformation</strong> &ndash; It is really difficult to undo a paint
                    job on bricks. Painters may need to work a lot to restore the bricks&rsquo; original look.
                    Bricks naturally have a rough texture and multiple cracks. This feature makes it challenging
                    to completely remove the paint.
                  </p>
                  <p>
                    <strong>Preparation requires time</strong> &ndash; Brick walls need to be thoroughly cleaned
                    and prepared before painting, which can take a lot of time. Since not all products are
                    appropriate for painting brick surfaces, finding the perfect materials for a high-quality
                    finish may also need some work.
                  </p>
                  <p>
                    <strong>Possibility of fading and peeling</strong> &ndash; Particularly on exteriors, exposed
                    brick walls are prone to dampness, which can lead to paint peeling or fading. Selecting
                    paint and primer that are made to withstand damp environments is crucial. Moisture can be
                    trapped in brick cracks and fissures, making the problem worse.
                  </p>

                  <h4>How long will the paint last on the bricks?</h4>
                  <p>
                    When the surface is cleaned properly and the paint is applied in good weather conditions,
                    painted brick can often last from 5 to 10 years. After that, it might need to be repainted
                    for a fresh look. However, the paint job will fade sooner in sunny climates where the UV
                    radiation is intense compared to cooler locations.
                  </p>

                  <h3>Render the brick</h3>

                  <figure className="relative my-8 aspect-[1024/629] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/01/man-working-on-brick-wall-1024x629.jpg"
                      alt="Man working on a brick wall"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    The kaleidoscope of colours and textures on a brick wall can be reduced to a uniform,
                    neutral tone and texture by rendering it. However, if the wall is in an exposed area or the
                    brick is excessively soft or friable, it could also be done to safeguard the brickwork.
                  </p>
                  <p>
                    What is rendered brick, then? A brick that has had a mixture applied to its outside face is
                    known as a rendered brick. Although cement is typically used for this, other common
                    rendering materials include acrylic or lime.
                  </p>
                  <p>
                    The wall becomes smoother as a result of this rendering, giving it a more contemporary and
                    glossy appearance than typical brickwork.
                  </p>

                  <h4>Is rendering brick a good idea?</h4>
                  <p>If you consider these perks, rendering the brick can be considered a good option-</p>
                  <ul>
                    <li>
                      <strong>Design variability</strong> &ndash; It may be applied in a variety of ways and
                      comes in a range of colours, textures, and styles to provide you with aesthetic choices.
                    </li>
                    <li>
                      <strong>Modern aesthetic</strong> &ndash; The smooth, seamless appearance of rendered
                      brick gives any <Link href="/commercial-painting/">commercial building</Link> a clean,
                      contemporary design that is likely to appeal to employees as well as potential clients or
                      customers.
                    </li>
                    <li>
                      <strong>Additional protection</strong> &ndash; You may improve temperature control and
                      prevent regular wear and tear through rendering, as it also adds a coat of insulation.
                    </li>
                  </ul>

                  <h4>Are there any drawbacks to the render finish?</h4>
                  <ul>
                    <li>
                      <strong>Comparatively high-priced</strong> &ndash; Although cement renders are the
                      industry standard and reasonably priced, other renders made of materials like acrylic may
                      cost more.
                    </li>
                    <li>
                      <strong>Planning approval</strong> &ndash; Depending on where your project is located,
                      some locations may need council consent for external rendering. Make sure you understand
                      the applicable council regulations if you intend to do an external brick render.
                    </li>
                  </ul>

                  <h4>How long does render finish last on bricks?</h4>
                  <p>
                    You can expect a lifespan of roughly 20 to 40 years with contemporary acrylic-based render
                    blends. The calibre of the work and the surface&rsquo;s cleanliness prior to the render
                    application would be considerations.
                  </p>
                  <p>
                    The longevity of traditional render mixes will be significantly reduced if the acrylic is
                    removed and only the cement base is used. The cracking would be the cause of this. You
                    should expect cracking between 8 and 14 years.
                  </p>

                  <h3>Which option is best: limewash, render or paint?</h3>

                  <figure className="relative my-8 aspect-[1024/597] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/01/engineer-is-checking-the-house-after-the-renovate-1024x597.jpg"
                      alt="Engineer checking the house after the renovation"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Here is a quick checklist for the homeowners in Sydney to help you decide which residential
                    painting service you will need for your brick home-
                  </p>

                  <div className="not-prose my-8 overflow-x-auto">
                    <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
                      <thead>
                        <tr className="border-b-2 border-brand-navy/20">
                          <th className="px-3 py-3 font-heading font-bold text-brand-navy">Your Primary Concern</th>
                          <th className="px-3 py-3 font-heading font-bold text-brand-navy">Best Option</th>
                          <th className="px-3 py-3 font-heading font-bold text-brand-navy">Why This Works</th>
                        </tr>
                      </thead>
                      <tbody>
                        {COMPARISON_ROWS.map((row) => (
                          <tr key={row.concern} className="border-b border-black/10">
                            <td className="px-3 py-3 text-black/80">{row.concern}</td>
                            <td className="px-3 py-3 font-semibold text-brand-teal">{row.option}</td>
                            <td className="px-3 py-3 text-black/80">{row.why}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h3>Conclusion</h3>
                  <p>
                    Now that you know all the pros and cons of paint, limewash and render, it is easy for you to
                    make a clear decision on which finish to choose. If you already selected one or are still
                    confused, you can{" "}
                    <Link href="/contact-us/">
                      take help from professionals like <strong>Priority One Coatings</strong>
                    </Link>
                    .
                    After inspecting your house and understanding the condition of the surface, our team will
                    provide the best residential painting service all over Sydney.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Limewash, Paint, or Render Your Brick House")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Limewash, Paint, or Render Your Brick House")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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

              <aside className="flex flex-col lg:w-1/3">
                <div className="mb-[25px] bg-white px-[30px] py-[50px] pb-[70px] text-center">
                  <svg
                    className="mx-auto"
                    width="90"
                    height="91"
                    viewBox="0 0 146 147"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="73" cy="73.4375" r="73" fill="#00396D" fillOpacity="0.06" />
                    <circle cx="73" cy="73.4375" r="72.5" stroke="#00A2B1" strokeOpacity="0.2" />
                    <path
                      d="M48.0128 37.4375C44.6011 37.4375 41.641 40.2712 41.641 43.8807V45.8654C39.5219 46.3716 38 47.6863 38 49.2884C38 50.8904 39.5219 52.2338 41.641 52.7401V54.9261C41.641 58.4993 44.5158 61.3693 47.9275 61.3693H53.6735C53.8874 62.4687 54.2691 63.5048 54.8397 64.3896C55.7213 65.7562 57.1421 66.892 58.9359 66.892C60.7297 66.892 62.1505 65.7562 63.0321 64.3896C63.6027 63.5048 63.9843 62.4687 64.1983 61.3693H93.5256C96.9373 61.3693 99.8974 58.5356 99.8974 54.9261V51.3594C102.722 51.9644 105.359 55.2713 105.359 59.5284V67.8125C105.359 72.514 102.401 75.1134 98.9872 75.1761C98.9776 75.1763 98.9683 75.176 98.9587 75.1761H68.9487C68.4659 75.1762 68.0029 75.3702 67.6615 75.7154C67.3201 76.0606 67.1283 76.5288 67.1282 77.017V90.8239H66.2179C63.6388 90.8239 61.6667 93.0183 61.6667 95.4261V113.835C61.6667 116.243 63.6388 118.438 66.2179 118.438H71.6795C74.2586 118.438 76.2308 116.243 76.2308 113.835V95.4261C76.2308 93.0183 74.2586 90.8239 71.6795 90.8239H70.7692V78.858H98.9872C98.9967 78.858 99.0061 78.858 99.0156 78.858C104.369 78.7819 109 74.2237 109 67.8125V59.5284C109 53.464 105.092 48.1753 99.8974 47.62V43.8807C99.8974 40.2712 96.9373 37.4375 93.5256 37.4375H48.0128ZM48.0128 41.1193H93.5256C94.8617 41.1193 96.2564 42.3909 96.2564 43.8807V54.9261C96.2564 56.416 94.8617 57.6875 93.5256 57.6875H64.3974C64.4008 57.4436 64.3563 57.2014 64.2663 56.975C64.1764 56.7486 64.0428 56.5426 63.8734 56.3689C63.704 56.1951 63.5022 56.0572 63.2796 55.963C63.057 55.8689 62.8182 55.8204 62.5769 55.8204C62.3357 55.8204 62.0968 55.8689 61.8742 55.963C61.6517 56.0572 61.4498 56.1951 61.2804 56.3689C61.111 56.5426 60.9775 56.7486 60.8875 56.975C60.7976 57.2014 60.753 57.4436 60.7564 57.6875V59.5284C60.7564 60.6207 60.4231 61.7022 59.9884 62.3761C59.5537 63.0499 59.1593 63.2102 58.9359 63.2102C58.7125 63.2102 58.3181 63.0499 57.8834 62.3761C57.4487 61.7022 57.1154 60.6207 57.1154 59.5284V57.6875C57.1192 57.4409 57.074 57.196 56.9824 56.9675C56.8908 56.7389 56.7548 56.5312 56.5823 56.3568C56.4099 56.1825 56.2045 56.0449 55.9785 55.9523C55.7524 55.8597 55.5103 55.814 55.2664 55.8178C55.0274 55.8216 54.7914 55.873 54.5719 55.969C54.3525 56.065 54.1539 56.2037 53.9874 56.3773C53.821 56.551 53.6901 56.756 53.602 56.9808C53.514 57.2056 53.4706 57.4457 53.4744 57.6875H47.9275C46.5914 57.6875 45.2821 56.4523 45.2821 54.9261V43.8807C45.2821 42.3909 46.6767 41.1193 48.0128 41.1193ZM88.7752 43.8519C88.3228 43.9022 87.9053 44.122 87.6052 44.4681C87.3051 44.8142 87.1441 45.2614 87.1538 45.7216V47.5625C87.1538 48.3005 86.8467 49.074 86.4143 49.6048C85.9819 50.1355 85.4782 50.3239 85.3333 50.3239C85.1884 50.3239 84.6848 50.1355 84.2524 49.6048C83.82 49.074 83.5128 48.3005 83.5128 47.5625C83.5162 47.3186 83.4717 47.0764 83.3817 46.85C83.2917 46.6236 83.1582 46.4176 82.9888 46.2439C82.8194 46.0701 82.6176 45.9322 82.395 45.838C82.1724 45.7439 81.9336 45.6954 81.6923 45.6954C81.451 45.6954 81.2122 45.7439 80.9896 45.838C80.767 45.9322 80.5652 46.0701 80.3958 46.2439C80.2264 46.4176 80.0929 46.6236 80.0029 46.85C79.913 47.0764 79.8684 47.3186 79.8718 47.5625C79.8718 49.2574 80.4894 50.7725 81.4363 51.9347C82.3832 53.0968 83.7132 54.0057 85.3333 54.0057C86.9534 54.0057 88.2835 53.0968 89.2304 51.9347C90.1772 50.7725 90.7949 49.2574 90.7949 47.5625V45.7216C90.7987 45.475 90.7535 45.2301 90.6619 45.0016C90.5703 44.773 90.4343 44.5653 90.2618 44.3909C90.0894 44.2165 89.884 44.079 89.658 43.9864C89.4319 43.8938 89.1898 43.8481 88.9459 43.8519C88.8891 43.8492 88.8321 43.8492 88.7752 43.8519ZM66.2179 94.5057H71.6795C72.3365 94.5057 72.5897 94.9024 72.5897 95.4261V113.835C72.5897 114.359 72.3365 114.756 71.6795 114.756H66.2179C65.5609 114.756 65.3077 114.359 65.3077 113.835V95.4261C65.3077 94.9024 65.5609 94.5057 66.2179 94.5057Z"
                      fill="#00A2B1"
                    />
                  </svg>
                  <h3 className="mt-[30px] text-[30px] font-bold leading-[34px] text-brand-navy">
                    Transform Your Property
                  </h3>
                  <p className="my-[10px] text-[23px] font-bold leading-[35px] text-brand-teal">
                    with Professional Painters in Sydney
                  </p>
                  <p className="text-black/70">
                    Elevate your property with Priority One Coatings, experts in painting, decorating, and
                    interior/exterior makeovers.
                  </p>
                  <p className="mt-2 text-black/70">
                    Experience a vibrant new look for your home or business. Book your free consultation today.
                  </p>
                  <Link
                    href="/contact-us/"
                    className="mt-10 inline-block w-full max-w-[300px] bg-brand-teal py-[13px] text-[18px] font-bold text-white transition-colors hover:bg-brand-teal-dark"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="bg-white p-[50px]">
                  <h2 className="font-heading text-xl font-bold text-brand-navy">Recent Posts</h2>
                  <ul className="mt-5 space-y-3">
                    {RECENT_POSTS.map((post) => (
                      <li key={post.href}>
                        <Link href={post.href} className="text-black transition-colors hover:text-brand-teal">
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <h2 className="mt-10 font-heading text-xl font-bold text-brand-navy">Categories</h2>
                  <ul className="mt-5 space-y-3">
                    {CATEGORIES.map((cat) => (
                      <li key={cat}>
                        <Link
                          href={CATEGORY_LINKS[cat]}
                          className="text-black transition-colors hover:text-brand-teal"
                        >
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
