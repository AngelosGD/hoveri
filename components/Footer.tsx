"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ICON_LIST } from "@/icons/library";
import { SparkleIcon } from "@/icons/sparkle-icon";

const NAV = [
  { label: "Explorar", href: "/icons" },
  { label: "Como funciona", href: "/#features" },
  {
    label: "Sugerir icono",
    href: "mailto:hola@hoveri.dev?subject=Sugerencia%20de%20icono",
  },
  { label: "Privacidad", href: "/privacy" },
];

// ultimos 10 del catalogo (los mas recientes)
const LATEST = ICON_LIST.slice(-10);

export const Footer = () => {
  return (
    <footer className="mt-16 w-full border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        {/* top */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500 text-white">
                <SparkleIcon size={18} />
              </span>
              <span className="text-xl font-bold text-zinc-900">
                Hoveri<span className="text-rose-500">.</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-zinc-500">
              Detalles animados para interfaces con personalidad.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6">
            {NAV.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-rose-500"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              href="mailto:hola@hoveri.dev"
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              whileHover={{ scale: 1.1, rotate: -8 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
              </svg>
            </motion.a>
            <motion.a
              href="https://hoveri.vercel.app"
              aria-label="Web"
              className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
              whileHover={{ scale: 1.1, rotate: 8 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* iconos reales */}
        <div className="mt-12 border-t border-zinc-200 pt-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
            <div className="shrink-0">
              <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                Anadidos recientemente
              </p>
              <h3 className="mt-1 text-lg font-bold text-zinc-900">
                Ultimos iconos
              </h3>
            </div>

            <div className="flex flex-1 flex-wrap items-start gap-x-7 gap-y-6">
              {LATEST.map((item) => (
                <motion.div
                  key={item.id}
                  className="flex w-16 flex-col items-center gap-2"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                >
                  <span className="text-zinc-900">
                    <item.Component size={24} />
                  </span>
                  <span className="text-center text-[11px] font-medium text-zinc-500">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>© 2026 AngelosDev</p>
          <p>
            Hecho con cariño ·{" "}
            <a
              href="https://github.com/AngelosGD"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-zinc-700 transition-colors hover:text-rose-500"
            >
              AngelosDev
            </a>{" "}
            <span className="text-rose-500">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
