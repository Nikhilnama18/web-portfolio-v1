export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

export const projects: Project[] = [
  {
    id: "imposter-adda",
    title: "Imposter Adda",
    description:
      "A mobile-first party game built for Indian friend groups. Players pass a single device, secretly revealing roles — one Imposter must blend in using only a hint while others discuss the secret word.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Vanilla CSS",
      "Vercel",
    ],
    githubUrl: "https://github.com/Nikhilnama18/Imposter-Adda",
    liveUrl: "https://imposter-adda.vercel.app/",
  },
  {
    id: "web-portfolio",
    title: "My Portfolio",
    description:
      "A premium developer portfolio with a liquid-glass aesthetic, mouse-tracking spotlight, interactive experience timeline, and scroll-driven signature footer. Designed as a reusable template.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/Nikhilnama18/web-portfolio-v1",
    liveUrl: "#",
  },
  {
    id: "shrink-url",
    title: "ShrinkURL",
    description:
      "A full-stack URL shortener with custom aliases, Snowflake ID generation, and Base62 encoding. Uses Redis-backed lookups for fast redirects with PostgreSQL as the source of truth.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Docker",
      "React",
    ],
    githubUrl: "https://github.com/Nikhilnama18/shrink-url",
    liveUrl: "https://shrinkurl-nine.vercel.app/",
  },
];
