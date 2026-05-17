"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Briefcase, 
  Code, 
  Wrench, 
  GraduationCap, 
  Mail 
} from "lucide-react";
import clsx from "clsx";

const NAV_ITEMS = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function LiquidNav() {
  const [activeSection, setActiveSection] = useState("about");
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section based on scroll if we are currently auto-scrolling from a click
      if (isClickScrolling.current) return;

      const scrollPosition = window.scrollY + 200;
      
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    isClickScrolling.current = true;
    setActiveSection(id);
    
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
      
      // Re-enable scroll listener after the smooth scroll animation completes
      setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000); // 1 second is usually enough for smooth scrolling to finish
    } else {
      isClickScrolling.current = false;
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100vw-2rem)]">
      <nav className="flex items-center justify-start gap-1 md:gap-2 px-2 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg overflow-x-auto no-scrollbar">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={clsx(
                "relative flex items-center justify-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap outline-none shrink-0",
                isActive ? "text-gold-500" : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gold-500/10 border border-gold-500/30 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
              <span className="hidden md:block relative z-10">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
