import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Certificates from "./components/homepage/certificates"; // Changed from Blog
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";


export default function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certificates /> {/* Changed from <Blog blogs={blogs} /> */}
      <ContactSection />
    </>
  )
};
