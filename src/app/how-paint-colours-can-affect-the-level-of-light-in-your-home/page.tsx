import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How Paint Colours Can Impacts the Lights of Your Interiors | Priority One Coatings",
  description:
    "Discover how paint colours affect the level of natural and artificial light in your home, from Light Reflectance Value to picking colours for south, north, east and west-facing rooms.",
};

const POST_URL =
  "https://www.prioritycoatings.com.au/how-paint-colours-can-affect-the-level-of-light-in-your-home/";

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

export default function HowPaintColoursCanAffectTheLevelOfLightInYourHomePage() {
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
                  How Paint Colours Can Impacts the Lights of Your Interiors
                </h1>

                <p className="mt-4 text-[15px] text-black/60">December 31, 2020</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="https://www.prioritycoatings.com.au/wp-content/uploads/2015/10/How-Lighting-Impacts-Paint-Colours.png"
                    alt="How Paint Colours Impacts The Lights - Priority One Coatings"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    When it comes to deciding on the most suitable paint colours for your home, it&rsquo;s not merely
                    about choosing the colours you like the most. There&rsquo;s a science to the whole process to
                    make sure that the room looks good and creates the setting that you desire.
                  </p>

                  <p>
                    Not just about interior aesthetics, the colour palettes you are choosing can also have impacts on
                    the natural or artificial light reflected throughout the house! In other words, the perceived
                    brightness of a room can be influenced considerably by the way it is painted.
                  </p>

                  <p>
                    <strong>
                      Let&rsquo;s look at some of the aspects you should keep in mind in choosing interior paint
                      colours and how it can affect your houses lighting.
                    </strong>
                  </p>

                  <h3>Light Reflectance Value</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://prioritycoatings.com.au/wp-content/uploads/2015/10/LRV-Light-Reflectance-Value-Priority-One-Coatings.jpg"
                      alt="LRV-Light Reflectance Value - Priority One Coatings"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    <strong>Light reflectance value</strong> is the way to measure how paint colours reflect lights
                    when a light source illuminates it. According to this, you can choose suitable{" "}
                    <Link href="/house-paint-colours-trend-2026/">paint colours</Link> that reflect light for your
                    home. While all paint colours reflect light, some do so considerably more than others. The scale
                    runs from 0% (very low reflectance) to 100% (very high reflectance).
                  </p>

                  <p>
                    LRV is often mentioned on the bucket of the paint you are going to buy. When selecting the
                    colour, you should check out the LRV on the bucket to be sure whether it is suited or not.
                  </p>

                  <h3>Colours According to the Sunlight</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://prioritycoatings.com.au/wp-content/uploads/2015/10/House-Paint-Colours-and-sunlight-Priority-One-Coatings.jpg"
                      alt="House Paint Colours and sunlight - Priority One Coatings"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    You must know that the colour of anything does not remain the same for 24*7. It would look
                    different on a different part of the day due to sunlight.
                  </p>

                  <p>
                    That is why, while picking your house painting colour, it is always better to consider the
                    natural light and its source. The reason for it is that with the sunlight angle and amount, your
                    room&rsquo;s colour keeps changing.
                  </p>

                  <p>So, what is the well-suited colour for differently positioned rooms in your home?</p>

                  <h3>South-Facing Room</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://prioritycoatings.com.au/wp-content/uploads/2015/10/Paint-colors-and-south-facing-room-Priority-One-Coatings.jpg"
                      alt="Paint colors and south facing room - Priority One Coatings"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    It is the most convenient room to choose the colour. When the weather is good, a south-facing
                    room will be filled with warm light from dawn to dusk.
                  </p>

                  <p>
                    Lighter colours glow in a south-facing room. So, picking a soft and pale colour on your wall is
                    an excellent way to make your place look brighter and spacious.
                  </p>

                  <h3>North-Facing Room</h3>

                  <p>
                    North-facing room has a bluish and cold light. So the bolder colour in such a room seems to add
                    more life to it &mdash; the same principle behind choosing{" "}
                    <Link href="/best-paint-colours-for-dark-rooms/">the best paint colours for dark rooms</Link>.
                  </p>

                  <p>
                    So it is better to avoid anything green and grey base. A bright colour like yellow, white, and
                    off white will reflect the right amount of light around the room.
                  </p>

                  <p>So intense colours are more appropriate for the north-facing room.</p>

                  <h3>West-Facing Room</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://prioritycoatings.com.au/wp-content/uploads/2015/10/Paint-colours-and-west-facing-rooms-sunlight-Priority-One-Coatings.jpg"
                      alt="Paint colours and west facing rooms sunlight - Priority One Coatings"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    West-facing room light has a particular feature. A west-facing room is more relaxed in the
                    morning, and it is brighter in the afternoon.
                  </p>

                  <p>
                    Warm tones like the Middleton pink are an excellent option to make the afternoon light&rsquo;s
                    best use. On the other hand, a colour like a slipper satin will look cool in the morning.
                  </p>

                  <h3>East-Facing Room</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://prioritycoatings.com.au/wp-content/uploads/2015/10/East-facing-room-and-paint-colours-Priority-One-Coatings.jpg"
                      alt="East facing room and paint colours - Priority One Coatings"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    East facing room remains warm and full of light before noon. Reds, Oranges and Yellows are the
                    colours that go well for an east-facing room. But for the evening time, light blues and greens
                    can create a soft and calmer effect.
                  </p>

                  <p>
                    The appearance and feel of a room can change considerably depending on where the sun is shining
                    (or not shining). Different paints are appropriate for different settings, which needs to be
                    tested before committing to one.
                  </p>

                  <h3>Which Rooms Should Be Brighter?</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://prioritycoatings.com.au/wp-content/uploads/2015/10/Sunlight-in-the-bedrooms-Priority-One-Coatings.jpg"
                      alt="Sunlight in the bedrooms - Priority One Coatings"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    It depends on the kind of mood you want to create in a room, how much natural and artificial
                    light it is already exposed to and the function of the room.
                  </p>

                  <p>
                    For example, Bathrooms are typically painted in high LRV, bright colours such a stark white or
                    even yellow to ensure high visibility. Bedrooms are the same but to a lesser extent. Dining and
                    living rooms often work with warmer lighting.
                  </p>

                  <p>
                    <strong>
                      <Link href="/residential-painters/">Expert house painters</Link>
                    </strong>{" "}
                    from a professional painting and decorating company in Sydney can advise you well on the best
                    option as what works best can change on a case to case basis.
                  </p>

                  <h3>Artificial Lighting</h3>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://prioritycoatings.com.au/wp-content/uploads/2015/10/Paint-Colours-and-artifical-lighting-Priority-One-Coatings.jpg"
                      alt="Paint Colours and artifical lighting - Priority One Coatings"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <p>
                    As discussed earlier, the appearance of interior paint colour can change drastically depending on
                    the amount of and nature of the light reflecting off it. Artificial lighting, however, can also
                    affect these colours. Many different kinds of artificial lights will work better in specific
                    colours.
                  </p>

                  <p>
                    For example, LED lighting is often harsh and can mute warm colours. Therefore, it may not be
                    ideal for a lounge room but could work well in a kitchen or bathroom.
                  </p>

                  <p>
                    Halogen and incandescent bulbs bring out yellow lights with warmer tones, so the wall colour
                    looks warmer with it.
                  </p>

                  <p>
                    On the other hand, cooler colours emit blue light that tends to appear quite dull. It may not be
                    perfect for all the rooms. If a certain kind of light lits a place, the paint colour may need to
                    be tweaked to account for this.
                  </p>

                  <h3>A Few Tips to Properly Utilise the Light With the Paint Colour</h3>

                  <ul>
                    <li>
                      It is highly recommended that, before painting your entire space, it is always better to paint
                      a test area at first. By doing so, you will get some idea about how the light is looking at
                      different times of the day.
                    </li>
                    <li>
                      There will be a few walls in your space that will get more light compared to the others. For a
                      wall like this, you can pick one shade lighter or one shade darker paint colour.
                    </li>
                    <li>
                      Doing so, it will match appropriately with the other walls. But before doing such an
                      experiment, get assistance or advice from an expert.
                    </li>
                    <li>
                      How the lights will reflect will depend mainly on other objects of the room as well. Furniture,
                      decor, all these things have a massive role in how the light is reflected in your house. So it
                      would be better to make conscious choices while buying these things.
                    </li>
                    <li>
                      Sometimes you can make both artificial and natural work together to give your space a brighter
                      look. So, sometimes turn on the light during the daytime to see how the colours look.
                    </li>
                  </ul>

                  <figure className="relative my-8 aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src="https://prioritycoatings.com.au/wp-content/uploads/2015/10/Properly-utilising-the-paint-colors-for-interiors-Priority-One-Coatings-.jpg"
                      alt="Properly utilising the paint colors for interiors - Priority One Coatings"
                      fill
                      className="object-cover"
                    />
                  </figure>

                  <h3>Wrapping Up</h3>

                  <p>
                    There are many factors at play when choosing the right paint colours that reflect light and
                    brightness in your home.
                  </p>

                  <p>
                    Your residential painting contractor should be able to work with your requirements and existing
                    aspects of your home to make it work. However, having a general idea about how brightness affects
                    your interior&rsquo;s mood or choosing colours according to your room space helps any homeowner.
                    If you happen to live in Sydney or nearby suburban areas, <Link href="/">Priority One Coatings</Link>{" "}
                    could be precisely the house painting service you&rsquo;re looking for. To help you choose the
                    right colour combinations and apply the correct colour palettes for your interior and exterior
                    walls, <Link href="/contact-us/">get in touch with our team today</Link>.
                  </p>

                  <div className="mt-10 rounded-md border-l-4 border-brand-teal bg-[#f3fafb] px-7 py-6">
                    <h3 className="mt-0">Need Help Choosing the Right Paint Colours for Your Home?</h3>
                    <p>
                      Getting the light and colour balance right can be tricky. Our experienced team can help you
                      choose colours that make the most of your home&rsquo;s natural and artificial light.
                    </p>
                    <p className="mb-0">
                      Call Priority One Coatings on <a href="tel:+61298085900">02 9808 5900</a>, email{" "}
                      <a href="mailto:jenny@prioritycoatings.com.au">jenny@prioritycoatings.com.au</a>, or{" "}
                      <Link href="/contact-us/">request a free quote online</Link> and find out more about our full
                      range of Sydney painting services.
                    </p>
                  </div>
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How Paint Colours Can Impacts the Lights of Your Interiors")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How Paint Colours Can Impacts the Lights of Your Interiors")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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
