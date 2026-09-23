"use client";

import { AnimatePresence, motion } from "motion/react";
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

export const IconEditor = ({ icon, config, onChange, onClose }: IconEditorProps) => {
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
            <div className="flex h-40 items-center justify-center border-b border-zinc-200 bg-zinc-50">
              <span style={{ color: config.color }}>
                <icon.Component
                  size={config.size}
                  duration={icon.baseDuration / config.speed}
                />
              </span>
              <p className="absolute mb-28 self-end text-[10px] font-medium uppercase tracking-widest text-zinc-400">
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
                        config.color === c
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

            {/* footer */}
            <div className="border-t border-zinc-200 px-6 py-4">
              <motion.button
                type="button"
                onClick={onClose}
                className="w-full rounded-2xl bg-zinc-900 py-2.5 text-sm font-semibold text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.1 }}
              >
                Listo
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
