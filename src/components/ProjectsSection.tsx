"use client";

import { Code, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.12,
      duration: 0.45,
      ease: "easeOut" as const,
    },
  }),
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-4">
      <h2 className="mb-10 flex items-center gap-2 text-3xl font-bold text-white">
        <Code className="h-6 w-6 text-gold-500" />
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.38)] transition-all duration-300 hover:border-gold-500/25 hover:shadow-[0_25px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(212,175,55,0.08)]"
          >
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.07),transparent_26%)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gold-500/8 blur-3xl transition-all duration-500 group-hover:h-40 group-hover:w-40 group-hover:bg-gold-500/12" />

            <div className="relative flex flex-1 flex-col p-6 sm:p-7">
              {/* Title + Links row */}
              <div className="mb-4 flex items-start justify-between gap-3">
                <h3 className="text-2xl font-bold tracking-[-0.03em] text-white transition-colors duration-200 group-hover:text-gold-400">
                  {project.title}
                </h3>

                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-500/30 hover:text-gold-500"
                  >
                    <FaGithub className="h-[18px] w-[18px]" />
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live site`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-400 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-500/30 hover:text-gold-500"
                    >
                      <ExternalLink className="h-[18px] w-[18px]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 flex-1 text-[15px] leading-7 text-white/62">
                {project.description}
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs font-medium tracking-wide text-gold-500/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
