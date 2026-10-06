"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import type { IconConfig } from "@/icons/library";
import type { IconMeta } from "./IconDetailPage";

type IconStepsPanelProps = {
  meta: IconMeta;
  source: string;
  config: IconConfig;
  duration: number;
};

const makeSteps = (
  meta: IconMeta,
  source: string,
  config: IconConfig,
  duration: number,
) => [
  {
    num: "01",
    title: "Instala la dependencia",
    desc: "Los iconos se animan con motion, la unica dependencia que necesitas en tu proyecto.",
    label: "terminal",
    code: "npm install motion",
  },
  {
    num: "02",
    title: "Crea la interfaz",
    desc: "Cada icono expone tres props: size para el tamano, duration para la velocidad de la animacion y className para tus estilos.",
    label: "tipos",
    code: `type ${meta.componentName}Props = {\n  size?: number\n  className?: string\n  duration?: number\n}`,
  },
  {
    num: "03",
    title: "Pega el codigo del icono",
    desc: "El componente completo, tal cual vive en la libreria. Guardalo como archivo .tsx y ya.",
    label: `${meta.fileName}.tsx`,
    code: source.trimEnd(),
  },
  {
    num: "04",
    title: "Importa y usa",
    desc: "Listo. El icono se anima solo al pasar el cursor y usa el color de su contenedor.",
    label: "tsx",
    code: `import { ${meta.componentName} } from "@/icons/${meta.fileName}"\n\nexport function Demo() {\n  return (\n    <${meta.componentName} size={${config.size}} duration={${duration.toFixed(2)}} />\n  )\n}`,
  },
];

export const IconStepsPanel = ({
  meta,
  source,
  config,
  duration,
}: IconStepsPanelProps) => {
  const [step, setStep] = useState(0);
  const steps = useMemo(
    () => makeSteps(meta, source, config, duration),
    [meta, source, config, duration],
  );
  const current = steps[step];
  const isFirst = step === 0;
  const isLast = step === steps.length - 1;

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3 className="text-base font-bold text-zinc-900">
          Codigo del icono
        </h3>
        <p className="mt-1 text-sm leading-6 text-zinc-500">
          De cero a funcionando en {steps.length} pasos: dependencia, interfaz,
          el codigo fuente y como usarlo.
        </p>
      </div>

      {/* progreso */}
      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <button
            key={s.num}
            type="button"
            onClick={() => setStep(i)}
            aria-label={`Paso ${s.num}: ${s.title}`}
            className={`h-8 rounded-lg px-3 font-mono text-xs font-bold transition-all ${
              i === step
                ? "bg-zinc-900 text-white"
                : i < step
                  ? "bg-emerald-100 text-emerald-600"
                  : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600"
            }`}
          >
            {s.num}
          </button>
        ))}
        <div className="ml-2 h-1 flex-1 overflow-hidden rounded-full bg-zinc-100">
          <motion.div
            className="h-full rounded-full bg-rose-500"
            initial={false}
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* paso actual */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.18 }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-xs font-bold text-rose-500">
              {current.num}
            </span>
            <div>
              <h4 className="text-sm font-bold text-zinc-900">
                {current.title}
              </h4>
              <p className="mt-1 text-xs leading-5 text-zinc-500">
                {current.desc}
              </p>
            </div>
          </div>

          <CodeBlock
            code={current.code}
            label={current.label}
            maxHeight={step === 2 ? "22rem" : undefined}
          />
        </motion.div>
      </AnimatePresence>

      {/* navegacion */}
      <div className="flex items-center justify-between border-t border-zinc-200 pt-4">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={isFirst}
          className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-zinc-200 disabled:hover:text-zinc-600"
        >
          ← anterior
        </button>
        <span className="font-mono text-[11px] text-zinc-400">
          paso {step + 1} de {steps.length}
        </span>
        {isLast ? (
          <button
            type="button"
            onClick={() => setStep(0)}
            className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-rose-500"
          >
            empezar de nuevo ↺
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
            className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-rose-500"
          >
            siguiente →
          </button>
        )}
      </div>
    </div>
  );
};
