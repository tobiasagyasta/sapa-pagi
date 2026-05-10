"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";
import { navCta, navItems } from "./nav-items";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 12);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#43251D]/10 ">
      <div
        className={cn(
          "mx-auto transition-all duration-300 ease-out",
          isScrolled
            ? "bg-[#FDFAE7]/88 shadow-sm backdrop-blur-md"
            : "bg-[#FDFAE7]/70 backdrop-blur-sm",
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-5 lg:px-6">
          <Link
            href="#top"
            className="flex items-center gap-3 rounded-full pr-3 text-[#43251D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43251D]/35"
            aria-label="Sapa Pagi home"
          >
            <span className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#F6D97D] shadow-sm">
              <Image
                src="/logo/logo.svg"
                alt=""
                width={44}
                height={44}
                className="size-9 object-contain"
                priority
              />
            </span>
            <span className="text-base font-medium tracking-[-0.02em] sm:text-lg">
              Sapa Pagi
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-1 py-2 text-sm font-medium tracking-wide text-[#43251D]/80 transition-colors hover:text-[#43251D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43251D]/35"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="h-11 rounded-full bg-[#F6D97D] px-6 text-sm font-medium text-[#43251D] shadow-sm transition-colors hover:bg-[#F6D97D] focus-visible:ring-[#43251D]/35"
              >
                <Link href={navCta.href}>{navCta.label}</Link>
              </Button>
            </motion.div>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full bg-[#F6D97D] text-[#43251D] shadow-sm transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43251D]/35 md:hidden"
            aria-label={
              isMobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileOpen((open) => !open)}
          >
            {isMobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      <MobileNav
        isOpen={isMobileOpen}
        items={navItems}
        cta={navCta}
        onClose={() => setIsMobileOpen(false)}
      />
    </header>
  );
}
