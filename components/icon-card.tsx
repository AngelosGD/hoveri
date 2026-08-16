"use client";

import { createElement } from "react";
import { getIconComponent } from "@/icons/icon-map";

interface IconCardProps {
  file: string;
  name: string;
  size?: number;
}

export default function IconCard({ file, name, size = 30 }: IconCardProps) {
  const Icon = getIconComponent(file);

  if (!Icon) return null;

  return (
    <div
      aria-label={`Icono ${name}`}
      className="flex h-24 items-center justify-center rounded-xl border border-zinc-900 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_6px_16px_-6px_rgba(244,63,94,0.5)]"
    >
      {createElement(Icon, { size })}
    </div>
  );
}