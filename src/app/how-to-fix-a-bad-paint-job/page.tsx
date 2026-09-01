import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Fix a Bad Paint Job: Common Painting Mistakes | Priority One Coatings",
  description:
    "Whether it's streaks, roller marks, or uneven coverage, a bad paint job is frustrating. Check fixes that will help you without repainting the entire surface.",
};

const POST_URL = "https://www.prioritycoatings.com.au/how-to-fix-a-bad-paint-job/";

const CATEGORY_LINKS: Record<string, string> = {
  "Commercial Painting": "/category/commercial-painting/",
  DIY: "/category/diy/",
  News: "/category/news/",
  "Residential painting": "/category/residential-painting/",
};

const CATEGORIES = Object.keys(CATEGORY_LINKS);

const RECENT_POSTS = [
  {
    title: "Essential Things to Know Before Painting Your Home Interiors",
    href: "/things-to-know-before-painting-home-interiors/",
  },
  {
    title: "Painting Commercial Building: The Best Practice Guide",
    href: "/painting-commercial-building-the-best-practice-guide/",
  },
  {
    title: "Winter Exterior Painting In Sydney: Essential Tips",
    href: "/winter-exterior-house-painting-dos-and-donts/",
  },
  {
    title: "The Cost of Painting A Commercial Space",
    href: "/cost-of-painting-commercial-buildings/",
  },
  {
    title: "House Paint Colour Trends 2026: For Australian Homes",
    href: "/house-paint-colours-trend-2026/",
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

export default function HowToFixABadPaintJobPage() {
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
                  How to Fix a Bad Paint Job: Common Painting Mistakes
                </h1>

                <p className="mt-4 text-[15px] text-black/60">April 30, 2026</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/how-to-fix-bad-paint-job-blog-banner.jpg"
                    alt="how to fix bad paint job blog banner"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    A fresh coat of paint has the transformative power to bring new life into any space, be it a
                    small apartment or a big house. A simple layer of paint works like an identification of the
                    property and reflects the owner&rsquo;s taste. So, no one wants their space&rsquo;s paint job to
                    look untidy and uneven. But no matter how unwanted it is, sometimes a paint job falls short of
                    expectations and gets the tag of a bad paint job.
                  </p>

                  <p>
                    Fear not! Whether it&rsquo;s peeling paint, uneven coverage, roller marks, or streaks, or simply
                    not meeting your choice, an imperfect paint finish doesn&rsquo;t have to permanently mark your
                    living space. In this article, we will discover the different tactics for rectifying a poor
                    paint job, providing you with the insights and practical steps needed to turn flaws into a
                    masterpiece. Before that, we will reflect on various types of faulty paint finishes and the
                    reasons behind them, because knowing the root cause is necessary to solve any problem. So,
                    let&rsquo;s start.
                  </p>

                  <h3>What is a poor paint job?</h3>

                  <p>
                    A subpar paint job refers to a painting project that falls below expected standards, resulting
                    in visual or functional issues. Here are some common conditions that create a terrible paint
                    job:
                  </p>

                  <ul>
                    <li>
                      <strong>Peeling</strong> &ndash; The paint layer begins to detach from the surface.
                    </li>
                    <li>
                      <strong>Uneven finish</strong> &ndash; The painted surface lacks a smooth and consistent
                      appearance, with noticeable variations in texture.
                    </li>
                    <li>
                      <strong>Cracking</strong> &ndash; Small cracks or flakes develop in the paint, compromising
                      the integrity of the coating.
                    </li>
                    <li>
                      <strong>Blistering</strong> &ndash; Bubbles form on the painted surface, usually due to
                      trapped moisture.
                    </li>
                    <li>
                      <strong>Colour Inconsistency</strong> &ndash; Variation in tones or hues across the painted
                      surface.
                    </li>
                    <li>
                      <strong>Stains</strong> &ndash; Unsightly stains or discolouration appear on the painted
                      surface.
                    </li>
                    <li>
                      <strong>Poor Edges and Corners</strong> &ndash; Uneven or poorly defined edges and corners,
                      making the paint job appear sloppy.
                    </li>
                    <li>
                      <strong>Drips and Runs</strong> &ndash; Visible streaks or drips of paint running down the
                      surface, leading to an uneven appearance.
                    </li>
                  </ul>

                  <h3>What are the reasons behind an amateur paint finish?</h3>

                  <figure className="relative my-8 aspect-[1024/589] w-full overflow-hidden">
                    <Image
                      src="/images/white-paint-with-essentials-equipments-1024x589.jpg"
                      alt="wall colour change white paint with essentials equipment"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h4>Insufficient Surface Preparation:</h4>

                  <p>
                    When the painters lack expertise in painting, they may overlook the importance of cleaning,
                    sanding, and priming surfaces before applying paint. Failing to remove dirt, grease, or loose
                    paint can hinder the grip of the new paint, leading to issues such as peeling, uneven texture,
                    or poor coverage.
                  </p>

                  <h4>Poor Quality Materials:</h4>

                  <p>
                    Another reason for an uneven paint finish is the use of low-quality materials. A common tendency
                    in painting jobs is the temptation to cut costs by opting for cheap tools that initially look
                    like a great deal, but the results show the opposite. Substandard materials such as paint,
                    brushes, or rollers often result in uneven application, colour inconsistency, and an
                    unsatisfactory finish.
                  </p>

                  <h4>Lack of Technique:</h4>

                  <p>
                    DIY painters or unskilled ones may lack the proper painting techniques required for a
                    professional finish. Issues such as visible brush strokes, roller marks, or drips can arise from
                    improper application methods. Techniques like feathering edges, using the correct strokes, and
                    maintaining a consistent application rate are impossible without proper knowledge.
                  </p>

                  <h4>Rush in Processing:</h4>

                  <p>
                    Painters, mostly those who do it by themselves, may not allow sufficient drying time between
                    coats, as they are always impatient to see if they did the whole work correctly. This eagerness
                    leads to issues such as smudging, streaking, or damage to the underlying layers. Rushing the
                    painting process also increases the likelihood of making mistakes, such as accidentally touching
                    wet paint.
                  </p>

                  <h4>Environmental impact:</h4>

                  <p>
                    Factors created by the environment, such as high humidity levels or extraordinarily high or low
                    temperatures during painting, can affect the consistency and drying time of the paint. Windy
                    conditions can introduce dust and debris into the wet paint, creating a textured appearance in
                    the finish. Additionally, seasonal changes may result in higher humidity levels that can promote
                    the{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/common-causes-peeling-paint-walls/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      growth of mould and mildew
                    </a>{" "}
                    over time.
                  </p>

                  <h3>Tips to follow in fixing a subpar paint job</h3>

                  <figure className="relative my-8 aspect-[1024/580] w-full overflow-hidden">
                    <Image
                      src="/images/woman-painter-in-a-protective-helmet-and-vest-with-paint-roller-1024x580.jpg"
                      alt="woman painter in a protective helmet and vest with paint roller"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h4>Focusing on Preparing the Walls:</h4>

                  <p>
                    The most effective trick in fixing a bad paint job is meticulous preparation of the walls.
                    Proper surface preparation, including cleaning, sanding, and patching imperfections, sets the
                    foundation for a successful repaint. If doing it by yourself, take the time to inspect the walls
                    for any issues such as peeling, cracks, or stains, and scrape off any loose paint from previous
                    work before applying new paint. This step ensures a clean canvas, promoting better adhesion and
                    a more polished final result.
                  </p>

                  <h4>Providing Adequate Drying Time:</h4>

                  <p>
                    A fundamental tip in fixing a bad paint job is to ensure adequate drying time between coats.
                    Rushing the drying process can lead to various issues, such as uneven texture, smudging, and
                    compromised adhesion. Following the manufacturer&rsquo;s recommendations for drying times
                    between coats and before any touch-ups is crucial. Patiently allowing each layer to dry
                    thoroughly contributes to a smoother, more professional finish.
                  </p>

                  <p>
                    But sometimes, there might be environmental conditions affecting drying times. If you are doing
                    it by yourself, consider adjusting the painting schedule accordingly, choosing days with
                    favourable weather. That&rsquo;s why it&rsquo;s best if you select an{" "}
                    <Link href="/residential-painters/">experienced house painter in Sydney</Link> who understands
                    the right time for residential painting and performs their job in perfect weather to avoid
                    problems.
                  </p>

                  <h4>Using Spray Cleaners for Quick Fixes:</h4>

                  <p>
                    For minor imperfections or stains on a painted surface, using spray cleaners can be an
                    effective, quick fix. Choose a cleaner appropriate for the type of stain or issue you&rsquo;re
                    dealing with, such as a grease cleaner for kitchen walls. Lightly spray the affected area and
                    gently wipe or scrub away the stain. However, it&rsquo;s essential to test the cleaner in an
                    inconspicuous area first to ensure it doesn&rsquo;t negatively affect the paint.
                  </p>

                  <h4>Getting it Repainted by the Professional:</h4>

                  <p>
                    As a house owner in Sydney, if you want to get rid of the poor paint finish in a more
                    hassle-free way, seeking the expertise of a professional painter is a wise choice.{" "}
                    <Link href="/">Professional Sydney painting services</Link> have skilled painters who are
                    experienced and knowledgeable enough to assess the underlying problems. They can recommend
                    appropriate solutions and execute a high-quality repaint. Whether it involves fixing adhesion
                    issues, colour inconsistencies, or more complex problems, the precision of an expert can
                    transform a subpar paint job into a refined and durable finish.
                  </p>

                  <h4>Inspecting and Final Touch:</h4>

                  <p>
                    After completing the necessary fixes, a thorough inspection of the painted surface is essential.
                    Examine the entire area for any remaining imperfections, unevenness, or colour disparities.
                    Address any remaining issues with additional touch-ups as needed. In this case, choosing a
                    reputable painting company in Sydney is more advantageous because they allow enough time for
                    every client to inspect the site correctly and leave only when you are fully satisfied.
                  </p>

                  <h3>Last Words</h3>

                  <p>
                    In conclusion, mistakes in painting are common when we tend to do it by ourselves or hire
                    inexperienced painters to save some money. But as a result, you often pay more to fix the faulty
                    paint finish. So, if you want to actually save your time and money and give your property an
                    appealing look, it is the best option to{" "}
                    <Link href="/contact-us/">contact your local professional painters</Link>. Their expertise will
                    save your space from a bad paint job and you from the worries regarding fixing it.
                  </p>

                  <figure className="relative my-8 aspect-[1024/338] w-full overflow-hidden">
                    <Image
                      src="/images/how-to-fix-a-bad-paint-job-cta-banner-1-1024x338.jpg"
                      alt="how to fix a bad paint job CTA banner"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>Frequently Asked Questions</h3>

                  <h4>Does the weather affect paint quality in Australia?</h4>

                  <p>
                    Yes, significantly. High humidity is common in Sydney, Brisbane, and coastal regions, which can
                    extend drying times and promote mould and mildew growth beneath paint.
                  </p>

                  <h4>Why is my freshly painted wall already peeling?</h4>

                  <p>
                    Peeling almost always points to inadequate surface preparation before painting. If the surface
                    wasn&rsquo;t properly cleaned, sanded, or primed beforehand, the new paint has nothing to
                    properly bond to. Dirt, grease, moisture, and old, loose paint all prevent adhesion &mdash;
                    meaning the new coat will begin to lift and peel far sooner than it should. The fix is to strip
                    back the affected areas, prepare the surface correctly, and repaint using the right primer and
                    topcoat.
                  </p>

                  <h4>Why does my paint have bubbles or blisters?</h4>

                  <p>
                    Blistering is caused by trapped moisture or air beneath the paint film. This typically happens
                    when paint is applied to a damp surface, when a surface is painted in direct sunlight on a hot
                    day, causing the outer layer to dry too quickly, or when an incompatible primer or undercoat was
                    used. The blisters need to be scraped back, the surface dried and primed correctly, and then
                    repainted under appropriate conditions.
                  </p>

                  <h4>How can I prevent a bad paint job from happening in the first place?</h4>

                  <p>
                    Good results start with thorough preparation, like cleaning the surface, filling cracks and
                    holes, sanding rough areas, and applying the correct primer for your surface type. Use quality
                    paint and appropriate tools for the job. Allow adequate drying time between each coat, avoid
                    painting in extreme weather conditions, and take your time with edging and cut-in work around
                    trims and ceilings. Better still, engage a reputable professional painting company to ensure
                    every step is done the first time correctly.
                  </p>

                  <h4>How do I know if I should repaint or just touch up?</h4>

                  <p>
                    Touch-ups work best for isolated, minor issues &mdash; a small scuff, a single drip, or a tiny
                    patch of staining. If the problem is widespread, if colours have faded unevenly, or if the
                    existing paint is peeling or cracking across large sections, a full repaint will produce a far
                    better and more consistent result. A professional painter can assess your walls and give you an
                    honest recommendation on the most cost-effective course of action.
                  </p>

                  <h4>How do I fix uneven or patchy paint on my walls?</h4>

                  <p>
                    Start by lightly sanding the uneven areas to smooth out any ridges, roller marks, or brush
                    streaks. Clean the surface to remove any dust, then apply an additional coat of paint using a
                    consistent technique &mdash; maintaining a wet edge, using the right roller nap for your
                    surface, and working in sections. In many cases, a second or third coat applied correctly will
                    resolve patchiness. If the issue persists, the surface may need to be fully stripped and
                    repainted from scratch.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How to Fix a Bad Paint Job: Common Painting Mistakes")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How to Fix a Bad Paint Job: Common Painting Mistakes")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
