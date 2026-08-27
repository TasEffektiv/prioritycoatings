import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Painting Commercial Building: The Best Practice Guide | Priority One Coatings",
  description:
    "Explore the best practices for commercial building painting in Sydney, including preparation, coatings, safety standards, and maintenance tips. Contact for more.",
};

const POST_URL = "https://www.prioritycoatings.com.au/painting-commercial-building-the-best-practice-guide/";

const CATEGORY_LINKS: Record<string, string> = {
  "Commercial Painting": "/category/commercial-painting/",
  DIY: "/category/diy/",
  News: "/category/news/",
  "Residential painting": "/category/residential-painting/",
};

const CATEGORIES = Object.keys(CATEGORY_LINKS);

const RECENT_POSTS = [
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

export default function PaintingCommercialBuildingBestPracticeGuidePage() {
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
                  Painting Commercial Building: The Best Practice Guide
                </h1>

                <p className="mt-4 text-[15px] text-black/60">May 20, 2026</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/05/colorful-building-facade-in-city.jpg"
                    alt="Colorful building facade in city"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    Nothing refreshes a commercial property like a well-executed paint job. Whether it&rsquo;s a
                    large retail centre, a small office complex, or an industrial warehouse, the right painting
                    approach can completely transform the way customers, tenants and employees feel when they walk
                    through your doors. Although many business owners think of painting as a simple maintenance task,
                    professionals know it is far more strategic. A carefully planned painting project improves brand
                    identity, boosts property value, strengthens structural protection and creates a lasting first
                    impression that sets Australian businesses apart in a competitive market.
                  </p>

                  <p>
                    Throughout this article, you&rsquo;ll discover practical steps, informed insights and
                    industry-proven best practices used by <Link href="/">professional painters in Sydney</Link> and
                    all over Australia. This guide aims to help property owners and project managers plan the next
                    painting project with clarity and confidence. Let&rsquo;s break down the process the way
                    professionals do.
                  </p>

                  <h3>How Often Should You Repaint a Commercial Building?</h3>

                  <p>
                    Depending on the building type, surface materials and exposure to weather, the ideal repainting
                    frequency varies. For example, offices in metropolitan Melbourne or Sydney may not deteriorate as
                    quickly as coastal caf&eacute;s in Cairns or holiday parks near the Gold Coast. Still, most
                    industry experts agree on the following recommendations:
                  </p>

                  <ul>
                    <li>
                      <strong>Exterior walls:</strong> Every 5&ndash;10 years
                    </li>
                    <li>
                      <strong>Timber surfaces:</strong> Every 3&ndash;7 years
                    </li>
                    <li>
                      <strong>Metal cladding:</strong> Every 5&ndash;10 years
                    </li>
                    <li>
                      <strong>Interior walls:</strong> Every 3&ndash;5 years, depending on traffic
                    </li>
                    <li>
                      <strong>High-touch zones:</strong> As needed, often every 1&ndash;2 years
                    </li>
                  </ul>

                  <h3>Evaluating Your Building Before You Begin</h3>

                  <figure className="relative my-8 aspect-[1024/641] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/06/scaffolding-at-the-neoclassical-house-restoration-of-old-building-in-greece.jpg"
                      alt="Scaffolding at a neoclassical building during restoration of an old building"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Before any brush or sprayer touches your surfaces, an assessment is essential. Experienced
                    painters spend a significant portion of project time examining the building because identifying
                    issues early prevents surprise delays and budget blowouts later.
                  </p>

                  <p>
                    Start by walking around the perimeter of your building. You&rsquo;ll want to look for bubbling
                    paint, cracks, peeling layers, chalking, mould patches, rust spots, warping timber or areas that
                    feel damp. If your building is older&mdash;particularly those constructed before the
                    1980s&mdash;it&rsquo;s wise to check for asbestos materials. Asbestos must only be handled by
                    licensed professionals, and painting over it without proper sealing can lead to long-term safety
                    issues.
                  </p>

                  <p>
                    In some cases, owners skip the assessment stage and jump straight into painting, only to find
                    that the new layers don&rsquo;t adhere properly or that underlying damage becomes worse.{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/how-to-prepare-surface-for-painting/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Surface preparation is the foundation
                    </a>{" "}
                    of every successful project, and it&rsquo;s an area where expert oversight becomes invaluable.
                  </p>

                  <h3>Creating a Realistic Project Plan</h3>

                  <p>
                    If your business operates seven days a week or has peak trading hours, you&rsquo;ll want to map
                    out a painting schedule that minimises inconvenience. Many painting teams offer after-hours or
                    weekend work specifically for this reason. By building your plan around your operating hours, you
                    protect revenue while allowing painters to complete their work efficiently.
                  </p>

                  <p>
                    Weather plays a huge role, too. In Australia, humidity, rain and extreme heat all influence how
                    paint cures and adheres. For example, painting during the high-humidity season in Queensland is
                    very different from painting during the crisp winters of Victoria. Each climate requires planning
                    to ensure the best long-term durability.
                  </p>

                  <p>
                    Safety should also be embedded into your plan. A professional team will know how to manage
                    scaffolding, electrical hazards, traffic around the site and workplace safety guidelines. Whether
                    you&rsquo;re repainting a two-storey shopfront or a large multi-level complex, a comprehensive
                    project plan prevents headaches and accidents.
                  </p>

                  <h3>Preparing the Surfaces Properly</h3>

                  <figure className="relative my-8 aspect-[1024/576] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/06/construction-worker-wearing-protective-white-gloves-and-blue-construction-coveralls-is-sanding.jpg"
                      alt="Construction worker wearing protective white gloves and blue construction coveralls is sanding"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Preparation determines more than half of the finished result. A rushed preparation stage almost
                    always leads to peeling paint, uneven surfaces, and diminished lifespan of the coating.
                    <br />
                    Here&rsquo;s what a thorough preparation process looks like:
                  </p>

                  <ol>
                    <li>
                      <strong>Deep Cleaning</strong>
                      <br />
                      Pressure washing removes dirt, dust, pollution, oil residues and mould spores. This gives fresh
                      paint a clean base to cling to. In industrial environments, degreasing is often needed before
                      washing.
                    </li>
                    <li>
                      <strong>Sanding and Smoothing</strong>
                      <br />
                      Sanding removes loose paint, smooths rough patches and creates a surface that allows the new
                      coat to bond properly. Different surfaces require different sanding grades, and professionals
                      adjust techniques accordingly.
                    </li>
                    <li>
                      <strong>Repair Work</strong>
                      <br />
                      Any cracks, gaps, holes or rotten sections must be repaired before painting begins. Caulking
                      gaps around windows and joints prevents water intrusion, while patching compounds help level
                      damaged areas.
                    </li>
                    <li>
                      <strong>Priming</strong>
                      <br />
                      Primer acts like glue between the surface and the paint. It seals porous areas, covers stains
                      and boosts paint adhesion. In some cases, specialty primers&mdash;such as anti-mould, anti-rust
                      or high-bond primers&mdash;are essential.
                    </li>
                  </ol>

                  <h3>Choosing the Right Paint</h3>

                  <p>
                    Selecting paint isn&rsquo;t as simple as choosing a colour chart. For commercial buildings,
                    durability and performance are just as important as visual appeal. Australian conditions demand
                    products that can withstand harsh weather extremes, high UV exposure, salt spray, heavy foot
                    traffic and long operating hours.
                  </p>

                  <p>Here&rsquo;s what to consider when choosing paints:</p>

                  <h4>Exterior Areas</h4>

                  <p>
                    Exterior paints must resist blistering, fading and cracking. Acrylic-based paints are popular for
                    commercial exteriors because they&rsquo;re flexible and UV-resistant. If your building has metal
                    surfaces, a protective anti-corrosion coating is essential.
                  </p>

                  <h4>Interior Workspaces</h4>

                  <p>
                    Interior areas differ depending on their use. High-traffic corridors and public areas need
                    washable, scuff-resistant finishes, while offices may benefit from low-VOC paints that improve
                    air quality.
                  </p>

                  <h4>Specialised Coatings</h4>

                  <p>
                    Warehouses, hospitals, kitchens, chemical facilities and childcare centres require coatings with
                    special properties such as antimicrobial protection, chemical resistance, slip reduction or
                    fire-retardant qualities.
                  </p>

                  <h3>Ensuring Safety Throughout the Painting Process</h3>

                  <figure className="relative my-8 aspect-[1024/644] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/06/worker-paints-building-wall-renovating-works.jpg"
                      alt="Worker paints building wall renovating works"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Safety is the foundation of all commercial painting jobs, particularly in multi-level buildings or
                    industrial settings. It is the responsibility of the business owner to ensure that the
                    contractors adhere to safe working procedures and{" "}
                    <a
                      href="https://www.safeworkaustralia.gov.au/law-and-regulation/legislation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Australian WHS legislation
                    </a>
                    .
                  </p>

                  <p>Professional teams will implement:</p>

                  <ul>
                    <li>Safe scaffolding and elevated work platform handling</li>
                    <li>Hazard communication and signage</li>
                    <li>Electrical safety precautions</li>
                    <li>Ventilation control for interior jobs</li>
                    <li>Dust and debris management</li>
                    <li>Traffic redirection plans</li>
                    <li>PPE for all workers</li>
                  </ul>

                  <p>
                    Proper safety planning not only protects workers but also prevents injuries to customers,
                    employees and visitors. A painting project shouldn&rsquo;t expose your business to unnecessary
                    risk.
                  </p>

                  <h3>Maximising Longevity After the Paint Job</h3>

                  <p>
                    Once your building has been refreshed, protecting your investment becomes the next priority.
                    Maintenance plays a huge role in ensuring your paint job lasts.
                  </p>

                  <p>Consider these upkeep tips:</p>

                  <ul>
                    <li>Wash the exterior yearly to remove dust, pollution and mould</li>
                    <li>Inspect high-risk areas for peeling or cracking</li>
                    <li>Touch up damaged sections quickly</li>
                    <li>Maintain gutters and drainage to prevent water staining</li>
                    <li>Reapply sealants when necessary</li>
                  </ul>

                  <p>A little attention each year can add multiple years to the lifespan of your new coating.</p>

                  <h3>Choosing a Skilled Painting Team</h3>

                  <p>
                    Finding the right painters is the single most important decision you&rsquo;ll make. While many
                    companies offer commercial painting, not all have the experience, equipment or techniques
                    required for large-scale projects.
                  </p>

                  <p>When selecting a painter, be sure to check:</p>

                  <ul>
                    <li>Experience with buildings similar to yours</li>
                    <li>Licensing and insurance</li>
                    <li>Portfolio of previous commercial projects</li>
                    <li>Product knowledge</li>
                    <li>Clear timelines and cost breakdowns</li>
                    <li>Safety certifications</li>
                    <li>Warranty options</li>
                  </ul>

                  <p>
                    <Link href="/commercial-painting/">Commercial painting contractors in Sydney</Link> will help
                    ensure your project is handled by a team with the right expertise and understanding of local
                    standards.
                  </p>

                  <h3>Sustainability and Eco-Friendly Painting Practices</h3>

                  <figure className="relative my-8 aspect-[1024/606] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/06/professional-builder-using-a-paint-roller-applying-a-fresh-coat-of-paint-to-the-walls-of-a-building.jpg"
                      alt="Professional builder using a paint roller applying a fresh coat of paint to the walls of a building"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Sustainability is increasingly important for Australian businesses&mdash;not just as a marketing
                    advantage, but as a genuine commitment to reducing environmental impact. Many customers actively
                    choose brands that demonstrate ethical and eco-conscious choices, and property appearance is a
                    visible part of that story. A sustainable painting strategy improves indoor comfort, reduces
                    waste, protects worker health and reflects well on your company&rsquo;s values.
                  </p>

                  <h4>Use Eco-Friendly and Low-VOC Paints</h4>

                  <p>
                    Low-VOC (volatile organic compound) paints emit far fewer chemical fumes than traditional paints.
                    These odours are not only unpleasant; they can also trigger headaches, allergies and respiratory
                    irritation in staff or customers. Using low-VOC products keeps indoor environments safer and
                    allows the building to be reoccupied more quickly without lingering chemical smells. Modern
                    formulations perform just as well as traditional paints, offering excellent durability and
                    coverage. In offices, childcare centres, clinics and hospitality venues,{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/voc-paint-vs-low-voc-paint-vs-no-voc-paint/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      low-VOC coatings create healthier spaces
                    </a>{" "}
                    and a far more comfortable work environment.
                  </p>

                  <h4>Choose Products with Longer Lifespans</h4>

                  <p>
                    Long-lasting coatings contribute significantly to sustainability by reducing the frequency of
                    repainting. Fewer repaints mean fewer materials used, less transport, less labour and less waste.
                    High-quality paints also offer stronger UV resistance, making them ideal for Australian
                    conditions. By selecting superior products&mdash;such as elastomeric coatings, weather-shield
                    exteriors, or premium acrylics&mdash;you protect your building for years to come. This reduces
                    environmental impact and supports responsible long-term asset management.
                  </p>

                  <h4>Supporting Your Brand Image Through Sustainability</h4>

                  <p>
                    Sustainability is not just about ticking boxes&mdash;it influences how people feel about your
                    business the moment they walk through the door.
                  </p>

                  <p>
                    Choosing greener painting practices sends a strong message that your organisation cares about
                    community wellbeing, environmental impact and long-term stewardship of its property. In a
                    competitive market, these values help you stand out while also delivering practical day-to-day
                    benefits.
                  </p>

                  <h3>Conclusion</h3>

                  <p>
                    Every commercial building tells a story the moment someone sees it, and paint is one of the most
                    powerful tools to shape that story. A clean, vibrant, well-maintained building communicates
                    professionalism, care and credibility&mdash;qualities that set successful Australian businesses
                    apart.
                  </p>

                  <p>
                    By understanding the best practices outlined in this guide, you&rsquo;ll be armed with the
                    knowledge you need to plan a project that not only enhances aesthetics but also strengthens
                    protection, lowers maintenance costs and builds long-lasting trust with customers and tenants.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Painting Commercial Building: The Best Practice Guide")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Painting Commercial Building: The Best Practice Guide")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
