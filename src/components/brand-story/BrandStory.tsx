"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type StoryImageCardProps = {
  label: string;
  tone: "yellow" | "mint" | "roast";
  className?: string;
};

const toneClasses = {
  yellow: {
    surface: "bg-[#F6D97D]/48",
    shape: "bg-[#F6D97D]",
    soft: "bg-[#D0E0B1]/60",
  },
  mint: {
    surface: "bg-[#D0E0B1]/58",
    shape: "bg-[#D0E0B1]",
    soft: "bg-[#F6D97D]/50",
  },
  roast: {
    surface: "bg-[#43251D]/10",
    shape: "bg-[#43251D]",
    soft: "bg-[#F6D97D]/55",
  },
} satisfies Record<StoryImageCardProps["tone"], Record<string, string>>;

function StoryImageCard({ label, tone, className }: StoryImageCardProps) {
  const styles = toneClasses[tone];

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-3xl p-4 shadow-sm",
        styles.surface,
        className,
      )}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className="relative h-full min-h-56 overflow-hidden rounded-3xl bg-[#FDFAE7]/78"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-5 top-5 rounded-full bg-[#FDFAE7]/85 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-[#43251D]/60 shadow-sm">
          {label}
        </div>
        <div className="absolute bottom-[18%] left-[12%] h-[28%] w-[76%] -rotate-3 rounded-full bg-[#FDFAE7] shadow-sm" />
        <div
          className={cn(
            "absolute bottom-[28%] left-[19%] h-[13%] w-[26%] -rotate-3 rounded-full",
            styles.shape,
          )}
        />
        <div
          className={cn(
            "absolute bottom-[25%] right-[18%] h-[16%] w-[22%] -rotate-3 rounded-full",
            styles.soft,
          )}
        />
        <div className="absolute right-6 top-14 size-16 rounded-full bg-[#FDFAE7]/75 shadow-sm" />
        <div
          className={cn(
            "absolute right-10 top-18 size-8 rounded-full",
            styles.shape,
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function BrandStory() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#FDFAE7] px-4 py-16 text-[#43251D] sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      <div className="absolute -left-16 top-24 -z-10 h-72 w-72 rounded-full bg-[#F6D97D]/28 blur-3xl" />
      <div className="absolute -right-20 bottom-20 -z-10 h-72 w-72 rounded-full bg-[#D0E0B1]/40 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
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
            Our philosophy
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
          >
            A small pause for mornings that move too fast.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[#43251D]/72 sm:text-xl"
          >
            Sapa Pagi exists for the in-between moments: the walk to class, the
            commute before a long shift, the first quiet sip before the day asks
            for everything. Breakfast should be easy, warm, and human.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-8 rounded-3xl bg-[#D0E0B1]/45 p-6 shadow-sm sm:p-8"
          >
            <p className="text-2xl font-medium leading-snug tracking-[-0.04em] sm:text-3xl">
              Comfort made for busy people, without making the morning feel
              busier.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-5 sm:grid-rows-[auto_auto]"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <StoryImageCard
            label="Breakfast ritual"
            tone="yellow"
            className="sm:col-span-3 sm:min-h-96"
          />
          <StoryImageCard
            label="Cafe moment"
            tone="mint"
            className="sm:col-span-2 sm:mt-10 sm:min-h-72"
          />
          <div className="rounded-3xl bg-[#43251D] p-6 text-[#FDFAE7] shadow-sm sm:col-span-2 sm:min-h-48">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#FDFAE7]/65">
              Morning note
            </p>
            <p className="mt-5 text-2xl font-medium leading-tight tracking-[-0.04em]">
              Grab-and-go can still feel cared for.
            </p>
          </div>
          <StoryImageCard
            label="Wrapped warm"
            tone="roast"
            className="sm:col-span-3 sm:min-h-52"
          />
        </motion.div>
      </div>
    </section>
  );
}
