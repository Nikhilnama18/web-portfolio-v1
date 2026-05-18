import { GraduationCap } from "lucide-react";

import SectionShell from "@/components/SectionShell";

export default function EducationSection() {
  return (
    <SectionShell
      id="education"
      title="Education"
      icon={GraduationCap}
      minHeightClass="min-h-[60vh]"
      placeholder="Education details go here"
    />
  );
}
