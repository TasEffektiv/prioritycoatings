import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata: Metadata = {
  title: "How to Prepare Surface For Painting | Priority One Coatings",
  description:
    "Whether you are painting on the exterior or the interior, the basic and essential aspect is paint surface preparation. Explore the guide to surface preparation.",
};

const POST_URL = "https://www.prioritycoatings.com.au/how-to-prepare-surface-for-painting/";

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

export default function HowToPrepareSurfaceForPaintingPage() {
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
                  How to Prepare Surface For Painting
                </h1>

                <p className="mt-4 text-[15px] text-black/60">September 17, 2023</p>

                <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src="/images/surface-prep-for-painting.jpg"
                    alt="surface prep for painting"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="prose-blog mt-8 max-w-none text-[16px] leading-[1.8] text-black/80">
                  <p>
                    Surface preparation is one of the most important steps to prepare your walls for fresh,
                    beautiful, flawless paint strokes.
                  </p>

                  <p>
                    When it comes to redoing the surface with touch-ups or repainting it, more often than not, we
                    draw our attention to paint colours or material selections instead.
                  </p>

                  <p>
                    However, one of the most critical steps in any repainting process involves appropriately
                    preparing the surface, which will be the basis on which you will rely for excellent results.
                    Performing this process correctly will help improve the quality of the application while
                    minimising potential surface maintenance problems.
                  </p>

                  <p>
                    Surface preparation refers to various methods of surface treatment of materials before coating,
                    application of adhesives and other operations. And it is a mandatory procedure before painting,
                    coating and other materials. This step can often be performed chemically to remove layers,
                    surface defects, organic matter, oxidation and other contaminants on the surface. Although
                    there are several ways for different materials and applications, surface preparation follows a
                    similar progression.
                  </p>

                  <h3>Factors to consider before surface preparation</h3>
                  <p>
                    Inadequate surface preparation followed by the right painting technique can lead to poorer
                    results than using inferior products on a previously prepared surface. Many factors influence
                    the type of previous surface preparation and the choice of the coating system to be used, which
                    will dictate the quality of the finish. So here are some of the key things you may consider
                    before you start your surface preparation process.
                  </p>

                  <ul>
                    <li>
                      <strong>Surface assessment:</strong> With professional assistance, consider assessing the
                      condition of the surface to be treated, as this will affect the selection of the preparation
                      method. Surface profile measurements can also help determine whether an existing surface can
                      provide the mechanical locking required for further processing steps.
                    </li>
                    <li>
                      <strong>Lead testing:</strong> Before 1970, household{" "}
                      <a
                        href="https://www.sahealth.sa.gov.au/wps/wcm/connect/d43c4d8048f12740888aef0e3d7ae4ad/Fact+sheet+-+lead-based+paint.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        paints contained high lead levels
                      </a>
                      , as white lead was used as the primary white pigment. In 1970, due to the health effects of
                      leaded paint, Australia limited lead in paint to 1% and further reduced it to 0.1% in 1997.
                      When repainting an older home, check for lead in the paint with professional painters,
                      especially if your surface is peeling or chalky. Follow the instructions on the package of
                      your lead test kit to determine if the lead is present.
                    </li>
                    <li>
                      <strong>Surface Type:</strong> It is essential to know what type of wall you will be working
                      with to select the most appropriate surface preparation methods. Here is a list of all
                      surfaces &ndash; concrete walls, exposed brick, solid wood, drywall, wallpaper etc.
                    </li>
                    <li>
                      <strong>Previous Surface Condition:</strong> You must assess the condition of the surface to
                      be treated, as this will affect the selection of the preparation method.
                    </li>
                    <li>
                      <strong>The appearance of rust or old paint:</strong> This is especially relevant if the room
                      is indoors or outdoors and what is the prevailing climate. The degree of oxidation can vary
                      (surface, light, medium and heavy oxidation).
                    </li>
                    <li>
                      <strong>The most suited painting company:</strong> Since the painting experts have a lot of
                      experience and know many techniques, they can significantly improve the surface preparation
                      and finish and be long-lasting. The right painting service will also choose high-quality
                      painting products, depending on the type of surface preparation that is best for the project,
                      the environment, and other factors.
                    </li>
                  </ul>

                  <h3>Steps of Preparing a Surface for Repaint</h3>

                  <h4>Remove old paint</h4>
                  <p>
                    Removing the paint before applying a new coat is not always necessary, especially for indoor
                    painting projects. However, if the paint is chipping and peeling, you will need to remove the
                    old peeling coat for a smooth paint finish.
                  </p>

                  <p>
                    Using a new paint layer on top of an old faulty coating will allow pre-existing problems such as
                    bubbling, flaking or flaking to persist beneath the coating. Consider shaving off the coating
                    until a clean surface, such as white metal, which will help reduce problems such as corrosion
                    and prolong the life of the property.
                  </p>

                  <h5 className="text-center">
                    This is especially true if you are working with older homes and the surface has many layers of
                    old paint.
                  </h5>

                  <p>
                    Speaking of older homes, some of them may contain lead paint and asbestos, as we previously
                    mentioned, so it&rsquo;s essential that you wear protective gear when handling these items.
                    There are tools to help remove paint, such as infrared heaters, but you&rsquo;ll still need to
                    scrape the paint off manually.
                  </p>

                  <h4>Repair the cracks and holes</h4>
                  <p>
                    Are there any visible nail holes, dents, gouges or other types of uneven imperfections on the
                    surface? Unless you have an even surface to work with, you most likely won&rsquo;t have the
                    desirable painting outcome. The paint coats will be blotchy, with the possibility of the
                    surface bubbling underneath the surface in the future. With professional{" "}
                    <strong>
                      <Link href="/residential-painters/">residential painters in Sydney</Link>
                    </strong>
                    , you can consider applying fillers, using drywall, spackling or other measures.
                  </p>

                  <ul>
                    <li>
                      Brush the area clean- use your fingers or a trowel to fill nail holes or very small cracks
                      with fillers.
                    </li>
                    <li>
                      For plaster and drywall, use a patch mix or a non-shrink joint. Using a trowel, apply a thin
                      layer of plaster over the patched area. After the patch is dry, sand it gently. Wipe with a
                      damp cloth to remove dust, then prime to smooth the surface and help the new coat adhere.
                    </li>
                    <li>
                      For holes and cracks larger than nail holes, cut two pieces of self-adhesive mesh backing
                      tape, making sure they are larger than the hole. Center the two &ldquo;X&rdquo; shaped pieces
                      over the hole and press firmly into place. The cracks usually only need one piece.
                    </li>
                    <li>
                      Then, using a putty knife, cover the mesh with one or more layers of splicing compound when
                      the material is dry, sand and prime.
                    </li>
                  </ul>

                  <h4>Work on the water and smoke damage</h4>
                  <p>
                    Once the cause of the damage has been fixed, use a primer designed to block stains. Before you
                    start priming, run a water test on an undamaged ceiling area with a spray bottle. If water
                    particles are present, apply a spot primer only to the damaged area. If water seeps in,
                    you&rsquo;ll need to prime the entire ceiling. Read the product label to make sure the primer
                    is recommended for your stain type. Stain-blocking primers are available in alkyd and
                    latex-based versions.
                  </p>

                  <p>
                    While both are effective at blocking water and smoke stains, an alkyd stain repellant will
                    generally get better seal water stains because it does not contain water that can re-wet the
                    stain. You can still see the stain through the stain barrier, but it&rsquo;s designed to
                    &ldquo;lock&rdquo; the stain so it doesn&rsquo;t seep through the topcoat. Make sure the primer
                    is completely dry before applying the top coat.
                  </p>

                  <h4>Sand the surface</h4>
                  <p>
                    After removing the paint and fixing the imperfections, you will get a rough and uneven surface.
                    Sanding the surface will make it smooth and even. Sanding is an integral part of almost any
                    finishing job, whether you plan to repaint exterior floors or repair and recoat the interior
                    walls of your home. By sanding a surface, you make the surface smoother and create a more
                    sticky area for primer, paint or stains to adhere to.
                  </p>

                  <p>
                    By sanding the surface, you remove imperfections, create a beautiful smooth finish, and
                    increase adhesion by developing small rough edges for the paint to adhere to. The sanding
                    process, however, generates a lot of dust, so surfaces must be thoroughly cleaned before
                    painting.
                  </p>

                  <p>
                    You can skip the sanding step if you&rsquo;re only doing minor touch-ups. But even in these
                    situations, it&rsquo;s best to quickly skim the part you intend to paint with the appropriate
                    grit sandpaper.
                  </p>

                  <h4>Thoroughly clean the surface</h4>
                  <p>
                    It is essential to clean the surface to be painted, whether you are sanding or not. In one
                    study, it was found that the majority of paint and coating-related failures were due to poor
                    surface preparation. This includes cleaning, surface roughening, chemical pretreatment and
                    degreasing. As we all know, coating effectiveness depends on surface preparation; therefore,
                    all coated surfaces must be thoroughly cleaned, dry and free of dirt, grease or any other
                    material.
                  </p>

                  <h5 className="text-center">
                    One way or another, the dirt and debris accumulate even after fully repairing the surface, so a
                    thorough surface cleanup before painting is required.
                  </h5>

                  <p>
                    If surfaces are indoors, you can use a mild detergent solution. The exterior surface, however,
                    may or may not have to be pressure washed. If the pressure washer is set too high, it can
                    damage the surface.
                    <br />
                    There are several basic methods and products for surface cleaning. Soap water or household
                    detergent is the most common thing you can use to clean any surface.
                  </p>

                  <p>
                    However, some stains don&rsquo;t come off quickly, and to do this, you sometimes need a
                    specialised product such as an organic solvent, emulsion degreaser, trisodium phosphate (TSP)
                    solution, or detergent. Krud Kutter paints money laundering (TSP substitute). For mildew
                    removal, you can use chlorine-based bleach.
                  </p>

                  <h3>Final words</h3>
                  <p>
                    Last but not least, the essential part of any paint job and surface preparation is choosing the
                    right team or inexpensive painter. Not all paint companies are created equal; some will do a
                    much better job than others. When looking for a{" "}
                    <strong>
                      <Link href="/">painting company in Sydney</Link>
                    </strong>
                    , research to find a company with a good reputation that will successfully complete your
                    project.
                  </p>

                  <h5 className="text-center">
                    For over 32 years, the professional painters of Priority One Coatings in Sydney have been
                    providing top-quality painting and decorating services. You can reach out to us for
                    high-quality surface preparation and painting solutions.
                  </h5>
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
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST_URL)}&text=${encodeURIComponent("How to Prepare Surface For Painting")}`}
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
                    href={`mailto:?subject=${encodeURIComponent("How to Prepare Surface For Painting")}&body=${encodeURIComponent(`Check out this article: ${POST_URL}`)}`}
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

              <BlogSidebar />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
