import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CertLogos from "@/components/CertLogos";
import About from "@/components/About";
import IntroText from "@/components/IntroText";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectCategories from "@/components/ProjectCategories";
import RecentProjects from "@/components/RecentProjects";
import RightChoice from "@/components/RightChoice";
import Testimonials from "@/components/Testimonials";
import TrustedLogos from "@/components/TrustedLogos";
import RecentBlog from "@/components/RecentBlog";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

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
