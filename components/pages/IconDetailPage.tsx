"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { IconCustomPanel } from "@/components/pages/IconCustomPanel";
import { IconImportPanel } from "@/components/pages/IconImportPanel";
import { IconStepsPanel } from "@/components/pages/IconStepsPanel";
import { ICON_LIST } from "@/icons/library";
import type { IconConfig } from "@/icons/library";

export type IconMeta = {
  id: string;
  num: string;
  name: string;
  category: string;
  fileName: string;
  componentName: string;
  baseDuration: number;
};

type IconDetailPageProps = {
  meta: IconMeta;
  source: string;
};

type OptionId = "import" | "steps" | "custom";

const OPTIONS: { id: OptionId; num: string; title: string; desc: string }[] = [
  {
    id: "import",
    num: "01",
    title: "Importar icono",
    desc: "Instala la libreria completa y toma este icono con un import.",
  },
  {
    id: "steps",
    num: "02",
    title: "Codigo del icono",
    desc: "Paso a paso: dependencias, interfaz y el codigo fuente completo.",
  },
  {
    id: "custom",
    num: "03",
    title: "Personalizar y copiar",
    desc: "Ajusta color, tamano y velocidad, y copia el resultado.",
  },
];

export const IconDetailPage = ({ meta, source }: IconDetailPageProps) => {
  const [active, setActive] = useState<OptionId>("import");
  const [config, setConfig] = useState<IconConfig>(() => {
    const found = ICON_LIST.find((i) => i.id === meta.id);
    return {
      ...(found?.defaultConfig ?? { color: "#18181b", speed: 1, size: 48 }),
    };
  });
  const icon = useMemo(() => ICON_LIST.find((i) => i.id === meta.id), [meta.id]);

  if (!icon) return null;

  const { Component } = icon;
  const duration = icon.baseDuration / config.speed;

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        {/* volver */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            href="/icons"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Volver a la biblioteca
          </Link>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1fr]">
          {/* ================= preview ================= */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col gap-5"
          >
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <div className="flex items-center justify-between px-6 pt-5">
                <span className="text-xs font-medium text-rose-500">
                  {meta.num}
                </span>
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-medium text-zinc-500">
                  {meta.category}
                </span>
              </div>

              {/* preview grande */}
              <div
                className="flex h-72 cursor-pointer items-center justify-center"
                aria-hidden
              >
                <span style={{ color: config.color }}>
                  <Component size={config.size} duration={duration} />
                </span>
              </div>

              {/* info */}
              <div className="border-t border-zinc-200 px-6 py-5">
                <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
                  {meta.name}
                </h1>
                <p className="mt-1.5 text-sm text-zinc-500">
                  Icono animado listo para React — pasa el cursor para verlo en
                  accion.
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5">
                    <dt className="font-medium text-zinc-400">componente</dt>
                    <dd className="mt-0.5 truncate font-mono font-semibold text-zinc-700">
                      {meta.componentName}
                    </dd>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5">
                    <dt className="font-medium text-zinc-400">archivo</dt>
                    <dd className="mt-0.5 truncate font-mono font-semibold text-zinc-700">
                      {meta.fileName}.tsx
                    </dd>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5">
                    <dt className="font-medium text-zinc-400">duracion base</dt>
                    <dd className="mt-0.5 font-mono font-semibold text-zinc-700">
                      {meta.baseDuration.toFixed(2)}s
                    </dd>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-2.5">
                    <dt className="font-medium text-zinc-400">estilo</dt>
                    <dd className="mt-0.5 font-mono font-semibold text-zinc-700">
                      currentColor
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* mas iconos de la misma categoria */}
            <div className="flex flex-wrap gap-2">
              {ICON_LIST.filter((i) => i.category === meta.category)
                .slice(0, 5)
                .map((i) => (
                  <Link
                    key={i.id}
                    href={`/icono/${i.id}`}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      i.id === meta.id
                        ? "border-zinc-900 bg-zinc-900 text-white"
                        : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-400 hover:text-zinc-900"
                    }`}
                  >
                    {i.name}
                  </Link>
                ))}
            </div>
          </motion.section>

          {/* ================= opciones ================= */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex flex-col gap-5"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                Llevatelo a tu codigo
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900">
                Elige como <span className="text-rose-500">usarlo.</span>
              </h2>
            </div>

            {/* listado de opciones */}
            <div className="flex flex-col gap-3">
              {OPTIONS.map((o) => {
                const isActive = active === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setActive(o.id)}
                    className={`group flex items-start gap-4 rounded-2xl border px-5 py-4 text-left transition-all ${
                      isActive
                        ? "border-zinc-900 bg-white shadow-sm"
                        : "border-zinc-200 bg-zinc-50 hover:border-zinc-300 hover:bg-white"
                    }`}
                  >
                    <span
                      className={`mt-0.5 text-xs font-bold ${
                        isActive ? "text-rose-500" : "text-zinc-400"
                      }`}
                    >
                      {o.num}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block text-sm font-bold ${
                          isActive ? "text-zinc-900" : "text-zinc-600"
                        }`}
                      >
                        {o.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-zinc-500">
                        {o.desc}
                      </span>
                    </span>
                    <span
                      className={`mt-1 transition-all ${
                        isActive
                          ? "translate-x-0 text-zinc-900"
                          : "text-zinc-300 group-hover:translate-x-0.5"
                      }`}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            {/* contenido de la opcion activa */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                {active === "import" && (
                  <IconImportPanel
                    meta={meta}
                    config={config}
                    duration={duration}
                  />
                )}
                {active === "steps" && (
                  <IconStepsPanel
                    meta={meta}
                    source={source}
                    config={config}
                    duration={duration}
                  />
                )}
                {active === "custom" && (
                  <IconCustomPanel
                    meta={meta}
                    config={config}
                    duration={duration}
                    onChange={setConfig}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.section>
        </div>
      </div>
    </main>
  );
};
