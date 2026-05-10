"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#FDFAE7] px-2 pb-16 pt-10 text-[#43251D] sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-16"
    >
      <div className="absolute left-0 top-20 -z-10 h-48 w-48 rounded-full bg-[#F6D97D]/35 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-64 w-64 rounded-full bg-[#D0E0B1]/45 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:gap-16 xl:gap-24">
        <motion.div
          className="flex max-w-2xl flex-col items-start"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 rounded-full bg-[#D0E0B1]/60 px-4 py-2 text-sm font-medium tracking-wide text-[#43251D] shadow-sm"
          >
            Morning comfort, made simple
          </motion.p>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-4xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Breakfast that makes the day feel softer.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-6 max-w-xl text-lg leading-8 text-[#43251D]/75 sm:text-xl"
          >
            Warm burritos, energizing smoothies, and fresh morning staples
            served with care for grab-and-go days.
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
                <Link href="#order">
                  Order Now
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </motion.div>

            <Button
              asChild
              variant="outline"
              className="h-13 w-full rounded-full border-[#43251D]/15 bg-[#FDFAE7]/70 px-7 text-base font-medium text-[#43251D] shadow-sm transition-colors hover:bg-[#D0E0B1]/45 hover:text-[#43251D] focus-visible:ring-[#43251D]/35 sm:w-auto"
            >
              <Link href="#menu">Explore Menu</Link>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-10 grid w-full max-w-xl grid-cols-3 gap-3 text-center sm:text-left"
          >
            {[
              ["7 AM", "Fresh daily"],
              ["4 staples", "Burritos to smoothies"],
              ["Soft pace", "Easy mornings"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-3xl bg-[#FDFAE7]/85 p-4 shadow-sm backdrop-blur-sm"
              >
                <p className="text-xl font-medium tracking-[-0.03em]">
                  {value}
                </p>
                <p className="mt-1 text-xs leading-5 text-[#43251D]/65 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:justify-self-end"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-[#F6D97D]/45 p-4 shadow-md sm:p-6 lg:p-8">
            <div className="relative rounded-3xl bg-[#FDFAE7] p-5 shadow-sm sm:p-8">
              <Image
                src="/images/hero_bf_ai.webp"
                alt="Hero Breakfast Image"
                width={800}
                height={800}
                className="w-full"
              />
              <div className="mx-auto justify-center items-center mt-6 flex flex-col gap-3 rounded-3xl bg-[#D0E0B1]/45 p-4 text-center sm:flex-row sm:items-center sm:justify-between">
                <div className="mx-auto flex flex-col justify-center items-center">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#43251D]/60">
                    Signature Morning Set
                  </p>
                  <p className="mt-1 text-2xl font-medium tracking-[-0.04em]">
                    Burrito, eggs, tomato soup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
