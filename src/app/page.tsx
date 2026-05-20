import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import SignatureFooter from "@/components/SignatureFooter";

export default function Home() {
  return (
    <>
      <div className="relative z-10 bg-black w-full shadow-[0_40px_80px_rgba(0,0,0,0.9)] pb-24 border-b border-white">
        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
          <Hero />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
      </div>

      <SignatureFooter />
    </>
  );
}
