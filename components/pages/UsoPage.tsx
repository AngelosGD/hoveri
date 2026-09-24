"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
};

const STEPS = [
  {
    num: "01",
    title: "Instala la libreria completa",
    desc: "Trae todos los iconos animados a tu proyecto con un solo comando. Ideal cuando quieres el toolkit completo a la mano.",
    cmd: "npm install hoveri",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Agrega solo lo que necesitas",
    desc: "Mantene tu bundle ligero instalando iconos individuales. Perfecto para interfaces enfocadas y listas para produccion.",
    cmd: "npx hoveri add sparkle",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Copia y personaliza",
    desc: "Copia el componente, ajusta color, tamano y duracion, y listo. Los iconos usan tu currentColor para encajar con tu UI.",
    cmd: 'import { SparkleIcon } from "hoveri"',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
    ),
  },
];

const CopyBtn = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group flex w-full items-center justify-between gap-3 rounded-lg bg-zinc-100 px-4 py-2.5 font-mono text-[13px] text-zinc-700 transition-colors hover:bg-zinc-200"
    >
      <span className="truncate">{text}</span>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-500 transition-colors group-hover:text-zinc-800">
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-emerald-500"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.12 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
};

export const UsoPage = () => {
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
            Como usar Hoveri
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 md:text-7xl">
            Hazlo <span className="text-rose-500">tuyo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500">
            Tres formas sencillas de llevar detalles animados a tu producto, desde
            la libreria completa hasta una sola linea de codigo.
          </p>
        </motion.div>

        {/* pasos */}
        <div className="mt-16 flex flex-col gap-5">
          {STEPS.map((step, i) => (
            <motion.article
              key={step.num}
              className="group flex flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md sm:flex-row sm:items-start sm:gap-7 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              {/* num */}
              <span className="text-xs font-bold text-rose-500 sm:pt-1">
                {step.num}
              </span>

              {/* icono */}
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                {step.icon}
              </span>

              {/* contenido */}
              <div className="flex-1">
                <h2 className="text-xl font-bold text-zinc-900">{step.title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
                  {step.desc}
                </p>
                <div className="mt-4 max-w-md">
                  <CopyBtn text={step.cmd} />
                </div>
              </div>

              {/* flecha */}
              <span className="hidden self-center text-zinc-300 transition-all group-hover:translate-x-1 group-hover:text-zinc-500 sm:block">
                →
              </span>
            </motion.article>
          ))}
        </div>

        {/* cta */}
        <motion.div
          className="mt-14 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <Link
            href="/icons"
            className="inline-flex items-center gap-2 rounded-full bg-rose-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-rose-600"
          >
            Explorar iconos →
          </Link>
          <Link
            href="/sugerir"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-bold text-zinc-700 transition-colors hover:border-zinc-500 hover:bg-white"
          >
            Sugiere un icono
          </Link>
        </motion.div>
      </div>
    </main>
  );
};
