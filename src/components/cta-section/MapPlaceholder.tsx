"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function MapPlaceholder() {
  return (
    <motion.div
      className="relative min-h-[26rem] overflow-hidden rounded-3xl bg-[#D0E0B1]/50 p-4 shadow-md sm:min-h-[32rem] lg:min-h-full"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      aria-label="Future embedded map placeholder"
    >
      <div className="relative h-full min-h-[24rem] overflow-hidden rounded-3xl bg-[#FDFAE7] shadow-sm sm:min-h-[30rem] lg:min-h-full">
        <div className="absolute inset-0 opacity-55">
          <div className="absolute left-[12%] top-0 h-full w-6 rotate-12 rounded-full bg-[#F6D97D]/65" />
          <div className="absolute left-[38%] top-0 h-full w-4 -rotate-6 rounded-full bg-[#D0E0B1]" />
          <div className="absolute right-[18%] top-0 h-full w-5 rotate-[18deg] rounded-full bg-[#F6D97D]/55" />
          <div className="absolute left-0 top-[24%] h-5 w-full -rotate-3 rounded-full bg-[#D0E0B1]/80" />
          <div className="absolute left-0 top-[58%] h-6 w-full rotate-6 rounded-full bg-[#F6D97D]/55" />
        </div>

        <motion.div
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex size-20 items-center justify-center rounded-full bg-[#F6D97D] text-[#43251D] shadow-md">
            <MapPin className="size-8" aria-hidden="true" />
          </div>
          <div className="mt-5 rounded-3xl bg-[#FDFAE7]/90 px-5 py-4 shadow-sm backdrop-blur-sm">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#43251D]/55">
              Future map embed
            </p>
            <p className="mt-2 text-2xl font-medium tracking-[-0.04em] text-[#43251D]">
              Sapa Pagi location
            </p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-[#43251D]/65">
              Ready for Leaflet, Google Maps, or OpenStreetMap integration.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
