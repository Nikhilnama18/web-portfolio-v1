import { Mail } from "lucide-react";

import SectionShell from "@/components/SectionShell";

export default function ContactSection() {
  return (
    <SectionShell
      id="contact"
      title="Contact"
      icon={Mail}
      minHeightClass="min-h-[32vh]"
      placeholder="Contact form goes here"
    />
  );
}
