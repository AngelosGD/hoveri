"use client";

import { useState } from "react";

export default function InstallSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const blocks: { title: string; code: string }[] = [
    {
      title: "Consola",
      code: "npm install hoveri",
    },
    {
      title: "React / Next",
      code: `import { Rocket } from "hoveri";

export default function App() {
  return <Rocket size={32} color="currentColor" />;
}`,
    },
    {
      title: "Control manual",
      code: `import { useRef } from "react";
import { Rocket } from "hoveri";
// Cada icono expone startAnimation y
// stopAnimation a través del ref.
const ref = useRef<AnimatedIconHandle>(null);

<button
  onClick={() => ref.current?.startAnimation()}
  onMouseLeave={() => ref.current?.stopAnimation()}
>
  <Rocket ref={ref} size={32} />
</button>`,
    },
  ];

  const copy = async (code: string, title: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(title);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <section className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tighter text-zinc-950">
          Instalación
        </h2>
        <p className="mt-2 max-w-xl text-sm leading-7 text-zinc-600">
          Instala la librería, elige tu icono y pásale el mouse. Cada icono
          anima sus partes con un movimiento propio, sin configuración.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50"
            >
              <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-2">
                <p className="text-xs font-medium text-zinc-500">{b.title}</p>
                <button
                  type="button"
                  onClick={() => copy(b.code, b.title)}
                  className="rounded-md border border-zinc-300 bg-white px-2.5 py-1 text-xs text-zinc-700 transition-colors hover:border-zinc-500 hover:text-zinc-950"
                >
                  {copied === b.title ? "Copiado" : "Copiar"}
                </button>
              </div>
              <pre className="overflow-x-auto p-4 text-xs leading-6 text-zinc-800">
                <code>{b.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}