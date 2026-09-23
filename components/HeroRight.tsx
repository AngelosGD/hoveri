"use client";

import { motion } from "motion/react";
import { CodeIcon } from "@/icons/code-icon";
import { HeartIcon } from "@/icons/heart-icon";
import { SparkleIcon } from "@/icons/sparkle-icon";

export const HeroRight = () => {
  return (
    <div className="relative flex h-[520px] w-[520px] items-center justify-center">
      {/* circulo exterior (mas notable, rosa) */}
      <div className="absolute h-[480px] w-[480px] rounded-full border border-rose-200" />

      {/* circulo interior (menos notable, gris) */}
      <div className="absolute h-[420px] w-[420px] rounded-full border border-zinc-200" />

      {/* card 1: estrella rosa (arriba) */}
      <motion.div
        className="absolute -top-2 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-3xl bg-rose-500 text-white shadow-lg shadow-rose-500/30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        whileHover={{ y: -6, rotate: -4 }}
      >
        <SparkleIcon size={40} />
      </motion.div>

      {/* card 2: corazon naranja (derecha) */}
      <motion.div
        className="absolute top-1/2 -right-4 flex h-24 w-24 -translate-y-1/2 items-center justify-center rounded-3xl bg-orange-400 text-white shadow-lg shadow-orange-400/30"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.45, duration: 0.5 }}
        whileHover={{ x: 6, rotate: 4 }}
      >
        <HeartIcon size={40} />
      </motion.div>

      {/* card 3: codigo negro (abajo izquierda) */}
      <motion.div
        className="absolute bottom-8 left-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-zinc-900 text-white shadow-lg shadow-zinc-900/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ y: 6, rotate: -4 }}
      >
        <CodeIcon size={40} />
      </motion.div>

      {/* texto HOVER ME en el margen superior derecho */}
      <motion.span
        className="absolute right-0 top-16 text-xs font-semibold uppercase tracking-widest text-zinc-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Hover me
      </motion.span>

      {/* texto FEEL IT en el margen inferior derecho */}
      <motion.span
        className="absolute bottom-16 right-4 text-xs font-semibold uppercase tracking-widest text-zinc-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        Feel it
      </motion.span>
    </div>
  );
};
