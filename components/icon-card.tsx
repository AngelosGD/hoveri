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
        className="flex aspect-square items-center justify-center rounded-lg text-zinc-900 transition-colors duration-200 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900"
      >
        <IconPreview file={file} size={64} />
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