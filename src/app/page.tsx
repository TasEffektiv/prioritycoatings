import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CertLogos from "@/components/CertLogos";
import About from "@/components/About";
import IntroText from "@/components/IntroText";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectCategories from "@/components/ProjectCategories";
import RecentProjects from "@/components/RecentProjects";
import RightChoice from "@/components/RightChoice";
import TrustedLogos from "@/components/TrustedLogos";
import RecentBlog from "@/components/RecentBlog";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// Below-the-fold carousels: split the embla-carousel JS out of the main
// bundle instead of shipping it on every initial page load.
const Services = dynamic(() => import("@/components/Services"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <CertLogos />
        <About />
        <IntroText />
        <Services />
        <WhyChooseUs />
        <ProjectCategories />
        <RecentProjects />
        <RightChoice />
        <Testimonials />
        <TrustedLogos />
        <RecentBlog />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
