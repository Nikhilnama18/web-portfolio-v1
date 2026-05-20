"use client";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

const ORANGE_RGB = "244, 108, 56";

export default function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;

    if (!spotlight) {
      return;
    }

    const setPosition = (x: number, y: number) => {
      spotlight.style.setProperty("--spotlight-x", `${x}px`);
      spotlight.style.setProperty("--spotlight-y", `${y}px`);
    };

    const updatePosition = (e: MouseEvent) => {
      setPosition(e.clientX, e.clientY);
    };

    const handleMouseEnter = () => {
      spotlight.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      spotlight.style.opacity = "0";
    };

    setPosition(window.innerWidth / 2, window.innerHeight / 2);

    if (document.hasFocus()) {
      spotlight.style.opacity = "0.75";
    }

    window.addEventListener("mousemove", updatePosition);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 hidden md:block"
      style={
        {
          opacity: 0,
          ["--spotlight-x" as string]: "50vw",
          ["--spotlight-y" as string]: "50vh",
        } as CSSProperties
      }
    >
      <div
        className="absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(${ORANGE_RGB}, 0.28), rgba(${ORANGE_RGB}, 0.12) 34%, rgba(${ORANGE_RGB}, 0.04) 62%, transparent 100%)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "32rem 32rem",
          transform: "translate(calc(var(--spotlight-x) - 50vw), calc(var(--spotlight-y) - 50vh))",
          filter: "blur(26px)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgba(${ORANGE_RGB}, 0.1), rgba(${ORANGE_RGB}, 0.04) 46%, transparent 100%)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "46rem 46rem",
          transform: "translate(calc(var(--spotlight-x) - 50vw), calc(var(--spotlight-y) - 50vh))",
          filter: "blur(90px)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
