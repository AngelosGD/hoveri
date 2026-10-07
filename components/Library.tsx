"use client";

import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { CATEGORIES, ICON_LIST } from "@/icons/library";
import type { IconConfig } from "@/icons/library";
import { IconCard } from "./IconCard";
import { IconEditor } from "./IconEditor";

type Configs = Record<string, IconConfig>;

const defaultConfigs = (): Configs =>
  Object.fromEntries(ICON_LIST.map((i) => [i.id, { ...i.defaultConfig }]));

export const Library = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All icons");
  const [configs, setConfigs] = useState<Configs>(defaultConfigs);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [visible, setVisible] = useState(30);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ICON_LIST.filter((i) => {
      const matchCat = category === "All icons" || i.category === category;
      const matchQ =
        !q ||
        i.name.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setVisible(30);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setVisible(30);
  };

  const editingIcon = ICON_LIST.find((i) => i.id === editingId) ?? null;
  const editingConfig = editingId
    ? configs[editingId] ??
      ICON_LIST.find((i) => i.id === editingId)?.defaultConfig ?? { color: "#000", speed: 1, size: 48 }
    : { color: "#000", speed: 1, size: 48 };

  const updateConfig = (id: string, config: IconConfig) =>
    setConfigs((prev) => ({ ...prev, [id]: config }));

  return (
    <section className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        {/* header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              The library
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-6xl">
              Find your <span className="text-rose-500">motion.</span>
            </h1>
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500 dark:text-zinc-400 md:text-right">
            Cada icono esta hecho a mano con un poco de personalidad. Pasa el
            cursor para conocerlos.
          </p>
        </div>

        {/* toolbar: buscador + filtros */}
        <div className="mt-14 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-80">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
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
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Buscar iconos..."
              className="w-full rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 py-3 pl-11 pr-12 text-sm text-zinc-700 dark:text-zinc-200 outline-none transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:border-rose-300 focus:ring-2 focus:ring-rose-100 dark:focus:border-rose-800 dark:focus:ring-rose-950"
            />
            <kbd className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400 md:block">
              ⌘ K
            </kbd>
          </div>

          <div className="flex flex-wrap items-center gap-1">
            {CATEGORIES.map((c) => {
              const active = category === c;
              return (
                <motion.button
                  key={c}
                  type="button"
                  onClick={() => handleCategoryChange(c)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                      : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  }`}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.1 }}
                >
                  {c}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* grid de iconos */}
        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-sm text-zinc-400">
            No se encontraron iconos para &quot;{query}&quot;.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {shown.map((icon) => (
              <IconCard
                key={icon.id}
                icon={icon}
                config={configs[icon.id] ?? icon.defaultConfig}
                onEdit={() => setEditingId(icon.id)}
              />
            ))}
          </div>
        )}

        {/* cargar mas */}
        {filtered.length > 0 && hasMore && (
          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="flex flex-wrap justify-center gap-3">
              <motion.button
                type="button"
                onClick={() => setVisible((v) => v + 30)}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-6 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-200 transition-colors hover:border-zinc-900 hover:bg-zinc-900 hover:text-white dark:hover:border-zinc-100 dark:hover:bg-zinc-100 dark:hover:text-zinc-900"
              >
                Cargar sección
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setVisible(filtered.length)}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-zinc-200 dark:border-zinc-700 bg-transparent px-6 py-2.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
              >
                Cargar todo
              </motion.button>
            </div>
            <p className="text-xs text-zinc-400">
              Mostrando {shown.length} de {filtered.length} iconos
            </p>
          </div>
        )}

        {/* editor modal */}
        <IconEditor
          icon={editingIcon}
          config={editingConfig}
          onChange={(c) => editingId && updateConfig(editingId, c)}
          onClose={() => setEditingId(null)}
        />
      </div>
    </section>
  );
};
