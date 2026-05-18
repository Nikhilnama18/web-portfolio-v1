import type { LucideIcon } from "lucide-react";

type SectionShellProps = {
  id: string;
  title: string;
  icon: LucideIcon;
  minHeightClass: string;
  placeholder: string;
};

export default function SectionShell({
  id,
  title,
  icon: Icon,
  minHeightClass,
  placeholder,
}: SectionShellProps) {
  return (
    <section id={id} className={minHeightClass}>
      <h2 className="mb-8 flex items-center gap-2 text-3xl font-bold text-white">
        <Icon className="h-6 w-6 text-gold-500" />
        {title}
      </h2>
      <div className="flex h-64 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-500">
        {placeholder}
      </div>
    </section>
  );
}
