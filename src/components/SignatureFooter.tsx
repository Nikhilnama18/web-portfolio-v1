"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SignatureFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.4, 1], ["22%", "12%", "0%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.16, 0.42, 1], [0, 0.12, 0.72, 1]);
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    ["rgba(42, 42, 44, 0.94)", "rgba(60, 60, 62, 0.98)", "rgba(76, 76, 78, 1)"]
  );

  return (
    <>
      {/* Spacer that creates scrollable area to reveal the footer. Shorter height so it stops before the top. */}
      <div ref={containerRef} className="h-[55vh] w-full pointer-events-none" />

      {/* Fixed Footer drawn behind the main content */}
      <footer className="fixed bottom-0 left-0 w-full h-screen z-0 overflow-hidden bg-[#141415]">
        <div className="absolute inset-0 flex items-end justify-center overflow-hidden px-4 sm:px-6 lg:px-10 pb-24 sm:pb-16">
          <motion.h2
            className="select-none text-center font-bold leading-[0.82] tracking-[-0.08em]"
            style={{
              y: textY,
              opacity: textOpacity,
              color: textColor,
            }}
          >
            <span className="block text-[32vw] sm:text-[30vw] md:hidden">Nikhil</span>
            <span className="block text-[32vw] sm:text-[30vw] md:hidden">Nama</span>
            <span className="hidden md:block md:text-[16.5vw] lg:text-[16.5vw] xl:text-[16.5vw] whitespace-nowrap">
              Nikhil Nama
            </span>
          </motion.h2>
        </div>
      </footer>
    </>
  );
}
