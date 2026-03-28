"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Puppy Cursussen", href: "/puppy-cursussen" },
  { label: "Rassenkeuze Hulp", href: "/rassenkeuze" },
  { label: "Over Ons", href: "/over-ons" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-shrink-0 transition-opacity hover:opacity-80"
          >
            <span className="text-xl md:text-2xl font-heading font-bold text-brand-dark-sage tracking-tight">
              Let&apos;s Dog
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium text-brand-black/70 hover:text-brand-black transition-colors duration-200 after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-brand-green after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button
              asChild
              className="bg-brand-green hover:bg-brand-green/90 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <a href="https://app.letsdog.nl" target="_blank" rel="noopener noreferrer">
                Ga naar de App
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-brand-black hover:bg-brand-beige"
                  aria-label="Menu openen"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-white border-l border-brand-beige w-[280px] sm:w-[350px]"
              >
                <SheetHeader>
                  <SheetTitle className="text-left">
                    <Link
                      href="/"
                      className="flex items-center gap-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-xl font-heading font-bold text-brand-dark-sage">
                        Let&apos;s Dog
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-base font-medium text-brand-black/70 hover:text-brand-black hover:bg-brand-beige/50 px-3 py-3 rounded-lg transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t border-brand-beige">
                    <Button
                      asChild
                      className="w-full bg-brand-green hover:bg-brand-green/90 text-white font-semibold py-3 rounded-full shadow-md transition-all duration-200"
                    >
                      <a
                        href="https://app.letsdog.nl"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Ga naar de App
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
