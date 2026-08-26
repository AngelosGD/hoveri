"use client";

import { Suspense, createElement, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { getIconComponent } from "@/icons/icon-map";
import type { AnimatedIconHandle } from "@/icons/types";
import { ICON_LIST } from "@/icons/data";

const MANAGERS = [
  { id: "npm", label: "npm", install: "npm install hoveri" },
  { id: "pnpm", label: "pnpm", install: "pnpm add hoveri" },
  { id: "yarn", label: "yarn", install: "yarn add hoveri" },
  { id: "bun", label: "bun", install: "bun add hoveri" },
] as const;

const TABS = [
  { id: "install", label: "Instalación" },
  { id: "code", label: "Código" },
  { id: "steps", label: "Pasos" },
] as const;

type TabId = (typeof TABS)[number]["id"];
type ManagerId = (typeof MANAGERS)[number]["id"];

const SOURCE_URL = (file: string) => `/api/icon-source?file=${file}`;

export default function IconModal({
  file,
  name,
  onClose,
}: {
  file: string;
  name: string;
  onClose: () => void;
}) {
  const [size, setSize] = useState(96);
  const [manager, setManager] = useState<ManagerId>("npm");
  const [tab, setTab] = useState<TabId>("install");
  const [copied, setCopied] = useState(false);
  const [source, setSource] = useState<string | null>(null);
  const [sourceError, setSourceError] = useState(false);

  const meta = ICON_LIST.find((i) => i.file === file);
  const tags = meta?.tags ?? [];

  const componentName = file
    .replace(/-icon$/, "")
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    let alive = true;
    fetch(SOURCE_URL(file))
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("error"))))
      .then((data) => {
        if (alive) setSource(data.source as string);
      })
      .catch(() => {
        if (alive) setSourceError(true);
      });
    return () => {
      alive = false;
    };
  }, [file]);

  const managerInstall =
    MANAGERS.find((m) => m.id === manager)?.install ?? "npm install hoveri";

  const importCode = `import { ${componentName} } from "hoveri";`;

  const usageCode = `${importCode}

export function Example() {
  return <${componentName} size={${size}} />;
}`;

  const installCode = `${managerInstall}

${usageCode}`;

  const copyText = () => {
    const text = tab === "install" ? installCode : tab === "code" ? source ?? "" : managerInstall;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        role="dialog"
        aria-label={`${name} — ${componentName}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="flex max-h-[92dvh] w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
      >
        {/* header */}
        <div className="flex shrink-0 items-center justify-between border-b border-zinc-200 px-5 py-3 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
              <IconPreview file={file} size={16} />
            </div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              {name}
            </h3>
            <span className="hidden font-mono text-xs text-zinc-400 sm:inline dark:text-zinc-500">
              {componentName}
            </span>
          </div>
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            whileTap={{ scale: 0.9 }}
            className="rounded-md px-2.5 py-1.5 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            Esc
          </motion.button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-8 overflow-y-auto p-6 md:flex-row md:gap-10 md:p-8">
          {/* left preview - itshover style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center md:w-[360px] md:shrink-0"
          >
            <div className="group relative flex aspect-square w-full max-w-[360px] items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
              <div className="absolute right-3 top-3 hidden rounded-md p-1.5 text-zinc-400 opacity-0 transition-all group-hover:opacity-100 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 sm:group-hover:opacity-100 [@media(hover:none)]:opacity-100 [@media(hover:none)]:block">
                <span className="text-xs">hover</span>
              </div>
              <IconPreview file={file} size={size} large />
            </div>

            <h4 className="mt-5 text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {file}
            </h4>

            {tags.length > 0 && (
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <label className="mt-6 block w-full">
              <span className="flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Tamaño
                <span className="font-mono text-zinc-900 dark:text-zinc-100">{size}px</span>
              </span>
              <input
                type="range"
                min={16}
                max={120}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="mt-2 w-full accent-rose-500"
              />
              <div className="mt-1 flex justify-between font-mono text-[10px] text-zinc-400 dark:text-zinc-500">
                <span>16</span>
                <span>120</span>
              </div>
            </label>
          </motion.div>

          {/* right installation - itshover style */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-0 flex-1"
          >
            <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Instalación
            </h3>

            {/* outer tabs CLI/Manual style -> Install/Code/Steps */}
            <div className="mb-5 flex gap-4 border-b border-zinc-200 dark:border-zinc-800">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`relative border-b-2 px-1 py-2 text-sm font-medium transition-colors ${
                    tab === t.id
                      ? "border-rose-500 text-zinc-900 dark:text-zinc-50"
                      : "border-transparent text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                  }`}
                >
                  {t.label}
                  {tab === t.id && (
                    <motion.span
                      layoutId="modal-tab-underline"
                      className="absolute inset-x-0 -bottom-px h-0.5 bg-rose-500"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {tab === "install" && (
                <div className="flex gap-1">
                  {MANAGERS.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setManager(m.id)}
                      className={`relative flex-1 rounded-lg border px-3 py-2 font-mono text-xs font-medium transition-colors ${
                        manager === m.id
                          ? "border-rose-500 bg-rose-50 text-rose-600 dark:border-rose-500/50 dark:bg-rose-500/10 dark:text-rose-400"
                          : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600"
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              )}

              {/* code block - itshover gradient + hover copy */}
              {tab !== "steps" ? (
                <div className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/[0.04] via-transparent to-transparent opacity-60" />
                  <div className="relative flex items-center justify-between border-b border-zinc-100 bg-zinc-50/50 px-4 py-2.5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                    <div className="flex items-center gap-2">
                      <div className="hidden items-center gap-1.5 sm:flex">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                      </div>
                      <span className="ml-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                        {tab === "install" ? `Instalar con ${manager}` : "Código del icono"}
                      </span>
                    </div>
                    <motion.button
                      type="button"
                      onClick={copyText}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-1.5 rounded-md border bg-white px-2.5 py-1 font-mono text-xs font-medium shadow-sm transition-all hover:shadow dark:bg-zinc-800 ${
                        copied
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400"
                          : "border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white"
                      } opacity-100 md:opacity-0 md:group-hover:opacity-100`}
                    >
                      {copied ? (
                        <>
                          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg>
                          Copiado
                        </>
                      ) : (
                        <>
                          <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect width={14} height={14} x={8} y={8} rx={2} /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                          Copiar
                        </>
                      )}
                    </motion.button>
                  </div>

                  <div className="relative bg-white p-4 dark:bg-zinc-900">
                    {tab === "install" && (
                      <pre className="overflow-x-auto font-mono text-xs leading-6 text-zinc-800 dark:text-zinc-300">
                        <code className="flex gap-2">
                          <span className="select-none text-rose-500">$</span>
                          <span>{installCode}</span>
                        </code>
                      </pre>
                    )}
                    {tab === "code" && (
                      <pre className="overflow-x-auto whitespace-pre-wrap break-words font-mono text-xs leading-6 text-zinc-800 dark:text-zinc-300">
                        <code className="whitespace-pre-wrap break-words">{sourceError ? "No se pudo cargar el código del icono." : source ?? "Cargando..."}</code>
                      </pre>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {[
                    {
                      step: "Paso 1",
                      title: "Instala la librería",
                      desc: "Elige tu gestor favorito y añade hoveri a tu proyecto.",
                      code: managerInstall,
                    },
                    {
                      step: "Paso 2",
                      title: `Importa ${componentName}`,
                      desc: `Importa ${componentName} desde "hoveri" en tu archivo.`,
                      code: `import { ${componentName} } from "hoveri";`,
                    },
                    {
                      step: "Paso 3",
                      title: `Crea tu ${name}`,
                      desc: `Renderiza el icono con el tamaño que necesites. Prueba con ${size}px.`,
                      code: `<${componentName} size={${size}} color="currentColor" />`,
                    },
                    {
                      step: "Paso 4",
                      title: "Anima al hover",
                      desc: "Pásale el mouse y verás la animación. ¿Quieres control manual? Usa el ref.",
                      code: `const ref = useRef(null);
<${componentName} ref={ref} size={${size}} />
// ref.current?.startAnimation()`,
                    },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="group/step relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
                    >
                      <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/[0.02] via-transparent to-transparent opacity-0 transition-opacity group-hover/step:opacity-100" />
                      <div className="relative p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500 text-[11px] font-bold text-white">
                              {s.step.replace("Paso ", "")}
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                                {s.title}
                              </p>
                              <p className="mt-0.5 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                                {s.desc}
                              </p>
                            </div>
                          </div>
                          <motion.button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(s.code);
                              setCopied(true);
                              setTimeout(() => setCopied(false), 1500);
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden shrink-0 rounded-md border border-zinc-200 bg-white px-2.5 py-1 font-mono text-xs text-zinc-600 opacity-0 transition-all hover:border-zinc-300 group-hover/step:opacity-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100 sm:inline-flex"
                          >
                            Copiar
                          </motion.button>
                        </div>
                        <pre className="mt-3 overflow-x-auto whitespace-pre rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2.5 font-mono text-xs leading-5 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
                          <code>{s.code}</code>
                        </pre>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                {tab === "install"
                  ? "Instala toda la librería y exporta solo el icono que necesitas. Tree-shakeable."
                  : tab === "code"
                    ? "El código fuente completo, con su animación Motion. Cópialo y personalízalo."
                    : "Cuatro pasos, sin configuración. El icono lleva su animación incluida."}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function IconPreview({
  file,
  size,
  large = false,
}: {
  file: string;
  size: number;
  large?: boolean;
}) {
  const ref = useRef<AnimatedIconHandle>(null);
  const Icon = getIconComponent(file);

  useEffect(() => {
    const t = setTimeout(() => ref.current?.startAnimation(), 250);
    return () => clearTimeout(t);
  }, [file]);

  if (!Icon) return null;

  return (
    <div
      onMouseEnter={() => ref.current?.startAnimation()}
      onMouseLeave={() => ref.current?.stopAnimation()}
      className={`flex items-center justify-center ${large ? "h-32 w-32" : ""}`}
    >
      <Suspense
        fallback={
          <div
            className="animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800"
            style={{ width: size, height: size }}
          />
        }
      >
        {createElement(Icon as never, { ref, size })}
      </Suspense>
    </div>
  );
}
