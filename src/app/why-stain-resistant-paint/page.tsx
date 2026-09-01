import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Why Do You Need Stain-Resistant Paints? | Priority One Coatings",
  description:
    "Stain-resistant paints offer superior protection against stains and dirt. Learn the benefits, application areas, types and tips for stain-resistant paints.",
};

const POST_URL = "https://www.prioritycoatings.com.au/why-stain-resistant-paint/";

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

export default function WhyStainResistantPaintPage() {
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
                  Why Do You Need Stain-Resistant Paints?
                </h1>

                <p className="mt-4 text-[15px] text-black/60">January 22, 2024</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/stain-resistant-paint-scaled.jpg"
                    alt="stain resistant paint"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    When it comes to interior design, paint plays a crucial role in enhancing the aesthetic appeal
                    of our living spaces. However, one common issue we face with traditional paints is their
                    vulnerability to stains. From accidental spills to fingerprints and scuffs, stains can tarnish
                    the beauty of our freshly painted walls. This is where stain-resistant paints come to the
                    rescue! In this article, we will explore the importance and benefits of stain-resistant paints,
                    their application areas, the different types available, and essential tips for choosing and
                    applying them.
                  </p>

                  <h3>What is stain-resistant paint?</h3>

                  <p>
                    Stain-resistant paint, also known as washable or scrubbable paint, is a specially formulated
                    type of paint that offers superior protection against stains and dirt. Unlike regular paint, it
                    creates a protective barrier on the surface, preventing stains from penetrating and making them
                    easier to clean.
                  </p>

                  <h3>Benefits of stain-resistant paints</h3>

                  <h4>Increased durability</h4>

                  <p>
                    Stain-resistant paints are designed to withstand everyday wear and tear, making them highly
                    durable. Their unique formula reinforces the paint, making it more resistant to scratches,
                    scuffs, and marks. This durability ensures that your walls retain their fresh and vibrant
                    appearance for longer periods.
                  </p>

                  <h4>Easy maintenance</h4>

                  <p>
                    One of the primary reasons to invest in stain-resistant paints is the ease of maintenance they
                    offer. With traditional paints, removing stains can be a tedious and time-consuming task.
                    However, stain-resistant paints repel liquids and prevent stains from setting, allowing you to
                    wipe them away with a damp cloth or sponge easily. This saves you valuable time and effort,
                    especially in high-traffic areas prone to spills and accidents.
                  </p>

                  <h4>Cost-effectiveness</h4>

                  <p>
                    While stain-resistant paints may have a higher initial cost compared to regular paints, they
                    represent a cost-effective choice in the long run. The durability of these paints ensures that
                    you won&rsquo;t need to repaint your walls as frequently as you would with traditional paints.
                    Additionally, the minimal maintenance requirements save you money on cleaning products and
                    professional cleaning services.
                  </p>

                  <h3>How do stain-resistant paints work?</h3>

                  <p>
                    Stain-resistant paints utilize advanced technology that imparts hydrophobic (water-repellent)
                    and oleophobic (oil-repellent) properties to the painted surface. These properties create a
                    protective coating that prevents liquids and oils from being absorbed into the paint, making it
                    easier to clean without leaving any stubborn stains.
                  </p>

                  <p>
                    The hydrophobic and oleophobic properties work by causing liquids and oils to form into
                    droplets and bead up on the surface instead of spreading out and soaking into the paint. This
                    innovative technology significantly reduces the chances of permanent staining, allowing you to
                    maintain pristine walls.
                  </p>

                  <h3>Application areas for stain-resistant paints</h3>

                  <p>
                    Stain-resistant paints are suitable for various areas in your home or commercial spaces.
                    Let&rsquo;s explore some of the most common application areas:
                  </p>

                  <h4>Kitchen walls and cabinets</h4>

                  <p>
                    The kitchen is a high-traffic area prone to spills, splatters, and grease accumulation.
                    Stain-resistant paints can withstand frequent cleaning and help to keep your kitchen walls and
                    cabinets looking fresh and clean. Whether it&rsquo;s a sauce splatter or a coffee spill, the
                    stains can be effortlessly wiped away, leaving no trace behind.
                  </p>

                  <h4>Bathroom walls and tiles</h4>

                  <p>
                    Bathrooms are exposed to constant moisture, humidity, and the potential for mildew and mould
                    growth. Stain-resistant paints act as a protective barrier, preventing water and moisture from
                    seeping into the walls. The easy-to-clean surface makes it simpler to remove soap scum and
                    reduce the risk of unsightly stains in your bathrooms.
                  </p>

                  <p>
                    <strong>Children&rsquo;s rooms and play areas</strong>
                  </p>

                  <p>
                    Kids are notorious for accidents, spills, and doodling on walls. Stain-resistant paints are a
                    great investment for children&rsquo;s rooms and play areas to mitigate the impact of stains and
                    ensure easy cleaning. Whether it&rsquo;s crayons, markers, or food stains, these paints make it
                    possible to maintain a clean and vibrant space for your little ones.
                  </p>

                  <h4>High-traffic areas such as hallways and staircases</h4>

                  <p>
                    Areas like hallways and staircases witness heavy foot traffic, increasing the chances of
                    scuffs, marks, and stains. Stain-resistant paints provide added protection against wear and
                    tear, ensuring that these areas retain their pristine appearance for longer periods.
                  </p>

                  <h3>Different types of stain-resistant paints</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/different-types-of-paints-1024x683.jpg"
                      alt="different types of paints"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Stain-resistant paints are available in various formulations to suit different surfaces and
                    specific requirements. Let&rsquo;s take a closer look at some common types:
                  </p>

                  <h4>Acrylic stain-resistant paints</h4>

                  <p>
                    Acrylic stain-resistant paints are a popular choice due to their versatility and excellent
                    adhesion. They are suitable for a wide range of surfaces, including drywall, wood, and plaster.
                    These paints generally have low odour and fast drying times and offer a smooth and durable
                    finish.
                  </p>

                  <h4>Epoxy-based stain-resistant paints</h4>

                  <p>
                    Epoxy-based stain-resistant paints are known for their exceptional durability and chemical
                    resistance. They are ideal for areas subject to heavy use, such as garages or industrial spaces.
                    They can withstand harsh cleaning agents and have excellent adhesive properties.
                  </p>

                  <h4>Oil-based stain-resistant paints</h4>

                  <p>
                    Oil-based stain-resistant paints provide enhanced protection and durability. They are often
                    used for high-traffic areas like doors, trim, and furniture. These paints offer a smooth,
                    glossy finish and have superior resistance to stains, making them easier to clean.
                  </p>

                  <h4>Nanotechnology-based stain-resistant paints</h4>

                  <p>
                    Nanotechnology has revolutionized the paint industry, and stain-resistant paints have benefited
                    from these advancements. Nanotechnology-based paints create an ultra-thin protective layer on
                    the surface, enhancing their resistance to stains and dirt. They offer long-lasting protection
                    and are suitable for a wide range of surfaces.
                  </p>

                  <h3>Factors to consider when choosing stain-resistant paints</h3>

                  <p>
                    When selecting stain-resistant paints, various factors come into play. Consider the following
                    aspects to make an informed decision:
                  </p>

                  <h4>Budget and cost</h4>

                  <p>
                    Stain-resistant paints vary in price depending on their formulation and brand. Establishing a
                    budget beforehand will help you narrow down your choices and find the best fit for your needs.
                  </p>

                  <h4>Surface compatibility</h4>

                  <p>
                    Different stain-resistant paints are suitable for specific surfaces. Consider the material you
                    want to paint and ensure the paint you choose is compatible with it. Whether it&rsquo;s wood,
                    drywall, or tiles, there are stain-resistant paints designed specifically for each surface type.
                  </p>

                  <h4>Application method</h4>

                  <p>
                    Different types of stain-resistant paints may require different application methods. Some
                    paints are suitable for brushing or rolling, while others may need to be sprayed on. Consider
                    your preferred application method and choose a paint that aligns with it.
                  </p>

                  <h4>Colour and finish options</h4>

                  <p>
                    Stain-resistant paints come in a variety of colours and finishes. Take into account your
                    desired aesthetic and choose a paint that aligns with your vision. Whether you prefer a matte,
                    satin, or glossy finish, there are options available to suit your style.
                  </p>

                  <h3>Tips for applying stain-resistant paints</h3>

                  <p>To ensure optimum results, follow these tips when applying stain-resistant paints:</p>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="/images/painting-door-1024x683.jpg"
                      alt="painting door"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h4>Surface Preparation</h4>

                  <p>
                    Proper surface preparation is crucial for the successful application of stain-resistant paints.
                    Make sure the surface is clean, dry, and free of any dust, grease, or loose particles. Sanding
                    the surface gently can also improve adhesion.
                  </p>

                  <h4>Choosing the right tools</h4>

                  <p>
                    Use high-quality brushes, rollers, or sprayers suitable for the specific stain-resistant paint
                    you are using. The right tools ensure a smooth and even application, enhancing the overall
                    finish.
                  </p>

                  <h4>Proper application techniques</h4>

                  <p>
                    Follow the manufacturer&rsquo;s instructions for applying the stain-resistant paint. Apply thin,
                    even coats, and ensure sufficient drying time between coats. Avoid excessive brushing or
                    rolling, as it may affect the paint&rsquo;s performance.
                  </p>

                  <h4>Drying and curing processes</h4>

                  <p>
                    Allow the paint to dry and cure fully according to the manufacturer&rsquo;s instructions before
                    subjecting the surface to any cleaning or heavy use. Rushing the drying process can compromise
                    the paint&rsquo;s durability and stain-resistant properties.
                  </p>

                  <h3>Common misconceptions about stain-resistant paints</h3>

                  <p>Let&rsquo;s debunk a couple of common misconceptions surrounding stain-resistant paints:</p>

                  <h4>Myth: Stain-resistant paints are harmful to the environment.</h4>

                  <p>
                    Contrary to this belief, stain-resistant paints are generally safe for the environment. Many
                    brands offer low-VOC (volatile organic compounds) or zero-VOC formulations, reducing their
                    impact on indoor air quality and minimizing their contribution to air pollution.
                  </p>

                  <h4>Myth: Stain-resistant paints are only for commercial use.</h4>

                  <p>
                    While stain-resistant paints are indeed popular in commercial settings, they are equally
                    beneficial in residential applications. Their advantages, such as easy maintenance and
                    durability, make them an excellent choice for homeowners looking to maintain their home&rsquo;s
                    aesthetics with minimal effort.
                  </p>

                  <h3>DIY vs. professional application of stain-resistant paints</h3>

                  <p>
                    Deciding whether to tackle the painting project yourself or hire professionals depends on
                    various factors. Consider the pros and cons of each approach to make the best decision:
                  </p>

                  <p>
                    <strong>DIY application</strong>
                  </p>

                  <p>Pros:</p>

                  <ul>
                    <li>Cost savings on labour expenses</li>
                    <li>Flexibility with timing and scheduling</li>
                    <li>Sense of accomplishment in completing the project yourself</li>
                  </ul>

                  <p>Cons:</p>

                  <ul>
                    <li>Requires time, effort, and attention to detail</li>
                    <li>Greater chance of mistakes or inconsistent results</li>
                    <li>Limited access to professional-grade tools and equipment</li>
                  </ul>

                  <p>
                    <strong>
                      <Link href="/">Hiring professional painters</Link>
                    </strong>
                  </p>

                  <p>Pros:</p>

                  <ul>
                    <li>Expertise and experience in achieving professional results</li>
                    <li>Time-saving as professionals work efficiently</li>
                    <li>Access to specialized tools and equipment</li>
                  </ul>

                  <p>Cons:</p>

                  <ul>
                    <li>Additional labor expenses</li>
                    <li>Need to coordinate schedules with the professionals</li>
                    <li>Limited creative control over the process</li>
                  </ul>

                  <h3>Longevity and maintenance of stain-resistant paints</h3>

                  <p>
                    Stain-resistant paints are designed to provide long-lasting protection against stains. The
                    actual lifespan of the paint depends on various factors, including the quality of the paint,
                    surface conditions, and maintenance. With proper care, stain-resistant paints can retain their
                    effectiveness for several years.
                  </p>

                  <p>To maximize the longevity of stain-resistant paints, follow these maintenance tips:</p>

                  <ul>
                    <li>Regularly clean the painted surfaces using mild detergent and a soft cloth or sponge.</li>
                    <li>Address stains and spills promptly to prevent any potential long-term damage.</li>
                    <li>
                      Avoid using abrasive cleaners or scrubbing pads, as they can damage the paint&rsquo;s
                      protective coating.
                    </li>
                    <li>
                      For tough stains, follow the manufacturer&rsquo;s recommendations for specific cleaning agents
                      or techniques.
                    </li>
                    <li>
                      Consider periodic touch-ups or reapplications of stain-resistant paints in high-traffic areas
                      to ensure optimal protection.
                    </li>
                  </ul>

                  <p>
                    Painting your walls with stain-resistant paints offers numerous benefits, from increased
                    durability to easy maintenance. The technology behind stain-resistant paints ensures that your
                    walls remain beautiful and stain-free for longer periods. Whether you opt for acrylic,
                    epoxy-based, oil-based, or nanotechnology-based stain-resistant paints, you&rsquo;ll enjoy the
                    advantages they provide and simplify your cleaning routine. So, why settle for traditional paint
                    when you can have stain-resistant paint that keeps your walls looking fresh and vibrant?
                  </p>

                  <h3>Frequently Asked Questions</h3>

                  <h4>1. Are stain-resistant paints safe for children and pets?</h4>

                  <p>
                    Absolutely! Stain-resistant paints are safe for use in households with children and pets. They
                    are free from harmful chemicals and comply with safety standards. However, always exercise
                    caution and prevent children or pets from ingesting the paint or any cleaning agents.
                  </p>

                  <h4>2. Can stain-resistant paints be used on exterior surfaces?</h4>

                  <p>
                    Stain-resistant paints are primarily designed for interior use. While some manufacturers offer
                    exterior stain-resistant options, it&rsquo;s best to consult with professionals or refer to the
                    manufacturer&rsquo;s guidelines to determine the most suitable paint for exterior applications.
                  </p>

                  <h4>3. Do stain-resistant paints eliminate the need for regular cleaning?</h4>

                  <p>
                    While stain-resistant paints make cleaning easier, they don&rsquo;t completely eliminate the
                    need for regular maintenance. Periodic cleaning and prompt stain removal are essential to
                    ensure maximum protection and longevity of the paint.
                  </p>

                  <h4>4. Are stain-resistant paints compatible with all surface types?</h4>

                  <p>
                    Different stain-resistant paints are formulated for specific surface types, such as drywall,
                    wood, plaster, or tiles. Consider the surface compatibility and choose a paint that is
                    specifically designed for the material you intend to paint.
                  </p>

                  <h4>5. Do stain-resistant paints have any odour or harmful fumes?</h4>

                  <p>
                    Stain-resistant paints are now available in low-VOC or zero-VOC formulations, significantly
                    reducing their odour and harmful fumes. However, it&rsquo;s always advisable to ensure proper
                    ventilation during and after the application process. If you are particularly sensitive to
                    odours, consider opting for low-odour stain-resistant paints.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Why Do You Need Stain-Resistant Paints?")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Why Do You Need Stain-Resistant Paints?")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
