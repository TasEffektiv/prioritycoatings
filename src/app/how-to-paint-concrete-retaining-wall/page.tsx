import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Paint Concrete Retaining Wall | Priority One Coatings",
  description:
    "Concrete retaining wall painting usually requires premium tools, supplies, and expert painters. Contact us and give a facial uplift to your retaining wall.",
};

const POST_URL = "https://www.prioritycoatings.com.au/how-to-paint-concrete-retaining-wall/";

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

export default function ConcreteRetainingWallPage() {
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
                  How to Paint Concrete Retaining Wall
                </h1>

                <p className="mt-4 text-[15px] text-black/60">October 30, 2023</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/concrete-retaining-wall-blog-banner.jpg"
                    alt="Concrete retaining wall blog banner"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    <strong>Looking to give your outdoor space an upgrade?</strong>
                  </p>

                  <p>
                    Painting the concrete retaining wall is a great way to add some colour and style to the
                    residence. Whether you&rsquo;re looking to freshen up an old retaining wall or simply want to
                    add some visual interest to increase the property value, painting a concrete retaining wall
                    is a simple yet effective solution. With the right tools and techniques, you can transform
                    the outdoor area into an inviting space that you&rsquo;ll love spending time in.
                  </p>

                  <p>
                    In this article, we&rsquo;ll take you through the steps of painting a concrete retaining
                    wall, from cleaning and prepping the surface to selecting the right paint and applying it
                    correctly. So, let&rsquo;s dive into all the details of how a concrete retaining wall is
                    painted to give your space a new dimension. Before that, for many of you who don&rsquo;t know
                    what a concrete retaining wall is, let&rsquo;s know about that first.
                  </p>

                  <h3>Concrete Retaining Wall- What is it?</h3>

                  <figure className="relative my-8 aspect-[900/506] w-full overflow-hidden">
                    <Image
                      src="/images/stone-gray-fence-in-the-park-gray-wall-in-thickets-edited-1.jpg"
                      alt="Stone gray fence in the park, gray wall in thickets"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    In a nutshell, a concrete retaining wall is a structure that&rsquo;s designed to hold back
                    soil or other materials on one side while creating a level surface on the other side. In the
                    houses of Sydney, these walls are commonly used in landscaping and construction projects
                    where there&rsquo;s a need to create flat surfaces on sloped terrain or to prevent erosion
                    and landslides.
                  </p>

                  <p>
                    These walls are made up of individual concrete blocks or panels that are stacked on top of
                    each other with interlocking mechanisms. They can be designed in a variety of shapes and
                    sizes, depending on the specific needs of the project, and can be reinforced with steel or
                    other materials for added strength and durability. Gravity, Cantilever, Counterfort, and
                    Sheet Pile are some of the popular types of retaining walls.
                  </p>

                  <p>
                    This practical and aesthetically pleasing addition itself needs some maintenance, and
                    painting it can be an excellent way here. With the help of professional{" "}
                    <Link href="/residential-painters/">residential painters in Sydney</Link>, you can paint the
                    concrete retaining wall without worrying about anything. Still, we are explaining here the
                    step-by-step procedure inspired by the expert Sydney house painters for you to have a better
                    idea of the whole process.
                  </p>

                  <h3>Painting a Concrete Retaining Wall &ndash; A Step-by-Step Process</h3>

                  <p>Here are the steps that need to be followed to paint a concrete retaining wall:</p>

                  <h4>1. Repair any damage:</h4>

                  <p>
                    Once you&rsquo;ve decided to paint your concrete retaining wall, it&rsquo;s time to inspect
                    it for any cracks, chips, or other damage. Even small imperfections can affect the quality of
                    the finished paint job, so it&rsquo;s important to repair any damage before you begin
                    painting. To repair small cracks or chips in your concrete wall, you can use a concrete
                    patching compound. Simply apply the patching compound to the damaged area, using a putty
                    knife or trowel to smooth it out. Be sure to follow the instructions on the packaging, as
                    drying times and application techniques may vary. For larger cracks or holes, to avoid a
                    mess, it&rsquo;s better to seek help from a renowned painting company available near your
                    house in Sydney.
                  </p>

                  <figure className="relative my-8 aspect-[1024/683] w-full overflow-hidden">
                    <Image
                      src="/images/96006451_l-1-1024x683.jpg"
                      alt="Repairing a concrete wall"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h4>2. Collect your tools:</h4>

                  <p>
                    Painting a concrete retaining wall can be a challenging task, and it&rsquo;s important to
                    make sure you have the right tools before starting the job. To ensure a successful painting
                    project, you&rsquo;ll need paint brushes and rollers, cleaning tools, concrete primer,
                    concrete paint, concrete sealer, and possibly a paint sprayer. It&rsquo;s important to choose
                    high-quality tools and materials that are specifically designed for use on masonry and{" "}
                    <Link href="/paint-removal-tips-restoring-surfaces/">concrete surfaces</Link>. It&rsquo;s
                    always a good idea to seek specialised help as they will have access to professional-grade
                    tools and materials and can ensure that the job is completed to your satisfaction. For a
                    perfect-looking finish, having the correct tool and experience is a must.
                  </p>

                  <figure className="relative my-8 aspect-[1024/683] w-full overflow-hidden">
                    <Image
                      src="/images/196499176_l-1024x683.jpg"
                      alt="Painting tools and equipment"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h4>3. Do a proper cleaning:</h4>

                  <p>
                    Before you can begin painting your concrete retaining wall, it&rsquo;s important to ensure
                    that the surface is clean and free from any dirt, dust, or debris. Thorough cleaning of your
                    wall will help the paint adhere better and last longer. But how do you go about cleaning your
                    retaining wall? One of the easiest and most effective ways to clean a concrete wall is to{" "}
                    <Link href="/paint-scraping-vs-pressure-washing/">use a pressure washer</Link> or a hose with
                    a high-pressure nozzle. This will blast off any dirt or grime and leave your wall looking
                    clean and fresh. If you don&rsquo;t have access to a pressure washer, you can also use a
                    stiff-bristled brush and a solution of water and detergent to scrub the wall clean.
                  </p>

                  <p>
                    However, if your wall has any mould or mildew, you&rsquo;ll need to take some additional
                    steps to get it clean. A solution of bleach and water can be an effective way to kill these,
                    but you need to be careful regarding the instructions. A skilled painting service can help
                    you here by cleaning the surface without the hassle of finding the right technic.
                  </p>

                  <figure className="relative my-8 aspect-[559/1024] w-full max-w-md overflow-hidden">
                    <Image
                      src="/images/249375599_l-559x1024.jpg"
                      alt="Cleaning a concrete wall before painting"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h4>4. Prime the wall:</h4>

                  <p>
                    After cleaning and repairing any damage to the concrete retaining wall, the next step is to{" "}
                    <Link href="/when-to-use-primer-vs-sealer-vs-undercoat/">prime the surface</Link> before
                    painting. Priming is an essential step as it prepares the surface for painting, ensuring that
                    the paint adheres well and provides maximum coverage. To prime the wall:
                  </p>

                  <ul>
                    <li>
                      Start by choosing a high-quality concrete primer that&rsquo;s suitable for your specific
                      type of wall and the type of paint you plan to use.
                    </li>
                    <li>
                      The primer should be specifically formulated for concrete surfaces and provide a good level
                      of adhesion and durability.
                    </li>
                    <li>Use a paint roller or brush to apply the primer to the surface of the wall.</li>
                    <li>
                      Work in small sections, ensuring that the primer is applied evenly and covers the entire
                      surface.
                    </li>
                  </ul>

                  <figure className="relative my-8 aspect-[1024/768] w-full overflow-hidden">
                    <Image
                      src="/images/244817866_l-1024x768.jpg"
                      alt="Priming a concrete wall"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h4>5. Proceed to paint:</h4>

                  <p>
                    After the primer has dried, it&rsquo;s time to paint the wall. Choose a high-quality masonry
                    or concrete paint that&rsquo;s designed for exterior use, and apply it in small sections,
                    working from the top of the wall down. Here, a Dulux-accredited painter can help you choose
                    the <Link href="/what-type-of-paint-to-use-why/">right paint for the right surface</Link>{" "}
                    because we often do not have the same knowledge as them. To reach distant spots on the
                    retaining wall, it&rsquo;s recommended to use extension handles and step ladders. This will
                    allow you to access areas that are difficult to reach without compromising your safety.
                  </p>

                  <p>
                    If you&rsquo;re working on a larger retaining wall surface, a paint sprayer can be a more
                    efficient option for covering more areas in less time. So, use a paint sprayer or roller to
                    apply the paint, depending on your preference, and apply multiple coats if necessary to
                    achieve the desired finish. Once the paint has dried, finish with a sealer to{" "}
                    <Link href="/how-to-protect-house-exterior-paint/">protect the wall from moisture and UV damage</Link>.
                  </p>

                  <figure className="relative my-8 aspect-[1024/683] w-full overflow-hidden">
                    <Image
                      src="/images/185361541_l-1024x683.jpg"
                      alt="Painting a concrete retaining wall"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>Benefits of Painting Concrete</h3>

                  <ul>
                    <li>
                      <strong>Moisture Resistance:</strong> A properly painted and sealed concrete surface
                      prevents water absorption, reducing the risk of cracks, efflorescence, and{" "}
                      <Link href="/how-to-treat-prevent-mould-on-walls/">mold growth</Link>.
                    </li>
                    <li>
                      <strong>Improved Durability:</strong> High-quality masonry or epoxy concrete paint adds a
                      protective layer, shielding against foot traffic, stains, and environmental damage. This
                      protection helps prevent concrete spalling.
                    </li>
                    <li>
                      <strong>Temperature Regulation:</strong> Light-coloured concrete paint can reflect heat,
                      keeping outdoor surfaces cooler in the summer, which is excellent for patios and pool
                      decks.
                    </li>
                    <li>
                      <strong>Dust Control:</strong> Bare concrete floors are porous and can generate fine dust,
                      but a layer of paint seals the surface, making cleaning easier and contributing to better
                      indoor air quality.
                    </li>
                    <li>
                      <strong>Enhanced Safety &amp; Chemical Resistance:</strong> Specialised concrete coatings
                      can be formulated with anti-slip additives (or sand) to create a non-slip surface,
                      significantly improving safety on wet areas like steps, pool decks, or garage floors.
                      Furthermore, <Link href="/epoxy-floor-coatings/">epoxy paint</Link> provides superior
                      resistance to harsh chemicals, oils, and automotive fluids, making clean-up easier and
                      protecting the concrete structure from degradation in high-traffic or industrial areas.
                    </li>
                  </ul>

                  <h3>Common Concrete Painting Mistakes to Avoid</h3>

                  <figure className="relative my-8 aspect-[900/506] w-full overflow-hidden">
                    <Image
                      src="/images/interlocking-designed-retaining-wall-to-manage-earth-erosion-and-landscaping-1-edited.jpg"
                      alt="Interlocking designed retaining wall to manage earth erosion and landscaping"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Even with careful preparation,{" "}
                    <Link href="/common-exterior-painting-mistakes/">mistakes in painting</Link> concrete can
                    lead to poor results. Here&rsquo;s what to avoid, ensuring your concrete surface painting
                    project is a success:
                  </p>

                  <ul>
                    <li>
                      <strong>Skipping the Primer:</strong> Concrete is inherently porous, so applying paint
                      without a concrete primer can lead to poor adhesion, premature peeling, and reduced
                      durability over time. Always use a quality primer formulated for masonry surfaces to ensure
                      a strong bond (optimal for long-lasting concrete paint).
                    </li>
                    <li>
                      <strong>Not Checking for Moisture:</strong> Painting over damp concrete will inevitably
                      cause bubbling, flaking, or delamination. Always check for trapped moisture using a plastic
                      sheet test or a moisture meter before starting to guarantee a reliable, professional-grade
                      finish.
                    </li>
                    <li>
                      <strong>Using the Wrong Paint:</strong> Not all paints are designed for concrete. Use
                      masonry paint or specialised epoxy-based paint for maximum durability, especially in
                      high-traffic areas like garage floors or exterior walkways. Choosing the correct exterior
                      concrete paint is vital for weather resistance.
                    </li>
                    <li>
                      <strong>Applying Thick Coats:</strong> Thick layers take much longer to dry and are highly
                      prone to cracking, wrinkling, and uneven curing. Always apply multiple thin coats for a
                      smooth, professional, and long-lasting finish (best practice for concrete coating).
                    </li>
                    <li>
                      <strong>Ignoring Surface Etching:</strong> Failing to etch the concrete (or properly
                      prepare a smooth surface) prevents the paint from keying into the pores. This step, or
                      using an aggressive primer, is crucial for maximum paint adherence.
                    </li>
                  </ul>

                  <h3>Conclusion</h3>

                  <p>
                    Painting a concrete retaining wall is a project that can add both beauty and protection to
                    your outdoor space. It requires careful planning, the right tools, and quality materials to
                    achieve the desired result. It is true that by following these tips and using the right
                    tools and materials, you can achieve a long-lasting painted concrete retaining wall, but If
                    you&rsquo;re uncertain about the process or lack the essential tools, it&rsquo;s best to seek
                    the help of a trained painting contractor.
                  </p>

                  <h3>Painting Concrete &ndash; FAQ</h3>

                  <h4>Is it possible to paint directly onto concrete?</h4>
                  <p>
                    You can paint right on the concrete as long as it is clean, fixed, and ready to go. This
                    works for both indoor and outdoor concrete surfaces, like garage floors and patios, as well
                    as kitchen counters and floors. But you need to make sure that the concrete is completely dry
                    and free of efflorescence, moisture, or any sealers that might keep the concrete paint from
                    sticking to the surface. Using primer is essential for achieving better adhesion and ensuring
                    a longer lifespan.
                  </p>

                  <h4>What is the drying time of concrete paint?</h4>
                  <p>
                    The majority of concrete floor paints will take 12 to 24 hours to completely dry to the
                    touch, depending on the type of paint you use (such as acrylic vs. epoxy). Avoid walking on
                    the painted surface until it has completely dried, and always pay close attention to the
                    manufacturer&rsquo;s instructions. We advise letting the paint cure for at least 72 hours, or
                    as directed by the product label, if you intend to drive on your painted concrete (such as a
                    do-it-yourself garage floor coating).
                  </p>

                  <h4>How do you make paint stick to concrete?</h4>
                  <p>
                    Concrete paint won&rsquo;t stick well if it&rsquo;s not applied to a surface that has been
                    properly prepared. To make sure the bond is strong, you need to either acid etch the surface
                    or grind it down with a machine. You could also use a high-quality concrete primer. You need
                    to use an epoxy primer on places that will get a lot of wear and tear. It lasts longer and
                    forms a permanent bond with the substrate, making it the best choice for results that last.
                  </p>

                  <p className="text-center">
                    So, find the right painter, like <strong>Priority One Coatings</strong>, which provides{" "}
                    <Link href="/">painting services in Sydney</Link> and ensures the job is done correctly,
                    saving you time and effort.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How to Paint Concrete Retaining Wall")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How to Paint Concrete Retaining Wall")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
