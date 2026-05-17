import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-48">
      {/* Hero / About Section */}
      <Hero />

      {/* Experience Section Placeholder */}
      <section id="experience" className="min-h-[80vh]">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="text-gold-500">01.</span> Experience
        </h2>
        <div className="h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500">
          Experience timeline goes here
        </div>
      </section>

      {/* Projects Section Placeholder */}
      <section id="projects" className="min-h-[80vh]">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="text-gold-500">02.</span> Projects
        </h2>
        <div className="h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500">
          Project bento grid goes here
        </div>
      </section>

      {/* Skills Section Placeholder */}
      <section id="skills" className="min-h-[60vh]">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="text-gold-500">03.</span> Skills
        </h2>
        <div className="h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500">
          Skill pills go here
        </div>
      </section>

      {/* Education Section Placeholder */}
      <section id="education" className="min-h-[60vh]">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="text-gold-500">04.</span> Education
        </h2>
        <div className="h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500">
          Education details go here
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="min-h-[50vh]">
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
          <span className="text-gold-500">05.</span> Contact
        </h2>
        <div className="h-64 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500">
          Contact form goes here
        </div>
      </section>
      
      {/* Footer / plane.so style typography placeholder */}
      <footer className="h-screen flex items-end justify-center overflow-hidden relative pt-24">
         {/* We will add the massive typography effect here later */}
      </footer>
    </div>
  );
}
