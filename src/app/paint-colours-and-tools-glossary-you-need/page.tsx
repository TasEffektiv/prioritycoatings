import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paint, Colours, And Tools - Glossary You Need | Priority One Coatings",
  description:
    "Planning a painting project? Explore essential terms of paint, colours, and tools in this easy-to-understand glossary, perfect for homeowners and DIY painters.",
};

const POST_URL = "https://www.prioritycoatings.com.au/paint-colours-and-tools-glossary-you-need/";

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

export default function PaintColoursAndToolsGlossaryPage() {
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
                  Paint, Colours, And Tools &ndash; Glossary You Need
                </h1>

                <p className="mt-4 text-[15px] text-black/60">April 10, 2026</p>

                <div className="relative mt-6 aspect-[2240/1260] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/04/painting-glossary-blog-banner.jpg"
                    alt="Painting glossary blog banner"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    Planning to paint your house? Whether you&rsquo;re refreshing a tired space or giving your home a
                    complete makeover, the first step to success is understanding the lingo. The world of paints,
                    colours, and tools is brimming with specialised terms that can leave even seasoned DIYers
                    scratching their heads.
                  </p>

                  <p>
                    Painting isn&rsquo;t just about a brush and roller or applying colour on a wall. It&rsquo;s about
                    proper prep like cleaning and sanding, and using the right tools for the job. To make sure
                    you&rsquo;re well-equipped for your next painting project, we&rsquo;ve created this comprehensive
                    glossary to walk you through everything you need to know.
                  </p>

                  <p>
                    From A to Z, this guide will help you decode the confusing jargon and shop smart at your local
                    hardware store.
                  </p>

                  <h3>Acrylic Paint</h3>

                  <p>
                    Unlike oil-based paint, acrylic paint is water-based, making it easier to clean and quicker to
                    dry. It&rsquo;s a popular choice for interior and exterior walls because of its durability and
                    low VOCs (Volatile Organic Compounds). Acrylic paint offers excellent colour retention and is
                    resistant to moisture, making it a favourite among both beginners and pros.
                  </p>

                  <h3>Base Coat</h3>

                  <p>
                    Before you even think about adding colour, you&rsquo;ll need a base coat to seal the surface.
                    This first layer provides a suitable base that ensures your top coat, the final colour looks
                    consistent and vibrant. The undercoat is especially important when you&rsquo;re painting over a
                    dark wall with a lighter shade or vice versa. Think of it as the primer&rsquo;s partner in crime.
                  </p>

                  <h3>Brushes (Types and Uses)</h3>

                  <p>
                    It&rsquo;s tempting to grab just any brush, but each type has its purpose. For example, angled
                    brushes are great for corners and trim, while flat brushes work well for large, flat surfaces.
                    Natural bristles are best for oil-based paints, and synthetic ones work beautifully with
                    water-based options like latex and acrylic.
                  </p>

                  <h3>Cutting-In</h3>

                  <p>
                    Ever notice that neat line where the wall meets the ceiling? That&rsquo;s the result of
                    cutting-in&mdash;a technique where a small brush is used to paint edges and corners before using
                    a roller on the larger sections. It requires the steady hand of{" "}
                    <Link href="/">professional painters in Sydney</Link> and a good quality brush.
                  </p>

                  <figure className="relative my-8 aspect-[1024/586] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/04/top-down-view-at-cloth-and-paint-brush-over-old-wooden-chair-1024x586.jpg"
                      alt="Top down view at cloth and paint brush over old wooden chair"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>Drop Cloth</h3>

                  <p>
                    Picture this: You&rsquo;ve finished your last coat and realise paint has splattered all over your
                    hardwood floor. That&rsquo;s what a drop cloth is for. Made of canvas or plastic, it protects
                    your surfaces from spills, drips, and smudges. Don&rsquo;t skip it.
                  </p>

                  <h3>Emulsion</h3>

                  <p>
                    When you&rsquo;re painting interior walls, emulsion paint is your go-to. It&rsquo;s water-based,
                    low-odour, and easy to apply. It also comes in different finishes&mdash;matt, satin, and
                    silk&mdash;depending on the look and feel you want.
                  </p>

                  <h3>Finish (Sheen Levels)</h3>

                  <p>
                    Glossy, satin, matte&mdash;these aren&rsquo;t just fancy words. They describe the finish or sheen
                    of your paint. Gloss paints reflect the most light and are easy to clean, making them ideal for
                    kitchens and bathrooms. Matte finishes hide imperfections and suit living rooms and bedrooms.
                    Satin falls somewhere in the middle and offers a subtle shine.
                  </p>

                  <h3>Filler</h3>

                  <p>
                    If your wall has cracks, holes, or dents, filler is your best friend. It smooths over
                    imperfections so you start with a flawless surface. Make sure it dries completely before sanding
                    and painting over it.
                  </p>

                  <h3>Grain Direction</h3>

                  <p>
                    For wooden surfaces, knowing the grain direction matters. Always sand and paint with the grain,
                    not against it. This technique ensures a smoother finish and prevents streaks or drag marks.
                  </p>

                  <figure className="relative my-8 aspect-[1024/585] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/04/cleaning-doors-from-old-paint-restoration-of-wooden-doors-1024x585.jpg"
                      alt="Cleaning doors from old paint, restoration of wooden doors"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>Heat Gun</h3>

                  <p>
                    Sometimes, old paint just won&rsquo;t budge with sanding or stripping gel. That&rsquo;s where a
                    heat gun comes in. It softens stubborn paint so you can scrape it off easily, but be
                    careful&mdash;it gets very hot and needs to be handled with care.
                  </p>

                  <h3>Interior Paint</h3>

                  <p>
                    Not all paint is created equal. Interior paint is formulated for indoor use, offering easy
                    application, low odour, and durability against scuffs and scratches. It also dries faster and
                    generally has fewer fumes.
                  </p>

                  <h3>Joint Compound</h3>

                  <p>
                    Also called drywall mud, joint compound is used to patch holes or smooth seams in drywall.
                    It&rsquo;s <Link href="/interior-painting-preparation/">essential for preparing your walls</Link>{" "}
                    for a professional-quality paint job.
                  </p>

                  <h3>Knotting Solution</h3>

                  <p>
                    Ever painted over wood only to see a yellowish stain bleed through? That&rsquo;s tannin from wood
                    knots. A knotting solution seals those knots and prevents discolouration in your topcoat.
                  </p>

                  <h3>Latex Paint</h3>

                  <p>
                    Even though it&rsquo;s called latex, this paint doesn&rsquo;t actually contain latex rubber.
                    It&rsquo;s a water-based formula known for its quick drying time, low toxicity, and ease of use.
                    Perfect for beginners and eco-conscious renovators.
                  </p>

                  <figure className="relative my-8 aspect-[1024/584] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/04/worker-putting-painter-s-tape-on-wall-in-room-1024x584.jpg"
                      alt="Worker putting painter's tape on wall in room"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>Masking Tape</h3>

                  <p>
                    You&rsquo;ve probably used masking tape to create clean edges, but did you know there are
                    different types? Choose one that suits your surface&mdash;some tapes are gentler for delicate
                    areas like freshly painted walls or wallpaper.
                  </p>

                  <h3>Nap (Roller Nap)</h3>

                  <p>
                    The nap is the thickness of the roller cover. A low nap (short fibres) is great for smooth
                    surfaces, while a high nap is ideal for textured walls or ceilings. Using the wrong one could
                    leave you with a blotchy finish.
                  </p>

                  <h3>Oil-Based Paint</h3>

                  <p>
                    Although it takes longer to dry and requires mineral spirits for cleanup, oil-based paint is
                    incredibly durable. It&rsquo;s often used for trim, doors, and high-traffic areas where scuffs
                    and scrapes are common.
                  </p>

                  <h3>Primer</h3>

                  <p>
                    Don&rsquo;t skip this crucial step. Primer creates a stable base for your paint, helps with
                    adhesion, and covers stains or previous colours. It&rsquo;s like preparing a canvas before
                    painting a masterpiece.
                  </p>

                  <h3>Quality Rating (Paint Grade)</h3>

                  <p>
                    Not all paints are created equal. Higher-quality paint covers better, lasts longer, and often
                    requires fewer coats. Look for paints rated for their coverage, scrub-resistance, and
                    durability.
                  </p>

                  <figure className="relative my-8 aspect-[1024/586] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/04/white-paint-with-essentials-equipment-1024x586.jpg"
                      alt="White paint with essential painting equipment"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>Rollers</h3>

                  <p>
                    Speed up your painting process with a roller. These tools are great for covering large areas and
                    come in various materials&mdash;foam, synthetic, or lambswool&mdash;each suited for different
                    types of paint and surfaces.
                  </p>

                  <h3>Sanding Block</h3>

                  <p>
                    Before applying that first coat, sanding is essential. A sanding block smooths out surfaces and
                    helps the paint adhere better. It&rsquo;s also a handy tool when prepping between coats for a
                    buttery finish.
                  </p>

                  <h3>Tack Cloth</h3>

                  <p>
                    Dust is the enemy of a smooth finish. A tack cloth is a sticky rag that removes fine particles
                    from surfaces before painting. Use it after sanding to ensure your surface is clean and ready.
                  </p>

                  <h3>Undercoat</h3>

                  <p>
                    Right after primer and before the final colour goes an undercoat. It enhances coverage and
                    ensures the paint sits evenly on the surface. Especially useful when switching from dark to
                    light hues.
                  </p>

                  <h3>VOC (Volatile Organic Compounds)</h3>

                  <p>
                    These are chemicals found in many traditional paints that release fumes as they dry. Nowadays,
                    low-VOC or zero-VOC paints are available and are a healthier choice for you and the environment.
                  </p>

                  <figure className="relative my-8 aspect-[1024/580] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/04/mixing-different-color-paint-together-for-painting-walls-in-cosmetic-renovations-1024x580.jpg"
                      alt="Mixing different colour paint together for painting walls in cosmetic renovations"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>Water-Based Paint</h3>

                  <p>
                    More than just eco-friendly, water-based paints dry faster and have fewer odours. They&rsquo;re
                    ideal for indoor use and easy to clean with just soap and water.
                  </p>

                  <h3>Xylene</h3>

                  <p>
                    Rarely used by DIYers but often seen in commercial settings, xylene is a solvent used in some
                    heavy-duty paint removers. Always use it in a well-ventilated area, with gloves and a mask.
                  </p>

                  <h3>Yellowing</h3>

                  <p>
                    Some paints, especially oil-based ones, can yellow over time due to lack of sunlight or chemical
                    breakdown. To avoid this, use high-quality, non-yellowing formulations or opt for water-based
                    options.
                  </p>

                  <h3>Zinsser (and Other Specialty Brands)</h3>

                  <p>
                    Zinsser is a brand known for top-tier primers, mould-resistant paints, and stain-blocking
                    formulas. Knowing your brands can help you make better buying decisions, especially when
                    you&rsquo;re tackling stubborn surfaces.
                  </p>

                  <h2>Final Thoughts</h2>

                  <p>
                    As a homeowner or project manager, when you understand the basics of painting, you empower
                    yourself to take on projects with confidence. This glossary isn&rsquo;t just about memorising
                    terms&mdash;it&rsquo;s about turning your home improvement goals into a reality with the right
                    knowledge and tools.
                  </p>

                  <p>
                    So next time you&rsquo;re at the hardware store, you won&rsquo;t feel overwhelmed. You&rsquo;ll
                    know what a nap is, how to cut-in, and why VOCs matter. That&rsquo;s the power of being
                    paint-smart.
                  </p>

                  <hr className="my-8 border-black/10" />

                  <div className="relative my-8 aspect-[1024/337] w-full overflow-hidden rounded-lg">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2026/04/priority-coatings-cta-banner-1-1024x337.png"
                      alt="Transform your property with Sydney painters - Priority One Coatings"
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3>Contact the Experts</h3>

                  <p>
                    Ready to bring your painting project to life?{" "}
                    <Link href="/contact-us/">Get in touch with the experienced team</Link> at{" "}
                    <strong>Priority One Coatings</strong> for professional advice and a free, no-obligation quote.
                  </p>

                  <p>
                    Whether it&rsquo;s residential, commercial, or specialised coatings, our skilled team is here to
                    help you achieve a high-quality, long-lasting finish.
                  </p>

                  <p>
                    📞 Contact us today to discuss your project
                    <br />
                    📩 <a href="mailto:jenny@prioritycoatings.com.au">jenny@prioritycoatings.com.au</a>
                    <br />
                    🌐 <Link href="/">https://www.prioritycoatings.com.au/</Link>
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Paint, Colours, And Tools – Glossary You Need")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Paint, Colours, And Tools – Glossary You Need")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
