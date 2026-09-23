"use client";

import { motion } from "motion/react";
import { useState } from "react";
import type { IconConfig, LibraryIcon } from "@/icons/library";

type IconCardProps = {
  icon: LibraryIcon;
  config: IconConfig;
  onEdit: () => void;
};

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    // fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
};

export const IconCard = ({ icon, config, onEdit }: IconCardProps) => {
  const [copied, setCopied] = useState<null | "component" | "install">(null);

  const { Component } = icon;
  const duration = icon.baseDuration / config.speed;

  const handleCopy = async (kind: "component" | "install") => {
    const text =
      kind === "component"
        ? `import { ${icon.componentName} } from "@/icons/${icon.fileName}";\n\n<${icon.componentName} size={${config.size}} duration={${duration.toFixed(2)}} />`
        : `npx hoveri@latest add ${icon.id}`;
    await copyToClipboard(text);
    setCopied(kind);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <motion.div
      className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      {/* numero */}
      <div className="px-5 pt-4">
        <span className="text-xs font-medium text-zinc-400">{icon.num}</span>
      </div>

      {/* preview con hover = animacion */}
      <div className="flex h-36 items-center justify-center" aria-hidden>
        <span style={{ color: config.color }}>
          <Component size={config.size} duration={duration} />
        </span>
      </div>

      {/* titulo + categoria + lapiz */}
      <div className="flex items-start justify-between border-t border-zinc-200 px-5 py-4">
        <div>
          <h3 className="text-sm font-bold text-zinc-900">{icon.name}</h3>
          <p className="mt-0.5 text-xs text-zinc-400">{icon.category}</p>
        </div>
        <motion.button
          type="button"
          onClick={onEdit}
          aria-label={`Editar ${icon.name}`}
          className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700"
          whileHover={{ rotate: -12, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
          </svg>
        </motion.button>
      </div>

      {/* acciones: component + install */}
      <div className="grid grid-cols-2 border-t border-zinc-200">
        <button
          type="button"
          onClick={() => handleCopy("component")}
          className="group flex flex-col items-center gap-1.5 border-r border-zinc-200 py-3 text-[11px] font-medium text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:scale-110"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          {copied === "component" ? "copiado!" : "component"}
        </button>
        <button
          type="button"
          onClick={() => handleCopy("install")}
          className="group flex flex-col items-center gap-1.5 py-3 text-[11px] font-medium text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-y-0.5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {copied === "install" ? "copiado!" : "install"}
        </button>
      </div>
    </motion.div>
  );
};
