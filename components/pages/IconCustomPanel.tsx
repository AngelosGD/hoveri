"use client";

import { CodeBlock } from "@/components/CodeBlock";
import type { IconConfig } from "@/icons/library";
import type { IconMeta } from "./IconDetailPage";

type IconCustomPanelProps = {
  meta: IconMeta;
  config: IconConfig;
  duration: number;
  onChange: (config: IconConfig) => void;
};

const SWATCHES = [
  { name: "zinc", value: "#18181b" },
  { name: "rose", value: "#f43f5e" },
  { name: "emerald", value: "#10b981" },
  { name: "sky", value: "#0ea5e9" },
  { name: "amber", value: "#f59e0b" },
  { name: "violet", value: "#8b5cf6" },
];

export const IconCustomPanel = ({
  meta,
  config,
  duration,
  onChange,
}: IconCustomPanelProps) => {
  const snippet = `import { ${meta.componentName} } from "hoveri"\n\nexport function Demo() {\n  return (\n    <span style={{ color: "${config.color}" }}>\n      <${meta.componentName} size={${config.size}} duration={${duration.toFixed(2)}} />\n    </span>\n  )\n}`;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-base font-bold text-zinc-900">
          Personalizar y copiar
        </h3>
        <p className="mt-1 text-sm leading-6 text-zinc-500">
          Mueve los controles y mira el preview de la izquierda. El codigo se
          actualiza solo.
        </p>
      </div>

      {/* color */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            color
          </p>
          <span className="font-mono text-[11px] text-zinc-500">
            {config.color}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          {SWATCHES.map((s) => (
            <button
              key={s.value}
              type="button"
              aria-label={`Color ${s.name}`}
              onClick={() => onChange({ ...config, color: s.value })}
              className={`h-8 w-8 rounded-full border-2 transition-transform hover:scale-110 ${
                config.color.toLowerCase() === s.value
                  ? "border-zinc-900 scale-110"
                  : "border-white shadow-sm"
              }`}
              style={{ backgroundColor: s.value }}
            />
          ))}
          <label className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full border-2 border-dashed border-zinc-300 hover:border-zinc-500">
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs font-bold text-zinc-400">
              +
            </span>
            <input
              type="color"
              value={config.color}
              onChange={(e) => onChange({ ...config, color: e.target.value })}
              className="absolute -left-2 -top-2 h-12 w-12 cursor-pointer opacity-0"
            />
          </label>
        </div>
      </div>

      {/* tamano + velocidad */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              tamano
            </p>
            <span className="font-mono text-[11px] text-zinc-500">
              {config.size}px
            </span>
          </div>
          <input
            type="range"
            min={16}
            max={96}
            step={4}
            value={config.size}
            onChange={(e) =>
              onChange({ ...config, size: Number(e.target.value) })
            }
            className="w-full accent-rose-500"
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              velocidad
            </p>
            <span className="font-mono text-[11px] text-zinc-500">
              ×{config.speed}
            </span>
          </div>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.25}
            value={config.speed}
            onChange={(e) =>
              onChange({ ...config, speed: Number(e.target.value) })
            }
            className="w-full accent-rose-500"
          />
        </div>
      </div>

      {/* resultado */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          tu codigo
        </p>
        <CodeBlock code={snippet} label="tsx" />
      </div>
    </div>
  );
};
