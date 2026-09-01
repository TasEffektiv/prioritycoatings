import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Essential Things to Know Before Painting Your Home Interiors | Priority One Coatings",
  description:
    "Everything to consider before painting your home interiors — surface prep, paint types and finishes, weather, colour selection, and DIY tips for a professional result.",
};

const POST_URL = "https://www.prioritycoatings.com.au/things-to-know-before-painting-home-interiors/";

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
    title: "How Painters Extend Sydney Home Exterior Lifespan",
    href: "/how-painters-extend-sydney-home-exterior-lifespan/",
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

export default function ThingsToKnowBeforePaintingHomeInteriorsPage() {
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
                  Essential Things to Know Before Painting Your Home Interiors
                </h1>

                <p className="mt-4 text-[15px] text-black/60">May 10, 2026</p>

                <div className="relative mt-6 aspect-[1459/900] w-full overflow-hidden">
                  <Image
                    src="/images/repair-in-the-apartment-paints-the-wall-with-paint.jpg"
                    alt="repair in the apartment paints the wall with paint"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    As interior painting involves applying paint to the entire house, including walls, ceilings, and
                    other surfaces, achieving a flawless result is a must for enhancing the appearance and making a
                    good impression. However, the process involves more than just putting paint on a roller and
                    starting to work. Let&rsquo;s explore what to consider before painting your home interiors.
                  </p>

                  <h3>Key things to consider before you start</h3>

                  <h4>Prepare Walls and Surfaces Before Painting</h4>

                  <p>
                    Before painting, fix any surface flaws, such as holes, cracks, or peeling paint. In this stage,
                    gaps and cracks must be filled, dust and dirt should be removed from the walls, and sanding
                    should be done as needed. If your house was previously painted and you found water stains or
                    signs of mould growth, hire a professional to find out the hidden cause and fix it before
                    painting to avoid future stains.
                  </p>

                  <p>
                    Once the surface is fixed, find out the ideal primer and arrange it beforehand. Paint adhesion,
                    coverage, and durability are all enhanced by primer.
                  </p>

                  <h4>Suitable Paint for Each Interior Surface</h4>

                  <p>
                    First of all, determine whether to{" "}
                    <Link href="/what-type-of-paint-to-use-why/">use oil-based or water-based paint</Link>.
                  </p>

                  <p>
                    Oil-based paint can surely give superior resistance to wear and tear even in heavy-duty areas,
                    but it takes a long time to dry and can be harmful to human health. Water-based ones, on the
                    other hand, can be easier to paint for beginners, dry quickly, and are also durable, but might
                    need repainting sooner than the oil-based paint.
                  </p>

                  <p>
                    Based on the finish, you can find options like matte (conceals imperfection), gloss (shiny,
                    hard-wearing finish but prone to fingerprints), and semi-gloss (less shiny and easy to clean).
                    Paint finish or sheen level affects not just appearance but also how easily a surface can be
                    cleaned and how well it holds up over time. Here&rsquo;s a quick reference:
                  </p>

                  <ul>
                    <li>
                      <strong>Flat / matte</strong> &mdash; best for low-traffic areas like formal living rooms and
                      master bedrooms. Hides surface imperfections well but is harder to clean.
                    </li>
                    <li>
                      <strong>Low-sheen / eggshell</strong> &mdash; the most popular choice for living areas,
                      hallways, and bedrooms. Easy to clean and durable enough for everyday use.
                    </li>
                    <li>
                      <strong>Satin</strong> &mdash; ideal for kitchens, bathrooms, and laundries where moisture
                      resistance matters. Wipes down easily and holds up to regular cleaning.
                    </li>
                    <li>
                      <strong>Semi-gloss / gloss</strong> &mdash; recommended for doors, trims, skirting boards, and
                      window frames. Highly durable and reflects light, making architectural details pop.
                    </li>
                    <li>
                      <strong>Ceiling paint</strong> &mdash; specifically formulated to be flat and
                      splatter-resistant. Always use a dedicated ceiling paint &mdash; wall paint applied to ceilings
                      will not perform as well.
                    </li>
                  </ul>

                  <h4>Right Weather Conditions for Interior Painting</h4>

                  <p>
                    Apply paint in the ideal humidity and temperature ranges recommended by the paint manufacturer.
                    <br />
                    The drying time of paint can be impacted by extreme temperatures or high humidity. Thus, when the
                    temperature is between 10°C and 30°C, the humidity is low (less than 70%), and there is no chance
                    of rain, it is ideal to schedule your residential painters in Sydney to work.
                  </p>

                  <h4>Best Colour Palette for Your Home</h4>

                  <p>
                    The undertone of any paint can actually change the whole outcome, so if you are planning to match
                    a colour, find out its brand name and the code number rather than colour-matching with a sample.
                    <br />
                    The simplest method for identifying undertones is to take a piece of paper that is entirely white
                    and look at the colour next to it. As the white isolates the shade, it&rsquo;s easy to identify
                    any difference.
                  </p>

                  <p>
                    Also, try to invest in buying the original sample size of the paint you are choosing and patch
                    test on the surface you will paint.
                  </p>

                  <h4>Get the Room Ready Before Interior Painting</h4>

                  <figure className="relative my-8 aspect-[1024/597] w-full overflow-hidden">
                    <Image
                      src="/images/repair-damaged-cracks-on-walls-drywall-ceilings-use-spatula-for-putting-gypsum-1024x597.jpg"
                      alt="repair damaged cracks on walls drywall ceilings use spatula for putting gypsum"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Cover furniture with drop sheets, and if possible, move it from the room you are painting. Cover
                    the floors, and use painter&rsquo;s tape to cover all edges, including switch areas, windows,
                    doors, skirting, etc.
                    <br />
                    If you have wall décors or any hanging frames, remove them from the wall. Before painting, make
                    sure there is enough ventilation. This will help eliminate the fresh paint odour and speed up the
                    drying process.
                  </p>

                  <h4>Consider DIY Painting vs Hiring Professionals</h4>

                  <p>
                    If you are somehow inspired to do DIY house interior painting, before starting to paint the
                    interiors, think practically and consider all the pros and cons, including the cost, of course.
                  </p>

                  <p>
                    It will be very challenging to handle the large area, wait for the drying time, and give a smooth
                    finish. So, consider comparing Sydney&rsquo;s popular painting services, go through their
                    previous work, or review, and finally compare the rates.
                  </p>

                  <p>
                    You can find affordable yet experienced and{" "}
                    <Link href="/residential-painters/">professional house painters in Sydney</Link>, like{" "}
                    <strong>Priority One Coatings</strong>. Their Dulux-accredited painters will help your house
                    achieve a seamless finish and save you from the hassle of the DIY painting process.
                  </p>

                  <h3>DIY painting tips for a professional result</h3>

                  <figure className="relative my-8 aspect-[1024/576] w-full overflow-hidden">
                    <Image
                      src="/images/woman-painting-wall-with-roller-brush-in-room-filled-with-painting-supplies-1024x576.jpg"
                      alt="woman painting wall with roller brush in room filled with painting supplies"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h4>1. Always start with thorough surface preparation</h4>

                  <p>
                    Fill all holes and cracks with a suitable filler, allow to dry completely, and sand smooth. Wipe
                    down walls with a sugar soap solution to remove grease, dust, and grime. Any surface that
                    isn&rsquo;t clean and stable will cause adhesion failure regardless of the quality of paint you
                    use.
                  </p>

                  <h4>2. Never skip the primer</h4>

                  <p>
                    Primer seals the surface, improves adhesion, and ensures the topcoat colour appears true and
                    even. On new plaster, patched areas, or surfaces with staining, priming is essential not
                    optional. Using a paint-and-primer-in-one product is a compromise at best; dedicated primer
                    delivers significantly better results.
                  </p>

                  <h4>3. Test your colour before committing</h4>

                  <p>
                    Paint a large swatch at least A3 size directly onto the wall and observe it across different
                    times of day and in both natural and artificial light. What looks perfect in the paint store
                    under fluorescent lighting may read completely differently in your home. Most Australian paint
                    brands offer tester pots for exactly this purpose.
                  </p>

                  <h4>4. Use the right tools for the surface</h4>

                  <p>
                    A 10&ndash;12mm nap roller works well on smooth walls. Textured or rendered surfaces require a
                    thicker nap of 18&ndash;20mm to get paint into the recesses. For cutting in at edges and
                    cornices, a quality angled brush (50&ndash;65mm) gives far more control than a cheap one and the
                    difference in your cut-in line quality will be immediately obvious.
                  </p>

                  <h4>5. Maintain a wet edge to avoid lap marks</h4>

                  <p>
                    Work in manageable sections and always blend into wet paint to prevent lap marks, the streaky
                    lines that appear when paint dries at the overlap of two applications. Roll in a consistent W or
                    M pattern across the wall, then lightly roll over the section in a single direction to even the
                    finish before it begins to tack.
                  </p>

                  <h4>6. Apply two coats as a minimum</h4>

                  <p>
                    One coat is almost never sufficient for full coverage, particularly when changing colours or
                    painting over a darker shade. Two coats applied correctly with adequate drying time in between
                    will always produce a more uniform, durable, and professional-looking result than one thick coat.
                  </p>

                  <h4>7. Mask carefully and protect your surfaces</h4>

                  <p>
                    Use quality painter&rsquo;s tape along trims, cornices, skirting boards, and light switches. Lay
                    drop sheets across floors and furniture. Removing dried paint splatters from timber floors or
                    stone benchtops is time-consuming and sometimes impossible prevention is always easier than the
                    fix.
                  </p>

                  <h4>8. Paint in the right conditions</h4>

                  <p>
                    Avoid painting in extreme heat, high humidity, or cold conditions. In Australia, early morning or
                    late afternoon in warmer months is ideal for interior painting. Temperature and humidity directly
                    affect how paint flows, dries, and adheres and pushing outside recommended conditions leads to
                    avoidable problems.
                  </p>

                  <p>
                    Whether you <a href="tel:+0298085900">call a professional residential painter</a> or do it
                    yourself, it is entirely your decision; a perfectly painted space can reflect sophistication,
                    which is most likely when an expert hand is involved. So, if you want your home painting project
                    to be a successful one, <Link href="/contact-us/">contact our painters in Sydney today</Link> or
                    request a quote.
                  </p>

                  <figure className="relative my-8 aspect-[1024/337] w-full overflow-hidden">
                    <Image
                      src="/images/know-before-interior-painting-cta-banner-1024x337.jpg"
                      alt="know before interior painting CTA banner"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>Frequently Asked Questions</h3>

                  <h4>How long does interior paint last?</h4>

                  <p>
                    Interior paint longevity varies by room. Living rooms and adult bedrooms typically last 7&ndash;10
                    years with good maintenance. Kitchens, bathrooms, and laundries require repainting every
                    3&ndash;4 years due to moisture and heat exposure. Children&rsquo;s bedrooms and high-traffic
                    hallways generally need refreshing every 2&ndash;3 years. Using premium-quality paint and
                    ensuring correct surface preparation at the outset significantly extends these timelines.
                  </p>

                  <h4>How many coats of paint does an interior wall need?</h4>

                  <p>
                    At minimum, two coats of topcoat over a properly primed surface. If you&rsquo;re going from a
                    dark colour to a lighter one, three coats may be necessary for full, even coverage. Applying one
                    thick coat instead of two thinner coats is a common mistake, and it leads to poor adhesion,
                    slower drying, sagging, and an uneven finish.
                  </p>

                  <h4>Do I always need to use primer before painting interior walls?</h4>

                  <p>
                    Not always, but in most cases, yes. Primer is essential on new or bare plaster, freshly patched
                    surfaces, raw timber, surfaces with staining, and when making significant colour changes. On
                    previously painted walls in good condition where you&rsquo;re applying a similar colour, a
                    quality topcoat alone may be sufficient. When in doubt, prime because it is cheap insurance
                    against a poor result.
                  </p>

                  <h4>What is the best paint brand for interior walls in Sydney?</h4>

                  <p>
                    Several brands consistently deliver professional results for Sydney homeowners. Dulux and
                    Taubmans are widely trusted for residential and commercial use. Haymes Paint is a well-regarded
                    local brand known for strong pigmentation and a comprehensive low-VOC range. Solver is a solid
                    mid-range option. The right brand often depends on the specific surface, room, and your budget,
                    while a professional painter can recommend the most appropriate product for your project.
                  </p>

                  <h4>What is the ideal temperature for painting indoors in Sydney?</h4>

                  <p>
                    Most water-based interior paints perform optimally between 10°C and 35°C with a relative
                    humidity below 85%. Painting under these conditions, including extreme heat, cold, or high
                    humidity, affects how paint flows, dries, and adheres. In Sydney&rsquo;s summer or Brisbane&rsquo;s
                    wet season, early mornings with air conditioning running provide the most stable conditions for
                    interior painting work.
                  </p>

                  <h4>How do I choose the right colour for a small or dark room?</h4>

                  <p>
                    Lighter tones, especially soft whites, pale neutrals, and cool greys, reflect more light and make
                    compact or darker rooms feel more open and spacious. If you prefer warmth, opt for light, earthy
                    tones rather than dark, saturated shades, which can make a room feel enclosed. Painting the
                    ceiling a shade lighter than the walls also creates the illusion of added height. Always test a
                    large swatch on the actual wall before committing to a colour.
                  </p>

                  <h4>Can I paint over mould on interior walls?</h4>

                  <p>
                    No, painting over mould without treating it first is one of the most common and costly mistakes
                    homeowners make. Mould will continue to grow beneath the new paint and will reappear, often worse
                    than before. Treat the affected area with a mould-killing solution, allow it to dry completely,
                    and apply a mould-inhibiting primer before repainting. For large or recurring mould problems, a
                    professional assessment is strongly recommended to identify and address the underlying moisture
                    source.
                  </p>

                  <h4>Is it worth hiring a professional painter or should I DIY?</h4>

                  <p>
                    For smaller, straightforward rooms, DIY is entirely achievable if you have the time and patience
                    to prepare and execute properly. However, for larger or more complex spaces, high ceilings,
                    intricate cornicing, heritage features, or any project where the finish really matters, such as
                    before a sale, a rental listing, or a major renovation, a professional painter consistently
                    delivers a faster, higher-quality, and longer-lasting result. The cost of professional painting
                    is frequently offset by not having to fix or redo a DIY outcome.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Essential Things to Know Before Painting Your Home Interiors")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Essential Things to Know Before Painting Your Home Interiors")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
