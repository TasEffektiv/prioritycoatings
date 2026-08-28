import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Painting Concrete Driveway In Sydney: A How To Guide",
  description:
    "If you plan to paint your driveway yourself, explore the common steps to have an aesthetically appealing driveway. Contact us for expert residential painters.",
};

const POST_URL = "https://www.prioritycoatings.com.au/painting-your-concrete-driveway/";

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

const MATERIAL_COLUMNS: string[][] = [
  ["Paintbrush", "Paint Roller", "Paint Tray", "Bucket"],
  ["Pressure Washer", "Broom", "Masking Tape", "Rubber Gloves"],
  ["Paving paint", "Safety Glasses", "Cleaner", "Mask"],
  ["Pole Sander", "Scrub Brush", "Mineral Turpentine", "Stiff Bristle Broom"],
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

export default function PaintingYourConcreteDrivewayPage() {
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
                  Painting Concrete Driveway In Sydney: A How To Guide
                </h1>

                <p className="mt-4 text-[15px] text-black/60">May 20, 2024</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2024/05/luxury-house-exterior-with-brick-and-siding-trim-and-double-garage.jpg"
                    alt="Luxury house exterior with brick and siding trim and double garage"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    Are you considering giving your concrete driveway a new look with a fresh coat of paint?
                    Painting can enhance its appearance and protect it from wear and tear, weather conditions, and
                    stains. Whether it is a new or old driveway, painting has the power to give it a facelift in an
                    easy way. When you try to complete this task on your own, it may feel like a daunting task. But
                    with the help of professional house painters, every concrete driveway resurfacing will be
                    incredibly effective. Here, we present some common questions and answers to help you have an
                    aesthetically appealing driveway.
                  </p>

                  <h3>What materials are required to paint a driveway?</h3>
                  <p>The materials you will need to paint a concrete driveway are:</p>

                  <div className="my-6 grid grid-cols-2 gap-x-6 sm:grid-cols-4">
                    {MATERIAL_COLUMNS.map((column, i) => (
                      <ul key={i}>
                        {column.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ))}
                  </div>

                  <figure className="relative my-8 aspect-[665/1024] w-full max-w-[420px] overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2024/05/painting-a-concrete-driveway-essential-materials-and-preparation-napkin.ai_-665x1024.png"
                      alt="Painting a concrete driveway essential materials and preparation"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>How much does painting a concrete driveway cost?</h3>
                  <p>
                    To determine how much it will cost to paint a concrete driveway, first decide what material the
                    driveway&rsquo;s surface is made of. Sealing techniques will change depending on the kind of
                    concrete driveway material.
                    <br />
                    Concrete driveways should be resealed every few years to preserve their longevity and good
                    condition. Depending on the quality and size of the driveway surface, painting it might cost $30
                    to $60 per square metre.
                  </p>
                  <p>
                    Because a driveway&rsquo;s lifespan is dependent on climatic conditions, determining when it
                    should be sealed is a tough undertaking. Some of the sealers that may be used on your driveway
                    are solvent-based acrylic sealers, water-based acrylic sealers, polyurethane sealers, and epoxy
                    sealers.
                  </p>
                  <p>The average cost of a sealer is:</p>
                  <ul>
                    <li>Acrylic sealers based on solvents: 20L for $180</li>
                    <li>$149 gets you 20L of water-based acrylic sealer.</li>
                    <li>Polyurethane sealers are available in 20L amounts for $220.</li>
                    <li>Epoxy sealer 20L costs $220.</li>
                    <li>
                      Concrete sealer spreads at an average pace of 80m2 &ndash; 100m2 per 20L drum, and a suitable
                      seal usually takes two applications.
                    </li>
                  </ul>
                  <p>
                    The cost of painting a concrete driveway can vary depending on the size of the area, the
                    condition of the concrete, the type of coating used, whether any repairs or decorative finishes
                    are required, and whether you hire a professional or go the DIY route. Here&rsquo;s a breakdown
                    of what to expect across each cost category:
                  </p>
                  <ol>
                    <li>
                      <strong>Materials cost $100 to $500</strong> &ndash; This covers the concrete driveway paint
                      or coating itself, rollers, brushes, trays, painter&rsquo;s tape, and any other consumables
                      needed for the job. Premium-quality concrete paints and epoxy coatings sit at the higher end
                      of this range but deliver a significantly more durable and longer-lasting result. Cutting
                      corners on materials is one of the most common reasons a driveway repaint fails within a
                      season.
                    </li>
                    <li>
                      <strong>Labour costs $500 to $1,500</strong> &ndash; If you&rsquo;re engaging a professional
                      painter, labour typically makes up the largest portion of the overall cost. Rates vary
                      depending on the size of the driveway, complexity of the job, and the contractor&rsquo;s level
                      of experience. A professional will not only apply the paint correctly but will also ensure
                      surface preparation is done to a standard that makes the finish last.
                    </li>
                    <li>
                      <strong>Surface preparation costs $100 to $800</strong> &ndash; Surface preparation is
                      non-negotiable for any concrete driveway paint job. This includes pressure washing, crack
                      filling, etching or grinding the surface to improve adhesion, and allowing adequate drying
                      time. The condition of your existing driveway has the biggest impact on this cost &mdash; a
                      heavily cracked or contaminated surface will require significantly more work than a clean,
                      well-maintained one.
                    </li>
                    <li>
                      <strong>Primer and sealant cost $70 to $150</strong> &ndash; A concrete-specific primer
                      improves paint adhesion and helps the topcoat achieve an even, consistent finish. A sealant
                      applied after painting protects the surface from UV damage, oil stains, moisture, and general
                      wear &mdash; making it an investment that extends the life of the entire job considerably.
                      Neither should be skipped if you want lasting results.
                    </li>
                    <li>
                      <strong>Optional features cost $100 to $500+</strong> &ndash; Depending on your goals, there
                      are a number of additions like driveway paint colours that can enhance the look and
                      performance of a painted concrete driveway. These include decorative finishes such as
                      anti-slip texture additives, stencilled patterns, two-tone colour schemes, or line markings.
                      Costs vary depending on complexity and coverage area.
                    </li>
                  </ol>
                  <p>
                    Keep in mind that these figures are estimates and final costs will vary. As a general rule,
                    investing in quality materials and professional preparation upfront will always cost less in
                    the long run than fixing a poorly executed job down the track. For an accurate quote tailored to
                    your property, <Link href="/contact-us/">contact Priority One Coatings today</Link>, and our
                    team will assess your driveway and provide a transparent, no-obligation estimate.
                  </p>

                  <h3>What preparation do you need to take before painting?</h3>
                  <p>
                    Before painting, find another location to keep your cars for a week or longer. Concrete paint
                    takes a week to cure, so be sure the weather will be nice for the drying period. Make sure to
                    consider any additional features or whether you&rsquo;ll be utilising coloured concrete, as they
                    may affect your timeframe.
                  </p>
                  <p>
                    After you&rsquo;ve selected the perfect place to park your cars, you should rope off the area
                    where you&rsquo;ll be working to ensure that no one unintentionally drives or walks on your
                    driveway. After that, you can start the driveway painting.
                  </p>

                  <h3>What steps can you follow to complete your driveway painting?</h3>
                  <p>You need to follow some steps to complete a driveway painting correctly:</p>
                  <ol>
                    <li>You should clean the driveway and repair minor cracks in the concrete.</li>
                    <li>
                      Prime the surface using high-quality primer and a stiff broom. It&rsquo;s essential to wash
                      off the primer after 10 minutes. Before applying the first coat, you need to mask the edges
                      using masking tape to make sure they remain neat and clean.
                    </li>
                    <li>
                      Prepare the paint coatings with the required turpentine. After that, it is time to cut in the
                      edges before applying.
                    </li>
                    <li>Apply it and leave it for at least 16 hours to cure and apply the second coat.</li>
                    <li>Leave the second coat on for one whole week before using the driveway.</li>
                  </ol>

                  <h3>Last words</h3>
                  <p>
                    Concrete driveway painting is a long-duration task that requires extensive preparation. If you
                    want to know more about this tricky task, you can consult with the expert residential painter in
                    Sydney, <Link href="/">Priority One Coatings</Link>, who can help you with all aspects of your
                    painting requirements.
                  </p>

                  <figure className="relative my-8 aspect-[1024/337] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2024/05/transform-your-property-cta-banner.jpg"
                      alt="Transform your property CTA banner"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>Frequently Asked Questions</h3>

                  <h4>Is painting a concrete driveway a good idea?</h4>
                  <p>
                    Yes. Painting a concrete driveway can improve your property&rsquo;s street appeal, protect the
                    surface from weather damage, and extend the life of the concrete. High-quality coatings also
                    make driveways easier to clean and maintain.
                  </p>

                  <h4>What type of paint is best for concrete driveways?</h4>
                  <p>
                    Specialised concrete and epoxy-based coatings are commonly recommended for driveways because
                    they are durable, weather-resistant, and designed to handle vehicle traffic. In Sydney&rsquo;s
                    climate, UV-resistant products are especially important.
                  </p>

                  <h4>How long does painted concrete last?</h4>
                  <p>
                    A professionally painted concrete driveway can last between 5&ndash;10 years, depending on
                    surface preparation, coating quality, traffic levels, and maintenance.
                  </p>

                  <h4>How long do I need to stay off my driveway after painting?</h4>
                  <p>
                    Most concrete paving paints are touch-dry within 1 to 2 hours under favourable weather
                    conditions. However, foot traffic should be avoided for at least 16 hours after each coat, and
                    vehicles should be kept off the driveway for a full week after the final coat to allow the paint
                    to cure properly. Driving on insufficiently cured paint is one of the most common causes of
                    early peeling, tyre marks, and surface damage &mdash; so patience at this stage is critical.
                  </p>

                  <h4>Do I need to seal my concrete driveway after painting?</h4>
                  <p>
                    Yes, applying a sealer after painting is strongly recommended and is one of the best investments
                    you can make for the longevity of the job. A quality sealer protects the paint film from UV
                    degradation, moisture penetration, oil and fuel stains, and general surface abrasion. In
                    Sydney&rsquo;s climate, where summer UV is intense and driveways are exposed year-round, sealing
                    can more than double the functional life of the painted surface. Concrete sealers are available
                    in acrylic, polyurethane, and epoxy formulations, with costs ranging from approximately $149 to
                    $220 per 20-litre drum.
                  </p>

                  <h4>Can I paint a cracked or damaged concrete driveway?</h4>
                  <p>
                    Minor surface cracks can be filled and repaired before painting, and doing so is a standard part
                    of the preparation process. However, significant structural cracking, spalling, or crumbling
                    concrete should be properly assessed before any painting work begins. Applying paint over
                    structurally compromised concrete will not hold and may mask an underlying issue that worsens
                    over time. A professional can advise on whether repairs, resurfacing, or full replacement is the
                    most cost-effective solution for heavily damaged driveways.
                  </p>

                  <h4>Can I paint a concrete driveway myself, or should I hire a professional?</h4>
                  <p>
                    DIY driveway painting is possible for homeowners who are comfortable with the process and
                    willing to invest time in proper preparation. However, the results of a professionally applied
                    job are consistently more durable and visually uniform &mdash; largely because experienced
                    painters understand surface preparation, product selection, and application technique in a way
                    that prevents the most common failure points. For large driveways, driveways in poor condition,
                    or any job where the result really matters, engaging a licensed professional painter is the
                    recommended approach.
                  </p>

                  <h4>What causes painted concrete driveways to peel or flake?</h4>
                  <p>
                    Peeling and flaking are almost always the result of inadequate surface preparation. Painting
                    over a dirty, damp, oily, or poorly primed surface prevents the paint from properly bonding to
                    the concrete. Other common causes include using an interior or unsuitable paint product,
                    skipping the primer coat, applying paint in wet or extremely hot conditions, and allowing
                    vehicles onto the surface before the paint has fully cured. Addressing each of these factors
                    during the preparation and application process is the most effective way to prevent early paint
                    failure.
                  </p>

                  <p>
                    For expert advice on painting your concrete driveway in Sydney, or to get a free, no-obligation
                    quote, visit <strong>Priority One Coatings</strong> &mdash; Sydney&rsquo;s{" "}
                    <Link href="/residential-painters/">trusted residential painting specialists</Link>.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Painting Concrete Driveway In Sydney: A How To Guide")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Painting Concrete Driveway In Sydney: A How To Guide")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
