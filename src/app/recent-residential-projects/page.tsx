import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";
import { RESIDENTIAL_PROJECTS } from "@/data/residentialProjects";

export const metadata: Metadata = {
  title: "Portfolio | Residential Projects | Priority One Coatings",
  description:
    "Browse recent residential painting projects by Priority One Coatings — quality workmanship across Sydney homes.",
};

export default function RecentResidentialProjectsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="Residential" parent={{ label: "Portfolio" }} />

        <section className="bg-white py-[50px] md:py-[80px]">
          <div className="mx-auto max-w-[1400px] px-6">
            <h2 className="mb-5 font-heading text-[30px] font-bold leading-[35px] text-black md:text-[41px] md:leading-[49px]">
              Recent residential painting projects
            </h2>

            <GalleryLightbox images={RESIDENTIAL_PROJECTS} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
