"use client";

import { Suspense, createElement, useState } from "react";
import { AnimatePresence } from "motion/react";
import { getIconComponent } from "@/icons/icon-map";
import IconModal from "./icon-modal";

interface IconCardProps {
  file: string;
  name: string;
}

export default function IconCard({ file, name }: IconCardProps) {
  const [open, setOpen] = useState(false);

  const importCode = `import { ${name} } from "hoveri";`;

  return (
    <>
      <div className="group relative">
        <button
          type="button"
          aria-label={`Icono ${name}`}
          onClick={() => setOpen(true)}
          className="flex aspect-square items-center justify-center rounded-lg text-zinc-900 transition-colors duration-200 group-hover:bg-zinc-100 dark:text-zinc-100 dark:group-hover:bg-zinc-900"
        >
          <IconPreview file={file} size={64} />
        </button>

        <div className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 z-20 w-max max-w-[240px] -translate-x-1/2 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
          <div className="rounded-lg border border-zinc-200 bg-white px-3 py-2 shadow-lg dark:border-zinc-700 dark:bg-zinc-900">
            <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-50">
              {name}
            </p>
            <p className="mt-0.5 font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
              {importCode}
            </p>
          </div>
        </div>
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
