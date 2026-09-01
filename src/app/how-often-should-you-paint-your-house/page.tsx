import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How Often Should You Paint Your House | Priority One Coatings",
  description:
    "Good quality paints should last 5-10 years, but exterior paint wears more quickly and often needs repainting. Check how often you should paint your house.",
};

const POST_URL = "https://www.prioritycoatings.com.au/how-often-should-you-paint-your-house/";

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

const REPAINT_GUIDELINES = [
  {
    area: "Living Room",
    frequency: "Every 5–7 years",
    notes: "High-traffic gathering area; repaint to maintain a fresh and welcoming look",
  },
  {
    area: "Bedroom (Adults)",
    frequency: "Up to 10 years",
    notes: "Lower usage means paint lasts longer; repaint mainly for aesthetic updates",
  },
  {
    area: "Bedroom (Children)",
    frequency: "Every 2–3 years",
    notes: "Frequent use and wear; durable finishes like eggshell or satin recommended",
  },
  {
    area: "Kitchen",
    frequency: "Every 3–4 years",
    notes: "Exposure to food splashes and grease requires more frequent repainting",
  },
  {
    area: "Bathroom",
    frequency: "Every 3–4 years",
    notes: "High moisture levels can affect paint durability",
  },
  {
    area: "Laundry Room",
    frequency: "Every 3–4 years",
    notes: "Humidity and usage contribute to faster wear",
  },
  {
    area: "Dining Room",
    frequency: "Every 5–7 years",
    notes: "Similar to living rooms; moderate traffic and use",
  },
  {
    area: "Hallways & Entryways",
    frequency: "Every 2–3 years",
    notes: "High traffic leads to scuffs, marks, and wear",
  },
  {
    area: "Ceilings",
    frequency: "Every 7–10 years",
    notes: "Last longer than walls; repaint to address fading or yellowing",
  },
  {
    area: "Trim & Baseboards",
    frequency: "Every 2–4 years",
    notes: "Prone to chips and scuffs, especially in high-traffic areas",
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

export default function HowOftenShouldYouPaintYourHousePage() {
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
                  How Often Should You Paint Your House
                </h1>

                <p className="mt-4 text-[15px] text-black/60">December 31, 2023</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/how-often-should-you-paint-your-house-blog-banner.jpg"
                    alt="How often should you paint your house blog banner"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    When someone comes over to your home, they usually notice your house&rsquo;s exterior first. So,
                    you will always want to make sure it looks its best. It&rsquo;s also important to remember the
                    value of curb appeal. Repainting your home is a great way to keep it looking new, whether
                    you&rsquo;re planning to sell or just want to wow your neighbours. It&rsquo;s crucial for
                    homeowners to take care of their properties on a regular basis, which includes repainting your
                    house. But the question is, how often should your home be painted? This article will help you
                    decide to paint the interior walls and the outside of the house.
                  </p>

                  <h3>How often you should consider interior &amp; exterior wall painting</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/young-couple-painting-new-house-interior-wall.jpg"
                      alt="Young couple painting new house interior wall"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Painting and decorating specialist <strong>Priority One Coatings</strong> has suggested that
                    residential homeowners consider repainting every 5-8 years. A spokesman for the Sydney-based
                    company claims that the 5-8 year maintenance rule ensures a home is kept in the best possible
                    condition into the foreseeable future.
                  </p>

                  <p>
                    &lsquo;Some people do choose to leave it for longer, and in most cases, this isn&rsquo;t such a
                    big deal,&rsquo; she says, &lsquo;but we&rsquo;ve found that &ndash; as a rule &ndash; repainting
                    earlier is the most cost-effective option.&rsquo;
                  </p>

                  <p>
                    Hiring a professional that comes highly recommended is also a factor. Going cheap and getting a
                    lower-quality painter can actually cost more money in the long run, as repaints are required
                    more quickly.
                  </p>

                  <p>
                    &lsquo;We&rsquo;ve had clients mention that they went with a cheap painter only to have the
                    paint peeling and bubbling as soon as 6 months to a year later. Never assume that good quality
                    paint makes up for the quality of the service provider.&rsquo;
                  </p>

                  <p>
                    Obviously, there are many other factors that come into the equation. Weather conditions, the
                    surface, and the original paint job are major influences on how soon a maintenance service is
                    required. But choosing the right painter is ultimately the most important factor, and{" "}
                    <strong>Priority One Coatings</strong> recommends doing research about which company to hire.
                  </p>

                  <p>
                    &lsquo;You&rsquo;ll almost certainly regret going with an inexpensive house painting
                    service,&rsquo; the spokesman says, &lsquo;Make sure they&rsquo;re Dulux and Master Painter
                    Accredited. You should even ask for references if you&rsquo;re unsure. It could save you a lot
                    of money and headaches later on.&rsquo;
                  </p>

                  <p>
                    Also, the{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/difference-between-interior-exterior-paint/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      difference between interior and exterior paint
                    </a>{" "}
                    is quite significant. So, let&rsquo;s know together how often interior and exterior walls need
                    to be painted.
                  </p>

                  <h3>Time for painting house interior</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/painter-man-painting-the-wall-in-home-with-paint-roller-and-white-color.jpg"
                      alt="Painter man painting the wall in home with paint roller and white color"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Are you wondering how often should you paint the inside of your house? House interior painting
                    differs from room to room depending on degrees of usage and traffic. Interior walls and ceilings
                    are not frequently exposed to natural elements like UV rays, wind, rain and snow. As a result, it
                    lasts longer than the exterior. Homeowners mostly opt for interior painting to change the colour
                    scheme when they get tired of looking at the same hues. However, when the question is how often
                    to repaint house interior, the general rule for painting your house interior walls is that they
                    should be repainted every 5 to 10 years. But every household is not the same.
                  </p>

                  <p>
                    Maybe you use your dining room only on holidays or are passionate about cooking and using the
                    kitchen several times a week. You may have a pet, and it enjoys taking laps from the living room
                    to the hallways. No matter what condition you are facing,{" "}
                    <Link href="/residential-painters/">professional house painters in Sydney</Link> can help you
                    out. Here, we have come up with some general rules for interior house painting to make your life
                    easier.
                  </p>

                  <h3>General house interior repainting guidelines by area</h3>

                  <div className="my-8 overflow-x-auto">
                    <table className="w-full min-w-[560px] border-collapse text-left">
                      <thead>
                        <tr className="bg-brand-navy text-white">
                          <th className="px-4 py-3 text-[15px] font-bold">Area</th>
                          <th className="px-4 py-3 text-[15px] font-bold">Repainting Frequency</th>
                          <th className="px-4 py-3 text-[15px] font-bold">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {REPAINT_GUIDELINES.map((row, index) => (
                          <tr
                            key={row.area}
                            className={`border-b border-black/10 ${index % 2 === 1 ? "bg-[#eef4f9]" : ""}`}
                          >
                            <td className="px-4 py-3">{row.area}</td>
                            <td className="px-4 py-3">{row.frequency}</td>
                            <td className="px-4 py-3">{row.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <h4>Living room</h4>

                  <p>
                    Living rooms are essential gathering spaces in homes, where people gather to watch games, watch
                    TV shows, and share stories. As high-traffic rooms, experts recommend painting them every 5-7
                    years to maintain their freshness and welcoming appearance for family and guests. This ensures
                    the room remains inviting for years to come.
                  </p>

                  <h4>Bedroom</h4>

                  <p>
                    The paint in your bedrooms will last a long time if you don&rsquo;t have kids. You might
                    discover that you won&rsquo;t need to repaint until you wish to switch up the colour because
                    adult bedrooms are usually utilised less regularly. Most experts say an adult bedroom&rsquo;s
                    wall paint can be longer, up to 10 years. However, since kids&rsquo; bedrooms are utilised for
                    both play and sleeping, they are a whole other story. When repainting a child&rsquo;s bedroom
                    walls, expert painters frequently employ an eggshell or satin gloss. By doing this, paint can be
                    made to last longer, even after being repeatedly cleaned. Typically, children&rsquo;s bedrooms
                    require painting every 2 to 3 years.
                  </p>

                  <h4>Kitchen, Bathroom and Laundry room</h4>

                  <p>
                    Splashes of food in the kitchen. Fingers that get messy on walls. Wetness in the restroom. Due
                    to these factors, Kitchens, bathrooms, and laundry rooms need to be painted more frequently than
                    dining and living rooms. To ensure the paint lasts as long as possible, professional painters
                    utilise the most durable satin paints on the walls in these spaces. Your bathroom and kitchen
                    will probably require new paint every 3 to 4 years, possibly even more.
                  </p>

                  <h4>Dining room</h4>

                  <p>
                    The dining room is another room that should be painted first when considering how frequently to
                    paint the interior of a home. They are spaces where people often come together. Dining rooms and
                    living rooms can serve comparable purposes. It is advised that dining rooms be painted every 5
                    to 7 years.
                  </p>

                  <h4>Hallways and Entryway</h4>

                  <p>
                    Hallways and entryways have more traffic than any other room in the house. Therefore, it&rsquo;s
                    likely that walls in these areas will have dings, scrapes, scuffs, and marks. To keep up with all
                    the traffic the hallway entryway receives, experts suggest painting the walls there every 2 to 3
                    years.
                  </p>

                  <h4>Ceilings</h4>

                  <p>
                    Repainting your ceilings is a terrific way to add some brightness to the space, especially as
                    sunlight causes them to gradually lose their lustre and turn yellow over time. It&rsquo;s a
                    great{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/tips-for-painting-your-ceilings/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      idea to repaint your ceilings
                    </a>{" "}
                    every other time you paint your walls because ceiling paint lasts, on average, twice as long as
                    wall paint. A ceiling painted by expert residential painters might last up to 10 years.
                  </p>

                  <h4>Trim and Baseboards</h4>

                  <p>
                    When painting your house interior, consider your interior trim, including baseboards, doors,
                    window trim, cabinets, and other decorative wood details. High foot traffic rooms show more wear
                    and chipping than non-frequently used trim. Repainting trim every 2 to 4 years depends on the
                    location, and it&rsquo;s essential to consider the impact of your home&rsquo;s interior trim on
                    its overall appearance.
                  </p>

                  <h3>Time for house exterior painting</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/handyman-painting-the-exterior-wall-of-house.jpg"
                      alt="Handyman painting the exterior wall of house"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    The exterior house paint job can last 5 to 10 years if done correctly. How long exterior paint
                    will last depends on a number of factors, including the used paint quality, the painter&rsquo;s
                    skill level, and the care employed in the preparatory painting process. Paints specifically made
                    for outdoor use are of high quality and usually have longer lifespans than paints of lower
                    quality.
                  </p>

                  <p>
                    While painting outside of the house, a better finish and longer paint job can be achieved by
                    properly priming the outer surface before painting. Cleaning and priming the surfaces before
                    painting is part of proper preparation. It guarantees excellent paint adhesion and longevity.
                  </p>

                  <p>
                    Choosing the appropriate paint type from{" "}
                    <a
                      href="https://www.dulux.com.au/how-to/choose-paint/how-to-choose-a-sheen-level/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      the range of formulations and sheen level
                    </a>{" "}
                    offered on the market is also crucial for outdoor surfaces. Flat or eggshell coatings typically
                    break down more quickly than glossy finishes, such as semi-gloss or high gloss. In addition,
                    outdoor latex paints offer superior resistance to moisture and temperature changes.
                  </p>

                  <h3>Factors that impact paint lifespan</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/housing-exterior.jpg"
                      alt="Housing exterior"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Along with the above considerations, there are some other factors that impact how long your
                    residential painting will last. There are:
                  </p>

                  <h4>Paint quality</h4>

                  <p>
                    High-quality paint helps to extend the paint job lifespan, whether it is interior or exterior.
                    Additives included in high-quality paint products aid in the paint&rsquo;s resistance to fading,
                    mildew, and other weather-related deteriorations.
                  </p>

                  <h4>Maintenance</h4>

                  <p>
                    Regular maintenance like proper cleaning, sanding and caulking, scraping and frequent touch-ups
                    can increase the lifespan of your house painting.
                  </p>

                  <h4>Weather</h4>

                  <p>
                    Severe weather can accelerate the deterioration of your home&rsquo;s exterior and necessitate
                    more frequent painting. Extreme weather, such as sweltering summers, bitterly cold winters,
                    rain, snow, and searing summer air, can&rsquo;t be tolerated by exterior paint for so long.
                  </p>

                  <h3>Wrap up</h3>

                  <p>
                    Painting is a great way to extend the life of your home. With quality materials, proper
                    preparation and experienced painting contractors, you can ensure that your paint job lasts for
                    years to come.
                  </p>

                  <p>
                    From understanding when and how often you should paint your house to choosing the right colour
                    palate, <Link href="/">Priority One Coatings</Link> has the tools and expertise to help you make
                    informed decisions. With our painting services, you can ensure that your house will look its
                    best for years to come without sacrificing quality or durability. Contact us today for a free
                    estimate and see why we&rsquo;re the premier choice for residential house painting.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How Often Should You Paint Your House")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How Often Should You Paint Your House")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
