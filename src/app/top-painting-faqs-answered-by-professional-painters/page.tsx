import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Top Painting FAQs Answered by Professional Painters | Priority One Coatings",
  description:
    "Clear answers to the most common painting questions — cost, timelines, paint types, warranties and more — from Sydney's Priority One Coatings.",
};

const POST_URL = "https://www.prioritycoatings.com.au/top-painting-faqs-answered-by-professional-painters/";

const CATEGORY_LINKS: Record<string, string> = {
  "Commercial Painting": "/category/commercial-painting/",
  DIY: "/category/diy/",
  News: "/category/news/",
  "Residential painting": "/category/residential-painting/",
};

const CATEGORIES = Object.keys(CATEGORY_LINKS);

const RECENT_POSTS = [
  {
    title: "Paint, Colours, And Tools – Glossary You Need",
    href: "/paint-colours-and-tools-glossary-you-need/",
  },
  {
    title: "Signs of a Bad Paint Job: Understand Painting Mistakes",
    href: "/signs-of-a-bad-paint-job/",
  },
  {
    title: "How to Fix a Bad Paint Job: Common Painting Mistakes",
    href: "/how-to-fix-a-bad-paint-job/",
  },
  {
    title: "Essential Things to Know Before Painting Your Home Interiors",
    href: "/things-to-know-before-painting-home-interiors/",
  },
  {
    title: "Painting Commercial Building: The Best Practice Guide",
    href: "/painting-commercial-building-the-best-practice-guide/",
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

export default function TopPaintingFaqsPage() {
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
                  Top Painting FAQs Answered by Professional Painters
                </h1>

                <p className="mt-4 text-[15px] text-black/60">March 30, 2026</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/common-faqs-blog-banner.jpg"
                    alt="Common painting FAQs blog banner"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    Fresh paint can really change how a space feels. Brighter walls and cleaner rooms make a
                    home or workplace feel cared for, and people notice the difference right away. Still, many
                    homeowners and business owners have lots of questions about value, timing, disruption, cost,
                    and trust.
                  </p>

                  <p>
                    Instead of guessing or relying on incomplete answers, this FAQ aims to clarify things. It
                    addresses general inquiries about interior, exterior, residential, and commercial painting
                    in simple language, offering tips you can easily implement. No matter whether you are
                    dealing with an office or your own personal space, answers to these common questions will
                    assist you in making well-informed decisions.
                  </p>

                  <h3>1. General Painting Information</h3>

                  <h4>Why should I paint my interior?</h4>
                  <p>
                    When you give your home a fresh paint job, you actually do much more than paint it a
                    different colour. This is because walls in a home have a tendency to soak up moisture and
                    smells from use over the years. This means that no matter how clean a home is, it actually
                    looks old. In many Sydney homes, especially older ones, new paint can seal small cracks and
                    help reduce dust. Choosing <Link href="/residential-painters/">experienced painters</Link>{" "}
                    means your paint job will look well done and last for years.
                  </p>

                  <h4>Can interior painting increase property value?</h4>
                  <p>
                    How a property looks is more important than many people think. Buyers and tenants often
                    form opinions quickly, and old or worn walls can lower the value of a space. A professional
                    and neutral paint job can make spaces look larger, brighter, and like the areas are easily
                    personalised. Realtors often recommend painting before selling, since it is one of the few
                    home renovations that yield a noticeable return on investment, unlike other renovations,
                    which are exceptionally expensive.
                  </p>

                  <h4>What is the typical duration of a painting project?</h4>
                  <p>
                    Every painting project is different. Based on the size of a room, painting one bedroom might
                    take a day or two, while repainting an entire house can take several days to a couple of
                    weeks. The time needed depends on things like the condition of the surfaces, drying times,
                    and how much preparation is required. Experienced painting contractors focus on careful
                    preparation and proper drying, since rushing the job can lead to problems later.
                  </p>

                  <h3>2. Preparation and On-Site Process</h3>

                  <h4>How do I prepare my home for painting?</h4>
                  <p>
                    Getting ready for painting starts with making sure painters can reach the walls. Remove
                    personal items, artwork, and anything fragile from shelves and walls. While professional
                    painters take care of most of the surface preparation, homeowners can help by keeping rooms
                    tidy and easy to access. This lets painting companies focus on doing quality work instead of
                    working around clutter.
                  </p>

                  <h4>What do I have to do in preparation for painting my home?</h4>
                  <p>
                    You do not need to do much. Just remove small valuables and discuss any issues before
                    commencement. The rest, such as surface checking, minor defect repairs, and protection of
                    flooring and fixtures, will be done by the painting team. This initial good communication
                    enables professional painters to deliver better results with fewer interruptions.
                  </p>

                  <h4>Do I need to move furniture before painting?</h4>
                  <p>
                    All big pieces of furniture should stay in the room. Painters will move it to the centre,
                    cover it appropriately, and move it back as needed. Painters in Sydney with painting
                    experience will always move your valuables to safe places.
                  </p>

                  <h4>Will my furniture and carpet be okay?</h4>
                  <p>
                    Protecting your space is essential in quality painting. Painters use drop sheets, plastic
                    covers, and careful masking as standard practice. Good teams treat your home with care,
                    making sure carpets, furniture, and fittings stay clean and free from paint or dust.
                  </p>

                  <h4>Can I stay in my home during the painting process?</h4>
                  <p>
                    In most cases, you can stay in your home while the painting is done. Modern low-VOC paints
                    have little odour, and painters usually work one room at a time to keep things running
                    smoothly. Families, pets, and daily routines can continue with only small changes. Being at
                    home also lets you see the progress and ask questions as the work goes on.
                  </p>

                  <h3>3. Paint, Materials, and Colour</h3>

                  <h4>What type of paint do you use?</h4>
                  <p>
                    Painters choose high-quality paints based on the surface type, how the room is used, and the
                    finish you want. Washable paints are often used in living areas, while moisture-resistant
                    paints are best for bathrooms and kitchens. Using good materials means your paint will last
                    longer and be easier to maintain.
                  </p>

                  <h4>Why is Dulux paint the professionals&rsquo; choice?</h4>
                  <p>
                    Dulux is known for being consistent, accurate in colour, and long-lasting. Its paint is
                    suitable for the Australian climate, with good coverage and drying properties. Many experts
                    use Dulux because it prevents any issues and achieves results for clients that they can
                    trust.
                  </p>

                  <h4>What paint finish is best for office walls?</h4>
                  <p>
                    Low-sheen or satin finishes work well for office walls. These surfaces reflect light softly
                    and can be used to mask small blemishes. In addition, these surfaces are easy to clean,
                    especially in offices where appearance matters every day.
                  </p>

                  <h4>How do I pick the right colour for my room?</h4>
                  <p>
                    <Link href="/house-paint-colours-trend-2026/">Choosing a colour</Link> means thinking about
                    your taste, the lighting, the room&rsquo;s size, and
                    how you use it. Warm colours can make big rooms feel cosy, while cool colours can make small
                    rooms feel bigger. Try samples on different walls and look at them at different times of day
                    to see how they really look.
                  </p>

                  <h4>Is colour consultation included?</h4>
                  <p>
                    Many painting services include help with choosing colours, especially for whole homes or
                    commercial spaces. Advice from experienced painters can help you avoid mistakes and make
                    sure your colours look good together throughout your space.
                  </p>

                  <h4>How long will the fumes remain?</h4>
                  <p>
                    Modern low-VOC paints usually lose their smell within a few hours. Good ventilation helps
                    the smell go away faster, so you can use the rooms soon after painting is finished.
                  </p>

                  <h4>Do you need to wash walls before painting?</h4>
                  <p>
                    Yes, you should wash the walls before painting. Dust, grease, and other residues can prevent
                    paint from adhering well. Cleaning the walls helps the new paint go on smoothly and last
                    longer without peeling.
                  </p>

                  <h4>Can you paint over old paint?</h4>
                  <p>
                    In most cases, you can paint over old paint if it is in good condition and sticking well.
                    Painters will sand, fix any problems, and use primer if needed to make sure the new paint
                    looks good and lasts.
                  </p>

                  <h3>4. Office and Commercial Painting</h3>

                  <h4>How long does office painting take?</h4>
                  <p>
                    How long it takes to paint an office depends on its size, layout, and when people are
                    working. Small offices might take a few days, while bigger ones need more planning and may
                    be done in stages. Flexible scheduling helps keep work going while still getting a
                    professional result.
                  </p>

                  <h4>Do we need to vacate the office?</h4>
                  <p>
                    You do not always need to leave the office. Many commercial painting jobs are done after
                    hours or in sections, so staff can keep working with little disruption. Good scheduling
                    helps your business run smoothly during the project.
                  </p>

                  <h4>Can you paint around glass partitions and cabling?</h4>
                  <p>
                    Yes, experienced painters know how to plan around things such as glass walls, cables, and
                    technology. In fact, they use masking to ensure everything is in its right place.
                  </p>

                  <h4>Can you help with repainting during office refurbishments?</h4>
                  <p>
                    Painting is usually the last step in an{" "}
                    <Link href="/commercial-fitouts/">office renovation</Link>. Working with builders,
                    electricians, and designers helps ensure everything is finished on time and that the new
                    paint matches the updated space.
                  </p>

                  <h3>5. Company Credentials and Guarantees</h3>

                  <h4>Why choose us for painting services?</h4>
                  <p>
                    Selecting a team of painters is an issue of trust, not only price. Reliability, attention to
                    detail, and good communication skills can make all the difference between an ordeal and an
                    easy experience.
                  </p>

                  <h4>Do you provide a warranty for your work?</h4>
                  <p>
                    Yes, we provide a warranty. A workmanship warranty shows the painters are confident in their
                    work. It means that if there are any problems with how the paint was applied, we will fix
                    them, giving you long-term value rather than just a quick fix.
                  </p>

                  <h3>6. Pricing and Payment</h3>

                  <h4>How much does interior painting cost?</h4>
                  <p>
                    The cost of painting depends on the size of the job, the condition of the surfaces, the type
                    of paint, and the complexity of the project. Cheaper quotes might look good at first, but
                    using quality materials and proper preparation can save you money in the long run by
                    ensuring the paint lasts longer.
                  </p>

                  <h4>Do you have any hidden charges?</h4>
                  <p>
                    We are transparent in providing detailed quotes outlining. We provide you with precise
                    quotes that reflect the cost of labour and materials, as well as the time required to
                    complete the task. This will allow you to budget accordingly and will also reduce any
                    last-minute surprises that may arise in the process. As professionals, we always undergo an
                    assessment before embarking on the task.
                  </p>

                  <h4>What payment methods do you accept?</h4>
                  <p>
                    We prefer bank transfers and credit card transactions; therefore, payment becomes easy after
                    completion.
                  </p>

                  <h3>7. Location and Contact</h3>

                  <h4>Which areas in Sydney do you cover?</h4>
                  <p>
                    We operate across a wide area in most Sydney suburbs. Our expert painters include office
                    blocks in the central business district or residential homes in the suburbs. It helps to
                    start by inquiring if we serve the area.
                  </p>

                  <h4>How can I contact you for more information?</h4>
                  <p>
                    You can <Link href="/contact-us/">contact us</Link> by phone, email, or online enquiry forms.
                    This makes it easy to ask questions or set up a consultation.
                  </p>

                  <h3>8. Additional Common Questions</h3>

                  <h4>How often should you repaint a house interior?</h4>
                  <p>
                    Most interior spaces should be repainted every 5 to 7 years. Busier areas, such as hallways
                    and kitchens, may need painting sooner, while less-used rooms can go longer with good care.
                  </p>

                  <h4>How long does it take to paint a house?</h4>
                  <p>
                    With size, preparation, and drying times considered, painting a whole house could take from
                    a week up to three weeks. These are reasons why planning is very important, so as not to
                    sacrifice job quality for timely completion.
                  </p>

                  <h3>Conclusion</h3>

                  <p>
                    A painting project is more than just beautifying a space. It&rsquo;s an investment in
                    comfort and value, and how you feel about your home or workplace every single day. It feels
                    a whole lot easier when the answers are clear, and expectations are forthright. Getting
                    ready all the way to the final check matters greatly with the right approach.
                  </p>

                  <p>
                    Knowing what is involved in the professional painting process and what to expect along the
                    way will help you feel confident as you move forward. Whether you want a small painting
                    update or a big change in your home or workplace, and you are looking for a{" "}
                    <Link href="/residential-painters/">reliable yet affordable painting contractor in Sydney</Link>,{" "}
                    <strong>Priority One Coatings</strong> can be your one-stop solution.
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("Top Painting FAQs Answered by Professional Painters")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("Top Painting FAQs Answered by Professional Painters")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
