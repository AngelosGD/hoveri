"use client";

import { createElement, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { getIconComponent } from "@/icons/icon-map";
import type { AnimatedIconHandle } from "@/icons/types";

const MANAGERS = [
  { id: "npm", label: "npm", install: "npm install hoveri" },
  { id: "pnpm", label: "pnpm", install: "pnpm add hoveri" },
  { id: "yarn", label: "yarn", install: "yarn add hoveri" },
  { id: "bun", label: "bun", install: "bun add hoveri" },
] as const;

const TABS = [
  { id: "install", label: "Instalar" },
  { id: "code", label: "Código" },
  { id: "steps", label: "Pasos" },
] as const;

type TabId = (typeof TABS)[number]["id"];
type ManagerId = (typeof MANAGERS)[number]["id"];

const SOURCE_URL = (file: string) =>
  `https://raw.githubusercontent.com/AngelosGD/hoveri/master/icons/${file}.tsx`;

export default function IconModal({
  file,
  name,
  onClose,
}: {
  file: string;
  name: string;
  onClose: () => void;
}) {
  const [size, setSize] = useState(48);
  const [manager, setManager] = useState<ManagerId>("npm");
  const [tab, setTab] = useState<TabId>("install");
  const [copied, setCopied] = useState(false);
  const [source, setSource] = useState<string | null>(null);
  const [sourceError, setSourceError] = useState(false);

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
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error("error"))))
      .then((text) => {
        if (alive) setSource(text);
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/50 p-4 backdrop-blur-sm"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        role="dialog"
        aria-label={`Personalizar ${name}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 8 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="w-full max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-3">
          <div className="flex items-baseline gap-3">
            <h3 className="text-sm font-semibold text-zinc-900">{name}</h3>
            <span className="font-mono text-xs text-zinc-400">
              {componentName}
            </span>
          </div>
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            whileTap={{ scale: 0.9 }}
            className="rounded-md px-2 py-1 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
          >
            Esc
          </motion.button>
        </div>

        <div className="grid md:grid-cols-[240px_1fr]">
          <div className="flex flex-col items-center justify-between gap-6 border-b border-zinc-200 bg-zinc-50 p-6 md:border-b-0 md:border-r">
            <div className="flex h-40 items-center justify-center">
              <IconPreview file={file} size={size} />
            </div>
            <label className="block w-full">
              <span className="text-xs font-medium text-zinc-500">
                Tamaño: {size}px
              </span>
              <input
                type="range"
                min="16"
                max="64"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="mt-2 w-full accent-rose-500"
              />
            </label>
          </div>

          <div className="flex flex-col">
            <div className="border-b border-zinc-200 px-5">
              <div className="flex gap-1">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    className={`relative px-3 py-2.5 text-sm transition-colors ${
                      tab === t.id
                        ? "font-medium text-zinc-950"
                        : "text-zinc-500 hover:text-zinc-800"
                    }`}
                  >
                    {tab === t.id && (
                      <motion.span
                        layoutId="modal-tab-underline"
                        className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-rose-500"
                      />
                    )}
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4 p-5">
              {tab === "install" && (
                <div className="flex gap-1.5">
                  {MANAGERS.map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setManager(m.id)}
                      className={`relative flex-1 rounded-lg border px-3 py-2 font-mono text-xs transition-colors ${
                        manager === m.id
                          ? "border-rose-500 text-rose-600"
                          : "border-zinc-200 text-zinc-600 hover:border-zinc-400"
                      }`}
                    >
                      {manager === m.id && (
                        <motion.span
                          layoutId="modal-manager-dot"
                          className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-500"
                        />
                      )}
                      {m.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
                  <p className="text-xs text-zinc-400">
                    {tab === "install"
                      ? `Instalar con ${manager}`
                      : tab === "code"
                        ? "Código del icono"
                        : `${managerInstall}`}
                  </p>
                  <motion.button
                    type="button"
                    onClick={copyText}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-md border border-zinc-700 px-3 py-1 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                  >
                    {copied ? "Copiado" : "Copiar"}
                  </motion.button>
                </div>

                {tab === "install" && (
                  <pre className="flex-1 overflow-auto p-4 text-xs leading-6 text-zinc-100">
                    <code>{installCode}</code>
                  </pre>
                )}

                {tab === "code" && (
                  <pre className="flex-1 overflow-auto p-4 text-xs leading-6 text-zinc-100">
                    <code>
                      {sourceError
                        ? "No se pudo cargar el código del icono."
                        : source ?? "Cargando..."}
                    </code>
                  </pre>
                )}

                {tab === "steps" && (
                  <div className="flex-1 space-y-4 p-5 text-sm text-zinc-300">
                    {[
                      {
                        n: "1",
                        title: "Instala la librería",
                        body: managerInstall,
                        mono: true,
                      },
                      {
                        n: "2",
                        title: "Importa el icono",
                        body: `import { ${componentName} } from "hoveri";`,
                        mono: true,
                      },
                      {
                        n: "3",
                        title: "Úsalo en tu componente",
                        body: `<${componentName} size={${size}} />`,
                        mono: true,
                      },
                      {
                        n: "4",
                        title: "Pásale el mouse",
                        body: "Cada icono anima solo. Quieres control total? usa el ref con startAnimation().",
                        mono: false,
                      },
                    ].map((s) => (
                      <div key={s.n} className="flex gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-500/10 font-mono text-[11px] font-semibold text-rose-400">
                          {s.n}
                        </span>
                        <div className="min-w-0">
                          <p className="font-medium text-zinc-100">{s.title}</p>
                          {s.mono ? (
                            <pre className="mt-1 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 font-mono text-xs text-rose-300">
                              {s.body}
                            </pre>
                          ) : (
                            <p className="mt-1 text-xs leading-5 text-zinc-400">
                              {s.body}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-xs leading-5 text-zinc-400">
                {tab === "install"
                  ? "Instala toda la librería y exporta solo el icono que necesitas. Cada componente pesa apenas lo suyo."
                  : tab === "code"
                    ? "El código fuente completo, con su animación Motion. Cópialo y personalízalo."
                    : "Cuatro pasos, sin configuración. El icono lleva su animación incluida."}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function IconPreview({ file, size }: { file: string; size: number }) {
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
      className="flex h-full w-full items-center justify-center"
    >
      {createElement(Icon as never, { ref, size })}
    </div>
  );
}