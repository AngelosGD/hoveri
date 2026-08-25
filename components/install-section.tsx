"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const MANAGERS = [
  { id: "npm", label: "npm", cmd: "npm install hoveri" },
  { id: "pnpm", label: "pnpm", cmd: "pnpm add hoveri" },
  { id: "yarn", label: "yarn", cmd: "yarn add hoveri" },
  { id: "bun", label: "bun", cmd: "bun add hoveri" },
] as const;

type ManagerId = (typeof MANAGERS)[number]["id"];

export default function InstallSection() {
  const [manager, setManager] = useState<ManagerId>("npm");
  const [copied, setCopied] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<"basic" | "controlled" | null>(null);

  const activeCmd = MANAGERS.find((m) => m.id === manager)?.cmd ?? "npm install hoveri";

  const basicUsage = `import { Rocket } from "hoveri";

export default function App() {
  return <Rocket size={32} />;
}`;

  const controlledUsage = `import { useRef } from "react";
import { Rocket } from "hoveri";

const ref = useRef(null);

<button
  onMouseEnter={() => ref.current?.startAnimation()}
  onMouseLeave={() => ref.current?.stopAnimation()}
>
  <Rocket ref={ref} size={32} />
</button>`;

  const copy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 1800);
  };

  return (
    <section className="relative overflow-hidden border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800/60 dark:bg-zinc-900/30">
      {/* decorative glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-rose-100/40 blur-3xl dark:bg-rose-500/[0.06]" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Listo en segundos
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tighter text-zinc-950 md:text-4xl dark:text-zinc-50">
            Instalación sin fricción
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-sm leading-7 text-zinc-600 md:text-base dark:text-zinc-400">
            Elige tu gestor, copia y pega. Cada icono trae su animación
            incluida — sin configuración, sin dependencias extra.
          </p>
        </motion.div>

        {/* main bento */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-5">
          {/* install terminal - spans 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col self-start overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-white/10 dark:bg-zinc-900 md:col-span-3"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="ml-3 hidden font-mono text-xs text-zinc-400 sm:inline dark:text-zinc-500">
                  Terminal
                </span>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-zinc-100 p-1 dark:bg-zinc-800">
                {MANAGERS.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setManager(m.id)}
                    className={`relative rounded-full px-3 py-1 font-mono text-xs font-medium transition-colors ${
                      manager === m.id
                        ? "text-zinc-950 dark:text-white"
                        : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                    }`}
                  >
                    {manager === m.id && (
                      <motion.span
                        layoutId="install-manager"
                        className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-zinc-700"
                        transition={{ type: "spring", stiffness: 320, damping: 26 }}
                      />
                    )}
                    <span className="relative">{m.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex items-center gap-3 bg-white px-5 py-5 dark:bg-zinc-900">
              <span className="font-mono text-sm font-medium text-zinc-400 dark:text-zinc-500">$</span>
              <AnimatePresence mode="wait">
                <motion.code
                  key={manager}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="font-mono text-sm font-medium text-zinc-900 dark:text-zinc-100"
                >
                  {activeCmd}
                </motion.code>
              </AnimatePresence>
              <motion.button
                type="button"
                onClick={() => copy(activeCmd, "install")}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-zinc-700 shadow-sm transition-colors hover:border-zinc-300 hover:text-zinc-950 active:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied === "install" ? (
                    <motion.span
                      key="done"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"
                    >
                      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
                      Copiado
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex items-center gap-1.5"
                    >
                      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width={14} height={14} x={8} y={8} rx={2} /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                      Copiar
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            <div className="border-t border-zinc-100 bg-zinc-50 px-5 py-3 dark:border-zinc-800 dark:bg-zinc-900/50">
              <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                Funciona con Next.js, Vite, Remix y cualquier proyecto React. Tree-shakeable — solo lo que usas.
              </p>
            </div>
          </motion.div>

          {/* usage cards - spans 2, stacked */}
          <div className="flex flex-col gap-5 md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M6 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /><path d="M15 11a3 3 0 0 1-3 3" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Uso básico</p>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Importa y renderiza</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <motion.button
                    type="button"
                    onClick={() => setExpanded("basic")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Ampliar vista"
                    title="Ampliar"
                    className="rounded-full border border-zinc-200 bg-white p-1.5 text-zinc-500 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
                  >
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg>
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => copy(basicUsage, "basic")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-full border px-3 py-1 font-mono text-xs font-medium transition-colors ${
                      copied === "basic"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600"
                    }`}
                  >
                    {copied === "basic" ? "Copiado ✓" : "Copiar"}
                  </motion.button>
                </div>
              </div>
              <div className="relative bg-zinc-950 px-4 py-4 dark:bg-black">
                <div className="absolute left-4 top-3 flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>
                <pre className="whitespace-pre-wrap break-words pt-6 font-mono text-xs leading-6 text-zinc-300">
                  <code className="whitespace-pre-wrap break-words">{basicUsage}</code>
                </pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500 text-white">
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><path d="M9 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /><path d="M7 14a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4" /></svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Control total</p>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Con ref + hover</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <motion.button
                    type="button"
                    onClick={() => setExpanded("controlled")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Ampliar vista"
                    title="Ampliar"
                    className="rounded-full border border-zinc-200 bg-white p-1.5 text-zinc-500 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
                  >
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></svg>
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => copy(controlledUsage, "controlled")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`rounded-full border px-3 py-1 font-mono text-xs font-medium transition-colors ${
                      copied === "controlled"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600"
                    }`}
                  >
                    {copied === "controlled" ? "Copiado ✓" : "Copiar"}
                  </motion.button>
                </div>
              </div>
              <div className="relative bg-zinc-950 px-4 py-4 dark:bg-black">
                <div className="absolute left-4 top-3 flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>
                <pre className="whitespace-pre-wrap break-words pt-6 font-mono text-xs leading-6 text-zinc-300">
                  <code className="whitespace-pre-wrap break-words">{controlledUsage}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>

        {/* bottom hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-zinc-500 dark:text-zinc-400"
        >
          Cada icono es un componente independiente. Solo importas lo que usas — sin CSS global, sin configuración.
        </motion.p>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.97, y: 8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="flex max-h-[90dvh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-3 dark:border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg ${
                      expanded === "basic"
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                        : "bg-rose-500 text-white"
                    }`}
                  >
                    {expanded === "basic" ? (
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M6 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /><path d="M15 11a3 3 0 0 1-3 3" /></svg>
                    ) : (
                      <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><path d="M9 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /><path d="M7 14a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4" /></svg>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {expanded === "basic" ? "Uso básico" : "Control total"}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {expanded === "basic" ? "Importa y renderiza" : "Con ref + hover"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    type="button"
                    onClick={() => copy(expanded === "basic" ? basicUsage : controlledUsage, expanded === "basic" ? "basic" : "controlled")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 font-mono text-xs font-medium text-zinc-700 shadow-sm hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {copied === (expanded === "basic" ? "basic" : "controlled") ? "Copiado ✓" : "Copiar"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setExpanded(null)}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-md px-2.5 py-1.5 text-sm text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  >
                    Esc
                  </motion.button>
                </div>
              </div>
              <div className="overflow-auto bg-zinc-950 p-6 dark:bg-black">
                <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-7 text-zinc-300">
                  <code className="whitespace-pre-wrap break-words">{expanded === "basic" ? basicUsage : controlledUsage}</code>
                </pre>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
