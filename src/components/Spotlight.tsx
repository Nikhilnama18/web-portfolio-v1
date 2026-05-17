"use client";
import { useEffect, useState } from "react";

export default function Spotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    window.addEventListener("mousemove", updatePosition);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    // Initial check in case cursor is already inside the window
    if (document.hasFocus()) {
      setOpacity(1);
    }

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 hidden md:block"
      style={{
        opacity,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.07), transparent 80%)`,
      }}
    />
  );
}
