import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Prepare Surfaces Before Painting Commercial Buildings | Priority One Coatings",
  description:
    "Commercial painting surface preparation is essential for a durable, professional finish. Learn how to prepare surfaces before painting commercial buildings.",
};

const POST_URL = "https://www.prioritycoatings.com.au/prepare-commercial-buildings-surfaces-for-painting/";

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

function SurfaceCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-md border-l-4 border-brand-navy bg-[#eef4f9] px-6 py-5">
      <h4 className="mb-2 font-heading text-[17px] font-bold text-black">{title}</h4>
      <p className="m-0">{children}</p>
    </div>
  );
}

export default function PrepareCommercialBuildingsSurfacesForPaintingPage() {
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
                  How to Prepare Surfaces Before Painting Commercial Buildings
                </h1>

                <p className="mt-4 text-[15px] text-black/60">August 10, 2026</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/prepare-commercial-buildings-surfaces-for-painting-chatGPT-image-1.jpg"
                    alt="Prepare commercial buildings surfaces for painting chatGPT image"
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
                    Walk into any office tower, warehouse or shopping centre with peeling walls, and you are almost
                    never looking at a paint problem. You are looking at a preparation problem. Paint is only as
                    good as the surface underneath it, and in a commercial building &mdash; where walls take
                    constant knocks, where compliance and downtime matter, and where a repaint may need to last a
                    decade &mdash; that surface does a lot of heavy lifting.
                  </p>

                  <p>
                    Experienced commercial painting contractors will tell you the same thing: the roller is the easy
                    part. The real work happens before a single tin is opened. This guide walks through how surfaces
                    are properly prepared for painting in commercial buildings, why each stage matters, and what
                    separates a coating that holds for years from one that starts flaking after the first wet
                    winter.
                  </p>

                  <p>
                    At Priority One Coatings, surface preparation forms an important part of our approach to
                    professional painting. For commercial property managers, facility managers and business owners,{" "}
                    <Link href="/commercial-painting/">working with professional commercial painters in Sydney</Link>{" "}
                    can help ensure preparation is completed systematically, and the coating system is appropriate
                    for the building.
                  </p>

                  <h3>Why Surface Preparation Decides the Life of a Commercial Paint Job</h3>

                  <p>
                    Paint adheres mechanically and chemically to whatever it touches. If it touches dust, grease,
                    chalky old coatings, salt deposits or moisture, it bonds to those contaminants instead of the
                    substrate &mdash; and it will eventually let go, taking your investment with it. Industry
                    estimates consistently attribute the large majority of premature coating failures to inadequate
                    preparation rather than to the product itself.
                  </p>

                  <p>
                    In a commercial setting, the stakes climb higher. For a large commercial project, this matters
                    financially as well as aesthetically. A failed coating in a hospital corridor, a school
                    stairwell or a retail frontage means repeat access, repeat scaffolding, repeat trade coordination
                    and repeat disruption to tenants or staff. That is why any credible commercial painting company
                    in Sydney will spend a genuine share of the project timeline on preparation, and why a quote
                    that skips straight to &ldquo;two coats applied&rdquo; is usually a quote worth questioning.
                  </p>

                  <h3>Start with a Thorough Site Inspection and Substrate Assessment</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/interior-of-the-apartment-without-decoration-in-gray-colors-rough-finish.jpg"
                      alt="Interior of the apartment without decoration in gray colours rough finish"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Preparation begins with looking, testing and asking questions. A proper inspection identifies
                    what each surface actually is &mdash; plasterboard, cement render, fibre cement sheet,
                    structural steel, galvanised metal, concrete tilt panel, brickwork or previously coated timber
                    &mdash; because every substrate demands a different approach.
                  </p>

                  <p>
                    At the same time, the assessment looks for underlying defects that painting will not fix and may
                    even hide until they worsen. Rising damp, roof or window leaks, efflorescence pushing through
                    masonry, rusting reinforcement, mould behind fixtures, delaminating render and previous coatings
                    that have lost adhesion all need to be resolved before any preparation work continues. Adhesion
                    and moisture testing help here: a simple tape or cross-hatch test reveals whether the existing
                    coating is sound enough to overcoat. In contrast, moisture readings confirm whether new concrete
                    or render has cured sufficiently to accept paint. New masonry and concrete typically need weeks
                    of curing, and applying a coating too early traps moisture and alkalinity behind the film.
                  </p>

                  <p>
                    For older buildings across Sydney, this stage also determines whether hazardous materials are
                    present. Anything built or repainted before the 1970s may carry lead-based paint. When{" "}
                    <a
                      href="https://www.nsw.gov.au/departments-and-agencies/homes-nsw/social-housing-resources/lead-paint-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      paint contains lead levels greater than 1%
                    </a>
                    , strict safety steps, licensed lead paint removal experts, and specialised containment controls
                    are required. This stops toxic dust from spreading during surface preparation and ultimately
                    protects your health.
                  </p>

                  <h3>Protect the Building and the Occupants</h3>

                  <p>
                    Once the substrates are understood, the site itself gets prepared. Commercial buildings rarely
                    empty out for a repaint, so protection and sequencing become part of the preparation work rather
                    than an afterthought. Furniture, plant, stock, IT equipment and fixtures are moved or covered,
                    floors and finished surfaces are masked and drop-sheeted, and access equipment such as
                    scaffolding, elevated work platforms or swing stages is set up in line with a site-specific
                    safety plan.
                  </p>

                  <p>
                    Signage, dust containment, ventilation and exclusion zones matter just as much. Sanding and
                    mechanical abrasion generate airborne dust; solvents and some primers carry odour and VOC
                    considerations that need managing in occupied environments like aged care facilities, childcare
                    centres, medical suites and food premises. This is also where scheduling is agreed &mdash; many
                    commercial projects are staged after hours, overnight or across weekends so that trading and
                    operations continue uninterrupted. Priority One Coatings works this way routinely, and it is one
                    of the reasons building managers keep our commercial painters in Sydney on their preferred
                    contractor lists.
                  </p>

                  <h3>Remove Loose, Peeling or Failing Paint</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/painted-wall-old-peeling-paint-textured-background.jpg"
                      alt="Painted wall old peeling paint textured background"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Existing paint should not automatically be considered a suitable base for another coat. Loose,
                    peeling, blistered or poorly adhered coatings need to be addressed before repainting. If
                    unstable material remains underneath, the new paint may adhere to the failing coating rather
                    than the actual substrate. The result can be premature failure of both layers.
                  </p>

                  <p>
                    The extent of removal depends on the condition of the existing coating. Some areas may only
                    require localised preparation, while extensively deteriorated surfaces can require more
                    substantial remedial work.
                  </p>

                  <p>
                    Older buildings can also require additional caution because historical coatings or substrate
                    conditions may present hazards. Priority One Coatings provides{" "}
                    <Link href="/lead-paint-removal/">lead paint testing and removal in Sydney</Link> among its
                    commercial painting services, which is particularly relevant where older coating systems may be
                    present.
                  </p>

                  <h3>Repair Cracks, Holes and Surface Defects, Then Sanding</h3>

                  <p>
                    With clean, sound surfaces, the repair stage begins. Cracks are raked out and filled, nail pops
                    and screw heads are treated, damaged plasterboard is patched, holes and chips are made good, and
                    joints are re-caulked with a flexible sealant where movement is expected. On rendered and
                    masonry surfaces, hollow or drummy sections are cut out and re-rendered. On steelwork, rust is
                    removed back to sound metal by wire brushing, grinding or abrasive blasting depending on the
                    degree of corrosion, then treated promptly so flash rusting does not undo the work. Timber
                    requires attention to rot, splits and previously exposed grain.
                  </p>

                  <p>
                    Sanding follows repairs, and serves two purposes at once. It levels fillers and patches flush
                    with the surrounding surface so the finish reads as one plane under commercial lighting, and it
                    abrades glossy or aged coatings to give the new paint a mechanical key to grip. Enamel doors,
                    frames, handrails and previously gloss-painted walls all need this dulling down. Where sanding
                    cannot achieve enough adhesion &mdash; on tiles, laminates, powder-coated metal or dense concrete
                    &mdash; mechanical abrasion or a bonding primer takes over. Then remove all sanding dust by
                    vacuuming and wiping, because dust left on the wall becomes the layer your paint actually sticks
                    to.
                  </p>

                  <h3>Prime and Seal to Suit the Substrate</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/painting-the-street-wall-with-a-roller-with-gray-paint.jpg"
                      alt="Painting the street wall with a roller with gray paint"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Priming is the bridge between preparation and finish, and the choice of primer is where
                    technical knowledge shows. Bare plasterboard needs a sealer to even out porosity so the topcoat
                    doesn&rsquo;t flash or patch. Fresh render, concrete and masonry generally require an
                    alkali-resistant sealer to handle high pH. Bare or newly cleaned steel needs a
                    corrosion-inhibiting primer, while galvanised and non-ferrous metals need an etch or specialised
                    bonding primer. Timber calls for a wood primer with stains and knots spot-sealed to stop
                    bleed-through, and heavy water stains, nicotine or graffiti usually need a stain-blocking sealer
                    regardless of substrate.
                  </p>

                  <p>
                    Patch-primed repairs should also be spot-primed rather than left raw; otherwise, those areas
                    absorb differently and remain visible through two topcoats. Getting this stage right is a large
                    part of why a coating system performs as the manufacturer intended &mdash; something we take
                    seriously as Dulux Accredited and Master Painters Australia members. You can see how this
                    discipline translates into finished results across our{" "}
                    <Link href="/recent-commercial-projects/">recent commercial projects</Link>.
                  </p>

                  <h3>Choose the Correct Primer for the Substrate</h3>

                  <p>
                    Primer is not a universal product that can be applied identically to every surface. Different
                    substrates and existing coatings may{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/when-to-use-primer-vs-sealer-vs-undercoat/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      require specific primers or undercoats
                    </a>{" "}
                    to achieve appropriate adhesion and performance. Raw timber, masonry, fibre cement, plasterboard
                    and metal can all have different requirements.
                  </p>

                  <p>
                    For example, raw weatherboard requires an appropriate primer before finishing coats are applied.
                    Previously painted weatherboard may also require identification of the existing coating system
                    so that a compatible primer and new coating can be selected.
                  </p>

                  <p>
                    This is an area where professional product knowledge becomes particularly important. Choosing a
                    coating system based only on colour or price can be a false economy if it is incompatible with
                    the substrate. An experienced commercial painting company should assess the environment and
                    surface before specifying primers, undercoats and finishing products.
                  </p>

                  <h3>Prepare Different Commercial Surfaces Correctly</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/two-builders-on-safety-scaffolding-make-yellow-decorative-plaster-on-the-wall.jpg"
                      alt="Two builders on safety scaffolding make yellow decorative plaster on the wall"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Before preparation begins, inspect the building to establish what is actually being painted and
                    its current condition. A commercial property can contain numerous substrates within the same
                    project. Internal areas may include plasterboard, timber doors and frames, masonry and
                    previously coated surfaces. Exteriors can introduce rendered masonry, concrete, fibre cement,
                    timber, steel and other materials.
                  </p>

                  <p>There is no single preparation process that works for every part of a commercial building.</p>

                  <SurfaceCard title="Plasterboard and Gyprock">
                    Plasterboard and gyprock generally need properly finished joints and fixing points, sanding,
                    dust removal and an appropriate sealer or primer before finishing coats.
                  </SurfaceCard>

                  <SurfaceCard title="Timber">
                    Timber may require filling, sanding, cleaning and priming. Existing timber coatings should also
                    be assessed for their condition and compatibility with the proposed new system.
                  </SurfaceCard>

                  <SurfaceCard title="Rendered Masonry and Concrete">
                    Rendered masonry and concrete need to be clean, sound and appropriately cured. Contamination and
                    curing compounds may need to be removed before priming.
                  </SurfaceCard>

                  <SurfaceCard title="Fibre Cement">
                    Fibre cement sheets require suitable patching and cleaning. Previously coated sheets should also
                    be checked for deteriorating paint, dirt and mould.
                  </SurfaceCard>

                  <SurfaceCard title="Metal Surfaces">
                    Metal surfaces can require a different preparation regime again, particularly where corrosion or
                    specialist protective coatings are involved.
                  </SurfaceCard>

                  <p>
                    This substrate-specific approach is one reason{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/how-to-prepare-surface-for-painting/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      professional surface preparation is so important
                    </a>{" "}
                    on larger commercial painting Sydney projects. A building may require several preparation
                    techniques and coating systems within one scope of works.
                  </p>

                  <h3>The Mistakes That Cost Building Owners the Most</h3>

                  <p>
                    The most expensive errors are almost always shortcuts. Painting over moisture or before render
                    has cured. Skipping the wash because the wall &ldquo;looks clean.&rdquo; Overcoating a failing
                    coating instead of removing it. Choosing a general-purpose primer for a specialised substrate.
                    Working outside the temperature and humidity range the manufacturer specifies &mdash; a real{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/winter-exterior-house-painting-dos-and-donts/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      consideration while painting in a Sydney winter
                    </a>
                    , when surfaces stay cold and dew forms early. Each of these saves a few hours and costs a few
                    years of coating life.
                  </p>

                  <h3>Frequently Asked Questions</h3>

                  <h4>How long should surface preparation take on a commercial project?</h4>
                  <p>
                    It varies with the condition of the building. Still, preparation commonly accounts for a
                    substantial share of total project hours &mdash; often more than the application itself on
                    older or heavily trafficked buildings. A newly built fitout with clean plasterboard needs far
                    less than a 30-year-old warehouse with rust and chalking render.
                  </p>

                  <h4>How do you keep dust and disruption down in an occupied building?</h4>
                  <p>
                    Through containment, ventilation management, staged work zones and flexible scheduling. Most of
                    our commercial painting Sydney projects are programmed after hours or across weekends so
                    tenants, staff and customers are not affected.
                  </p>

                  <h4>Do you handle floors and specialised coatings as well as walls?</h4>
                  <p>
                    Yes. Concrete floor preparation involves grinding or diamond polishing, moisture testing and
                    crack repair before an <Link href="/epoxy-floor-coatings/">epoxy floor coating</Link> is
                    applied, and we also deliver full{" "}
                    <Link href="/commercial-fitouts/">commercial fitout painting</Link> and{" "}
                    <Link href="/strata-painters-sydney/">strata painting services</Link>.
                  </p>

                  <h4>How long does surface preparation take?</h4>
                  <p>
                    There is no standard timeframe. A relatively sound office interior may require considerably less
                    preparation than an ageing exterior with damaged coatings, detailed timberwork or difficult
                    access. Substrate type can also affect project duration, with detailed surfaces generally
                    requiring more labour than broad wall areas.
                  </p>

                  <h4>Why use professional commercial painting contractors?</h4>
                  <p>
                    Commercial projects can involve multiple substrates, specialist coatings, access requirements,
                    occupied workspaces and tight schedules. Experienced contractors can assess these factors
                    together and establish a preparation and painting process suited to the property.
                  </p>

                  <h3>Prepare Your Commercial Property for a Better Painting Result</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/construction-of-a-new-strip-shopping-center.jpg"
                      alt="Construction of a new shopping center"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    A durable commercial paint finish begins with preparation. Cleaning, repairing, sanding,
                    treating damaged coatings and selecting the correct primer are not optional details &mdash; they
                    are fundamental parts of producing a professional result.
                  </p>

                  <p>
                    If you are planning a repaint, refurbishment or ongoing maintenance program, Priority One
                    Coatings can assess your building and recommend an appropriate painting solution. Our
                    experienced, Dulux Accredited team provides{" "}
                    <Link href="/">professional painting services in Sydney</Link>, including interior and exterior
                    painting, high-access work, spray painting, epoxy and floor coatings, maintenance programs and
                    other specialist painting services.
                  </p>

                  <p>
                    Whether you manage an office, retail facility, educational property, healthcare building or
                    another commercial site, speak with Priority One Coatings about preparing and painting your
                    property properly from the start.
                  </p>

                  <div className="mt-10 rounded-md border-l-4 border-brand-teal bg-[#f3fafb] px-7 py-6">
                    <h3 className="mt-0">Ready to Get Surface Prepared Properly? Talk to Priority One Coatings</h3>
                    <p>
                      If you are planning a repaint, a fitout or a maintenance program, our team will inspect the
                      substrates, identify what needs to happen before the first coat, and give you a clear, honest
                      scope and quote.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How to Prepare Surfaces Before Painting Commercial Buildings")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How to Prepare Surfaces Before Painting Commercial Buildings")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
