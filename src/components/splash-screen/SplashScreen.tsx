"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { useSplashScreen } from "./useSplashScreen";

export function SplashScreen() {
  const isVisible = useSplashScreen();

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          aria-label="Welcome to Sapa Pagi"
          className="fixed inset-0 z-100 flex min-h-dvh items-center justify-center overflow-hidden bg-[#F6D97D] px-6 text-[#43251D]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="absolute -left-20 top-12 size-64 rounded-full bg-[#FDFAE7]/55 blur-3xl sm:size-80" />
          <div className="absolute bottom-0 right-16 size-72 rounded-full bg-[#D0E0B1]/65 blur-3xl sm:size-96" />
          <div className="absolute left-1/2 top-1/2 size-88 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FDFAE7]/20 blur-2xl sm:size-136" />

          <motion.div
            className="relative flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <motion.div
              className="relative mb-7 flex size-28 items-center justify-center rounded-full bg-[#FDFAE7] shadow-md sm:size-36"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/logo/logo.svg"
                alt="Sapa Pagi mascot"
                width={112}
                height={112}
                priority
                className="size-24 object-contain sm:size-32"
              />
            </motion.div>

            <motion.p
              className="mb-4 rounded-full bg-[#FDFAE7]/75 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-[#43251D]/70 shadow-sm sm:text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, ease: "easeOut", delay: 0.08 }}
            >
              Morning comfort
            </motion.p>

            <motion.h1
              className="text-5xl font-medium leading-none tracking-[-0.06em] sm:text-7xl md:text-8xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.14 }}
            >
              SAPA PAGI!
            </motion.h1>

            <motion.p
              className="mt-5 max-w-xs text-base leading-7 text-[#43251D]/70 sm:max-w-sm sm:text-lg"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: "easeOut", delay: 0.2 }}
            >
              A soft little hello before breakfast begins.
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
