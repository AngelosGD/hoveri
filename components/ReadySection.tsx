"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { SparkleIcon } from "@/icons/sparkle-icon";

const INSTALL_CMD = "npx hoveri@latest init";
const ADD_CMD = "npx hoveri@latest add sparkle";

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

export const ReadySection = () => {
  const [copied, setCopied] = useState<"install" | "add" | null>(null);

  const handleCopy = async (kind: "install" | "add") => {
    await copyToClipboard(kind === "install" ? INSTALL_CMD : ADD_CMD);
    setCopied(kind);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section className="w-full bg-rose-500">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 md:px-10 lg:grid-cols-2">
        {/* left: copy + terminal */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">
            Listo cuando lo necesites
          </p>
          <h2 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            Hoveri esta solamente
            <br />
            <span className="italic">a un click de ti.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-6 text-white/85">
            Agrega un poco de personalidad a tu proyecto con un comando que ya
            conoces. Instala el paquete o mete solo el icono que quieras.
          </p>

          {/* terminal */}
          <div className="mt-8 max-w-md overflow-hidden rounded-2xl bg-[#18181b] shadow-2xl">
            {/* titlebar */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-zinc-500">terminal</span>
                <button
                  type="button"
                  onClick={() => handleCopy("install")}
                  className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-zinc-300 transition-colors hover:bg-zinc-800"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {copied === "install" ? (
                      <motion.span
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="text-emerald-400"
                      >
                        ✓
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.12 }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <rect x="9" y="9" width="13" height="13" rx="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {copied === "install" ? "copiado!" : "Copy"}
                </button>
              </div>
            </div>

            {/* body */}
            <div className="space-y-3 px-5 py-4 font-mono text-[13px] leading-relaxed">
              <p className="text-zinc-100">
                <span className="text-zinc-500">$ </span>
                {INSTALL_CMD}
                <span className="ml-2 text-[11px] text-zinc-500">
                  {/* instala todo el paquete */}
                </span>
              </p>
              <p className="text-zinc-100">
                <span className="text-zinc-500">$ </span>
                {ADD_CMD}
                <button
                  type="button"
                  onClick={() => handleCopy("add")}
                  className="ml-3 rounded-md bg-zinc-800 px-2 py-0.5 text-[10px] font-sans font-medium text-zinc-300 transition-colors hover:bg-zinc-700"
                >
                  {copied === "add" ? "copiado!" : "copiar"}
                </button>
              </p>
              <p className="pt-1 text-[11px] text-zinc-500">
                init = instala el paquete · add = solo un icono
              </p>
            </div>
          </div>

          {/* todos los iconos */}
          <Link
            href="/icons"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-white"
          >
            Mirar todos los iconos
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="relative hidden min-h-[360px] lg:block">
          <motion.div
            className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/10"
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/15 text-white">
              <SparkleIcon size={56} duration={0.6} />
            </div>
          </motion.div>

          <motion.div
            className="absolute right-4 top-10 rotate-[-4deg] rounded-xl bg-white px-4 py-2.5 font-mono text-xs shadow-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            animate={{ y: [0, -6, 0] }}
          >
            <span className="text-zinc-800">
              import {"{ SparkleIcon }"} from{" "}
            </span>
            <span className="text-zinc-500">
              &quot;@/icons/sparkle-icon&quot;
            </span>
          </motion.div>

          <motion.div
            className="absolute bottom-16 left-6 rotate-[3deg] rounded-xl bg-white px-4 py-2.5 font-mono text-xs shadow-lg"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            animate={{ y: [0, 6, 0] }}
          >
            <span className="text-zinc-800">{"<SparkleIcon "}</span>
            <span className="text-rose-500">duration={"{0.5}"}</span>
            <span className="text-zinc-800"> /&gt;</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
