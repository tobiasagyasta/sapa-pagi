"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { MenuCard } from "./MenuCard"
import { featuredMenuItems } from "./menu-items"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function FeaturedMenu() {
  return (
    <section
      id="menu"
      className="relative isolate overflow-hidden bg-[#FDFAE7] px-4 py-16 text-[#43251D] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute right-0 top-20 -z-10 h-56 w-56 rounded-full bg-[#D0E0B1]/35 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.82fr_1fr] lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-5 inline-flex rounded-full bg-[#D0E0B1]/60 px-4 py-2 text-sm font-medium tracking-wide shadow-sm"
            >
              Featured menu
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
            >
              Morning favorites with a slow cafe feeling.
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-start gap-6 lg:items-end"
          >
            <p className="max-w-xl text-lg leading-8 text-[#43251D]/72 lg:text-right">
              Signature breakfast staples shaped for cozy mornings: filling,
              fresh, and easy to love without turning the page into a crowded
              menu board.
            </p>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-[#43251D]/15 bg-[#FDFAE7]/80 px-6 text-base font-medium text-[#43251D] shadow-sm transition-colors hover:bg-[#F6D97D]/70 hover:text-[#43251D] focus-visible:ring-[#43251D]/35"
            >
              <Link href="#order">
                Plan Breakfast
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {featuredMenuItems.map((item, index) => (
            <MenuCard
              key={item.title}
              item={item}
              className={index === 0 ? "lg:col-span-2" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
