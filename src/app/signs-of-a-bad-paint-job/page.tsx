import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Signs of a Bad Paint Job: Understand Painting Mistakes | Priority One Coatings",
  description:
    "Peeling, bubbling, or uneven paint? Spot the signs of a bad paint job before it's too late and get professional solutions from Priority One Coatings.",
};

const POST_URL = "https://www.prioritycoatings.com.au/signs-of-a-bad-paint-job/";

const CATEGORY_LINKS: Record<string, string> = {
  "Commercial Painting": "/category/commercial-painting/",
  DIY: "/category/diy/",
  News: "/category/news/",
  "Residential painting": "/category/residential-painting/",
};

const CATEGORIES = Object.keys(CATEGORY_LINKS);

const RECENT_POSTS = [
  {
    title: "How to Fix a Bad Paint Job: Common Painting Mistakes",
    href: "/how-to-fix-a-bad-paint-job/",
  },
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

export default function SignsOfABadPaintJobPage() {
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
                  Signs of a Bad Paint Job: Understand Painting Mistakes
                </h1>

                <p className="mt-4 text-[15px] text-black/60">April 20, 2026</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/04/peeling-pink-and-yellow-paint-on-the-wall.jpg"
                    alt="peeling pink and yellow paint on the wall"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    If you&rsquo;ve recently had your home painted or you&rsquo;re eyeing peeling walls and
                    wondering where it all went wrong, you&rsquo;re not alone. While you are hoping a fresh coat of
                    paint will transform your property, a poor paint job can do the opposite. Making surfaces look
                    worse than before while costing you more money in repairs down the track.
                  </p>

                  <p>
                    The quality of a paint job is not always apparent during completion. Specifically, the adhesion
                    problems can take up to 12 to 24 months to surface. At that time, a painting contractor may be
                    difficult to hold accountable. So, recognising the signs of a bad paint job early can save time,
                    money, and frustration.
                  </p>

                  <h3>Why Paint Quality Matters</h3>

                  <p>
                    Paint does more than make a space look beautiful. It protects your walls, ceilings, and exterior
                    surfaces from moisture, UV damage, mould, and general wear and tear. When paint is applied
                    incorrectly &mdash; whether due to poor preparation, cheap materials, or rushed workmanship
                    &mdash; those protective benefits disappear fast. What you&rsquo;re left with is a surface that
                    looks patchy, peels prematurely, and may even harbour hidden moisture damage underneath.
                  </p>

                  <p>
                    Considering Sydney&rsquo;s climate, humidity, coastal salt air, and harsh summer sun can be
                    relentless on building surfaces. So, the quality of a paint job and{" "}
                    <Link href="/residential-painters/">hiring the right house painters</Link> matters even more
                    compared to other cities.
                  </p>

                  <h3>Common Signs of a Bad Paint Job</h3>

                  <p>
                    Most common signs of low-quality painting are the inevitable results of a cheap paint job. Here
                    are some of the most common painting mistakes to watch for on any painted surface:
                  </p>

                  <ul>
                    <li>
                      <strong>Visible Brush Marks and Roller Stippling</strong> &ndash; Some texture is normal, but
                      pronounced brush streaks or heavy roller marks indicate poor technique or the wrong tools were
                      used for the job. A quality finish should be smooth and consistent.
                    </li>
                    <li>
                      <strong>Drips and Runs</strong> &ndash; Paint drips and runs down a wall are a telltale sign
                      of overloading the brush or roller and not catching mistakes in time. These are completely
                      avoidable with proper technique and attentiveness.
                    </li>
                    <li>
                      <strong>Bleeding Colours and Poor Cut-In Lines</strong> &ndash; Clean, sharp edges where walls
                      meet ceilings, trims, and cornices are the mark of a skilled painter. If colours bleed into
                      one another, or the cut-in lines are wobbly and inconsistent, the painter lacked either the
                      skill or the patience to do it properly.
                    </li>
                    <li>
                      <strong>Bubbling and Blistering</strong> &ndash; Paint that bubbles up or blisters shortly
                      after application is almost always the result of poor surface preparation &mdash; painting
                      over a dirty, damp, or previously peeling surface traps air and moisture underneath, causing
                      the film to lift.
                    </li>
                    <li>
                      <strong>Wrong Sheen or Finish</strong> &ndash; Using the wrong type of paint for a particular
                      surface is a common but costly mistake. High-gloss paint on a textured ceiling, or flat paint
                      in a bathroom, can result in a finish that looks out of place and wears down far too quickly.
                    </li>
                  </ul>

                  <h3>Interior Paint Defects: What to Look For Inside Your Home</h3>

                  <p>
                    Interior paint defects are often most visible under proper lighting. Walk through each room with
                    a critical eye and look for the following:
                  </p>

                  <h4>Lap Marks</h4>

                  <p>
                    Lap marks appear as stripes of uneven texture or colour where a painter continued applying paint
                    over sections that had already begun to dry. This is most obvious on large, open walls and
                    ceilings where the overlap between wet and dry paint creates a visible ridge or colour
                    variation.
                  </p>

                  <h4>Poor Surface Preparation</h4>

                  <p>
                    A professional wall preparation includes filling all the cracks and holes, sanding and using
                    primer. It helps to remove all the imperfections of old paint before the painting begins. If you
                    can still see old damage beneath a new coat, the painter skipped critical prep steps.
                  </p>

                  <h4>Mould and Mildew Growth</h4>

                  <p>
                    Interior{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/painting-over-mould/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      mould growth underneath or through paint
                    </a>{" "}
                    &mdash; particularly in bathrooms, laundries, and kitchens &mdash; usually means
                    moisture-resistant paint wasn&rsquo;t used, or the surface wasn&rsquo;t properly treated before
                    painting. This is not just a cosmetic issue; it is a health concern.
                  </p>

                  <h4>Paint on Fixtures, Trims, and Hardware</h4>

                  <p>
                    Splatters and smears on light switches, door handles, skirting boards, and window frames that
                    weren&rsquo;t properly masked off suggest a rushed or careless job.
                  </p>

                  <h4>Ceiling Paint on Walls or Vice Versa</h4>

                  <p>
                    Ceiling and wall paints are formulated differently. If ceiling paint has crept down onto the
                    walls or wall paint has made its way onto the ceiling, the cut-in work was not done carefully,
                    and the finish won&rsquo;t hold up as well over time.
                  </p>

                  <h4>Unprimed Surfaces</h4>

                  <p>
                    Primer is the foundation of a lasting paint job. Without it, paint adhesion is weak, colours may
                    appear dull, and surfaces absorb paint unevenly. On new plaster or patched areas in particular,
                    skipping primer almost always leads to a visible and premature failure.
                  </p>

                  <h3>Exterior Paint Defects: What to Look For Outside Your Home</h3>

                  <p>
                    Sydney&rsquo;s outdoor environment demands solid exterior paint on the building surface. As sun,
                    rain, wind, and salt air mean exterior wear and tear often emerge faster and cause more damage
                    than interior ones.
                  </p>

                  <h4>Peeling and Flaking</h4>

                  <p>
                    Peeling paint on the exterior of a home is one of the most serious signs of a failed paint job.
                    It almost always points to inadequate surface cleaning and preparation before painting, meaning
                    the paint never properly bonded with the surface underneath. Left untreated, moisture can enter
                    and cause significant structural damage.
                  </p>

                  <h4>Chalking</h4>

                  <p>
                    As paint ages and breaks down under UV exposure, it can produce a white, chalky residue on the
                    surface. While some chalking is normal over many years, excessive chalking shortly after
                    painting suggests a low-quality paint was used, or the wrong type of paint was selected for the
                    exposure level.
                  </p>

                  <h4>Cracking and Alligatoring</h4>

                  <p>
                    Alligatoring refers to a pattern of cracks in paint that resembles reptile scales. It typically
                    occurs when a new coat of paint was applied over a surface that wasn&rsquo;t properly cleaned or
                    over paint that had already begun to fail. It can also result from applying a hard topcoat over
                    a softer undercoat without adequate drying time.
                  </p>

                  <h4>Efflorescence</h4>

                  <p>
                    Efflorescence appears as white, salt-like deposits on rendered or masonry surfaces. It occurs
                    when water moves through a surface and carries soluble salts outward. If a painter didn&rsquo;t
                    address this issue before painting &mdash; or used the{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/efflorescence-in-masonry/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      wrong type of paint on a masonry surface
                    </a>{" "}
                    &mdash; it will continue to push through and cause the paint film to fail.
                  </p>

                  <h4>Fading and Colour Inconsistency</h4>

                  <p>
                    Exterior paint that fades rapidly or develops colour inconsistencies across a surface usually
                    means a low-pigment or low-quality product was used, or that insufficient coats were applied.
                    Sydney has a UV-intense environment, so premium exterior paint with UV-resistant properties is
                    non-negotiable.
                  </p>

                  <h4>Rust Staining Around Metal Fixtures</h4>

                  <p>
                    If rust is bleeding through paint around nails, screws, or metal fixtures, it means the metal
                    was not properly primed with a rust-inhibiting primer before painting. Over time, this rust will
                    spread and compromise the surrounding surface.
                  </p>

                  <h3>When Should You Hire Professional Painters?</h3>

                  <p>
                    Not every bad paint job requires a full repaint, but there are situations where{" "}
                    <a href="tel:+0298085900">calling in professional painters</a> is absolutely the right move:
                  </p>

                  <ul>
                    <li>
                      First impressions matter enormously before buying or selling a property. Professional painters
                      ensure a flawless, consistent finish that adds real value to your home.
                    </li>
                    <li>
                      When defects keep recurring, if you&rsquo;ve repainted a surface yourself and the same issues
                      keep appearing &mdash; peeling, bubbling, mould &mdash; there&rsquo;s an underlying issue that
                      needs expert diagnosis and treatment.
                    </li>
                    <li>
                      When dealing with large or complex surfaces. Multi-storey exteriors, vaulted ceilings,
                      intricate cornicing, and heritage features all require specialised skills and equipment.
                    </li>
                    <li>
                      When the damage involves moisture or structural issues, professionals can identify whether
                      paint failure is a symptom of a larger problem &mdash; such as rising damp, leaking gutters,
                      or inadequate waterproofing &mdash; and recommend the right course of action.
                    </li>
                    <li>
                      When you&rsquo;re a property manager with multiple sites, maintaining consistent quality
                      across a rental portfolio requires reliable, experienced tradespeople who can work efficiently
                      and to a professional standard every time.
                    </li>
                  </ul>

                  <p>
                    A professional painter doesn&rsquo;t just apply paint &mdash; they prepare surfaces correctly,
                    use the right products for each application, and stand behind their work.
                  </p>

                  <h3>Frequently Asked Questions</h3>

                  <h4>How long should a quality paint job last?</h4>

                  <p>
                    Interior paint can last 5&ndash;10 years, while exterior paint typically lasts 5&ndash;7 years,
                    depending on conditions and quality.
                  </p>

                  <h4>Can bad paint jobs be fixed?</h4>

                  <p>
                    Yes, but it often requires sanding, proper preparation, and repainting&mdash;sometimes from
                    scratch.
                  </p>

                  <h4>Can I claim compensation if a painter does a bad job?</h4>

                  <p>
                    Yes. In New South Wales, painting work over $5,000 is covered under the Home Building Act. You
                    may be entitled to a defect rectification if the work is incomplete or not fit for purpose.
                    Always ensure your painter is licensed and provides a written contract.
                  </p>

                  <h4>What causes paint to peel so quickly after application?</h4>

                  <p>
                    Peeling is almost always caused by inadequate surface preparation &mdash; painting over dirty,
                    damp, or poorly primed surfaces prevents proper adhesion. It can also result from using a
                    low-quality paint product or applying paint in unsuitable weather conditions.
                  </p>

                  <h4>Is bubbling paint a serious problem?</h4>

                  <p>
                    Yes. Paint bubbling often indicates that moisture or air is trapped underneath. If not addressed
                    properly and left untreated, it can lead to mould growth and surface damage. And ultimately ruin
                    the finish of the newly painted surface. The affected area typically needs to be stripped back,
                    treated, and repainted properly.
                  </p>

                  <h3>Get the Paint Job Done Right with Priority One Coatings</h3>

                  <figure className="relative my-8 aspect-[1024/487] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/04/signs-of-bad-paint-job-cta-banner-canva-ai-1024x487.png"
                      alt="signs of a bad paint job CTA banner"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    If you&rsquo;re noticing signs of a bad paint job, don&rsquo;t wait for the problem to get
                    worse. At <Link href="/">Priority One Coatings</Link>, we&rsquo;ve been helping Sydney
                    homeowners and property managers achieve exceptional, lasting results across residential and
                    commercial properties.
                  </p>

                  <p>
                    From meticulous surface preparation to premium product selection and clean, sharp finishes, we
                    take every detail seriously &mdash; because we know how much your home matters to you.
                  </p>

                  <p>
                    Whether you need a full interior repaint, an exterior refresh, or a professional assessment of
                    existing paintwork, our experienced Sydney-based team is ready to help.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Signs of a Bad Paint Job: Understand Painting Mistakes")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Signs of a Bad Paint Job: Understand Painting Mistakes")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
