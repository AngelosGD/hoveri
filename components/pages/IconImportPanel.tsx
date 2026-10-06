"use client";

import { CodeBlock } from "@/components/CodeBlock";
import type { IconConfig } from "@/icons/library";
import type { IconMeta } from "./IconDetailPage";

type IconImportPanelProps = {
  meta: IconMeta;
  config: IconConfig;
  duration: number;
};

export const IconImportPanel = ({
  meta,
  config,
  duration,
}: IconImportPanelProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-base font-bold text-zinc-900">Importar icono</h3>
        <p className="mt-1 text-sm leading-6 text-zinc-500">
          Instala la libreria completa y toma solo{" "}
          <span className="font-semibold text-zinc-700">{meta.name}</span> con un
          import. Ideal si vas a usar varios iconos en tu proyecto.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          1 · instala la libreria
        </p>
        <CodeBlock code="npm install hoveri" label="terminal" />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          2 · importa y usa
        </p>
        <CodeBlock
          code={`import { ${meta.componentName} } from "hoveri"\n\nexport function Demo() {\n  return (\n    <${meta.componentName} size={${config.size}} duration={${duration.toFixed(2)}} />\n  )\n}`}
          label="tsx"
        />
      </div>

      <p className="text-xs leading-5 text-zinc-400">
        Los iconos usan{" "}
        <code className="font-mono text-zinc-500">currentColor</code>, asi que
        toman el color de su contenedor automaticamente.
      </p>
    </div>
  );
};
