"use client";

import { createElement, useState } from "react";
import { getIconComponent } from "@/icons/icon-map";
import { DEFAULT_STROKE_WIDTH } from "@/icons/types";

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
        className="flex h-24 items-center justify-center rounded-xl border border-zinc-900 bg-white text-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_-6px_rgba(244,63,94,0.5)]"
      >
        <IconPreview file={file} size={30} />
      </button>

      {open && (
        <IconModal file={file} name={name} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

function IconPreview({ file, size }: { file: string; size: number }) {
  const Icon = getIconComponent(file);
  if (!Icon) return null;
  return createElement(Icon, { size });
}

function IconModal({
  file,
  name,
  onClose,
}: {
  file: string;
  name: string;
  onClose: () => void;
}) {
  const [size, setSize] = useState(32);
  const [color, setColor] = useState("#18181b");
  const [strokeWidth, setStrokeWidth] = useState(DEFAULT_STROKE_WIDTH);
  const [copied, setCopied] = useState(false);

  const componentName = file
    .replace(/-icon$/, "")
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");

  const importCode = `import { ${componentName} } from "hoveri";`;

  const usageCode = `import { ${componentName} } from "hoveri";

export function Example() {
  return (
    <${componentName}
      size={${size}}
      color="${color}"
      strokeWidth={${strokeWidth}}
    />
  );
}`;

  const copy = async () => {
    await navigator.clipboard.writeText(usageCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-label={`Personalizar ${name}`}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-3">
          <h3 className="text-sm font-semibold text-zinc-900">{name}</h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-md px-2 py-1 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
          >
            Esc
          </button>
        </div>

        <div className="flex flex-col gap-6 p-5">
          <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50">
            <div style={{ color }}>
              <IconPreview file={file} size={size} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <label className="block">
              <span className="text-xs font-medium text-zinc-500">
                Tamaño: {size}px
              </span>
              <input
                type="range"
                min="16"
                max="64"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="mt-1 w-full accent-rose-500"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-zinc-500">Color</span>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="mt-1 h-8 w-full cursor-pointer rounded-md border border-zinc-300 bg-white"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-zinc-500">
                Trazo: {strokeWidth}
              </span>
              <input
                type="range"
                min="1"
                max="4"
                step="0.5"
                value={strokeWidth}
                onChange={(e) => setStrokeWidth(Number(e.target.value))}
                className="mt-1 w-full accent-rose-500"
              />
            </label>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
              <p className="text-xs text-zinc-400">Código</p>
              <button
                type="button"
                onClick={copy}
                className="rounded-md border border-zinc-700 px-3 py-1 text-xs text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
              >
                {copied ? "Copiado" : "Copiar código"}
              </button>
            </div>
            <pre className="overflow-x-auto p-4 text-xs leading-6 text-zinc-100">
              <code>{usageCode}</code>
            </pre>
          </div>
        </div>

        <div className="border-t border-zinc-200 px-5 py-3 text-xs text-zinc-400">
          {importCode}
        </div>
      </div>
    </div>
  );
}