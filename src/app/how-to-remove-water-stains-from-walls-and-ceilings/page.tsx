import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Remove Water Stains on Walls & Ceilings | Priority One Coatings",
  description:
    "Water stains on walls and ceilings are a common Sydney home problem. Learn what causes them, how to remove them safely, and how to stop them from returning.",
};

const POST_URL = "https://www.prioritycoatings.com.au/how-to-remove-water-stains-from-walls-and-ceilings/";

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
    title: "Sustainable Commercial Painting Practices: Eco-Friendly Tips",
    href: "/sustainable-commercial-painting-eco-friendly-tips/",
  },
  {
    title: "How Painters Extend Sydney Home Exterior Lifespan",
    href: "/how-painters-extend-sydney-home-exterior-lifespan/",
  },
  {
    title: "House Paint Colour Trends 2026: For Australian Homes",
    href: "/house-paint-colours-trend-2026/",
  },
  {
    title: "The Cost of Painting A Commercial Space",
    href: "/cost-of-painting-commercial-buildings/",
  },
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

export default function HowToRemoveWaterStainsFromWallsAndCeilingsPage() {
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
                  How to Remove Water Stains on Walls &amp; Ceilings
                </h1>

                <p className="mt-4 text-[15px] text-black/60">February 16, 2023</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/water-stain-on-walls-and-ceilings.png"
                    alt="Water stain on walls and ceilings"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p className="italic text-black/60">
                    Written by the Priority One Coatings Team, Professional Painting Specialists
                  </p>

                  <p>
                    Water spots on walls and ceilings can be a frustrating problem for the homeowners of Sydney.
                    This commonly detected issue is not only an eyesore but also a result of serious underlying
                    conditions, including roof and plumbing leaks, overflowing gutters, or even condensation from
                    the AC unit.
                  </p>

                  <p>
                    If you are worried about how to get rid of water stains from your living space and are tired
                    of finding ways to cover them, you are at the right place. In this guide, we&rsquo;ll walk
                    together through some practical steps to effectively remove the water spots, leaving the walls
                    and ceilings looking as good as new.
                  </p>

                  <p>Get ready to transform your stained surfaces into a flawless masterpiece!</p>

                  <h3>Causes of the Unwanted Water Spots on Your Ceilings and Walls</h3>

                  <figure className="relative my-8 aspect-[9/5] w-full overflow-hidden">
                    <Image
                      src="/images/water-causing-damage-peeling-paint-and-mildew.jpg"
                      alt="Water damage causing peeling paint and mildew"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <ul>
                    <li>High indoor humidity in your home can cause condensation to form on surfaces and create stains.</li>
                    <li>Leaks from pipes, roofs or appliances can cause water seeps and lead to marks.</li>
                    <li>
                      If there are any cracks or holes in the roof, during heavy rain or snowfall, water can enter
                      the interiors and leave brown spots on ceilings and walls.
                    </li>
                    <li>
                      If exposed to water for a longer time,{" "}
                      <a
                        href="https://www.health.nsw.gov.au/environment/factsheets/Pages/mould.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        mould and mildew
                      </a>{" "}
                      may appear and form spots.
                    </li>
                  </ul>

                  <h3>How Do I Get Rid of Water Stains from My Home?</h3>

                  <p>
                    The brown spots of water can be damaging and often a sign of an existing issue that must be
                    addressed first. While dealing with this condition, most of us have a common concern regarding
                    painting over it, and we will also look into that.
                  </p>

                  <h3>Can You Paint Over a Water Stain on the Ceiling and Walls?</h3>

                  <p>
                    Yes, it is possible to cover the spot with the help of paint. First, you&rsquo;ll need a
                    stain-blocking primer or an oil-based paint to create a barrier that stops the water stain from
                    showing through. Then, you can apply an emulsion paint if necessary. But if you want a
                    long-term solution, just hiding it with a coat of paint will not help. It is always wise to
                    identify the source of the issue first, fix it and then repaint the surface.
                  </p>

                  <figure className="relative my-8 aspect-[9/5] w-full overflow-hidden">
                    <Image
                      src="/images/water-leak-damaged-ceiling-and-stain-on-the-ceiling.jpg"
                      alt="Water leak damaged ceiling and stain on the ceiling"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Fear not; following the process below, you can easily eliminate the problem from the root and
                    stop it from coming back in a few days.
                  </p>

                  <h3>Step 1: Locate the Sources and Fix Them</h3>

                  <p>
                    To mitigate the stain from an old leak, first locating the problem source is essential. After
                    finding the damaged area, seal it as soon as possible; thus, after rinsing off the stain, it
                    can&rsquo;t return to its old place.
                  </p>

                  <p>
                    It&rsquo;s always essential to address the source of the problem to prevent water spots from
                    reoccurring and to prevent further damage to the surface. If unsure of what&rsquo;s causing the
                    water stains, you can consult an expert to assess the situation.
                  </p>

                  <h3>Step 2: Remove the Water Stain</h3>

                  <p>
                    When the repair of the source is done, it&rsquo;s time to carry on to the next step, cleaning
                    the spots. Once the start of the problem is addressed, there are several practical methods for
                    removing water stains. You can use some DIY mixtures to rain off the marks. Here, we are going
                    to talk about the most effective remedies that can be used to find out the best result.
                  </p>

                  <h4>Liquid Soap Mixture</h4>

                  <p>
                    If the stain is not so serious, you can try a liquid soap solution mixed with warm water.
                    First, prepare the mixture using these two ingredients at a 1:2 ratio. Then, it&rsquo;s time to
                    soak a soft cloth in the detergent and rub it gently over the stain. If the patch is on the
                    wall, starting it from top to bottom would be better. Otherwise, it may have a new mark using
                    the cleanser.
                  </p>

                  <h4>Bleach Solution</h4>

                  <p>
                    A bleach mixture is a solid solution for removing wall and ceiling stains. All you need to do
                    is mix one part of bleach with three parts of water in a spray bottle to have the solution. It
                    can be said to be a 10% bleach and 90% water mixture. If the bleach is unavailable, the
                    bathroom cleaner can replace it because it contains bleach. It can also give protection from
                    mould and mildew.
                  </p>

                  <p>
                    After preparing the solution, it&rsquo;s time to apply it. Lightly mist the spray on the
                    watermark at first. Then, let it soak for 30 seconds or so. After that, mist again. Repeat the
                    process depending on the severity of the stain. After finishing the misting process, let them
                    stay for 5 to 10 minutes and wipe the area in a dapping motion with a clean cloth. Let the area
                    dry out. You can use a hair dryer in a cool setting to get a faster result.
                  </p>

                  <p>
                    Whether working on a wall or ceiling, the furniture around the place should be removed before
                    spraying. If you are cleaning a ceiling and there is a wall nearby, it would be better to cover
                    it with a long cloth to avoid accidents. Be extra{" "}
                    <Link href="/how-to-remove-popcorn-vermiculite-ceilings/">careful with popcorn ceiling</Link>{" "}
                    because bleach can chip away at it.
                  </p>

                  <figure className="relative my-8 aspect-[937/912] w-full max-w-[500px] overflow-hidden">
                    <Image
                      src="/images/tips-to-remove-water-stain-blog-image-napkin.ai_.png"
                      alt="Tips to remove water stains from walls and ceilings"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h4>Baking Soda Mix</h4>

                  <p>
                    Mixing baking soda and water can also wash away water spots. Prepare the solution in a bowl
                    using equal parts of baking soda and water to form a paste. Then, apply the paste over the
                    stained area and let it sit for 30 minutes. Afterwards, wipe the area with a clean cloth to
                    remove the stain and the paste. You can repeat the process until you have the desired result.
                  </p>

                  <h4>Vinegar Solution</h4>

                  <p>
                    Vinegar contains a powerful cleaning agent. Simply pour a spray bottle with white vinegar or
                    mix it with lemon juice and baking soda to make it more intense. Then, mist it over the
                    watermark and let it sit for an hour. After soaking it up using a damp cloth, wipe the area
                    with a clean cloth to remove the stain. It may take a couple of tries, depending on the
                    intensity of the mark. So, it&rsquo;s better to try this solution when there is enough time to
                    execute.
                  </p>

                  <p className="italic text-black/60">
                    It&rsquo;s always a good idea to test these solutions on a small, inconspicuous area first to
                    ensure they won&rsquo;t damage the surface. Also, wearing gloves and protecting the eyes is
                    essential when using these acidic solutions. If you&rsquo;re working with older buildings,
                    it&rsquo;s important to be aware that some older paints may contain hazardous materials, which
                    is why <Link href="/lead-paint-removal/">professional lead paint removal</Link> services should
                    be consulted when dealing with structures built before safety regulations were established.
                  </p>

                  <h3>Step 3: Repaint and Bring Back the Walls and Ceilings to Life</h3>

                  <Link href="/5-essential-tools-you-need-to-paint-your-house/">
                    <figure className="relative my-8 aspect-[1024/239] w-full overflow-hidden">
                      <Image
                        src="/images/essential-tools-for-house-painting-banner-1-1024x239.jpg"
                        alt="Essential tools for house painting"
                        fill
                        className="object-cover"
                      />
                    </figure>
                  </Link>

                  <p>
                    Sometimes, after removing the spots, the walls might seem discoloured. In that case, repainting
                    the marked area may be necessary to get walls and ceilings back to life. You can do it on your
                    own, but as the surface is critical to deal with, taking help from a professional house painter
                    in Sydney will be the best idea. The expert residential painters will solve any underlying
                    issue and use mould-resistant, water-resistant and high-quality paint that will provide full
                    coverage over patches.
                  </p>

                  <h3>Tips to Prevent Water Stains</h3>

                  <ul>
                    <li>Quickly fix any leaks in your home</li>
                    <li>Take care of the areas prone to moisture and ensure ventilation</li>
                    <li>Use water-resistant sealants on surfaces like bathroom tiles</li>
                    <li>Invest in weatherproofing doors and windows to prevent outside moisture</li>
                  </ul>

                  <h3>Last Words</h3>

                  <p>
                    No one likes any wall or ceiling to remain stained in their sweet home. As prevention is always
                    better, it is wise to invest time in your house maintenance and initially solve any issues that
                    might cause water spots in future.
                  </p>

                  <Link href="/tips-on-choosing-a-licensed-house-painter-within-sydney/">
                    <figure className="relative my-8 aspect-[1024/237] w-full overflow-hidden">
                      <Image
                        src="/images/choosing-a-licensed-house-painter-banner-1024x237.jpg"
                        alt="How to choose a licensed house painter"
                        fill
                        className="object-cover"
                      />
                    </figure>
                  </Link>

                  <p>
                    Moreover, if your walls are already stained, and you need expert help fixing them, Priority One
                    Coatings is there for you. Being an experienced painting company in Sydney, we can bring your
                    walls and ceilings back to life. Our{" "}
                    <Link href="/residential-painters/">residential painters in Sydney</Link> will work with you to
                    choose the perfect colour and finish, and our expert team will handle the whole painting
                    process with perfection.
                  </p>

                  <p>
                    If you are looking for businesses dealing with water damage or staining issues in their
                    facilities, our <Link href="/commercial-painting/">commercial painting contractors</Link> can
                    also provide professional solutions tailored to commercial properties.
                  </p>

                  <h3>Frequently Asked Questions</h3>

                  <h4>Why do water stains keep coming back?</h4>
                  <p>
                    Recurring stains usually indicate that the root cause &mdash; such as a leak or excess moisture
                    &mdash; has not been properly fixed. Without addressing the underlying issue, stains will
                    continue to bleed through new paint.
                  </p>

                  <h4>How can I prevent water stains in the future?</h4>
                  <p>
                    Regular maintenance is key &mdash; check your roof, plumbing, and ventilation systems, and
                    address leaks quickly. Proper sealing and using moisture-resistant paints in high-humidity
                    areas can also help prevent future issues.
                  </p>

                  <h4>When should I call professional painters?</h4>
                  <p>You should contact professionals if:</p>
                  <ul>
                    <li>The stain is large or keeps returning</li>
                    <li>There is visible mould or damage</li>
                    <li>You&rsquo;re unsure of the cause</li>
                    <li>You want a long-lasting, high-quality finish</li>
                  </ul>
                  <p>
                    Experienced painters like Priority One Coatings can properly treat the surface and ensure the
                    problem doesn&rsquo;t come back.
                  </p>

                  <h4>What is the best product to use on water stains before painting?</h4>
                  <p>
                    A shellac-based or oil-based stain-blocking primer is the most effective option. In Australia,
                    products such as Zinsser BIN and Zinsser Bulls Eye 1-2-3 are widely available and trusted by
                    professional painters. These primers are specifically formulated to seal stains, odours, and
                    discolouration before a topcoat is applied. Water-based stain blockers are also available for
                    lighter stains and are easier to clean up.
                  </p>

                  <h4>Do I need to fix the leak before treating the stain?</h4>
                  <p>
                    Yes &mdash; absolutely. Treating the stain without fixing the source of moisture is a temporary
                    measure at best. Water will continue to penetrate the surface, and the stain will return, often
                    worse than before. If the leak is from a roof, plumbing, or an upstairs bathroom, have it
                    professionally inspected and repaired before beginning any painting or stain treatment work.
                  </p>

                  <h4>Can water stains on ceilings be a sign of mould?</h4>
                  <p>
                    Yes. Where there is persistent moisture, mould growth is a real risk &mdash; and it can develop
                    behind the surface as well as on it. If your water stain has a dark, greenish, or black
                    discolouration, or if you notice a musty smell, mould may already be present. In this case, the
                    affected area should be treated with an appropriate mould-killing solution before priming and
                    repainting. For large or recurring mould problems, it is strongly recommended to consult a
                    professional.
                  </p>

                  <h4>How do I know if the water damage has dried out completely?</h4>
                  <p>
                    It&rsquo;s important not to rush the repair process. A surface that feels dry to the touch may
                    still retain moisture underneath. A general rule is to wait at least 24&ndash;48 hours after
                    the leak has been fixed before assessing the surface. In cases of significant water damage, it
                    can take several days or longer for the wall or ceiling to dry fully. Professional painters
                    often use moisture meters to confirm that a surface is ready for treatment.
                  </p>

                  <h4>Will the repainted area match the rest of my ceiling or wall?</h4>
                  <p>
                    Achieving a perfect colour match after a repair can be challenging, especially on older painted
                    surfaces that have faded over time. The best results come from using the original paint colour
                    where possible, feathering the edges of the new paint carefully, and applying a full coat
                    across the entire ceiling or wall section rather than just spot-painting. If the original paint
                    colour is unknown, a professional painter can colour-match using a paint spectrometer for a
                    seamless result.
                  </p>

                  <h4>How much does it cost to treat and repaint water-stained walls or ceilings in Sydney?</h4>
                  <p>
                    Costs vary depending on the size of the affected area, the extent of the damage, and whether
                    mould treatment or plaster repair is required. As a general guide, professional treatment and
                    repainting of a water-stained ceiling in Sydney can range from $200&ndash;$600 for a single
                    room. Larger jobs involving structural repairs or full-room repaints will be priced accordingly.
                    Priority One Coatings offers free, no-obligation quotes for all water damage painting work
                    across Sydney.
                  </p>

                  <div className="mt-10 rounded-md border-l-4 border-brand-teal bg-[#f3fafb] px-7 py-6">
                    <h3 className="mt-0">Need Help Fixing Water-Stained Walls or Ceilings?</h3>
                    <p>
                      Our residential painters can identify the cause, treat the surface properly and repaint it to
                      a flawless, long-lasting finish.
                    </p>
                    <p className="mb-0">
                      Call Priority One Coatings on <a href="tel:+61298085900">02 9808 5900</a>, email{" "}
                      <a href="mailto:jenny@prioritycoatings.com.au">jenny@prioritycoatings.com.au</a>, or{" "}
                      <Link href="/contact-us/">request a free quote online</Link> and find out more about our full
                      range of Sydney painting services.
                    </p>
                  </div>
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How to Remove Water Stains on Walls & Ceilings")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How to Remove Water Stains on Walls & Ceilings")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
