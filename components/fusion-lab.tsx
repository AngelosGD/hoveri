"use client";

import { Suspense, createElement, useMemo, useState } from "react";
import type { ComponentType, ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ICON_LIST } from "@/icons/data";
import { getIconComponent } from "@/icons/icon-map";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FusionLab() {
  const [slotA, setSlotA] = useState("heart-icon");
  const [slotB, setSlotB] = useState("database-icon");
  const [activeSlot, setActiveSlot] = useState<"A" | "B">("A");
  const [hovered, setHovered] = useState(false);
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();

  const metaA = useMemo(
    () => ICON_LIST.find((i) => i.file === slotA),
    [slotA],
  );
  const metaB = useMemo(
    () => ICON_LIST.find((i) => i.file === slotB),
    [slotB],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ICON_LIST;
    return ICON_LIST.filter(
      (icon) =>
        icon.name.toLowerCase().includes(q) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        icon.category.toLowerCase().includes(q),
    );
  }, [query]);

  const select = (file: string) => {
    if (activeSlot === "A") setSlotA(file);
    else setSlotB(file);
  };

  const CurrentIcon = getIconComponent(hovered ? slotB : slotA);
  const SlotAIcon = getIconComponent(slotA);
  const SlotBIcon = getIconComponent(slotB);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <section className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <SlotButton
            label="A"
            active={activeSlot === "A"}
            name={metaA?.name ?? "?"}
            onClick={() => setActiveSlot("A")}
          >
            {SlotAIcon ? <IconNode icon={SlotAIcon} /> : null}
          </SlotButton>
          <div className="flex flex-1 items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            <span className="text-rose-500">fusionar</span>
            <span aria-hidden>→</span>
            <span className="text-zinc-400 dark:text-zinc-500">morfeo</span>
          </div>
          <SlotButton
            label="B"
            active={activeSlot === "B"}
            name={metaB?.name ?? "?"}
            onClick={() => setActiveSlot("B")}
          >
            {SlotBIcon ? <IconNode icon={SlotBIcon} /> : null}
          </SlotButton>
        </div>

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          tabIndex={0}
          className="group relative flex h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-zinc-200 bg-white outline-none transition-colors focus-visible:ring-4 focus-visible:ring-rose-100 hover:border-rose-300 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-rose-500/50 dark:focus-visible:ring-rose-500/10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(244,63,94,0.06),transparent_60%)]" />
          <div className="relative flex h-40 w-40 items-center justify-center">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={hovered ? slotB : slotA}
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5, rotate: hovered ? 90 : -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5, rotate: hovered ? -90 : 90 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="absolute"
              >
                {CurrentIcon ? (
                  <IconNode icon={CurrentIcon} size={96} />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
            <p className="rounded-full border border-zinc-200 bg-white/90 px-4 py-1.5 text-xs text-zinc-500 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-400">
              {hovered ? (
                <>
                  morfando de{" "}
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    {metaA?.name}
                  </span>{" "}
                  a{" "}
                  <span className="font-medium text-rose-500">
                    {metaB?.name}
                  </span>
                </>
              ) : (
                <>
                  <span className="font-medium text-zinc-900 dark:text-zinc-50">
                    {metaA?.name}
                  </span>{" "}
                  → pasa el mouse para morfear a{" "}
                  <span className="font-medium text-rose-500">
                    {metaB?.name}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>

        <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          Pasa el mouse sobre el cuadro: se transforma del icono{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-50">
            A
          </span>{" "}
          al{" "}
          <span className="font-medium text-zinc-900 dark:text-zinc-50">
            B
          </span>
          . Quítalo y vuelve.
        </p>
      </section>

      <aside className="flex flex-col rounded-3xl border border-zinc-200 bg-white p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Iconos
          </p>
          <p className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500">
            {filtered.length}
          </p>
        </div>
        <label htmlFor="fusion-search" className="sr-only">
          Buscar iconos para fusionar
        </label>
        <input
          id="fusion-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="mb-3 w-full rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-rose-500 dark:focus:bg-zinc-900 dark:focus:ring-rose-500/10"
        />
        <p className="mb-2 text-xs text-zinc-400 dark:text-zinc-500">
          Seleccionando slot{" "}
          <span className="font-semibold text-rose-500">
            {activeSlot === "A" ? "A" : "B"}
          </span>
          . Clic en un icono lo asigna.
        </p>
        <ul className="max-h-[480px] flex-1 space-y-0.5 overflow-y-auto pr-1">
          {filtered.map((icon) => {
            const Icon = getIconComponent(icon.file);
            if (!Icon) return null;
            const inA = icon.file === slotA;
            const inB = icon.file === slotB;
            const selected = inA || inB;
            return (
              <li key={icon.file}>
                <button
                  type="button"
                  onClick={() => select(icon.file)}
                  aria-pressed={selected}
                  className={`flex w-full items-center gap-2.5 rounded-lg border px-2 py-1.5 text-left transition-all ${
                    selected
                      ? "border-rose-300 bg-rose-50 dark:border-rose-500/40 dark:bg-rose-500/10"
                      : "border-transparent hover:border-zinc-200 hover:bg-zinc-50 dark:hover:border-zinc-800 dark:hover:bg-zinc-800/40"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-zinc-700 dark:text-zinc-300 ${
                      selected ? "text-rose-500 dark:text-rose-400" : ""
                    }`}
                  >
                    <IconNode icon={Icon} size={20} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-xs font-medium text-zinc-800 dark:text-zinc-200">
                      {icon.name}
                    </span>
                    <span className="block truncate text-[10px] text-zinc-400 dark:text-zinc-500">
                      {icon.category}
                    </span>
                  </span>
                  {inA && (
                    <span className="rounded bg-rose-500 px-1 py-0.5 font-mono text-[9px] font-semibold text-white">
                      A
                    </span>
                  )}
                  {inB && (
                    <span className="rounded bg-rose-500 px-1 py-0.5 font-mono text-[9px] font-semibold text-white">
                      B
                    </span>
                  )}
                </button>
              </li>
            );
          })}
          {filtered.length === 0 && (
            <li className="py-8 text-center text-xs text-zinc-400">
              Sin resultados para {`"${query}"`}
            </li>
          )}
        </ul>
      </aside>
    </div>
  );
}

function SlotButton({
  label,
  active,
  name,
  onClick,
  children,
}: {
  label: string;
  active: boolean;
  name: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-w-[110px] items-center gap-2 rounded-2xl border px-3 py-2 transition-all ${
        active
          ? "border-rose-400 bg-rose-50 dark:border-rose-500/50 dark:bg-rose-500/10"
          : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
      }`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-700 dark:text-zinc-300 ${
          active ? "text-rose-500 dark:text-rose-400" : ""
        }`}
      >
        {children}
      </span>
      <span className="min-w-0 text-left">
        <span
          className={`block font-mono text-[9px] uppercase tracking-widest ${
            active
              ? "text-rose-500 dark:text-rose-400"
              : "text-zinc-400 dark:text-zinc-500"
          }`}
        >
          slot {label}
        </span>
        <span className="block max-w-[90px] truncate text-xs font-medium text-zinc-800 dark:text-zinc-200">
          {name}
        </span>
      </span>
    </button>
  );
}

function IconNode({
  icon,
  size = 28,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  size?: number;
}) {
  return (
    <Suspense
      fallback={
        <div
          className="animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800"
          style={{ width: size, height: size }}
        />
      }
    >
      {createElement(icon, { size })}
    </Suspense>
  );
}