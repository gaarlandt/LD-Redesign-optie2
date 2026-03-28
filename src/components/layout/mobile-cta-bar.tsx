"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function MobileCtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (roughly 600px)
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-brand-beige px-4 py-3 safe-area-bottom">
      <Button
        asChild
        className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-200"
      >
        <a href="https://app.letsdog.nl" target="_blank" rel="noopener noreferrer">
          Ga naar de App
        </a>
      </Button>
    </div>
  );
}
