"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Briefcase, MapPin } from "lucide-react";

import { experienceCompany, experienceRoles } from "@/data/experience";

export default function ExperienceSection() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileRoleButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isClickScrolling = useRef(false);
  const clickTargetIndex = useRef<number | null>(null);
  const clickScrollTimeout = useRef<number | null>(null);
  const activeRole = experienceRoles[activeRoleIndex];

  const centerMobileRoleButton = (index: number) => {
    const button = mobileRoleButtonRefs.current[index];

    if (!button) {
      return;
    }

    button.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  useEffect(() => {
    const clearClickScrollState = () => {
      isClickScrolling.current = false;
      clickTargetIndex.current = null;

      if (clickScrollTimeout.current !== null) {
        window.clearTimeout(clickScrollTimeout.current);
        clickScrollTimeout.current = null;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        const index = Number(visibleEntry.target.getAttribute("data-index"));

        if (Number.isNaN(index)) {
          return;
        }

        if (isClickScrolling.current) {
          if (index !== clickTargetIndex.current) {
            return;
          }

          setActiveRoleIndex(index);
          window.setTimeout(() => {
            clearClickScrollState();
          }, 120);
          return;
        }

        setActiveRoleIndex(index);
      },
      {
        threshold: [0.25, 0.45, 0.65],
        rootMargin: "-18% 0px -28% 0px",
      }
    );

    stepRefs.current.forEach((step) => {
      if (step) {
        observer.observe(step);
      }
    });

    return () => {
      observer.disconnect();
      clearClickScrollState();
    };
  }, []);

  const scrollToRole = (index: number) => {
    const step = stepRefs.current[index];

    if (!step) {
      return;
    }

    if (clickScrollTimeout.current !== null) {
      window.clearTimeout(clickScrollTimeout.current);
    }

    isClickScrolling.current = true;
    clickTargetIndex.current = index;
    setActiveRoleIndex(index);
    clickScrollTimeout.current = window.setTimeout(() => {
      isClickScrolling.current = false;
      clickTargetIndex.current = null;
      clickScrollTimeout.current = null;
    }, 1200);

    step.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="experience" className="relative scroll-mt-24 py-6 lg:py-0">
      <div className="mx-auto w-full">
        <div className="mb-8 max-w-2xl lg:hidden">
          <h2 className="mb-3 flex items-center gap-2 text-3xl font-bold text-white">
            <Briefcase className="h-6 w-6 text-gold-500" />
            {experienceCompany.label}
          </h2>
        </div>

        <div className="lg:hidden">
            <div className="mb-6">
              <p className="text-3xl font-bold tracking-[-0.04em] text-white">
                {experienceCompany.name}
              </p>
            </div>

            <div className="mb-6 flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {experienceRoles.map((role, index) => {
                const isActive = index === activeRoleIndex;

                return (
                  <button
                    key={role.id}
                    type="button"
                    ref={(element) => {
                      mobileRoleButtonRefs.current[index] = element;
                    }}
                    onClick={() => {
                      setActiveRoleIndex(index);
                      centerMobileRoleButton(index);
                    }}
                    className={clsx(
                      "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "border-gold-500/35 bg-gold-500/12 text-gold-400"
                        : "border-white/10 bg-white/[0.03] text-white/62"
                    )}
                    aria-pressed={isActive}
                  >
                    {role.title}
                  </button>
                );
              })}
            </div>

            <ExperienceCard role={activeRole} />
          </div>

        <div className="hidden lg:block">
          <div className="sticky top-8 h-[calc(100vh-2rem)] py-8">
            <div className="grid h-full grid-rows-[auto_1fr]">
              <div className="max-w-2xl">
                <h2 className="mb-3 flex items-center gap-2 text-3xl font-bold text-white">
                  <Briefcase className="h-6 w-6 text-gold-500" />
                  {experienceCompany.label}
                </h2>
              </div>

              <div className="grid h-full grid-cols-[minmax(15rem,18rem)_minmax(0,1fr)] items-start gap-14 xl:gap-[4.5rem]">
                <div className="self-center">
                  <div className="mb-10">
                    <h3 className="text-5xl font-bold tracking-[-0.04em] text-white">
                      {experienceCompany.name}
                    </h3>
                    <p className="mt-4 max-w-xs text-sm leading-7 text-white/58">
                      {experienceCompany.intro}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {experienceRoles.map((role, index) => {
                      const isActive = index === activeRoleIndex;

                      return (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() => scrollToRole(index)}
                      className={clsx(
                        "group relative flex w-full items-start gap-5 py-4 pl-5 pr-2 text-left transition-all duration-300",
                        isActive ? "text-white" : "text-white/45 hover:text-white/82"
                      )}
                      aria-pressed={isActive}
                    >
                      <span
                        className="absolute left-0 top-3 h-[calc(100%-1.5rem)] w-px bg-white/10 transition-colors duration-300 group-hover:bg-white/22"
                      />
                      {isActive ? (
                        <motion.span
                          layoutId="experience-active-line"
                          className="absolute left-0 top-3 h-[calc(100%-1.5rem)] w-px bg-gold-500 shadow-[0_0_18px_rgba(212,175,55,0.7)]"
                          transition={{ type: "spring", stiffness: 380, damping: 34 }}
                        />
                      ) : null}

                      <span className="min-w-0">
                            <span
                              className={clsx(
                                "block text-lg font-semibold tracking-[-0.02em]",
                                isActive ? "text-white" : "text-white/72"
                              )}
                            >
                              {role.title}
                            </span>
                            <span className="mt-1 block text-sm text-white/48">
                              {role.period}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex h-full items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeRole.id}
                      initial={{ opacity: 0, y: 28, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.985 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="w-full"
                    >
                      <ExperienceCard role={activeRole} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          <div aria-hidden="true">
            {experienceRoles.map((role, index) => (
              <div
                key={role.id}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                data-index={index}
                className="h-[84vh] scroll-mt-32"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type ExperienceCardProps = {
  role: (typeof experienceRoles)[number];
};

function ExperienceCard({ role }: ExperienceCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.17),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.09),transparent_24%)]" />
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative">
        <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-3xl font-bold tracking-[-0.03em] text-white sm:text-[2.2rem]">
              {role.title}
            </h3>
          </div>

          <div className="space-y-2 text-sm text-white/55 sm:text-right">
            <p>{role.period}</p>
            <p className="flex items-center gap-2 sm:justify-end">
              <MapPin className="h-4 w-4 text-gold-500/70" />
              {role.location}
            </p>
          </div>
        </div>

        <p className="max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
          {role.summary}
        </p>

        <div className="mt-8 hidden gap-3 sm:grid sm:grid-cols-3">
          {role.highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="rounded-[1.35rem] border border-white/10 bg-[#121214]/75 px-4 py-4"
            >
              <p className="text-2xl font-bold tracking-[-0.03em] text-gold-400">
                {highlight.value}
              </p>
              <p className="mt-1 text-sm leading-6 text-white/58">{highlight.label}</p>
            </div>
          ))}
        </div>

        <ul className="mt-8 space-y-4">
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-sm leading-7 text-white/68 sm:text-base">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

      </div>
    </article>
  );
}
