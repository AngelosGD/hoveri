"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import IconCard from "./icon-card";
import { getCategories, getIconCount, ICON_LIST } from "@/icons/data";

const PAGE_SIZE = 60;

const EASE = [0.16, 1, 0.3, 1] as const;

export default function IconLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const reduce = useReducedMotion();
  const total = getIconCount();
  const categories = useMemo(() => getCategories(), []);
  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const icon of ICON_LIST) {
      counts.set(icon.category, (counts.get(icon.category) ?? 0) + 1);
    }
    return counts;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ICON_LIST.filter((icon) => {
      if (category && icon.category !== category) return false;
      if (!q) return true;
      return (
        icon.name.toLowerCase().includes(q) ||
        icon.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        icon.category.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const shown = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;

  const reset = (fn: () => void) => {
    setVisible(PAGE_SIZE);
    fn();
  };

  return (
    <>
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-rose-500">
                {total} iconos
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tighter text-zinc-950 md:text-4xl dark:text-zinc-50">
                Librería de iconos
              </h1>
              <p className="mt-3 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
                Iconos animados con movimiento propio. Pasa el mouse, descubre
                cómo se mueve cada uno.
              </p>
            </div>

            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="text-sm text-zinc-400 dark:text-zinc-500"
            >
              {query || category
                ? `${filtered.length} de ${total} iconos`
                : `${total} iconos en la librería`}
            </motion.p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            <span className="mr-2 font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              Categorías
            </span>
            <button
              type="button"
              onClick={() => reset(() => setCategory(null))}
              className={`group flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-all ${
                category === null
                  ? "border-rose-500 bg-rose-500 text-white dark:border-rose-500"
                  : "border-zinc-200 bg-transparent text-zinc-600 hover:border-rose-400 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-rose-500 dark:hover:text-zinc-100"
              }`}
            >
              Todas
              <span
                className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                  category === null
                    ? "bg-white/20 text-white"
                    : "bg-zinc-100 text-zinc-500 group-hover:bg-rose-100 group-hover:text-rose-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-rose-500/10 dark:group-hover:text-rose-400"
                }`}
              >
                {total}
              </span>
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() =>
                  reset(() => setCategory(category === c ? null : c))
                }
                className={`group flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm transition-all ${
                  category === c
                    ? "border-rose-500 bg-rose-500 text-white dark:border-rose-500"
                    : "border-zinc-200 bg-transparent text-zinc-600 hover:border-rose-400 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-rose-500 dark:hover:text-zinc-100"
                }`}
              >
                {c}
                <span
                  className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                    category === c
                      ? "bg-white/20 text-white"
                      : "bg-zinc-100 text-zinc-500 group-hover:bg-rose-100 group-hover:text-rose-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-rose-500/10 dark:group-hover:text-rose-400"
                  }`}
                >
                  {categoryCounts.get(c) ?? 0}
                </span>
              </button>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
            className="mt-6"
          >
            <label htmlFor="icon-search" className="sr-only">
              Buscar iconos
            </label>
            <input
              id="icon-search"
              type="search"
              value={query}
              onChange={(e) => reset(() => setQuery(e.target.value))}
              placeholder="Buscar icono..."
              className="w-full rounded-full border border-zinc-200 bg-zinc-50 px-5 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-rose-500 dark:focus:bg-zinc-900 dark:focus:ring-rose-500/10"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto  max-w-7xl px-6 py-14">
          {shown.length > 0 ? (
            <motion.div
              key={category ?? query}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid grid-cols-4 gap-1.5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8"
            >
              {shown.map((icon, i) => (
                <motion.div
                  key={icon.file}
                  initial={reduce ? false : { opacity: 0, scale: 0.9, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: (i % PAGE_SIZE) * 0.01,
                    ease: EASE,
                  }}
                >
                  <IconCard file={icon.file} name={icon.name} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-16 text-center text-sm text-zinc-500 dark:text-zinc-400"
            >
              No hay iconos que coincidan con {`"${query}"`}.
            </motion.p>
          )}

          {hasMore && (
            <div className="mt-12 flex items-center justify-center gap-3">
              <motion.button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className="rounded-full border border-zinc-200 bg-white px-8 py-3 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-100 dark:hover:text-white"
              >
                Cargar más ({filtered.length - visible} restantes)
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setVisible(filtered.length)}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className="rounded-full border border-zinc-950 bg-zinc-950 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-700 dark:border-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Mostrar todos
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
