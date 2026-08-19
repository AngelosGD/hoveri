import type { Metadata } from "next";
import Link from "next/link";
import WandIcon from "@/icons/wand-sparkles-icon";
import SuggestIconForm from "@/components/suggest-icon-form";

export const metadata: Metadata = {
  title: "Sugerir un icono",
  description:
    "¿Falta un icono en hoveri? Cuéntanos qué icono necesitas y lo agregamos a la librería.",
};

export default function SuggestIconPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-rose-500">
            Sugerir un icono
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tighter text-zinc-950 md:text-4xl dark:text-zinc-50">
            ¿Falta un icono en la librería?
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Cuéntanos qué icono necesitas y con qué movimiento lo imaginas. Lo
            revisamos y si suma, lo agregamos a hoveri.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="mb-8 flex items-start gap-4 rounded-2xl border border-rose-200 bg-rose-50 p-6 dark:border-rose-500/30 dark:bg-rose-500/10">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500 dark:text-rose-400">
              <WandIcon size={20} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Así funciona
              </h2>
              <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                Llena el formulario y nos llegará tu sugerencia directo al
                correo. Si hay varias personas pidiendo lo mismo, sube de
                prioridad.
              </p>
            </div>
          </div>

          <SuggestIconForm />

          <p className="mt-8 text-center text-xs leading-5 text-zinc-400 dark:text-zinc-500">
            ¿Prefieres reportar un problema? Abre un issue en{" "}
            <Link
              href="https://github.com/AngelosGD/hoveri/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 underline-offset-2 hover:underline dark:text-zinc-400"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
