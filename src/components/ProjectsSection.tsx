import { Code } from "lucide-react";

import SectionShell from "@/components/SectionShell";

export default function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      title="Projects"
      icon={Code}
      minHeightClass="min-h-[80vh]"
      placeholder="Project bento grid goes here"
    />
  );
}
