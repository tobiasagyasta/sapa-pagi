"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import type { NavItem } from "./nav-items"

type MobileNavProps = {
  isOpen: boolean
  items: readonly NavItem[]
  cta: {
    label: string
    href: string
  }
  onClose: () => void
}

export function MobileNav({ isOpen, items, cta, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 top-20 z-40 px-4 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <button
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-[#43251D]/10 backdrop-blur-[2px]"
            type="button"
            onClick={onClose}
          />

          <motion.div
            id="mobile-navigation"
            className="relative mx-auto max-w-sm rounded-3xl bg-[#FDFAE7] p-4 text-[#43251D] shadow-md"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-5 py-4 text-lg font-medium tracking-[-0.01em] transition-colors hover:bg-[#D0E0B1]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43251D]/35"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 rounded-3xl bg-[#D0E0B1]/45 p-3">
              <Button
                asChild
                className="h-12 w-full rounded-full bg-[#F6D97D] px-6 text-base font-medium text-[#43251D] shadow-sm transition-transform hover:scale-[1.02] hover:bg-[#F6D97D] focus-visible:ring-[#43251D]/35"
              >
                <Link href={cta.href} onClick={onClose}>
                  {cta.label}
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
