import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paint Burnishing or Marring - Causes & Solutions | Priority One Coatings",
  description:
    "Marring or burnishing is shiny spots on a paint surface, possibly caused by scrubbing dirt or stains. Learn how to fix burnishing or marring on painted surfaces.",
};

const POST_URL = "https://www.prioritycoatings.com.au/paint-burnishing-marring-causes-solutions/";

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

export default function PaintBurnishingMarringCausesSolutionsPage() {
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
                  Paint Burnishing or Marring &ndash; Causes &amp; Solutions
                </h1>

                <p className="mt-4 text-[15px] text-black/60">July 10, 2025</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2025/07/wood-painting.jpg"
                    alt="wood painting"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    Who doesn&rsquo;t love the walls of their houses to be flawless? Homeowners spend a lot of time
                    and money just to paint their spaces so that they look clean, presentable, and free from any
                    spots. Unfortunately, over time, you will find various types of unwanted spots or patches, and
                    today, we are going to look at a common one, which is known as marring.
                  </p>

                  <h3>What is marring?</h3>

                  <p>
                    The word &ldquo;marring&rdquo; is often used to refer to glossy patches or polished areas that
                    show up on painted surfaces. Paint films that are repeatedly rubbed or washed can show an
                    increase or decrease in gloss or sheen, and that area can show a shiny patch known as marring.
                    &ldquo;Burnishing&rdquo; is another term used to describe this same effect.
                  </p>

                  <p>
                    Burnishing or marring commonly appears when an area is abrasively cleaned and scrubbed to get
                    rid of stains with cleaning agents like hard liquids or when furniture or other objects brush up
                    against the painted wall. Compared to pastel shades and lighter colours, the &ldquo;Marring&rdquo;
                    effect is much more noticeable with deeper, darker, or more vibrant colours, particularly if the
                    darker colours are chosen for broad wall surfaces like feature walls and accent areas.
                  </p>

                  <p>
                    To address the issue more accurately, we can look at these two definitions provided by AS/NZS
                    2310 &ldquo;Glossary of Paint and Painting Terms&rdquo; &ndash;
                  </p>

                  <ul>
                    <li>Shiny or lustrous spots on a painted surface are caused by rubbing the painted surface.</li>
                    <li>The polished or glossy appearance of a surface is produced by mechanical action.</li>
                  </ul>

                  <h3>The science behind paint burnishing or marring</h3>

                  <p>
                    There are two aspects of paint that you need to understand first before identifying any
                    solutions for paint burnishing-
                  </p>

                  <ul>
                    <li>
                      <strong>Sheen Level:</strong> The glossiness of the paint finish is referred to as the sheen
                      level. The sheen level of a colour can affect how it appears.
                    </li>
                    <li>
                      <strong>Light Reflectance Value (LRV):</strong> The Light Reflectance Value (LRV) of colour
                      indicates how much usable and visible light reflects from a painted surface. The darker the
                      colour you choose, the lower the LRV it will contain.
                    </li>
                  </ul>

                  <p>
                    So, basically, when you use a low sheen level paint, marring can be prominent. How? Abrading a
                    traditional low-sheen level paint surface results in rounded edges and microscopic roughness
                    from the inert pigments that are used to give the lower gloss. The damaged patch appears
                    noticeably shiny or polished because of the different ways in which these worn or rounded
                    pigment particles scatter light. Furthermore, because there is less binder (latex resin) in the
                    formulation, paints with lower sheen levels exaggerate the overall problem.
                  </p>

                  <p>
                    In addition, if you paint your walls with low LRV colours combined with low sheen paint, less
                    light is reflected, and more is scattered. This condition makes surface abrasions and flaws more
                    noticeable due to their shiny appearance. Moreover, dark-coloured paint films might change in
                    appearance even after only light rubbing with a very soft, non-abrasive cloth. Mainly, the
                    rubbing onto the paint alters how light interacts with the surface and causes this change.
                  </p>

                  <h3>What causes paint to burnish?</h3>

                  <p>
                    As a houseowner in Sydney, you might find marring or burnishing, usually in high-traffic areas
                    that need to be cleaned frequently, such as family rooms, hallways, doors, and stairs. Especially
                    if these walls have critical lighting, marring seems more noticeable.
                    <br />
                    Here is a list of causes that are responsible for it-
                  </p>

                  <h4>1. Incorrect method of cleaning</h4>

                  <p>
                    Washing painted surfaces with abrasive cleaning solutions or tools like scrubbers is the main
                    reason behind burnishing. Also, washing or spot cleaning too frequently as soon as you find a
                    small mark can be a significant reason, too.
                  </p>

                  <h4>2. Wrong choice of paint</h4>

                  <p>
                    Using lower quality paint that has no resistance to abrasion or scrubbing is why the paint
                    creates those marring in the first place. Moreover, if you are painting a high traffic
                    area&rsquo;s broad wall surfaces with dark or vibrant colours that too with a matt sheen level
                    paint, then you will see visible marring spots more quickly.
                  </p>

                  <h4>3. Uncareful placement of household items</h4>

                  <p>
                    We keep our furniture, d&eacute;cor items, or other household items, usually adjacent to the
                    walls. These furnishings regularly rubbing against the painted walls can also cause paint
                    burnishing, and when you move those items from that place, the mark gets prominent.
                  </p>

                  <h3>How to fix paint burnishing?</h3>

                  <p>
                    After burnishing or marring has occurred on the painted surface, it will be highly challenging,
                    if not impossible, to remove the shiny areas with just washing. Sectional repair or repainting
                    the whole wall is the best option if you notice these permanent scars on your walls. This time,
                    ask your hired <Link href="/residential-painters/">house painters in Sydney</Link> to think
                    about using superior, long-lasting paint with a higher sheen that can withstand whatever is
                    causing the flaws.
                  </p>

                  <h3>How do you stop burnishing or marring from coming back?</h3>

                  <p>
                    You need to take preventive measures to stop these shiny patches from appearing again on your
                    walls. Here&rsquo;s how you can prevent paint from burnishing or marring-
                  </p>

                  <ul>
                    <li>
                      Use a piece of cloth that is soft or a sponge to clean painted surfaces with non-abrasive
                      cleaners such as Ajax Spray&rsquo; n&rsquo; Wipe&trade;, recommended by Dulux, then rinse with
                      fresh water.
                    </li>
                    <li>Prior to scrubbing or cleaning painted surfaces, check the manufacturer&rsquo;s cleaning instructions.</li>
                    <li>Wait at least two weeks after painting before cleaning the surface for maximum durability.</li>
                    <li>
                      Observe the areas where painted surfaces are being rubbed by furniture and other items, and
                      move the items at least one finger further from the walls.
                    </li>
                    <li>
                      Choose high-quality paint that has a higher sheen, such as eggshell, satin, pearl, or
                      semi-gloss, for high-traffic areas.
                    </li>
                    <li>Avoid dark, deep and vibrant colours in areas that will need frequent cleaning.</li>
                    <li>
                      Don&rsquo;t use flat sheen paints in high-traffic areas; instead, use quality acrylic or latex
                      paint.
                    </li>
                  </ul>

                  <p>
                    Do your walls also have some shiny patches that you don&rsquo;t know how to fix easily? For your
                    house in Sydney, contact Priority One Coatings today and get expert residential painters to
                    handle the marring issue.
                  </p>

                  <p className="text-center font-heading text-lg font-bold text-brand-navy">
                    For any residential painting services, <Link href="/contact-us/">contact us today</Link>.
                  </p>

                  <p className="text-sm text-black/60">
                    <strong>References</strong>
                    <br />
                    <a
                      href="https://www.saiglobal.com/PDFTemp/Previews/OSH/as/as2000/2300/2311-2009.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.saiglobal.com/PDFTemp/Previews/OSH/as/as2000/2300/2311-2009.pdf
                    </a>
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Paint Burnishing or Marring - Causes & Solutions")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Paint Burnishing or Marring - Causes & Solutions")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
