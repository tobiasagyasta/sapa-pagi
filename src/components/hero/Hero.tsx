"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#FDFAE7] px-4 pb-16 pt-10 text-[#43251D] sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-16"
    >
      <div className="absolute left-0 top-20 -z-10 h-48 w-48 rounded-full bg-[#F6D97D]/35 blur-3xl" />
      <div className="absolute bottom-10 right-0 -z-10 h-64 w-64 rounded-full bg-[#D0E0B1]/45 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          className="flex flex-col items-start"
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
            Warm burritos, cozy coffee, and fresh morning staples served with a
            calm cafe rhythm for grab-and-go days.
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
              ["4 staples", "Burritos to coffee"],
              ["Soft pace", "Easy mornings"],
            ].map(([value, label]) => (
              <div
                key={value}
                className="rounded-3xl bg-[#FDFAE7]/85 p-4 shadow-sm backdrop-blur-sm"
              >
                <p className="text-xl font-medium tracking-[-0.03em]">{value}</p>
                <p className="mt-1 text-xs leading-5 text-[#43251D]/65 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-[#F6D97D]/45 p-4 shadow-md sm:p-6 lg:p-8">
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-[#D0E0B1]/70" />
            <div className="absolute bottom-10 left-8 h-16 w-16 rounded-full bg-[#FDFAE7]/80" />

            <div className="relative rounded-3xl bg-[#FDFAE7] p-5 shadow-sm sm:p-8">
              <motion.div
                className="absolute -right-3 -top-5 z-20 flex items-center gap-2 rounded-full bg-[#FDFAE7] px-3 py-2 text-sm font-medium shadow-sm sm:-right-5"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="relative flex size-8 overflow-hidden rounded-full bg-[#F6D97D]">
                  <Image
                    src="/logo/logo.svg"
                    alt=""
                    fill
                    sizes="32px"
                    className="object-contain p-1"
                  />
                </span>
                Hi, pagi
              </motion.div>

              <div className="relative mx-auto aspect-square max-w-md rounded-full bg-[#FDFAE7] p-5 shadow-md sm:p-8">
                <div className="absolute inset-7 rounded-full bg-[#43251D]/10" />
                <div className="absolute inset-12 rounded-full bg-[#FDFAE7] shadow-sm" />

                <motion.div
                  className="absolute left-[13%] top-[30%] h-[25%] w-[72%] rotate-[-13deg] rounded-full bg-[#F6D97D] shadow-md"
                  animate={{ rotate: [-13, -10, -13] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute left-[19%] top-[34%] h-[17%] w-[60%] rotate-[-13deg] rounded-full bg-[#FDFAE7]" />
                <div className="absolute left-[25%] top-[36%] h-[8%] w-[14%] rotate-[-13deg] rounded-full bg-[#D0E0B1]" />
                <div className="absolute left-[47%] top-[35%] h-[9%] w-[16%] rotate-[-13deg] rounded-full bg-[#43251D]" />

                <motion.div
                  className="absolute bottom-[18%] right-[13%] size-[30%] rounded-full bg-[#43251D] p-3 shadow-md"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="size-full rounded-full bg-[#F6D97D] p-2">
                    <div className="size-full rounded-full bg-[#43251D]/75" />
                  </div>
                </motion.div>

                <div className="absolute bottom-[20%] left-[18%] h-[18%] w-[30%] rounded-full bg-[#D0E0B1] shadow-sm" />
                <div className="absolute bottom-[25%] left-[25%] h-[8%] w-[18%] rounded-full bg-[#F6D97D]" />
              </div>

              <div className="mt-6 flex flex-col gap-3 rounded-3xl bg-[#D0E0B1]/45 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#43251D]/60">
                    Signature Morning Set
                  </p>
                  <p className="mt-1 text-2xl font-medium tracking-[-0.04em]">
                    Burrito, coffee, smoothie
                  </p>
                </div>
                <p className="rounded-full bg-[#FDFAE7] px-4 py-2 text-sm font-medium shadow-sm">
                  From 7 AM
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
