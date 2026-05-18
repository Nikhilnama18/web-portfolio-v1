import { Briefcase } from "lucide-react";

import SectionShell from "@/components/SectionShell";

export default function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      title="Experience"
      icon={Briefcase}
      minHeightClass="min-h-[80vh]"
      placeholder="Experience timeline goes here"
    />
  );
}
