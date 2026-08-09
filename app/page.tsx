import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import PublishedApps from "@/components/PublishedApps";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Architecture from "@/components/Architecture";
import DemoVideos from "@/components/DemoVideos";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Projects />
        <PublishedApps />
        <TechStack />
        <Experience />
        <Architecture />
        {/* <DemoVideos /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
