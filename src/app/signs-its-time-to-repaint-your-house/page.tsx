import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Signs It's Time to Repaint Your House | Priority One Coatings",
  description:
    "Peeling, cracking, flaking or chipping of the paint are common signs that your home needs a fresh coat of paint. Let's check when it's time to repaint your house.",
};

const POST_URL = "https://www.prioritycoatings.com.au/signs-its-time-to-repaint-your-house/";

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

function PhotoCredit({
  name,
  nameHref,
  photoHref,
}: {
  name: string;
  nameHref: string;
  photoHref: string;
}) {
  return (
    <p className="-mt-4 mb-6 text-xs italic text-black/40">
      Photo by{" "}
      <a href={nameHref} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-teal">
        {name}
      </a>{" "}
      on{" "}
      <a href={photoHref} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-teal">
        Unsplash
      </a>
    </p>
  );
}

export default function SignsItsTimeToRepaintYourHousePage() {
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
                  Signs It&rsquo;s Time to Repaint Your House
                </h1>

                <p className="mt-4 text-[15px] text-black/60">November 30, 2023</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2023/11/gray-wooden-house-scaled.jpg"
                    alt="Gray wooden house"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <p className="mb-0 mt-2 text-xs italic text-black/40">
                  Photo by{" "}
                  <a
                    href="https://unsplash.com/@churchoftodd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-brand-teal"
                  >
                    todd kent
                  </a>{" "}
                  on{" "}
                  <a
                    href="https://unsplash.com/photos/gray-wooden-house-178j8tJrNlc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-brand-teal"
                  >
                    Unsplash
                  </a>
                </p>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    The home exterior is a canvas that tells the story of the resident. When people come to your
                    home, the first thing they see is the appearance of your house. A fresh coat of paint is the
                    major component to hold any home&rsquo;s aesthetic and eye-shooting appearance. Repainting is the
                    solution here, but homeowners always wonder whether it is the right time to rejuvenate.
                  </p>

                  <p>
                    As a team of the{" "}
                    <Link href="/residential-painters/">best residential painters in Sydney</Link>, we have listed
                    some signs to help you determine whether you should repaint or not.
                  </p>

                  <h3>Fading or sunspots</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2023/11/metal-gate-in-front-old-house-1.jpg"
                      alt="Red bicycle parked beside a black metal gate in front of a house"
                      fill
                      className="object-cover"
                    />
                  </figure>
                  <PhotoCredit
                    name="christian koch"
                    nameHref="https://unsplash.com/@xt1an?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    photoHref="https://unsplash.com/photos/red-bicycle-parked-beside-black-metal-gate-in-front-house-D_4R9CcYZOk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  />

                  <p>
                    One major sign it&rsquo;s time to think of your exterior paint colour is fading. With extreme sun
                    exposure, vibrant colours often turn into lighter ones. Pigments are soaked due to UV rays, and
                    they start to fade away. Before it gets too far along, repainting will be the smart move. Darker
                    colours faded quicker than lighter ones. Keep this in mind when you choose colours for your home
                    exterior.
                  </p>

                  <h3>Cracking and Peeling</h3>

                  <p>
                    Cracking and peeling is another obvious indicator that tells us to start fresh. If your existing
                    paint starts to flake, crack or peel, that means the earlier coat of paint has lost the power to
                    protect the underlying materials. So, it&rsquo;s time to act fast to not only hold your
                    home&rsquo;s curb appeal but also save the surface from harsh weather.
                  </p>

                  <h3>Gaps and Shrinking Siding</h3>

                  <p>
                    Over time, boards of the home exterior tend to shirk and create gaps in the siding. These usually
                    happen due to dry rots when moisture gets in the wood. When you see such signs, that means it
                    requires some maintenance. In this case, you should look for a professional assessment before
                    starting repainting. Filling these gaps and repairing shrinkage prior to the paint job can give
                    you a long-lasting finish.
                  </p>

                  <h3>Mildew and Mould</h3>

                  <p>
                    Mildew and mould are the result of excess moisture present at the surface of the wall. Weak paint
                    coverage and exposure to rain and snow cause these in the long run. If your home has grey or
                    black spots, you might have mildew growth. It needs to be addressed and solved with repainting as
                    fast as possible to avoid costly repairs.
                  </p>

                  <h3>Chalking Paint</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2023/11/wall-chalking-paint.jpg"
                      alt="Close-up of chalking paint on a wall"
                      fill
                      className="object-cover"
                    />
                  </figure>
                  <PhotoCredit
                    name="thomas heintz"
                    nameHref="https://unsplash.com/@thomas2006?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    photoHref="https://unsplash.com/photos/a-black-and-white-cat-laying-on-top-of-a-white-wall-0tgMnMIYQ9Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  />

                  <p>
                    An overlooked indicator of a failing paint job is chalking. It refers to the breakdown of resins
                    and exposure of the colour pigments of the paint. You can use your fingertip or an old white rag
                    to check for chalking paint. The chalky-coloured residue will be wiped off easily. It is a sign
                    that your home exterior needs repainting to stand out in the harsh and humid weather.
                  </p>

                  <h3>Cracked Caulking</h3>

                  <p>
                    Caulking is usually used to properly seal around the doors and windows. If you find small cracks
                    in the caulking area, sometimes you can fix them by filling them with a beat of fresh caulking.
                    If the cracks are left underneath, they can cause damage, seeping in moisture. When you find
                    larger cracks, only caulking can&rsquo;t help you out. You will definitely need a fresh coat of
                    paint with caulking.
                  </p>

                  <h3>Bubbles and Blistering Paint</h3>

                  <p>
                    The appearance of small to medium-sized blisters and bubbles is known as blistering. It is mostly
                    seen on wood siding and trim. This can occur due to many reasons, such as poor prep work,
                    temperature changes, and moisture seeping in. If you notice such blisters on your exterior, then
                    you should repaint the wall with the help of expert house painters in town.
                  </p>

                  <h3>Damaged Stucco and Wood Rot</h3>

                  <p>
                    Though paint protects surfaces from external elements, it can&rsquo;t last forever. You may see
                    signs of wood rotting and cracks in the stucco over time. These are the signs of extensive damage
                    underneath the paint. At this point, you need to repair the surface fast and then protect the
                    exterior with a fresh coat of paint.
                  </p>

                  <h3>Putting House for Sale</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2023/11/olg-house-outdoor-lamps-turned-on.jpg"
                      alt="House exterior with outdoor lamps turned on at dusk"
                      fill
                      className="object-cover"
                    />
                  </figure>
                  <PhotoCredit
                    name="Brian Babb"
                    nameHref="https://unsplash.com/@brianbabb?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    photoHref="https://unsplash.com/photos/outdoor-lamps-turned-on-XbwHrt87mQ0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  />

                  <p>
                    When you are putting your house on sale, there is only one chance to make a first impression.
                    Your new exterior paint job can have a positive impact on potential buyers. Repainting under
                    Dulux Accredited Painters will also help you to get the highest resale value for your property.
                  </p>

                  <h3>New Look, New Feel</h3>

                  <p>
                    Sometimes, it&rsquo;s just nice to make changes and mix things up. You may feel tired of the
                    existing colour of your home&rsquo;s exterior or just buy a new home. Maybe your exterior paint
                    colour is outdated, as the colour trend always comes and goes. Updating the house exterior with a
                    new and trending coat of paint can change the entire look of your home. I will help you to love
                    your house&rsquo;s appearance again.
                  </p>

                  <h3>Enough Time has Passed</h3>

                  <p>
                    Sometimes, it&rsquo;s not necessary to wait for the signs of paint failure before repainting.
                    Applying a fresh coat of paint before you have huge issues will save you money and time. All you
                    need is proper maintenance. Usually, exterior paint stays in good condition for 5 to 8 years.
                    Sometimes, the paint job lasts around ten years, depending on the weather. According to Sydney
                    Environment, you can safely repaint your house any time after five years to save it from severe
                    damage.
                  </p>

                  <h3>New Construction</h3>

                  <p>
                    Last but not least, if you are building a new space in your building, then it will be a good
                    decision to repaint the exterior. The wood used in construction comes with a single coat of
                    paint, which can damage the area faster. Expert painters recommend a second coat of paint to
                    protect your home from harsh elements.
                  </p>

                  <h3>How Often to Paint a House?</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://www.prioritycoatings.com.au/wp-content/uploads/2023/11/white-and-brown-concrete-house.jpg"
                      alt="White and brown concrete house exterior"
                      fill
                      className="object-cover"
                    />
                  </figure>
                  <PhotoCredit
                    name="Zac Gudakov"
                    nameHref="https://unsplash.com/@zacgudakov?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                    photoHref="https://unsplash.com/photos/white-and-brown-concrete-house-near-green-trees-during-daytime-wwqZ8CM21gg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  />

                  <p>
                    Generally, exterior house repainting should be executed every 5 to 10 years according to your
                    location, paint quality and other factors. Besides, more information is given below to help you
                    know more about painting time.
                  </p>

                  <ul>
                    <li>
                      <strong>Brick:</strong> brick should be painted regularly in 3 to 5 years
                    </li>
                    <li>
                      <strong>Wood:</strong> wooden surfaces are good for painting every 3 to 7 years.
                    </li>
                    <li>
                      <strong>Stucco:</strong> stucco needs to be painted every 5 to 6 years.
                    </li>
                    <li>
                      <strong>Aluminium:</strong> aluminium siding needs to be repainted every five years.
                    </li>
                  </ul>

                  <h3>What Impacts Paint Life Span?</h3>

                  <p>
                    After knowing when it&rsquo;s time to repaint, it&rsquo;s important to know what factors caused
                    the need to repaint. There are several essential factors that affect the lifespan of exterior
                    paint. They are:
                  </p>

                  <h4>Paint quality</h4>

                  <p>
                    Paint comes in both high and low quality. It is obvious that high-quality paint will last longer
                    than low-quality paint. So, when you are investing in repainting your home, never compromise with
                    quality.
                  </p>

                  <h4>Location</h4>

                  <p>
                    Location is the most important factor to hold on the exterior paint shelf life. Homes located in
                    coastal beach areas tend to wear and fade faster. It happens due to salty sea air, UV rays and
                    windy conditions.
                  </p>

                  <h4>Weather</h4>

                  <p>
                    Rain, hail and snow cause extensive damage to house paint. The exterior paint will last longer if
                    your area has sunny and mild weather. If your region&rsquo;s weather condition is extreme, check
                    frequently for damage signs.
                  </p>

                  <h3>Final thoughts</h3>

                  <p>
                    The home&rsquo;s exterior paint is the first thing that works as a layer of protection. It gives
                    our houses protection from weather elements, insects and other damage. So, repainting the
                    exterior on time is really important. We hope all the following signs and facts can help you find
                    the right time to invest in repainting.
                  </p>

                  <p className="text-center font-heading text-lg font-bold text-brand-navy">
                    If you are still wondering when to repaint your exterior, you can consult with experts of{" "}
                    <Link href="/">Priority One Coatings</Link>, the best house painters in Sydney.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Signs It's Time to Repaint Your House")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Signs It's Time to Repaint Your House")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
