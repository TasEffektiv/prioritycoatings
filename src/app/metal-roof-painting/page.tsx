import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Painting Metal Roof – Tips & Tricks | Priority One Coatings",
  description:
    "Painting a metal roof effectively with the right materials and techniques will enhance durability, prevent rust, and give the roof a fresh, long-lasting finish.",
};

const POST_URL = "https://www.prioritycoatings.com.au/metal-roof-painting/";

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

export default function MetalRoofPaintingPage() {
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
                  Painting Metal Roof &ndash; Tips &amp; Tricks
                </h1>

                <p className="mt-4 text-[15px] text-black/60">October 20, 2025</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/painting-metal-roof-blog-banner.jpg"
                    alt="Painting metal roof blog banner"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    Few home improvement projects combine aesthetics, function, and value like painting a metal
                    roof. Whether you&rsquo;re upgrading your home&rsquo;s curb appeal or trying to extend the life
                    of your roof, painting it can be a game-changer &mdash; but only if it&rsquo;s done right.
                  </p>

                  <p>
                    Let&rsquo;s walk through the process, the materials, the do&rsquo;s and don&rsquo;ts, and
                    everything in between so you can feel confident and prepared when it&rsquo;s time to pick up
                    that brush or spray gun.
                  </p>

                  <h3>Why Paint a Metal Roof in the First Place?</h3>

                  <p>
                    For many homeowners, the thought of painting a roof seems purely cosmetic. But the{" "}
                    <a
                      href="https://www.prioritycoatings.com.au/benefits-of-painting-your-roof/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      benefits of painting your roof
                    </a>{" "}
                    go far beyond looks.
                  </p>

                  <p>
                    A freshly painted metal roof reflects more sunlight, improving your home&rsquo;s energy
                    efficiency and potentially lowering cooling costs in summer. It also adds a protective layer
                    against corrosion, especially in coastal or humid climates where rust is a concern. And of
                    course, repainting breathes new life into your roof, boosting property value and keeping your
                    exterior looking fresh.
                  </p>

                  <h3>Can All Metal Roofs Be Painted?</h3>

                  <p>Not every metal roof is an ideal candidate for painting &mdash; but most are.</p>

                  <p>
                    If your roof is made from galvanised steel, Galvalume, or aluminium, you&rsquo;re likely in the
                    clear. However, you should check the existing finish. Roofs that are already painted or coated
                    need to be evaluated for flaking, chalking, or other signs of wear. Bare metal roofs may
                    require a specialty primer to ensure the paint adheres properly.
                  </p>

                  <p>
                    In contrast, roofs with severe rust, extensive damage, or unstable structural components may
                    not be worth painting until those issues are resolved.
                  </p>

                  <h3>When Should You Paint?</h3>

                  <p>
                    Think of your roof like a canvas &mdash; it needs the right conditions for the paint to work
                    its magic.
                  </p>

                  <p>
                    As much as possible, do painting on your metal roof during favourable weather. Late autumn or
                    early spring is ideal in most climates. Do not paint on hot days because the paint may dry too
                    fast to allow for streaks or incorrect bonding. Never paint on rainy or wet days to allow
                    adequate curing of the paint.
                    <br />
                    Temperature plays a big role too &mdash; aim for a range between 10°C and 32°C (50°F to 90°F)
                    for best results.
                  </p>

                  <h3>Step-by-Step: How to Paint a Metal Roof</h3>

                  <figure className="relative my-8 aspect-[1024/547] w-full overflow-hidden">
                    <Image
                      src="/images/worker-spray-red-color-on-roof-steel-for-house-construction-1024x547.jpg"
                      alt="Worker spray-painting red colour on roof steel for house construction"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    A successful paint job hinges on thorough preparation. Here&rsquo;s how to do it the right way
                    from start to finish.
                  </p>

                  <h4>1. Inspect and Clean</h4>

                  <p>Before you even think about opening a paint can, give your roof a thorough once-over.</p>

                  <p>
                    Check for rust patches, loose screws, or dented panels. Make any necessary repairs before
                    moving forward. Then, wash the roof using a pressure washer or a strong garden hose with a
                    scrub brush. Remove dirt, mildew, grease, and old flaking paint. A{" "}
                    <a
                      href="https://www.bhg.com/what-is-tsp-cleaner-7968570"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      solution of water and trisodium phosphate
                    </a>{" "}
                    (TSP) works wonders for deep cleaning.
                  </p>

                  <p>Let it dry completely &mdash; this step is crucial.</p>

                  <h4>2. Remove Rust and Apply Primer</h4>

                  <p>
                    When you notice rust, the time to act is now. Remove rust stains with a wire brush or power
                    sander. Apply a rust-inhibiting treatment to the area if necessary.
                  </p>

                  <p>
                    And then primer. Utilise a good-quality, acrylic metal surface bonding primer. This process
                    enhances the adhesion of the paint and results in a smoother, more even finish. For unpainted
                    metal, zinc chromate primers or epoxy-based primers are often recommended.
                  </p>

                  <p>
                    Wait for the primer to dry fully before painting &mdash; usually 24 hours, but always follow
                    the product instructions.
                  </p>

                  <h4>3. Choose the Right Paint</h4>

                  <p>Not all paints are the same, particularly when it comes to metal roofing.</p>

                  <p>
                    Acrylic latex paint is a top choice for its durability and flexibility. It&rsquo;s resistant to
                    fading and cracking and performs well in a range of weather conditions. Silicone-modified
                    polyester and fluoropolymer-based paints (like PVDF) are also excellent for professional-grade
                    applications.
                  </p>

                  <p>
                    Make sure the paint is rated for exterior use and suitable for metal surfaces. Look for UV
                    resistance, mildew resistance, and a long warranty.
                  </p>

                  <h4>4. Apply the Paint</h4>

                  <p>Finally, the part you&rsquo;ve been waiting for: painting.</p>

                  <p>
                    Use a sprayer for even coverage and faster application, especially on larger roofs. A roller or
                    brush can be used for smaller areas or touch-ups. Apply at least two coats, ensuring each coat
                    dries completely before applying the next.
                  </p>

                  <p>
                    <strong>Pro tip:</strong> Paint from the top down and work in small sections to avoid streaks
                    or overlaps.
                  </p>

                  <h3>Common Mistakes to Avoid</h3>

                  <figure className="relative my-8 aspect-[1024/629] w-full overflow-hidden">
                    <Image
                      src="/images/bright-green-metal-roof-1-1024x629.jpg"
                      alt="Bright green metal roof"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>While the process seems straightforward, there are a few pitfalls that can derail your efforts:</p>

                  <ul>
                    <li>
                      <strong>Skipping cleaning</strong> &ndash; Paint won&rsquo;t stick to dirt, debris, or old
                      chalky paint.
                    </li>
                    <li>
                      <strong>Using the wrong primer</strong> &ndash; Without proper priming, the paint may peel or
                      blister.
                    </li>
                    <li>
                      <strong>Painting during the wrong weather</strong> &ndash; Temperature and humidity can make
                      or break the finish.
                    </li>
                    <li>
                      <strong>Over-applying paint</strong> &ndash; More paint doesn&rsquo;t mean better results.
                      Thick layers may crack over time.
                    </li>
                    <li>
                      <strong>Not using safety gear</strong> &ndash; Roof work is inherently risky. Wear harnesses
                      and non-slip shoes.
                    </li>
                  </ul>

                  <h3>Tips for Painting a Roof Without Accidents</h3>

                  <p>Your safety should always come first.</p>

                  <p>
                    Work with a buddy or hire professionals if your roof is steep or high. Always use appropriate
                    fall protection equipment, including safety harnesses, roof anchors, and ladders that extend at
                    least three feet above the roof edge. Never paint a roof alone &mdash; in case of an accident,
                    you&rsquo;ll need someone nearby to help.
                  </p>

                  <p>
                    Also, be aware of nearby power lines and weather changes. One unexpected gust of wind can turn
                    a safe job into a dangerous one.
                  </p>

                  <h3>How Often Should You Paint?</h3>

                  <p>Unlike interior walls that show wear quickly, metal roofs can hold their finish for years.</p>

                  <p>
                    Generally, a professionally painted metal roof can last 10&ndash;15 years before needing a new
                    coat. High-end coatings like PVDF (polyvinylidene fluoride) can last even longer &mdash; up to
                    30 years. However, this depends on the environment, climate, and quality of the previous paint
                    job.
                  </p>

                  <p>
                    Do periodic inspections every few years to monitor fading, chalking, or bubbling. Early
                    touch-ups can prevent major overhauls later.
                  </p>

                  <h3>Is Painting a Metal Roof Sustainable?</h3>

                  <figure className="relative my-8 aspect-[1024/571] w-full overflow-hidden">
                    <Image
                      src="/images/man-crouches-down-painting-the-surface-of-a-roof-with-a-small-brush-1024x571.jpg"
                      alt="Man crouches down painting the surface of a roof with a small brush"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>Interestingly, painting your roof can be a green decision &mdash; if you choose the right products.</p>

                  <p>
                    Reflective roof coatings can significantly reduce your home&rsquo;s heat absorption, easing
                    your reliance on air conditioning. Some modern paints are formulated with low or zero VOCs
                    (volatile organic compounds), which are safer for the environment and your family.
                  </p>

                  <p>
                    Additionally, extending the life of your roof by painting it reduces the need for full
                    replacements &mdash; saving materials, energy, and landfill waste.
                  </p>

                  <h3>DIY or Professional: What&rsquo;s the Better Option?</h3>

                  <p>
                    Whether to paint your metal roof yourself or hire professionals depends on your comfort with
                    heights, equipment access, and the scale of your project.
                  </p>

                  <p>
                    DIY is absolutely possible for single-story homes with mild roof pitches and proper safety
                    setups. You&rsquo;ll also save a considerable amount on labour costs. However,{" "}
                    <Link href="/residential-painters/">professional residential painters</Link> bring years of
                    experience, specialised tools, and the right safety measures. They also know how to handle
                    tricky roof contours and potential weather complications.
                  </p>

                  <p>
                    If your roof is steep, multi-story, or shows signs of structural issues, hiring a pro like{" "}
                    <strong>Priority One Coatings</strong> is your best bet.
                  </p>

                  <h3>Final Thoughts: A Worthwhile Project with Big Benefits</h3>

                  <p>
                    Taking on a metal roof painting project may seem like a big job, but with the right preparation
                    and product choices, it&rsquo;s one of the most cost-effective ways to boost both the look and
                    efficiency of your home.
                  </p>

                  <p>
                    Whether you&rsquo;re freshening up your roof for resale or planning to stay put for years, the
                    rewards of a freshly painted roof &mdash; from energy savings to weather protection &mdash;
                    make it well worth the investment.
                  </p>

                  <p>
                    So, gather your tools, pick a dry, sunny day, and give your roof the TLC it deserves. It might
                    just become your favourite weekend project yet.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Painting Metal Roof – Tips & Tricks")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Painting Metal Roof – Tips & Tricks")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
