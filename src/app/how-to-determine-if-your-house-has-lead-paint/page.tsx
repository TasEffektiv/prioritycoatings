import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How to Determine if Your House Has Lead Paint | Priority One Coatings",
  description:
    "Learn how to tell if your home has lead-based paint, why it's dangerous, how to test for it, and what to do if you find it.",
};

const POST_URL = "https://www.prioritycoatings.com.au/how-to-determine-if-your-house-has-lead-paint/";

const CATEGORY_LINKS: Record<string, string> = {
  "Commercial Painting": "/category/commercial-painting/",
  DIY: "/category/diy/",
  News: "/category/news/",
  "Residential painting": "/category/residential-painting/",
};

const CATEGORIES = Object.keys(CATEGORY_LINKS);

const RECENT_POSTS = [
  {
    title: "How to Choose the Right Painter's Tape",
    href: "/how-to-choose-the-right-painters-tape/",
  },
  {
    title: "Mistakes to Avoid When Hiring Residential Painters in Sydney",
    href: "/mistakes-to-avoid-when-hiring-residential-painters/",
  },
  {
    title: "Top Painting FAQs Answered by Professional Painters",
    href: "/top-painting-faqs-answered-by-professional-painters/",
  },
  {
    title: "Paint, Colours, And Tools – Glossary You Need",
    href: "/paint-colours-and-tools-glossary-you-need/",
  },
  {
    title: "Signs of a Bad Paint Job: Understand Painting Mistakes",
    href: "/signs-of-a-bad-paint-job/",
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

export default function LeadPaintPage() {
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
                  How to Determine if Your House Has Lead Paint
                </h1>

                <p className="mt-4 text-[15px] text-black/60">February 18, 2026</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/a-quiet-street-in-the-australian-country-town-of-pemberton.jpg"
                    alt="A quiet street in the Australian country town of Pemberton"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    When moving to a new house, the excitement is unmatched, but you&rsquo;ve also got a lot to
                    figure out in a new space. In this huge checklist, it is normal to miss out on some aspects,
                    but you should never forget to check if the existing paint is lead-based or not.
                  </p>

                  <p>
                    However, your landlord is responsible for providing you with a Lead Warning Statement and
                    mentioning any known lead-based paint at the property. But not everyone&rsquo;s concerned
                    about your wellness; thus, it&rsquo;s your duty to ensure your house&rsquo;s safety and
                    learn how to identify lead paint.
                  </p>

                  <p>
                    Many Australian homes were painted with high amounts of lead, but its hazards to human
                    health led to its eventual phase-out. Although it is no longer used, lead paint is still
                    present in some older homes and may be dangerous to your health when it deteriorates. So, in
                    this article, we will look at easy and effective ways to find out if your living space has
                    any sign of lead paint and what you can do about it.
                  </p>

                  <h3>Why is lead paint dangerous?</h3>

                  <figure className="relative my-8 aspect-[1024/587] w-full overflow-hidden">
                    <Image
                      src="/images/builder-points-at-wall-while-supervisor-looks-1024x587.jpg"
                      alt="Builder points at wall while supervisor looks"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Lead paint can break down into chips or dust that can be consumed or inhaled. Here are the
                    common risk factors that may cause-
                  </p>
                  <ul>
                    <li>Even lower levels of lead exposure can harm children&rsquo;s brain development.</li>
                    <li>It can lead to learning disabilities, behavioural problems, and decreased IQ.</li>
                    <li>
                      Pregnant women exposed to lead can experience miscarriage, premature birth, or
                      developmental issues in their babies.
                    </li>
                    <li>Long-term exposure to lead can cause kidney damage, high blood pressure, and anaemia.</li>
                    <li>
                      Lead accumulates in the body over time, so even small exposures can add up to significant
                      health risks.
                    </li>
                  </ul>

                  <h3>How do I know if I have lead paint in my house?</h3>

                  <h4>Find out when your house was constructed</h4>
                  <p>
                    Because lead was inexpensive, long-lasting, and produced vibrant hues, it was commonly used
                    in paint before the 1960&rsquo;s. Due to its harmful effect on the human body, the
                    percentage of lead in household paint decreased from 50% before 1965 to 1% that year. The
                    percentage was lowered to 0.25% in 1992 and then to 0.1% in 1997. Currently, Australia is
                    home to an estimated 3.7 million residences that were constructed before 1970, and most of
                    them have lead paint, often with lead contents as high as 50%.
                  </p>
                  <p>
                    That&rsquo;s why we suggest you find out all the details of the house you are moving into,
                    including the year it was built. The chances of the house containing a higher percentage of
                    lead are almost 9 out of 10 if the residence was made before 1960. Asking the previous
                    owner, seller, or landlord might help you find out when your house was built.
                  </p>

                  <h4>Inspect areas with damaged paint</h4>
                  <p>
                    Another way to tell if paint is lead-based is to examine its condition. As lead-based paint
                    degrades, lead dust is released, which is extremely dangerous to one&rsquo;s health. So, it
                    is wise to identify the signs of damage in your paint as early as possible. Also, inspecting
                    damaged areas helps prioritise lead paint testing and makes it easy to determine the
                    existence of lead.
                  </p>

                  <figure className="relative my-8 aspect-[960/618] w-full overflow-hidden">
                    <Image
                      src="/images/understanding-the-paint-is-decaying-visula-by-napkin.ai_.png"
                      alt="Signs that show a painted surface is decaying"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    There is a deteriorating term called alligatoring when the cracking pattern resembles
                    alligator scales. It is a common myth that alligatoring only happens in lead paint, which is
                    not correct. However, it does suggest the paint is old, which often means it might contain
                    lead.
                  </p>
                  <p>
                    Look for damaging signs in the paint inside your home and fix them instantly. Sometimes,
                    even if the paint is not broken, high-risk surfaces with lead paint are equally dangerous.
                    These types of surfaces are found in walls with high moisture or areas with frequent
                    frictional contact. So, you need to be careful about these areas too.
                  </p>

                  <h4>Look underneath the newer layers of paint</h4>
                  <p>
                    Noticing several coats of paint, particularly in older structures, is another clue that the
                    paint may contain lead. If you&rsquo;re researching how to identify lead paint without kit
                    testing, check for multiple paint layers. Some choose to paint over existing paint since
                    stripping it off may be laborious. So, lead-based paint might be hiding underneath newer
                    layers. If you suspect or are concerned about lead paint dangers, even if the surface may
                    appear to have a fresh, clean layer of paint, it may be worthwhile to investigate more.
                  </p>
                  <p>
                    Damaged areas often expose underlying layers, revealing the potential presence of
                    lead-based paint. You may discover layers of paint below, particularly in areas where the
                    paint is already peeling. These are outdated coatings that were painted over for
                    remodelling or repair.
                  </p>

                  <h4>Identify the lead symptoms</h4>

                  <figure className="relative my-8 aspect-[1024/560] w-full overflow-hidden">
                    <Image
                      src="/images/indoor-damp-air-quality-iaq-testing-a-close-up-view-of-an-indoor-environmental-quality-assessor-1024x560.jpg"
                      alt="Indoor damp air quality testing by an indoor environmental quality assessor"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    Another technique to spot lead paint is to recognise the early signs of lead poisoning.
                    Young children and pregnant women are more at risk than others, so early symptoms are
                    usually found in them. However, there is no one distinct sign of lead poisoning; instead, it
                    can manifest itself in a variety of ways, many of which are generic.
                  </p>
                  <p>
                    Here, we&rsquo;ve gathered a list of a few common early symptoms so that if you find any of
                    these, you can see the dangers of lead at an early stage.
                  </p>
                  <ol className="list-decimal space-y-2 pl-5 marker:font-bold marker:text-brand-teal">
                    <li>Unexplained discomfort or cramping in the stomach area</li>
                    <li>Joint pain or muscle aches</li>
                    <li>Slurred speech or hearing problems</li>
                    <li>Persistent tiredness or lack of energy</li>
                    <li>Irritability, mood swings, or aggression</li>
                    <li>Loss of appetite or unexplained weight loss</li>
                  </ol>

                  <h4>Try lead testing kits at home</h4>
                  <p>
                    If you suspect that lead paint is present in your home, you should determine whether the
                    paint is a concern and ensure that it is removed appropriately. You may test the paint in
                    your house for the presence of lead in a few different ways:
                  </p>
                  <ul>
                    <li>
                      <strong>Colour-changing test kit</strong> &ndash; These kits may be purchased extensively
                      at hardware and paint stores. While lead concentrations above 0.5% should be detectable by
                      these test kits, they are not always reliable and can occasionally yield false negatives
                      or, less frequently, false positive results.
                    </li>
                    <li>
                      <strong>DIY sample kit</strong> &ndash; Sample kits are made to let you gather samples of
                      paint, dirt, dust cloths, rainfall, and other materials to see if your house is
                      child-safe. For accurate testing, the samples you collect are submitted to a laboratory
                      registered with the National Association of Testing Authorities (NATA).
                    </li>
                    <li>
                      <strong>A portable XRF machine</strong> &ndash; The lead content of paintings, toys,
                      jewellery, and other items can be quickly and accurately determined using this equipment,
                      but you&rsquo;ll need to hire an expert to conduct the test for you.
                    </li>
                  </ul>

                  <h3>What should you do if you find lead paint?</h3>

                  <figure className="relative my-8 aspect-[1024/573] w-full overflow-hidden">
                    <Image
                      src="/images/two-house-painters-in-hazmat-suits-removing-lead-paint-from-an-old-house-1024x573.jpg"
                      alt="Two house painters in hazmat suits removing lead paint from an old house"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    If you finally identify lead in your house paint, you have to enclose, encapsulate, or
                    remove the paint from your property. There is a common concern regarding it, which is-
                  </p>

                  <h4>Can I just paint over lead paint?</h4>
                  <p>
                    One of the accepted methods for addressing lead paint dangers is &ldquo;encapsulation,&rdquo;
                    which includes painting over lead paint. But to do this, you need to employ an
                    &ldquo;encapsulant,&rdquo; a unique substance.
                  </p>
                  <p>
                    Lead paint cannot be securely contained with standard store-bought paint alone. The items
                    below are not encapsulants:
                  </p>
                  <ul>
                    <li>A fresh layer of primer or paint</li>
                    <li>Wall covers with paper</li>
                    <li>Contact paper</li>
                  </ul>
                  <p>
                    Encapsulating lead paint requires sealing and coating the previous layer of lead paint
                    permanently to render it safe. So, it&rsquo;s better to call{" "}
                    <Link href="/residential-painters/">professional painters in Sydney</Link> who include these
                    painting services in their company.
                  </p>
                  <p>
                    Moreover, as lead is a hazardous substance, removing lead paint yourself is not a good idea.
                    Professional{" "}
                    <Link href="/lead-paint-removal/">lead based paint removal</Link> requires strict safety
                    procedures to protect your household and the surrounding environment. While lead paint
                    removal is a specialised service available across Australia, you should trust only the
                    qualified experts.
                  </p>

                  <h3>Conclusion</h3>
                  <p>
                    In conclusion, we must say that the presence of lead paint doesn&rsquo;t automatically
                    guarantee lead poisoning, but taking proactive steps is essential to ensure a healthy living
                    environment. By understanding the risks and inspecting your home thoroughly by yourself or
                    with the professionals, you can take appropriate action.
                  </p>
                  <p>
                    For safe, compliant lead paint removal in Sydney, homeowners can{" "}
                    <Link href="/contact-us/">seek help from an experienced painting company</Link> like{" "}
                    <strong>Priority One Coatings</strong> for a risk-free experience. Thus you can prevent lead exposure and create a safe haven for you and your
                    family.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How to Determine if Your House Has Lead Paint")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How to Determine if Your House Has Lead Paint")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
