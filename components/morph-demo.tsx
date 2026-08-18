"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import HeartIcon from "@/icons/heart-icon";
import RocketIcon from "@/icons/rocket-icon";
import WandSparklesIcon from "@/icons/wand-sparkles-icon";

const ICONS = [
  { key: "heart", Icon: HeartIcon, label: "corazón" },
  { key: "rocket", Icon: RocketIcon, label: "cohete" },
  { key: "wand", Icon: WandSparklesIcon, label: "varita" },
] as const;

export default function MorphDemo() {
  const [index, setIndex] = useState(0);
  const current = ICONS[index];
  const next = (index + 1) % ICONS.length;
  const CurrentIcon = current.Icon;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current.key}
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="absolute"
          >
            <CurrentIcon size={48} className="text-rose-500" />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        type="button"
        onMouseEnter={() => setIndex(next)}
        onFocus={() => setIndex(next)}
        className="group flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm text-zinc-600 transition-colors hover:border-rose-300 hover:text-rose-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-rose-500 dark:hover:text-rose-400"
      >
        <span className="text-rose-400 transition-transform duration-300 group-hover:rotate-12">
          ✦
        </span>
        morfando: <span className="font-medium">{current.label}</span>
      </button>
    </div>
  );
}