import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import GalleryLightbox from "@/components/GalleryLightbox";
import { LEAD_REMOVAL_PROJECTS } from "@/data/leadRemovalProjects";

export const metadata: Metadata = {
  title: "Portfolio | Lead Removal Projects | Priority One Coatings",
  description:
    "Priority One Coatings works for any big or small lead paint removal projects in Sydney. Check out what we have done for our clients.",
};

export default function RecentLeadRemovalProjectsPage() {
  return (
    <div id="top">
      <Header />
      <main>
        <PageHeader title="Lead Removal" parent={{ label: "Portfolio" }} />

        <section className="bg-white py-[50px] md:py-[80px]">
          <div className="mx-auto max-w-[1400px] px-6">
            <h2 className="mb-5 font-heading text-[30px] font-bold leading-[35px] text-black md:text-[41px] md:leading-[49px]">
              Recent Lead Removal projects
            </h2>

            <GalleryLightbox images={LEAD_REMOVAL_PROJECTS} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
