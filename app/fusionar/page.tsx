import type { Metadata } from "next";
import FusionLab from "@/components/fusion-lab";

export const metadata: Metadata = {
  title: "Fusionar - hoveri",
  description:
    "Elige dos iconos de la librería y fusiónalos: pasa el mouse y uno se transforma en el otro.",
};

export default function FusionPage() {
  return (
    <section className="border-b border-zinc-200 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <p className="font-mono text-xs uppercase tracking-widest text-rose-500">
          morfeo a tu gusto
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tighter text-zinc-950 md:text-4xl dark:text-zinc-50">
          Fusionar iconos
        </h1>
        <p className="mt-3 max-w-lg text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Toma dos iconos, asígnalos a los slots{" "}
          <span className="font-mono text-xs">A</span> y{" "}
          <span className="font-mono text-xs">B</span>, y al pasar el mouse el
          cuadro morfea de uno al otro.
        </p>

        <div className="mt-10">
          <FusionLab />
        </div>
      </div>
    </section>
  );
}