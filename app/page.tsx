"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar></Navbar>
      </motion.h1>
      <motion.p
        className="text-lg text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      ></motion.p>
    </main>
  );
}
