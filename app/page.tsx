"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <motion.h1
        className="text-4xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        hoveri
      </motion.h1>
      <motion.p
        className="text-lg text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Iconos animados para React
      </motion.p>
    </main>
  );
}
