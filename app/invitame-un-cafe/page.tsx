import type { Metadata } from "next";
import CoffeeIcon from "@/icons/coffee-icon";
import HeartIcon from "@/icons/heart-icon";
import GitHubIcon from "@/icons/github-icon";

export const metadata: Metadata = {
  title: "Invítame un café",
  description:
    "Si hoveri te ha ahorrado tiempo, invítame un café para seguir construyendo iconos.",
};

const GITHUB_URL = "https://github.com/AngelosGD/hoveri";

const tiers = [
  {
    amount: "1",
    label: "Café simple",
    body: "Un clásico. Ideal para decir 'sigue así'.",
  },
  {
    amount: "3",
    label: "Café con pan",
    body: "El extra para sostener la tarde de codear iconos.",
  },
  {
    amount: "5",
    label: "Café + propina",
    body: "Prioridad para tu icono sugerido en la lista.",
  },
] as const;

export default function InvitameUnCafePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500 dark:text-rose-400">
            <CoffeeIcon size={32} />
          </div>
          <h1 className="mt-6 text-3xl font-semibold tracking-tighter text-zinc-950 md:text-4xl dark:text-zinc-50">
            Invítame un café
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            hoveri es un proyecto abierto y se mantiene con cafés. Si la
            librería te ahorró tiempo o te sacó una sonrisa, tu granito ayuda a
            que siga creciendo.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="grid gap-4 sm:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.amount}
                className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-[0_10px_24px_-12px_rgba(244,63,94,0.25)] dark:border-white/10 dark:bg-white/[0.04] dark:backdrop-blur-xl dark:hover:border-rose-400/40"
              >
                <span className="text-3xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50">
                  ${t.amount}
                </span>
                <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {t.label}
                </p>
                <p className="mt-1 flex-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                  {t.body}
                </p>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 rounded-full border border-zinc-950 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-950 hover:text-white dark:border-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-zinc-950"
                >
                  Donar ${t.amount}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 dark:bg-white/[0.06] dark:text-zinc-300">
              <HeartIcon size={20} />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                Otras formas de apoyar
              </h2>
              <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                El apoyo más valioso es gratis: usa la librería, sugiere iconos,
                reporta bugs y comparte hoveri. Todo ayuda a que crezca.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-shadow hover:shadow-md dark:bg-white dark:text-zinc-950"
            >
              <GitHubIcon size={16} />
              Dale una estrella en GitHub
            </a>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              Gracias por estar aquí. — AngelosDev
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
