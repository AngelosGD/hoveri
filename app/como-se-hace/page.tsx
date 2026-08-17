import type { Metadata } from "next";
import Link from "next/link";
import HeartIcon from "@/icons/heart-icon";
import CodeIcon from "@/icons/code-icon";
import RocketIcon from "@/icons/rocket-icon";
import ReactIcon from "@/icons/react-icon";
import GitHubIcon from "@/icons/github-icon";
import DownloadIcon from "@/icons/download-icon";

export const metadata: Metadata = {
  title: "Cómo se hace",
  description:
    "El proceso detrás de hoveri: de un trazo Lucide a un componente animado con Motion. Simple y sin misterio.",
};

const steps = [
  {
    n: "1",
    title: "Elige un icono",
    body: "Partimos de un trazado SVG de Lucide, limpio y accesible. Sin rellenos raros ni formas rotas.",
  },
  {
    n: "2",
    title: "Dale un movimiento",
    body: "Con Motion animamos solo las partes que importan: un corazón late, un café suelta vapor, una brújula gira. Movimiento con intención, no sacudidas.",
  },
  {
    n: "3",
    title: "Envuélvelo en un componente",
    body: "Cada icono queda dentro de un componente React con un ref propio. Anima al pasar el mouse, o controla tú mismo cuándo empieza.",
  },
  {
    n: "4",
    title: "Publica y úsalo",
    body: "Se exporta en el paquete hoveri. Instálalo, impórtalo y pásale el mouse. La animación viaja incluida.",
  },
] as const;

const libs = [
  {
    icon: ReactIcon,
    name: "React",
    role: "Los iconos son componentes. Cada uno se renderiza, recibe props y responde a eventos como cualquier componente.",
  },
  {
    icon: HeartIcon,
    name: "Motion",
    role: "El motor de animación. Define trayectorias, escalas y opacidades de forma declarativa, con soporte de spring y de reduced motion.",
  },
  {
    icon: CodeIcon,
    name: "Lucide",
    role: "La base gráfica. Todos los trazados SVG parten de Lucide, una librería de iconos abierta con buena accesibilidad.",
  },
] as const;

const GITHUB_URL = "https://github.com/AngelosGD/hoveri";

export default function ComoSeHacePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b border-zinc-200 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <p className="font-mono text-xs uppercase tracking-widest text-rose-500">
            Cómo se hace
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tighter text-zinc-950 md:text-4xl dark:text-zinc-50">
            De un trazo a un icono que se mueve
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            La librería es sencilla por dentro: trazados de Lucide, animaciones
            de Motion y un componente React por cada icono. Así funciona el
            proceso, sin misterio.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50">
            El proceso
          </h2>
          <div className="mt-8 space-y-6">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500/10 font-mono text-sm font-semibold text-rose-500 dark:text-rose-400">
                  {s.n}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800/60 dark:bg-zinc-900/50 dark:backdrop-blur-xl dark:[background-image:linear-gradient(rgba(255,255,255,0.04),rgba(255,255,255,0))]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50">
            Qué hay dentro
          </h2>
          <div className="mt-8 grid gap-4">
            {libs.map((lib) => (
              <div
                key={lib.name}
                className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.04] dark:backdrop-blur-xl"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-100">
                  <lib.icon size={24} />
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                    {lib.name}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {lib.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-semibold tracking-tighter text-zinc-950 dark:text-zinc-50">
            Empieza en un minuto
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            No necesitas entender el proceso interno para usarlo. Con tres
            comandos ya tienes un icono animado en pantalla.
          </p>
          <pre className="mt-6 overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-5 font-mono text-sm leading-7 text-zinc-800 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300">
            <code>{`npm install hoveri

import { Rocket } from "hoveri";

export function App() {
  return <Rocket size={32} />;
}`}</code>
          </pre>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/icons"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-shadow hover:shadow-md dark:bg-white dark:text-zinc-950"
            >
              <DownloadIcon size={16} />
              Ir a la librería
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:text-white"
            >
              <GitHubIcon size={16} />
              Ver el código fuente
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
