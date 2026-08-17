"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import IconCard from "./icon-card";
import { getCategories, getIconCount, ICON_LIST } from "@/icons/data";

const PAGE_SIZE = 60;

export default function IconLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const reduce = useReducedMotion();
  const total = getIconCount();
  const categories = useMemo(() => getCategories(), []);

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
      <section className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-3xl font-semibold tracking-tighter text-zinc-950 md:text-4xl dark:text-zinc-50">
            Librería de iconos
          </h1>
          <p className="mt-3 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
            {total} iconos animados listos para usar. Pasa el mouse por cada uno
            y descubre su movimiento propio.
          </p>

          <div className="mt-8 max-w-md">
            <label htmlFor="icon-search" className="sr-only">
              Buscar iconos
            </label>
            <input
              id="icon-search"
              type="search"
              value={query}
              onChange={(e) => reset(() => setQuery(e.target.value))}
              placeholder="Buscar entre todos los iconos..."
              className="w-full rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:ring-rose-500/30"
            />
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              {query || category
                ? `${filtered.length} de ${total} iconos`
                : `${total} iconos en la librería`}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => reset(() => setCategory(null))}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                category === null
                  ? "border-zinc-950 bg-zinc-950 text-white dark:border-zinc-100 dark:bg-white dark:text-zinc-950"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-500"
              }`}
            >
              Todas
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => reset(() => setCategory(category === c ? null : c))}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  category === c
                    ? "border-zinc-950 bg-zinc-950 text-white dark:border-zinc-100 dark:bg-white dark:text-zinc-950"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-500"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-12">
          {shown.length > 0 ? (
            <>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                {shown.map((icon, i) => (
                  <motion.div
                    key={icon.file}
                    initial={reduce ? false : { opacity: 0, scale: 0.9, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: (i % PAGE_SIZE) * 0.01,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <IconCard file={icon.file} name={icon.name} />
                  </motion.div>
                ))}
              </div>
              {hasMore && (
                <div className="mt-10 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-500 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"
                  >
                    Cargar más ({filtered.length - visible} restantes)
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="py-10 text-center text-sm text-zinc-500 dark:text-zinc-400">
              No hay iconos que coincidan con {`"${query}"`}.
            </p>
          )}
        </div>
      </section>
    </>
  );
}