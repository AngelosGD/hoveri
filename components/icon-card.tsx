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

  return (
    <>
      <button
        type="button"
        aria-label={`Icono ${name}`}
        onClick={() => setOpen(true)}
        className="flex h-28 items-center justify-center rounded-xl border border-zinc-900 bg-white text-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_-6px_rgba(244,63,94,0.5)] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
      >
        <IconPreview file={file} size={32} />
      </button>

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