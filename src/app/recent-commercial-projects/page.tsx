import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";
import { COMMERCIAL_PROJECTS } from "@/data/commercialProjects";

export const metadata: Metadata = {
  title: "Portfolio | Commercial Projects | Priority One Coatings",
  description:
    "Browse recent commercial painting projects by Priority One Coatings — quality workmanship across Sydney commercial buildings, warehouses and line marking.",
};

export default function RecentCommercialProjectsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="Commercial" parent={{ label: "Portfolio", href: "/portfolio/" }} />

        <section className="bg-white py-[50px] md:py-[80px]">
          <div className="mx-auto max-w-[1400px] px-6">
            <h2 className="mb-5 font-heading text-[30px] font-bold leading-[35px] text-black md:text-[41px] md:leading-[49px]">
              Recent commercial painting projects
            </h2>

            <GalleryLightbox images={COMMERCIAL_PROJECTS} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
