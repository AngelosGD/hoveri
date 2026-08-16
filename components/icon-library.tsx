"use client";

import { useMemo, useState } from "react";
import IconCard from "./icon-card";
import { getCategories, getIconCount, ICON_LIST } from "@/icons/data";

export default function IconLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
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

  return (
    <>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h1 className="text-3xl font-semibold tracking-tighter text-zinc-950 md:text-4xl">
            Librería de iconos
          </h1>
          <p className="mt-3 max-w-lg text-base leading-7 text-zinc-600">
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
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar entre todos los iconos..."
              className="w-full rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm text-zinc-900 outline-none transition-colors placeholder:text-zinc-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-200"
            />
            <p className="mt-3 text-sm text-zinc-500">
              {query || category
                ? `${filtered.length} de ${total} iconos`
                : `${total} iconos en la librería`}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory(null)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                category === null
                  ? "border-zinc-950 bg-zinc-950 text-white"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
              }`}
            >
              Todas
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(category === c ? null : c)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  category === c
                    ? "border-zinc-950 bg-zinc-950 text-white"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
              {filtered.map((icon) => (
                <IconCard key={icon.file} file={icon.file} name={icon.name} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-sm text-zinc-500">
              No hay iconos que coincidan con {`"${query}"`}.
            </p>
          )}
        </div>
      </section>
    </>
  );
}