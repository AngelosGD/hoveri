"use client";

import { Library } from "@/components/Library";
import { Navbar } from "@/components/Navbar";
import { motion } from "motion/react";

export default function IconsPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Navbar />
      </motion.div>
      <Library />
    </main>
  );
}
