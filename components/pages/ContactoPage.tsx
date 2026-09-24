"use client";

import { motion } from "motion/react";
import Link from "next/link";

const CONTACT_EMAIL = "angelde9919@gmail.com";

const CARDS = [
  {
    kicker: "General",
    email: CONTACT_EMAIL,
    subject: "Hola Hoveri",
    label: "Escríbenos",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 7L2 7" />
      </svg>
    ),
  },
  {
    kicker: "Ideas & collabs",
    email: CONTACT_EMAIL,
    subject: "Idea o colaboración para Hoveri",
    label: "Empezar conversación",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export const ContactoPage = () => {
  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-10">
        {/* volver */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Volver a Hoveri
          </Link>
        </motion.div>

        {/* header */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Saluda
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 md:text-7xl">
            Hagamos algo
            <br />
            <span className="text-rose-500">con movimiento.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-500">
            Preguntas, colaboraciones, palabras amables o una buena idea de
            icono. Nos encantaria escucharte.
          </p>
        </motion.div>

        {/* cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <motion.a
              key={card.kicker}
              href={`mailto:${card.email}?subject=${encodeURIComponent(card.subject)}`}
              className="group flex flex-col rounded-3xl border border-zinc-200 bg-white p-7 transition-all hover:border-rose-200 hover:shadow-md md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white">
                {card.icon}
              </span>

              <p className="mt-8 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                {card.kicker}
              </p>
              <p className="mt-2 text-xl font-semibold text-zinc-900">
                {card.email}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-500">
                {card.label}
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
};
