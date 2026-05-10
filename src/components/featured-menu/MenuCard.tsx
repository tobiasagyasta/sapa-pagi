"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import type { FeaturedMenuItem } from "./menu-items";

type MenuCardProps = {
  item: FeaturedMenuItem;
  className?: string;
};

const accentClasses = {
  yellow: {
    surface: "bg-[#F6D97D]/45",
    mark: "bg-[#F6D97D]",
    soft: "bg-[#D0E0B1]/55",
  },
  mint: {
    surface: "bg-[#D0E0B1]/55",
    mark: "bg-[#D0E0B1]",
    soft: "bg-[#F6D97D]/45",
  },
  cream: {
    surface: "bg-[#FDFAE7]",
    mark: "bg-[#F6D97D]",
    soft: "bg-[#D0E0B1]/50",
  },
  roast: {
    surface: "bg-[#43251D]/10",
    mark: "bg-[#43251D]",
    soft: "bg-[#F6D97D]/50",
  },
} satisfies Record<FeaturedMenuItem["accent"], Record<string, string>>;

export function MenuCard({ item, className }: MenuCardProps) {
  const accent = accentClasses[item.accent];

  return (
    <motion.article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl bg-[#FDFAE7] p-3 text-[#43251D] shadow-sm",
        className,
      )}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div
        className={cn(
          "relative aspect-4/3 overflow-hidden rounded-3xl shadow-sm",
          accent.surface,
        )}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.035 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="absolute left-6 top-6 rounded-full bg-[#FDFAE7]/80 px-3 py-1 text-xs font-medium tracking-wide text-[#43251D]/70 shadow-sm">
            {item.category}
          </div>
          <div className="absolute bottom-[18%] left-[12%] h-[28%] w-[72%] -rotate-6 rounded-full bg-[#FDFAE7]/80 shadow-sm" />
          <div
            className={cn(
              "absolute bottom-[28%] left-[18%] h-[12%] w-[28%] -rotate-6 rounded-full",
              accent.mark,
            )}
          />
          <div
            className={cn(
              "absolute bottom-[25%] right-[18%] h-[15%] w-[24%] -rotate-6 rounded-full",
              accent.soft,
            )}
          />
          <div className="absolute bottom-7 right-7 size-14 rounded-full bg-[#FDFAE7]/85 shadow-sm" />
          <div
            className={cn(
              "absolute bottom-10 right-10 size-8 rounded-full",
              accent.mark,
            )}
          />
        </motion.div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#43251D]/55">
          {item.category}
        </p>
        <h3 className="mt-3 text-2xl font-medium leading-tight tracking-[-0.04em]">
          {item.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-[#43251D]/68">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}
