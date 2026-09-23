"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { ICON_LIST } from "@/icons/library";
import type { LibraryIcon } from "@/icons/library";

const ACCENT: Record<string, string> = {
  sparkle: "#f43f5e",
  heart: "#fb7185",
  code: "#10b981",
};

type Slot = "left" | "right";

const FusionCard = ({ a, b }: { a: LibraryIcon; b: LibraryIcon }) => {
  const [fused, setFused] = useState(false);
  const current = fused ? b : a;

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-colors hover:border-zinc-700"
      onMouseEnter={() => setFused(true)}
      onMouseLeave={() => setFused(false)}
      onFocus={() => setFused(true)}
      onBlur={() => setFused(false)}
      tabIndex={0}
    >
      <div className="flex items-center justify-between px-5 pt-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          {fused ? "Fused" : "Hover to fuse"}
        </span>
        <span className="text-[10px] font-medium text-zinc-500">
          {a.name} → {b.name}
        </span>
      </div>

      <div className="relative mx-auto flex h-24 w-full items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={current.id}
            initial={{ opacity: 0, scale: 0.5, rotate: fused ? 90 : -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: fused ? -90 : 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              color: ACCENT[current.id] ?? "#f43f5e",
              display: "flex",
            }}
          >
            <current.Component size={44} />
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export const FusionLab = () => {
  const [ids, setIds] = useState<[string, string]>(["sparkle", "code"]);
  const [activeSlot, setActiveSlot] = useState<Slot>("right");
  const [query, setQuery] = useState("");
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);

  const left = ICON_LIST.find((i) => i.id === ids[0]) ?? ICON_LIST[0];
  const right = ICON_LIST.find((i) => i.id === ids[1]) ?? ICON_LIST[1];

  // hover independiente por icono
  const shownLeft = hoverLeft ? right : left;
  const shownRight = hoverRight ? left : right;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ICON_LIST.filter((i) => !q || i.name.toLowerCase().includes(q));
  }, [query]);

  const pick = (id: string) => {
    const next: [string, string] = [...ids];
    const idx = activeSlot === "left" ? 0 : 1;
    const otherIdx = activeSlot === "left" ? 1 : 0;
    if (id === next[otherIdx]) return;
    next[idx] = id;
    setIds(next);
  };

  const tileCls = (slot: Slot) =>
    `relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-3xl bg-zinc-800/90 transition-all md:h-28 md:w-28 ${
      activeSlot === slot
        ? "ring-2 ring-rose-500 shadow-[0_0_24px_rgba(244,63,94,0.25)]"
        : "hover:bg-zinc-700/80"
    }`;

  const tileMotion = {
    initial: { opacity: 0, scale: 0.55, rotate: -50 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.55, rotate: 50 },
    transition: { duration: 0.35, ease: "easeOut" as const },
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl border-t border-zinc-200 px-6 py-24 md:px-10">
        {/* header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              une 2 iconos
            </p>
            <h2 className="mt-4 text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">
              Miralos<span className="italic text-rose-600">transformarse</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500 md:text-right">
            Empareja dos iconos y mira uno convertirse en el otro. Un poquito de
            magia, bajo demanda.
          </p>
        </div>

        {/* body: stage + selector */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* stage oscuro */}
          <motion.div
            className="relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl bg-[#0a0a0a] lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            {/* grid pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* label */}
            <div className="relative z-10 flex items-center gap-2 px-7 pt-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Haz hover para ver la magia
              </span>
              <span className="text-rose-500">↗</span>
            </div>

            {/* tiles — hover independiente, click = elegir slot */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 px-6 py-4">
              <div className="flex items-center gap-6">
                {/* tile izq (A) */}
                <motion.button
                  type="button"
                  aria-label={`Slot A: ${left.name}. Click para cambiar`}
                  className={tileCls("left")}
                  onClick={() => setActiveSlot("left")}
                  onMouseEnter={() => setHoverLeft(true)}
                  onMouseLeave={() => setHoverLeft(false)}
                  onFocus={() => setHoverLeft(true)}
                  onBlur={() => setHoverLeft(false)}
                  whileTap={{ scale: 0.97 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={shownLeft.id}
                      {...tileMotion}
                      style={{
                        color: ACCENT[shownLeft.id] ?? "#f43f5e",
                        display: "flex",
                      }}
                    >
                      <shownLeft.Component size={40} />
                    </motion.span>
                  </AnimatePresence>
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-rose-500 px-1.5 text-[9px] font-bold text-white">
                    A
                  </span>
                </motion.button>

                {/* conector */}
                <div className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  <span className="h-0.5 w-6 bg-zinc-500" />
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                </div>

                {/* tile der (B) */}
                <motion.button
                  type="button"
                  aria-label={`Slot B: ${right.name}. Click para cambiar`}
                  className={tileCls("right")}
                  onClick={() => setActiveSlot("right")}
                  onMouseEnter={() => setHoverRight(true)}
                  onMouseLeave={() => setHoverRight(false)}
                  onFocus={() => setHoverRight(true)}
                  onBlur={() => setHoverRight(false)}
                  whileTap={{ scale: 0.97 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={shownRight.id}
                      {...tileMotion}
                      style={{
                        color: ACCENT[shownRight.id] ?? "#10b981",
                        display: "flex",
                      }}
                    >
                      <shownRight.Component size={40} />
                    </motion.span>
                  </AnimatePresence>
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-1.5 text-[9px] font-bold text-white">
                    B
                  </span>
                </motion.button>
              </div>

              {/* labels */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-zinc-300">
                  {left.name}
                </span>
                <span className="text-xs text-rose-500">↔</span>
                <span className="text-xs font-bold text-zinc-300">
                  {right.name}
                </span>
              </div>

              {/* card: hover → A se transforma en B, al salir → vuelve a A */}
              <div className="w-full max-w-md">
                <FusionCard a={left} b={right} />
              </div>
            </div>
          </motion.div>

          {/* panel selector */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* buscador */}
            <div className="relative border-b border-zinc-200">
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Quick find an icon..."
                className="w-full bg-transparent py-4 pl-12 pr-5 text-sm text-zinc-700 outline-none placeholder:text-zinc-400"
              />
            </div>

            {/* hint */}
            <p className="border-b border-zinc-100 bg-zinc-50 px-5 py-2.5 text-[11px] font-medium text-zinc-500">
              Cambiando slot{" "}
              <span className="font-bold text-rose-500">
                {activeSlot === "left" ? "A" : "B"}
              </span>{" "}
              — click en un tile para cambiar de slot
            </p>

            {/* lista */}
            <ul className="flex-1 overflow-y-auto">
              {filtered.map((i) => {
                const slot: Slot | null =
                  i.id === ids[0] ? "left" : i.id === ids[1] ? "right" : null;
                return (
                  <li key={i.id}>
                    <button
                      type="button"
                      onClick={() => pick(i.id)}
                      className="group flex w-full items-center gap-3 border-b border-zinc-100 px-5 py-3.5 text-left transition-colors hover:bg-zinc-50"
                    >
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100"
                        style={{ color: ACCENT[i.id] ?? "#f43f5e" }}
                      >
                        <i.Component size={16} />
                      </span>
                      <span className="flex-1 text-sm font-medium text-zinc-800">
                        {i.name}
                      </span>
                      {slot && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase text-white ${
                            slot === "left" ? "bg-rose-500" : "bg-emerald-500"
                          }`}
                        >
                          {slot === "left" ? "A" : "B"}
                        </span>
                      )}
                      <span className="text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-500">
                        →
                      </span>
                    </button>
                  </li>
                );
              })}
              {filtered.length === 0 && (
                <li className="px-5 py-8 text-center text-sm text-zinc-400">
                  Sin resultados.
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
