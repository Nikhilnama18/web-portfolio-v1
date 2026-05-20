"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevent browser from restoring previous scroll position on reload
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
      
      // Force scroll to top on mount
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}
