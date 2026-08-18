"use client";

import { Suspense, createElement, useCallback, useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { getIconComponent } from "@/icons/icon-map";
import IconModal from "./icon-modal";

interface IconCardProps {
  file: string;
  name: string;
  compact?: boolean;
}

export default function IconCard({ file, name, compact = false }: IconCardProps) {
  const [open, setOpen] = useState(false);

  const importCode = `import { ${name} } from "hoveri";`;

  const copyShadcn = useCallback(async () => {
    const cmd = `npx shadcn@latest add https://hoveri.dev/r/${file}.json`;
    await navigator.clipboard.writeText(cmd);
  }, [file]);

  const copySource = useCallback(async () => {
    try {
      const res = await fetch(`/api/icon-source?file=${file}`);
      const data = (await res.json()) as { source?: string };
      if (data.source) await navigator.clipboard.writeText(data.source);
    } catch {
      /* noop */
    }
  }, [file]);

  return (
    <>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-zinc-200 bg-white transition-colors duration-200 hover:border-zinc-300 dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-zinc-600">
        <button
          type="button"
          aria-label={`Icono ${name}`}
          onClick={() => setOpen(true)}
          className={`flex flex-1 items-center justify-center text-zinc-900 transition-colors duration-200 group-hover:bg-zinc-50 dark:text-zinc-50 dark:group-hover:bg-zinc-800/40 ${
            compact ? "min-h-12 p-2" : "min-h-16 p-3"
          }`}
        >
          <IconPreview file={file} size={compact ? 28 : 64} />
        </button>

        {!compact && (
          <div className="flex items-center justify-center gap-1 border-t border-zinc-200 px-1 py-1.5 dark:border-zinc-800/80">
            <button
              type="button"
              onClick={copyShadcn}
              aria-label="Copiar comando shadcn"
              title="Copiar comando shadcn"
              className="rounded px-1.5 py-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700/50 dark:hover:text-zinc-50"
            >
              <CopyIcon size={13} />
            </button>
            <button
              type="button"
              onClick={copySource}
              aria-label="Copiar código fuente"
              title="Copiar código fuente"
              className="rounded px-1.5 py-1 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-700/50 dark:hover:text-zinc-50"
            >
              <CodeXmlIcon size={13} />
            </button>
          </div>
        )}

        {!compact && (
          <div className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-20 w-max max-w-[240px] -translate-x-1/2 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            <div className="rounded-lg border border-zinc-200 bg-white px-3 py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-black/40">
              <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-50">
                {name}
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                {importCode}
              </p>
            </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <IconModal file={file} name={name} onClose={() => setOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function IconPreview({ file, size }: { file: string; size: number }) {
  const Icon = getIconComponent(file);
  if (!Icon) return null;
  return (
    <Suspense
      fallback={
        <div
          className="animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800"
          style={{ width: size, height: size }}
        />
      }
    >
      {createElement(Icon, { size })}
    </Suspense>
  );
}

function CopyIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CodeXmlIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  );
}