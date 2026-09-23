"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { IconConfig, LibraryIcon } from "@/icons/library";

type IconEditorProps = {
  icon: LibraryIcon | null;
  config: IconConfig;
  onChange: (config: IconConfig) => void;
  onClose: () => void;
};

const COLORS = [
  "#f43f5e",
  "#fb923c",
  "#a78bfa",
  "#10b981",
  "#3b82f6",
  "#18181b",
];

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

export const IconEditor = ({ icon, config, onChange, onClose }: IconEditorProps) => {
  const [copied, setCopied] = useState(false);

  const duration = icon ? icon.baseDuration / config.speed : 0.5;

  const handleCopy = async () => {
    if (!icon) return;
    const code = `import { ${icon.componentName} } from "@/icons/${icon.fileName}";

<span style={{ color: "${config.color}" }}>
  <${icon.componentName} size={${config.size}} duration={${duration.toFixed(2)}} />
</span>`;
    await copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <AnimatePresence>
      {icon && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* backdrop */}
          <motion.button
            type="button"
            aria-label="Cerrar editor"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* modal */}
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* header */}
            <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
              <div>
                <h3 className="text-sm font-bold text-zinc-900">
                  Editar {icon.name}
                </h3>
                <p className="text-xs text-zinc-400">{icon.category}</p>
              </div>
              <motion.button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.15 }}
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
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* preview en tiempo real */}
            <div className="relative flex h-40 items-center justify-center border-b border-zinc-200 bg-zinc-50">
              <span style={{ color: config.color }}>
                <icon.Component size={config.size} duration={duration} />
              </span>
              <p className="absolute bottom-3 text-[10px] font-medium uppercase tracking-widest text-zinc-400">
                preview — hover aca
              </p>
            </div>

            {/* controles */}
            <div className="space-y-5 px-6 py-5">
              {/* color */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Color
                </label>
                <div className="mt-2.5 flex items-center gap-2.5">
                  {COLORS.map((c) => (
                    <motion.button
                      key={c}
                      type="button"
                      aria-label={`Color ${c}`}
                      onClick={() => onChange({ ...config, color: c })}
                      className={`h-7 w-7 rounded-full border-2 transition-transform ${
                        config.color.toLowerCase() === c.toLowerCase()
                          ? "border-zinc-900 scale-110"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: c }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                  <label className="relative ml-1 h-7 w-7 cursor-pointer overflow-hidden rounded-full border-2 border-dashed border-zinc-300">
                    <input
                      type="color"
                      value={config.color}
                      onChange={(e) =>
                        onChange({ ...config, color: e.target.value })
                      }
                      className="absolute -left-2 -top-2 h-12 w-12 cursor-pointer opacity-0"
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs text-zinc-400">
                      +
                    </span>
                  </label>
                </div>
              </div>

              {/* velocidad */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Velocidad
                  </label>
                  <span className="text-xs font-semibold text-zinc-700">
                    {config.speed.toFixed(1)}x
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={config.speed}
                  onChange={(e) =>
                    onChange({ ...config, speed: Number(e.target.value) })
                  }
                  className="mt-2 w-full accent-rose-500"
                />
              </div>

              {/* tamano */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Tamano
                  </label>
                  <span className="text-xs font-semibold text-zinc-700">
                    {config.size}px
                  </span>
                </div>
                <input
                  type="range"
                  min="24"
                  max="72"
                  step="4"
                  value={config.size}
                  onChange={(e) =>
                    onChange({ ...config, size: Number(e.target.value) })
                  }
                  className="mt-2 w-full accent-rose-500"
                />
              </div>
            </div>

            {/* footer: copiar icono actualizado */}
            <div className="border-t border-zinc-200 px-6 py-4">
              <motion.button
                type="button"
                onClick={handleCopy}
                className={`flex w-full items-center justify-center gap-2 rounded-2xl py-2.5 text-sm font-semibold text-white transition-colors ${
                  copied ? "bg-emerald-500" : "bg-zinc-900"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.svg
                      key="check"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="copy"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      transition={{ duration: 0.12 }}
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </motion.svg>
                  )}
                </AnimatePresence>
                {copied ? "Copiado!" : "Copiar icono"}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
