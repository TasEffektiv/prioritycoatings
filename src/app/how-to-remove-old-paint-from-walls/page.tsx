import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Remove Old Paint from Walls | Priority One Coatings",
  description:
    "If you're considering repainting the walls, remove old paint first. Removing paint can sometimes damage the wall - review techniques.",
};

const POST_URL = "https://www.prioritycoatings.com.au/how-to-remove-old-paint-from-walls/";

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

function MethodSection({
  title,
  children,
  advantages,
  drawbacks,
}: {
  title: string;
  children: React.ReactNode;
  advantages: string;
  drawbacks: string;
}) {
  return (
    <>
      <h3>{title}</h3>
      <p>{children}</p>
      <ul>
        <li>
          <strong>Advantages:</strong> {advantages}
        </li>
        <li>
          <strong>Drawbacks:</strong> {drawbacks}
        </li>
      </ul>
    </>
  );
}

export default function HowToRemoveOldPaintFromWallsPage() {
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
                  How to Remove Old Paint from Walls
                </h1>

                <p className="mt-4 text-[15px] text-black/60">July 7, 2024</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2024/07/texture-background-old-paint.jpg"
                    alt="Remove Old Paint from Walls"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    Do you want to change your room colour, or has your wall paint gotten old and has started
                    peeling? You can solve these problems easily with a fresh coat of paint. But before applying the
                    paint, you need to remove the old one from the walls first. There are several ways to remove
                    paint from walls: water washing, sanding, chemical stripping, scraping, and steaming. Let&rsquo;s
                    explore the techniques together to remove all the paint and get a smooth finish wall.
                  </p>

                  <h2>Understanding Different Paint Types Before You Strip</h2>

                  <p>
                    Before you start stripping paint, it&rsquo;s essential to figure out what kind you&rsquo;re
                    dealing with. Different paints demand different removal techniques to prevent damage to the
                    surface underneath and to make cleanup easier. Picking the wrong method could mess up your
                    walls, so this step is super important for getting the job done right.
                  </p>

                  <h3>✦ Latex Paints (Water-Based)</h3>

                  <p>
                    Latex Paints are the most common paints found in homes. They&rsquo;re a breeze to clean up when
                    wet &ndash; just soap and water will do the trick. Once dry, you can remove them with heat and
                    scraping, or with special water-based paint removers. Because they&rsquo;re easy to remove and
                    dry quickly, they&rsquo;re often used in areas where people like to change colors or update
                    things frequently.
                  </p>

                  <h3>✦ Alkyd Paints (Oil-Based)</h3>

                  <p>
                    Oil-based paints are tougher and harder to remove than water-based ones. You&rsquo;ll need strong
                    chemical solvents or heat to get rid of them effectively. You&rsquo;ll often find this type of
                    paint in older homes or on surfaces that need extra protection, like outside trim or metal
                    fixtures. They&rsquo;re popular for their glossy, long-lasting finish and ability to withstand
                    wear and tear, but they can be a real pain to remove because they stick so well.
                  </p>

                  <h3>✦ Spray Paints</h3>

                  <p>
                    Spray paint can be either water-based or oil-based, but it&rsquo;s applied as a fine mist. This
                    can make it tricky to remove, especially from surfaces like brick or unfinished wood that soak it
                    up. Removing spray paint often involves strong chemical strippers and scrubbing. This type of
                    paint is frequently used for quick applications or projects needing a uniform, aerosol-applied
                    appearance.
                  </p>

                  <h2>Key Paint Removal Methods for a Smooth Wall Finish</h2>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2024/07/visual-selection-2-888x1024.png"
                      alt="Key paint removal methods for a smooth wall finish"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    There are three primary methods for removing paint from walls: heat, chemical treatments, and
                    manual removal. The best approach will depend on the surface, the type of paint, and the
                    condition of the wall. Below are the most commonly used, effective, and safe paint removal ways:
                  </p>

                  <MethodSection
                    title="1. Water Washing (Moisture-Assisted Removal)"
                    advantages="Generally low cost and uses common household materials; Least aggressive method, good for delicate surfaces; Eco-friendly and non-toxic (when using simple solutions)."
                    drawbacks="Slow and labor-intensive for large areas; Risk of water seeping into the substrate, causing damage or blistering; Ineffective on oil-based or very thick paint layers."
                  >
                    Vinegar water, limewater, soap water, warm water, and hot water are all used in water washing and
                    paint removal, depending on the paint type. Paints can be removed using this method, but use
                    caution to keep water from seeping into the substrate. Soft soap, soda, and other alkaline soaps
                    can damage freshly painted surfaces and leave behind hazardous residues. There is a chance of
                    collecting and spreading moisture behind the good-condition paint if only a small portion has to
                    be removed from an area. It can cause blistering in the near future.
                  </MethodSection>

                  <MethodSection
                    title="2. Sanding (Surface Preparation)"
                    advantages="Achieves a very smooth, ready-to-paint surface; Highly effective for feathering edges and removing uneven buildup; Tools are widely available and inexpensive (sandpaper/blocks)."
                    drawbacks="Extremely dusty and messy, requiring extensive cleanup and proper PPE; Labor-intensive, especially for hand sanding; Risk of inhaling toxic dust, especially if lead paint is present."
                  >
                    Sanding is one of the most popular methods. It is usually used to help smooth out old paint,
                    remove dry streaks and uneven paint buildup, and ensure that new paint adheres well. In order to
                    remove the paint from wall you can use sandpaper, a sanding block, or a power sander. Even though
                    hand sanding might be labor-intensive, this method works well to remove numerous coats of paint.
                    But it may be really dirty and leave paint shavings all over your house.
                  </MethodSection>

                  <MethodSection
                    title="3. Scrapping (Targeted Removal)"
                    advantages="Very effective for removing localised, loose, or peeling paint; Low cost, only requires basic hand tools (scraper, putty knife); Minimal dust compared to sanding."
                    drawbacks="Ineffective for large, tightly adhered areas; Requires a finishing step (sanding and patching) to smooth the surface; Risk of gouging or damaging the wall substrate if done carelessly."
                  >
                    When there is a little area to be worked on, you can use a spatula or scraper to remove any loose
                    paint. To make things smooth, work in all directions. By doing this, you may eliminate all
                    bubbles, lumps, flakes, or peeling paint from the wall. Use a wire brush for areas that are
                    difficult to reach or to blend some paint into the wall. After scraping, seal any holes or gaps
                    in the wall with caulk or joint compound. To achieve a smooth finish, gently sand with sandpaper.
                    When it has dried, wipe with a moist sponge or cotton towel.
                  </MethodSection>

                  <MethodSection
                    title="4. Stripping (Chemical Paint Remover)"
                    advantages="Highly effective for multiple layers and stubborn paint types (epoxy, oil-based); Relatively fast for large areas once applied; Gentle on the substrate compared to scraping or sanding."
                    drawbacks="High cost for materials and potential chemical disposal fees; Requires excellent ventilation due to strong fumes (VOCs); Chemicals require careful handling and protective gear."
                  >
                    Chemical paint remover is best for extensive areas or extremely stubborn paint patches. Using a
                    wide paintbrush, you can apply the paint remover to the walls in order to complete the operation.
                    For the allotted period, keep the formula up on the wall. After the allotted amount of time has
                    passed, check the paint&rsquo;s consistency. Remove the paint once it has softened using a
                    scraper or putty knife. You can use sandpaper with fine grit to make the surface smooth.
                  </MethodSection>

                  <MethodSection
                    title="5. Heat Gun or Heat Plate"
                    advantages="Very effective on thick, multi-layered paint (often used on wood trim); Chemical-free method; Relatively fast for small-to-medium areas."
                    drawbacks="Risk of fire or scorching the wall/trim if heat is applied too long or too close; Heating old paint can release toxic fumes (especially lead-based paint); Requires safety precautions and continuous monitoring."
                  >
                    Applying heat makes paint flexible and facilitates its easy removal from walls. For this, a heat
                    gun or heat plate works well. To make it easier to remove the paint from the wall, start out
                    slowly and only apply as much heat as necessary using a heat gun. Use a trial-and-error method
                    while keeping in mind that there is always a risk of fire. Never remove paint with a device with
                    an open flame. Excessive heat can increase the risk of a fire and produce harmful gases. Using a
                    specific-purpose heat plate that just gets hot enough to loosen the paint is a safer alternative.
                  </MethodSection>

                  <MethodSection
                    title="6. Steam Removal (Eco-Friendly Stripping)"
                    advantages="Eco-friendly and non-toxic (no chemicals or heavy dust); Gentle on delicate or older substrates (plaster, wood); Effective on multiple paint layers."
                    drawbacks="Slow process, requires patience; High moisture can damage drywall or cause wood to swell if over-applied; Equipment (steamer) purchase or rental is required."
                  >
                    Steam is a highly effective, eco-friendly, and chemical-free method of removing paint,
                    particularly from wood or plaster. A wallpaper steamer or a dedicated paint stripping steamer
                    directs hot steam onto the painted surface. The heat and moisture penetrate the paint layers,
                    softening the adhesion and making the paint easy to lift off with a scraper or putty knife. This
                    method is gentler on the substrate than high heat or harsh chemicals and is ideal for textured
                    surfaces or older, delicate walls. Ensure the wall material (like drywall) can handle the
                    moisture exposure to prevent damage.
                  </MethodSection>

                  <h2>Tips for Removing Old Wall Paint</h2>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2024/07/Tips-for-removing-old-wall-paint-visual-selection-1024x543.png"
                      alt="Tips for removing old wall paint"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>Whenever you want to strip paint from your wall, you should keep these safety cautions in mind:</p>

                  <h3>⚈ Put on Safety Gear</h3>

                  <p>
                    When removing old paint, it&rsquo;s crucial to put on heavy-duty gloves, safety goggles, and a
                    respirator mask to protect yourself from dust and chemical fumes.
                  </p>

                  <h3>⚈ Operate in a Well-Ventilated Location</h3>

                  <p>
                    When using a paint stripper or sanding, operate in a well-ventilated area to prevent breathing in
                    dust or fumes. Open windows and use fans to circulate air away from the workspace.
                  </p>

                  <h3>⚈ Check for Lead Paint</h3>

                  <p>
                    Lead paint may be present in a home constructed before 1978. Before old{" "}
                    <Link href="/lead-paint-removal/">lead paint removal</Link>, get it tested for lead content. Lead
                    may be harmful if ingested or breathed. If lead is confirmed, consult a professional abatement
                    service, as standard removal methods are unsafe.
                  </p>

                  <h3>⚈ Substrate Check</h3>

                  <p>
                    Always check the type and condition of the wall underneath the paint (the substrate). Drywall,
                    plaster, and wood react differently to water, chemicals, and heat. Use the least invasive method
                    that works to protect the surface integrity.
                  </p>

                  <h2>When To Call a Professional Painter</h2>

                  <p>
                    Removing paint can be straightforward, but it does require some technical know-how. Many jobs
                    are suitable for DIY, but in some cases, it&rsquo;s better to{" "}
                    <Link href="/residential-painters/">hire a professional residential painter</Link>.
                  </p>

                  <p>Consider professional help in the following scenarios:</p>

                  <ul>
                    <li>
                      <strong>Lead Paint Confirmation:</strong> If testing confirms the presence of lead paint,
                      specialised containment and removal procedures are legally required.
                    </li>
                    <li>
                      <strong>Large-Scale Projects:</strong> If your project is large, like painting a whole house
                      exterior, a commercial building, or several rooms,{" "}
                      <Link href="/commercial-painting/">commercial painting contractors</Link> are the best choice.
                    </li>
                    <li>
                      <strong>Delicate Surfaces:</strong> The surface is delicate or valuable, such as antique
                      furniture, fine wood trim, or historical plaster work.
                    </li>
                    <li>
                      <strong>Time or Tool Constraints:</strong> You lack the time or the necessary professional-grade
                      tools to complete the job safely and effectively.
                    </li>
                    <li>
                      <strong>Hazardous Materials:</strong> The existing coating is an epoxy, lacquer, or another
                      industrial-strength finish.
                    </li>
                  </ul>

                  <h2>Final Thoughts</h2>

                  <p>
                    Paint removal is easy but a technical method. You can follow one of the above-listed methods to
                    get your paint removal job done. If the task seems too large or you need help, you can hire
                    professional painters like Priority One Coatings to achieve a high-quality painting service near
                    you, particularly if you are searching for <Link href="/">experienced painting contractors Sydney</Link>.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How to Remove Old Paint from Walls")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How to Remove Old Paint from Walls")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
