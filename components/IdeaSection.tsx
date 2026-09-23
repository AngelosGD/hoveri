"use client";

import { motion } from "motion/react";
import { SparkleIcon } from "@/icons/sparkle-icon";

export const IdeaSection = () => {
  return (
    <section className="w-full bg-white pb-6">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[28px] bg-[#111111] px-8 py-16 md:px-14 md:py-20">
          {/* sparkle decorativo */}
          <motion.div
            className="absolute right-[38%] top-10 text-rose-500"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 400,
              damping: 18,
            }}
          >
            <SparkleIcon size={48} duration={0.55} />
          </motion.div>

          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2">
            {/* left */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Tienes una idea?
              </p>
              <h2 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
                Crea algo
                <br />
                <span className="text-rose-500">con vida</span>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-6 text-zinc-400">
                No encuentras el icono que necesitas? Cuentanos lo que imaginas
                y lo haremos realidad.
              </p>
            </div>

            {/* right actions */}
            <div className="flex flex-col items-start gap-8 lg:items-end">
              <motion.a
                href="mailto:hola@hoveri.dev?subject=Sugerencia%20de%20icono"
                className="group inline-flex items-center gap-2 text-sm font-bold text-white"
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.1 }}
              >
                Sugiere un icono
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 4, rotate: -12 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </motion.span>
              </motion.a>

              <motion.button
                type="button"
                className="inline-flex items-center gap-2.5 rounded-full border border-zinc-700 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.1 }}
              >
                Invitame un cafe
                <motion.span
                  className="text-rose-500"
                  whileHover={{ scale: 1.25 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15 }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
