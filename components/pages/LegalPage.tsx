"use client";

import { motion } from "motion/react";
import Link from "next/link";

export type LegalSection = {
  title: string;
  body: string;
};

type LegalPageProps = {
  kicker: string;
  title: string;
  accent: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export const LegalPage = ({
  kicker,
  title,
  accent,
  intro,
  updated,
  sections,
}: LegalPageProps) => {
  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-4xl px-6 py-10 md:px-10">
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
            {kicker}
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 md:text-7xl">
            {title}
            <br />
            <span className="text-rose-500">{accent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500">
            {intro}
          </p>
        </motion.div>

        {/* card legal */}
        <motion.section
          className="mt-14 rounded-3xl border border-zinc-200 bg-zinc-100 p-7 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            {updated}
          </p>

          <div className="mt-8 flex flex-col">
            {sections.map((s, i) => (
              <div
                key={s.title}
                className={
                  i > 0 ? "mt-8 border-t border-zinc-200 pt-8" : undefined
                }
              >
                <h2 className="text-xl font-bold text-zinc-900">{s.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};
