import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How Painters Extend Sydney Home Exterior Lifespan | Priority One Coatings",
  description:
    "Learn how professional painters extend the lifespan of Sydney home exteriors through preparation, suitable coatings, expert application and ongoing maintenance.",
};

const POST_URL = "https://www.prioritycoatings.com.au/how-painters-extend-sydney-home-exterior-lifespan/";

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
    title: "How to Prepare Surfaces Before Painting Commercial Buildings",
    href: "/prepare-commercial-buildings-surfaces-for-painting/",
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

export default function HowPaintersExtendSydneyHomeExteriorLifespanPage() {
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
                  How Painters Extend Sydney Home Exterior Lifespan
                </h1>

                <p className="mt-4 text-[15px] text-black/60">July 20, 2026</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/twostory-building-with-a-yellow-and-pink-facade.jpg"
                    alt="Twostory building with a yellow and pink facade"
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
                    If your home is showing chalky walls, hairline cracks, or a faded finish, the honest answer is
                    that Sydney&rsquo;s climate is likely the main cause, not poor luck. Strong UV, coastal salt,
                    humidity, and sudden downpours all put exterior paint under constant pressure, which is why the
                    right <Link href="/residential-painters/">house painter Sydney homeowners choose</Link> can make
                    the difference between a repaint every four years and one that comfortably lasts a decade.
                  </p>

                  <p>
                    A quality exterior paint job is one of the biggest investments a Sydney homeowner makes in their
                    property, and it deserves to last. Yet between the harsh coastal air, the relentless summer sun,
                    and sudden storms, local homes face conditions that push paint to its limits far quicker than in
                    milder climates. The good news is that with the right approach, you can protect that investment
                    for many years to come.
                  </p>

                  <p>
                    As experienced house painters Sydney residents trust, we have put together this guide covering
                    everything from daily upkeep to seasonal protection, so your home stays looking its best for
                    longer.
                  </p>

                  <h3>Best Practices for Painted Surfaces</h3>

                  <p>
                    One of the simplest ways to extend paint life is by keeping painted surfaces clean. Dirt,
                    airborne pollutants, pollen, bird droppings, and salt deposits gradually accumulate on walls and
                    trim. Left untreated, these contaminants can damage paint films over time.
                  </p>

                  <p>
                    Routine maintenance is far more cost-effective than waiting until paint begins to fail across
                    large areas. Annual pressure washing is recommended to extend paint life.
                  </p>

                  <p>
                    Walk around your property every six months and look for signs such as fading, bubbling paint,
                    cracked caulking, loose timber, rust stains, or mould growth. Pay particular attention after
                    severe storms or periods of prolonged rainfall. Giving your exterior walls a gentle wash with
                    mild soap and water annually can also extend the lifespan of your paint by removing harmful
                    substances before they cause damage.
                  </p>

                  <h3>Painting Preparation That Makes the Difference</h3>

                  <figure className="relative my-8 aspect-[1348/788] w-full overflow-hidden">
                    <Image
                      src="/images/woman-making-cosmetic-alterations-of-house.jpg"
                      alt="Woman making cosmetic alterations of house"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Ask any experienced painter what actually determines how long a paint job lasts, and preparation
                    will almost always top the list, ahead of even the paint itself. Skipping or rushing this stage
                    is the single most common reason a repaint fails early.
                  </p>

                  <p>
                    Getting the best possible lifespan out of your exterior paint starts long before the first coat
                    goes on. Surface preparation is the single biggest factor in how well a paint job holds up over
                    time. Cleaning away dirt, mould, and old flaking paint, filling cracks, and priming bare surfaces
                    all give the new coating something solid to bond to.
                  </p>

                  <p>
                    This methodical approach is a large part of what separates a paint job that lasts three years
                    from one that lasts ten. Homeowners{" "}
                    <a href="https://maps.app.goo.gl/CPcc9enRxc8TK6HfA" target="_blank" rel="noopener noreferrer">
                      looking for reliable residential painters Sydney-wide
                    </a>{" "}
                    should always ask what preparation process a company follows before they even discuss paint
                    brands or colours.
                  </p>

                  <h3>Application Techniques That Add Years to a Repaint</h3>

                  <p>
                    Even the best paint and the best preparation will underperform if the application itself is
                    rushed. Professional painters apply coatings within the manufacturer&rsquo;s recommended
                    temperature and humidity range, since paint applied in the wrong conditions, such as direct
                    midday sun or high humidity, often dries unevenly and fails to form a proper protective film.
                  </p>

                  <p>
                    Multiple thin, even coats consistently outperform a single thick one because thin coats cure
                    more evenly and are less prone to cracking or sagging. Painters will also pay close attention to
                    detail areas that homeowners rarely think about, including eaves, gutters, joints, and window
                    frames, since these are the spots where water most often finds a way in.
                  </p>

                  <p>
                    Treating a home in zones, giving extra attention and slightly more durable systems to the
                    harshest elevations while keeping sheltered walls on a standard cycle, is a practical strategy
                    many professional teams use to stretch the overall life of a paint job.
                  </p>

                  <h3>Choosing Paint Suitable for Sydney Conditions</h3>

                  <figure className="relative my-8 aspect-[1342/780] w-full overflow-hidden">
                    <Image
                      src="/images/glass-window-on-gray-cement-wall-of-house-during-renovation-work.jpg"
                      alt="Glass window on gray cement wall of house during renovation work"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Always use UV- and weather-resistant paint products for outdoor areas. Professional residential
                    painters extend your home exterior&rsquo;s lifespan by selecting weather-resistant paints
                    designed to withstand these conditions. Simple maintenance like this can extend your
                    paint&rsquo;s lifespan by several years.
                  </p>

                  <p>
                    Colour also plays a role that many homeowners overlook. Darker shades absorb more heat and UV
                    energy, which can shorten the life of a coating on a hot, sun-facing wall compared with a
                    lighter colour on the same elevation. Experienced painters will often talk homeowners through
                    this trade-off during a quote, particularly for feature walls or dark trims that face north or
                    west.
                  </p>

                  <p>
                    A quality primer matched to the substrate, whether that is render, weatherboard, brick, or fibre
                    cement, is just as important as the topcoat. Skipping this step, or using a generic all-purpose
                    primer, is a common shortcut that shows up as early peeling within a few short years.
                  </p>

                  <h3>Tips for Sydney&rsquo;s Summer, Harsh Coastal and UV-Prone Climate</h3>

                  <p>
                    Sydney&rsquo;s climate is genuinely tough on exterior coatings. According to the Bureau of
                    Meteorology, the UV Index across Australia regularly reaches extreme levels of eleven or higher
                    through summer, which accelerates fading, chalking, and breakdown of lower-grade paint far
                    faster than in most other parts of the world.
                  </p>

                  <p>
                    The{" "}
                    <a
                      href="https://www.cancer.org.au/cancer-information/causes-and-prevention/sun-safety/uv-index"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cancer Council Australia notes that
                    </a>{" "}
                    UV exposure remains high across most of the year in Australia, not only during the warmer
                    months, which is why premium UV-resistant paint is worth the investment for any exterior project.
                  </p>

                  <p>
                    For homes closer to the coast, in suburbs from Bondi and Manly through to Cronulla and the
                    Northern Beaches, salt-laden air adds another layer of stress. Salt can settle on painted
                    surfaces and gradually corrode metal fittings while drawing moisture into the paint film, so
                    coastal properties usually need a more robust coating and slightly more frequent cleaning than
                    inland homes.
                  </p>

                  <p>
                    Choosing a lighter colour palette can also help. Pale tones reflect more heat than dark colours,
                    which reduces the thermal stress that causes paint to expand, contract, and eventually crack.
                    Combined with a genuinely UV-stable, coastal-rated paint system, this can meaningfully extend
                    the life of your exterior finish.
                  </p>

                  <h3>Protecting External Walls, Facades and Associated Features</h3>

                  <figure className="relative my-8 aspect-[1344/809] w-full overflow-hidden">
                    <Image
                      src="/images/male-paints-white-trim-of-old-urban-home.jpg"
                      alt="Male paints white trim of old urban home"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    The exterior of your home includes much more than painted walls. Every painted surface
                    contributes to both appearance and protection.
                  </p>

                  <ul>
                    <li>
                      <strong>Timber weatherboards</strong> should be inspected regularly for movement, splitting,
                      or signs of water ingress. Prompt repairs help prevent peeling paint and timber decay.
                    </li>
                    <li>
                      <strong>Rendered walls</strong> should be monitored for hairline cracks that allow moisture to
                      penetrate beneath the coating. Repairing these cracks early prevents larger failures from
                      developing.
                    </li>
                    <li>
                      <strong>Window frames, doors, fascias, soffits, pergolas, balustrades, fences, and garage
                      doors</strong> also require regular inspection. These architectural features often receive
                      greater exposure to sunlight or rain than larger wall surfaces and may need maintenance
                      sooner.
                    </li>
                    <li>
                      <strong>Metal components</strong> such as railings and gutters should be checked for rust.
                      Surface corrosion should be treated immediately before repainting to prevent further
                      deterioration.
                    </li>
                  </ul>

                  <p>
                    Maintaining these associated items alongside your walls creates a consistent appearance while
                    extending the overall lifespan of your home&rsquo;s exterior finishes.
                  </p>

                  <h3>How Often Should You Repaint Your Home in Sydney?</h3>

                  <p>
                    As a general guide, many Sydney homes benefit from exterior repainting every 8 to 15 years when
                    premium coatings have been professionally applied and properly maintained.
                  </p>

                  <p>
                    However, some highly exposed surfaces may require attention earlier. Timber elements often need
                    more frequent maintenance than rendered walls or brickwork, while{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/painting-tips-for-coastal-homes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      coastal homes generally require repainting sooner
                    </a>{" "}
                    than properties located further inland.
                  </p>

                  <p>
                    Coastal homes and those on busy, exposed north or west-facing walls should plan for inspections
                    every three to four years, since these areas show wear first. Inland and more sheltered
                    properties can usually go longer between full repaints, provided regular cleaning and minor
                    touch-ups are kept up along the way.
                  </p>

                  <p>
                    Rather than waiting for obvious peeling or cracking, it is worth having your home assessed once
                    fading, chalking, or small surface cracks start to appear. Repainting at this stage is generally
                    more affordable than waiting until the underlying surface is exposed and damaged.
                  </p>

                  <h3>Why Homeowners Choose Professional Residential Painters in Sydney</h3>

                  <figure className="relative my-8 aspect-[963/640] w-full overflow-hidden">
                    <Image
                      src="/images/why-homeowners-choose-professional-residential-painters-in-sydney-ChatGPT-image.jpg"
                      alt="Why homeowners choose professional residential painters in Sydney"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    DIY touch-ups can be reasonable for small jobs, but a full exterior repaint involves working at
                    height, assessing older homes for lead paint, and applying coatings under the right weather
                    conditions, all of which are easier to get right with an experienced team. Where an older
                    coating may contain lead, engaging qualified{" "}
                    <Link href="/lead-paint-removal/">lead paint removal specialists</Link> is particularly
                    important. This is why so many homeowners turn to the residential painters at Priority One
                    Coatings rather than tackling the job themselves.
                  </p>

                  <p>
                    Our team brings the preparation standards, product knowledge, and application experience
                    outlined throughout this article to every residential painting Sydney project we take on. We
                    assess each home&rsquo;s exposure, recommend a paint system suited to its specific conditions,
                    and carry out the detailed preparation work that gives a finish the best possible chance of
                    lasting well beyond the industry average. It is this attention to detail, rather than any single
                    product, that consistently sets a long-lasting exterior apart from one that needs attention
                    again within a few years.
                  </p>

                  <p>
                    You can also explore our{" "}
                    <Link href="/recent-residential-projects/">recent residential painting projects</Link> to see
                    examples of completed work across Sydney.
                  </p>

                  <h3>Frequently Asked Questions</h3>

                  <h4>What is the best type of paint for coastal Sydney homes?</h4>
                  <p>
                    A premium, flexible acrylic exterior paint with strong UV and salt resistance is generally the
                    best choice for coastal properties, since it copes better with the combination of intense sun
                    and salty air.
                  </p>

                  <h4>Does the colour of my house actually affect how long the paint lasts?</h4>
                  <p>
                    Yes. Darker colours absorb more heat and UV energy, which can cause them to fade and break down
                    faster on sun-facing walls compared with lighter shades in the same position. This is worth
                    discussing with your painter, especially for north or west-facing elevations.
                  </p>

                  <h4>Is it worth paying more for a premium paint system?</h4>
                  <p>
                    In most cases, yes, particularly on exposed or coastal properties. A higher-grade acrylic system
                    with strong UV resistance and flexibility will generally outlast a budget product by several
                    years, which more than offsets the extra cost when spread across the life of the coating.
                  </p>

                  <h4>Can I repaint over old, peeling paint to save money?</h4>
                  <p>
                    This is one of the most common shortcuts that leads to early failure. Loose or chalking paint
                    needs to be removed and the surface properly prepared before new coats go on, otherwise the new
                    paint will only be as strong as the failing layer underneath it.
                  </p>

                  <h4>Is it worth hiring a professional painter rather than doing it myself?</h4>
                  <p>
                    Professional preparation and application make a significant difference to how long a paint job
                    lasts, particularly in a demanding climate like Sydney&rsquo;s, so working with an experienced
                    team is usually a worthwhile investment.
                  </p>

                  <div className="mt-10 rounded-md border-l-4 border-brand-teal bg-[#f3fafb] px-7 py-6">
                    <h3 className="mt-0">Ready to Protect Your Home&rsquo;s Exterior?</h3>
                    <p className="mb-0">
                      A well-prepared, professionally applied exterior painting is one of the simplest ways to
                      protect your property&rsquo;s value and street appeal for years to come. If your Sydney home
                      is due for a refresh, or you simply want an honest assessment of how much life is left in your
                      current paint job, get in touch with <Link href="/">Priority One Coatings</Link> for{" "}
                      <Link href="/contact-us/">a free, no-obligation quote</Link> from our experienced Sydney
                      painters team.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How Painters Extend Sydney Home Exterior Lifespan")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How Painters Extend Sydney Home Exterior Lifespan")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
