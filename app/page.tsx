import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Certification from "@/components/certafications";
import ServicesSection from "@/components/services";
 

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <ServicesSection />

      <About />
      <Experience />
      <Projects />
      <Skills />
      <SectionDivider />
      <Certification />
      <Contact />
    </main>
  );
}
