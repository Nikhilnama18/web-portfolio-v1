import { Wrench } from "lucide-react";

import SectionShell from "@/components/SectionShell";

export default function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      title="Skills"
      icon={Wrench}
      minHeightClass="min-h-[60vh]"
      placeholder="Skill pills go here"
    />
  );
}
