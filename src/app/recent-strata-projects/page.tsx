import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";
import { STRATA_PROJECTS } from "@/data/strataProjects";

export const metadata: Metadata = {
  title: "Portfolio | Strata Projects | Priority One Coatings",
  description:
    "Priority One Coatings works for any big or small strata painting projects in Sydney. Check out what we have done for our clients.",
};

export default function RecentStrataProjectsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="Strata" parent={{ label: "Portfolio" }} />

        <section className="bg-white py-[50px] md:py-[80px]">
          <div className="mx-auto max-w-[1400px] px-6">
            <h2 className="mb-5 font-heading text-[30px] font-bold leading-[35px] text-black md:text-[41px] md:leading-[49px]">
              Recent Strata Maintenance projects
            </h2>

            <GalleryLightbox images={STRATA_PROJECTS} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
