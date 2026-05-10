"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, MessageCircle, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MapPlaceholder } from "./MapPlaceholder";
import { StoreInfoCard } from "./StoreInfoCard";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const storeInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Neighborhood cafe address coming soon",
    helper: "A warm stop for morning commuters, students, and cafe regulars.",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Morning hours coming soon",
    helper: "Built around easy breakfast rituals and early-day routines.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Contact link coming soon",
    helper: "Use this space for quick questions, pre-orders, and pickup notes.",
  },
  {
    icon: PackageCheck,
    label: "Delivery",
    value: "Platform links coming soon",
    helper: "A future home for delivery partners and order links.",
  },
] as const;

export function CTASection() {
  return (
    <section
      id="location"
      className="relative isolate overflow-hidden bg-[#FDFAE7] px-4 py-16 text-[#43251D] sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <span id="order" className="absolute -top-24" aria-hidden="true" />
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-[#D0E0B1]/38 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-72 w-72 rounded-full bg-[#F6D97D]/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-90px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 inline-flex rounded-full bg-[#D0E0B1]/60 px-4 py-2 text-sm font-medium tracking-wide shadow-sm"
          >
            Visit Sapa Pagi
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
          >
            Make your next morning feel easy.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[#43251D]/72 sm:text-xl"
          >
            Drop by for a warm breakfast, save the location for later, or follow
            along for quiet cafe moments and fresh morning specials.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                className="h-13 w-full rounded-full bg-[#F6D97D] px-7 text-base font-medium text-[#43251D] shadow-sm transition-colors hover:bg-[#F6D97D] focus-visible:ring-[#43251D]/35 sm:w-auto"
              >
                <Link href="#location">
                  Visit Us
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </motion.div>

            <Button
              asChild
              variant="outline"
              className="h-13 w-full rounded-full border-[#43251D]/15 bg-[#FDFAE7]/80 px-7 text-base font-medium text-[#43251D] shadow-sm transition-colors hover:bg-[#D0E0B1]/45 hover:text-[#43251D] focus-visible:ring-[#43251D]/35 sm:w-auto"
            >
              <Link href="#order">Order Now</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {storeInfo.map((item) => (
              <StoreInfoCard key={item.label} {...item} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-4 flex flex-col gap-3 rounded-3xl bg-[#F6D97D]/35 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#43251D]/55">
                Follow along
              </p>
              <p className="mt-1 text-xl font-medium tracking-[-0.03em]">
                Morning specials and cafe notes
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#FDFAE7]/90 px-5 py-3 text-sm font-medium text-[#43251D] shadow-sm transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43251D]/35"
              aria-label="Instagram link placeholder"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Instagram
            </Link>
          </motion.div>
        </motion.div>

        <MapPlaceholder />
      </div>
    </section>
  );
}
