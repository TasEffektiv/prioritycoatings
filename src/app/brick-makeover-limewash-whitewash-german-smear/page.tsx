import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brick Makeover Guide: Limewash, Whitewash, German Smear | Priority One Coatings",
  description:
    "Let's compare three top finishes: Limewash, Whitewash, & the German Smear. Choose the best brick makeover for your house! Contact us for your brick house makeover!",
};

const POST_URL = "https://www.prioritycoatings.com.au/brick-makeover-limewash-whitewash-german-smear/";

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

export default function BrickMakeoverPage() {
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
                  Brick Makeover Guide: Limewash, Whitewash, German Smear
                </h1>

                <p className="mt-4 text-[15px] text-black/60">October 16, 2023</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/mountview-redbank-plains.jpg"
                    alt="Mountview Redbank Plains brick house"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    Brick houses have an irresistible charm that continues from colonial to contemporary. These
                    are versatile canvases for any design and style, allowing homeowners to put their unique
                    stamp on their living space.
                    <br />
                    Sydney is renowned for its stunning architecture, and brick houses are no exception. In fact,
                    the city is home to some of the most attractive and historic brick homes in the country. The
                    natural texture and warm brick hues give a sense of authenticity to any residence, making it
                    a true standout in the neighbourhood. This ideal exterior is also an attraction to many home
                    buyers due to its eco-friendly design.
                    <br />
                    There is no doubt that brick surfaces can be both durable and aesthetically pleasing, but
                    over time, they can become worn or outdated. A layer of protection is a good idea to give it
                    a new look and keep it safe.
                    <br />
                    Confusion arises while choosing the layer, as the regular coat of paint is not enough for the
                    porous material of a brick house. Well, you don&rsquo;t have to get worried about it because
                    we have a complete makeover guide for you. We will discuss the popular finishes with details
                    to help you find the perfect solution that intact the timeless appearance of the bricked
                    surface of your dwelling.
                  </p>

                  <h3>The Ultimate Makeover Guide:</h3>

                  <p>
                    As previously said, these special houses need proper maintenance to hold their beauty. Any of
                    the{" "}
                    <strong>
                      <Link href="/residential-painters/">best house painters in Sydney</Link>
                    </strong>{" "}
                    will never recommend regular paint for your brick house because it can catch moisture and
                    eventually damage the brick in the long run. In this case, brick finishes can be the best
                    solution due to their durability, low maintenance and appealing look. Limewash, Whitewash and
                    German Smear are the three popular heroes of a brick finishing book. Thus, we will discuss
                    them to help you decide which one to go for.
                  </p>

                  <h4>Limewash</h4>

                  <figure className="relative my-8 aspect-[900/500] w-full overflow-hidden">
                    <Image
                      src="/images/painter-painting-a-wall-in-gray-with-paint-roller.jpg"
                      alt="Painter painting a wall in gray with a paint roller"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Made from natural lime, water, and pigments, limewash provides a matte, chalky, breathable,
                    and durable finish. It can cover up unsightly stains or imperfections on brick surfaces while
                    protecting the brick from the elements. The finish has a rustic, old-world charm that can add
                    character and depth to a building.
                  </p>

                  <h5>Pros</h5>
                  <ul>
                    <li>
                      Limewash is highly durable as it is resistant to moisture, fungi, and odour and can last
                      for many years without needing to be reapplied
                    </li>
                    <li>
                      Limewash is made from natural materials and is free from harmful chemicals, making it an
                      eco-friendly choice
                    </li>
                    <li>
                      The solution allows the brick to breathe, which means that moisture can pass through the
                      surface, helping to prevent water damage and mould growth.
                    </li>
                    <li>
                      It is relatively inexpensive compared to other finishes, making it a cost-effective option
                      for those on a budget
                    </li>
                    <li>
                      Unlike traditional paint finishes, limewash does not create a uniform, flat surface but
                      instead allows the natural variations in the brick to show through
                    </li>
                    <li>
                      Because limewash allows the brick to breathe, it can help regulate indoor temperature and
                      humidity levels overall, reducing energy costs and improving indoor comfort levels
                    </li>
                    <li>
                      Offers you a variety of customisation options with a variety of colours and application
                      techniques, from a traditional solid coat to a more textured or wash effect
                    </li>
                    <li>
                      It works like an anti-bacterial agent and has protective benefits as{" "}
                      <a href="https://www.lime.org/documents/lime_basics/limewash.pdf" target="_blank" rel="noopener noreferrer">
                        <strong>limewash creates an alkaline environment</strong>
                      </a>{" "}
                      that is inhospitable to many types of bacteria and germs
                    </li>
                  </ul>

                  <h5>Cons</h5>
                  <ul>
                    <li>
                      Applying limewash requires some skill and experience to achieve the desired effect, so you
                      will need professional painters to achieve your desired look
                    </li>
                    <li>
                      It may require multiple coats to achieve full coverage, especially if the brick surface is
                      heavily textured
                    </li>
                    <li>The process is time-consuming as it takes a lot of time to dry properly</li>
                    <li>
                      Because limewash is a natural product, there can be some variation in colour and
                      consistency from batch to batch, for which large projects that need multiple batches face
                      the problem
                    </li>
                    <li>It may not adhere well to non-absorbent surfaces, not even to the bricks if it is already painted</li>
                  </ul>

                  <h4>Whitewash</h4>

                  <figure className="relative my-8 aspect-[900/500] w-full overflow-hidden">
                    <Image
                      src="/images/painting-the-bathroom-in-white-bathroom-whitewash.jpg"
                      alt="Painting the bathroom in white, bathroom whitewash"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    The primary difference between whitewash and limewash is in their composition. Whitewash is
                    made from a combination of water, hydrated lime, and salt. This difference in mixing
                    ingredients can result in different appearance and durability characteristics. The process of
                    whitewashing is comparatively stress-free and dries quite quickly. It is basically a thin
                    layer that helps tone down the natural shade of the brick.
                  </p>

                  <h5>Pros</h5>
                  <ul>
                    <li>
                      Whitewash is more resistant to fading than traditional paint finishes, making it a good
                      choice for areas with excessive sun exposure
                    </li>
                    <li>It is a great solution for giving a smoother finish</li>
                    <li>
                      No matter if the brick is painted or not, unlike limewash, whitewash can be applied on even
                      painted brick
                    </li>
                    <li>
                      It is relatively low-maintenance and can easily last 20-30 years, mostly with no maintenance
                      required
                    </li>
                    <li>Usually, a more affordable solution and easy to apply</li>
                    <li>
                      It can be a great solution for brightening the dark area as it tones down the redness of
                      brick, and also, in the interior setup, it helps in matching the colours of a brick wall to
                      the rest of the background
                    </li>
                  </ul>

                  <h5>Cons</h5>
                  <ul>
                    <li>
                      Whitewash is typically more sheer and transparent than other finishes, which means it may
                      not provide as much coverage or hide imperfections as effectively
                    </li>
                    <li>
                      It dries fast, which is a plus point, but at the same time, you get little or no time to
                      decide on the look and change it during the process
                    </li>
                    <li>
                      While whitewash is relatively easy to apply, getting the mixture in a perfect ratio is
                      really tricky, especially for DIYers or inexperienced painters
                    </li>
                  </ul>

                  <h4>German Smear</h4>

                  <figure className="relative my-8 aspect-[900/500] w-full overflow-hidden">
                    <Image
                      src="/images/old-window-of-an-old-house-with-old-color.jpg"
                      alt="Old window of an old house with old colour"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    German Smear, also known as &ldquo;Schmear&rdquo; or &ldquo;German Schmear,&rdquo; is a
                    method used to create an aged, rustic look on brick surfaces. This technique involves applying
                    a mortar mixture to the surface of the bricks and then spreading it around with a brush to
                    create a textured, whitewashed appearance. When executed correctly, German Smear can give a{" "}
                    <a href="https://www.bhg.com/german-schmear-7566223" target="_blank" rel="noopener noreferrer">
                      <strong>European sophistication to a building&rsquo;s exterior</strong>
                    </a>
                    .
                  </p>

                  <h5>Pros</h5>
                  <ul>
                    <li>
                      This technique has good coverage and can help conceal imperfections in brick surfaces, such
                      as cracks or stains
                    </li>
                    <li>Once applied, German Smear is relatively durable and can withstand weathering and wear and tear</li>
                    <li>
                      A great choice for applying texture as it can sit well on the top of the brick and give you
                      your desired consistency to work with any design
                    </li>
                    <li>
                      German Smear can be used on a range of surfaces, including interior and exterior brick
                      walls, fireplaces, and outdoor courtyard areas
                    </li>
                    <li>
                      It can add character and visual interest to a building&rsquo;s exterior, giving it a
                      unique, up-to-date, yet rustic look
                    </li>
                  </ul>

                  <h5>Cons</h5>
                  <ul>
                    <li>
                      It requires skill and experience to apply Schmear effectively, as achieving a consistent
                      and even texture across the entire surface can be difficult
                    </li>
                    <li>The permanent coverage feature bounds you, the house owner, to stick committed to one look</li>
                    <li>German Smear may not be suitable for all types of brick surfaces, especially not for painted bricks</li>
                    <li>
                      German Smear can be a bit more expensive than other techniques due to the complexity of the
                      process and the materials used
                    </li>
                  </ul>

                  <h3>Which one to choose for my brick home?</h3>

                  <figure className="relative my-8 aspect-[900/550] w-full overflow-hidden">
                    <Image
                      src="/images/white-and-brown-house.jpg"
                      alt="White and brown brick house"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Well, it is not a simple decision and shouldn&rsquo;t suggest one specific finish for a brick
                    house without understanding its need. There is no going back for some finishes like Whitewash
                    or German Smear, so choosing it wisely is necessary. Getting the appropriate finishing depends
                    on multiple factors, such as
                  </p>

                  <ul>
                    <li>The style of your home</li>
                    <li>The condition of your bricks</li>
                    <li>Your budget for the makeover</li>
                    <li>The level of maintenance you are willing to continue</li>
                  </ul>

                  <p>
                    Ultimately, the choice of finish depends on your personal preferences, but here are a few
                    suggestions from our point of view-
                  </p>

                  <ol>
                    <li>
                      If you are searching for an alternative to paint, then limewash is ideal for you. Over
                      time, you can change the look of your house by removing the finish with power-washing. For
                      those who are conscious about the environment, this eco-friendly option is also ideal for
                      them. Moreover, if you are looking for an affordable solution for your fresh, unpainted
                      bricks, then limewash is the one.
                    </li>
                    <li>
                      A whitewash finish can be a good choice if you prefer a cleaner and more modern look. This
                      finish can help to brighten up the brick surface and give it a more uniform appearance, and
                      it will be quite helpful for decorating the fireplace. If your bricks are painted, but you
                      still want a finish for them, then whitewash can help you.
                    </li>
                    <li>
                      A German Smear finish can be a good option if you have older, weathered bricks with
                      imperfections, as it can help to conceal these imperfections and give the surface a more
                      uniform look. It is a permanent solution, so we suggest this for the one who is willing to
                      spend a little more but wants a long-term commitment to a rustic and attractive look.
                    </li>
                  </ol>

                  <p>
                    Each finish has its charm and unique styles to offer, but if not done correctly, your brick
                    house will ultimately lose its sophisticated presence. As the finishes decide how your living
                    place will look for quite a long time, it is wise to avoid risking it with unskilled hands.
                  </p>

                  <p>
                    With their 32 years of experience, <strong>Priority One Coatings</strong> can offer ideal{" "}
                    <strong>
                      <Link href="/">wall painting services in Sydney</Link>
                    </strong>
                    . Their Dulux Accredited painters are the ones who will understand the need for your brick
                    and provide the best solution. So, getting the best version of your brick house is no longer
                    a hassle with the correct house painters.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Brick Makeover Guide: Limewash, Whitewash, German Smear")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Brick Makeover Guide: Limewash, Whitewash, German Smear")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
