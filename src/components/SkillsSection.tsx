"use client";

import { useEffect, useRef, useState } from "react";
import { Wrench } from "lucide-react";

import { skills } from "@/data/skills";

const skillPillClass =
  "flex min-h-[3.5rem] items-center justify-center rounded-full bg-[#121214] px-7 py-3 text-center text-[17px] font-medium leading-tight tracking-[-0.02em] text-[#f1c9ac] shadow-[-8px_-8px_16px_rgba(255,255,255,0.03),8px_8px_16px_rgba(0,0,0,0.7),inset_1px_1px_1px_rgba(255,255,255,0.06),inset_-1px_-1px_1px_rgba(0,0,0,0.8)] transition-all duration-300 hover:shadow-[-4px_-4px_10px_rgba(255,255,255,0.03),4px_4px_10px_rgba(0,0,0,0.7),inset_1px_1px_1px_rgba(255,255,255,0.06),inset_-1px_-1px_1px_rgba(0,0,0,0.8)] hover:-translate-y-0.5 md:min-w-[11rem] md:px-8 lg:min-w-[12.5rem] lg:px-10";
const desktopGap = 24;
const desktopOffset = 48;

function shouldSpanFullOnMobile(skill: string) {
  return skill.length > 15 || skill.includes("(");
}

function estimateSkillWidth(skill: string, containerWidth: number) {
  const isLarge = containerWidth >= 1100;
  const minWidth = isLarge ? 200 : 176;
  const horizontalPadding = isLarge ? 80 : 64;
  const estimatedCharacterWidth = 10.5;
  const estimatedWidth = skill.length * estimatedCharacterWidth + horizontalPadding;

  return Math.min(352, Math.max(minWidth, estimatedWidth));
}

function buildDesktopRows(items: string[], containerWidth: number) {
  if (!containerWidth) {
    return [items];
  }

  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentWidth = 0;

  for (const skill of items) {
    const rowIndex = rows.length;
    const availableWidth = containerWidth - (rowIndex % 2 === 1 ? desktopOffset : 0);
    const skillWidth = estimateSkillWidth(skill, containerWidth);
    const nextWidth =
      currentRow.length === 0 ? skillWidth : currentWidth + desktopGap + skillWidth;

    if (currentRow.length > 0 && nextWidth > availableWidth) {
      rows.push(currentRow);
      currentRow = [skill];
      currentWidth = skillWidth;
      continue;
    }

    currentRow.push(skill);
    currentWidth = nextWidth;
  }

  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return rows;
}

export default function SkillsSection() {
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const [desktopContainerWidth, setDesktopContainerWidth] = useState(1200);

  useEffect(() => {
    const container = desktopContainerRef.current;

    if (!container) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (entry) {
        setDesktopContainerWidth(entry.contentRect.width);
      }
    });

    setDesktopContainerWidth(container.clientWidth);
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  const desktopRows = buildDesktopRows(skills, desktopContainerWidth);

  return (
    <section id="skills" className="min-h-[56vh] scroll-mt-24 py-4">
      <h2 className="mb-8 flex items-center gap-2 text-3xl font-bold text-white">
        <Wrench className="h-6 w-6 text-gold-500" />
        Skills
      </h2>

      <div className="md:hidden">
        <ul className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className={shouldSpanFullOnMobile(skill) ? "col-span-2" : "col-span-1"}
            >
              <div className={`${skillPillClass} w-full whitespace-normal`}>{skill}</div>
            </li>
          ))}
        </ul>
      </div>

      <div ref={desktopContainerRef} className="hidden md:block">
        <ul className="flex flex-col gap-6">
          {desktopRows.map((row, rowIndex) => (
            <li key={`skill-row-${rowIndex}`}>
              <ul
                className={`flex flex-wrap gap-6 ${
                  rowIndex % 2 === 1 ? "pl-8 lg:pl-12" : ""
                }`}
              >
                {row.map((skill) => (
                  <li key={skill}>
                    <div className={`${skillPillClass} w-fit max-w-[22rem] whitespace-normal`}>
                      {skill}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
