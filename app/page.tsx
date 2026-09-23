"use client";

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6">
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.nav>
      <motion.section
        className="text-lg text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Hero />
      </motion.section>
    </main>
  );
}
