import { NavigationBar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { Testimonial } from "./components/testimonial-section";

export default function App() {
  return (
      <>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <Testimonial />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      </>
  );
}