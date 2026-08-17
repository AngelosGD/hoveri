import Link from "next/link";
import HeartIcon from "@/icons/heart-icon";
import GitHubIcon from "@/icons/github-icon";
import IconCard from "@/components/icon-card";
import FeaturesSection from "@/components/features-section";
import FloatingIcons from "@/components/floating-icons";
import { ICON_LIST } from "@/icons/data";

const GITHUB_URL = "https://github.com/AngelosGD/hoveri";

export default function Home() {
  const showcase = ICON_LIST.slice(0, 10);

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-28 text-center">
        <FloatingIcons />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-100/70 blur-3xl dark:bg-rose-500/10" />
          <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-zinc-100 blur-3xl dark:bg-zinc-800/40" />
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="font-medium">Código abierto</span>
        </a>

        <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tighter text-zinc-950 md:text-6xl dark:text-zinc-50">
          Iconos que se mueven
          <br />
          con intención
        </h1>

        <p className="mt-5 max-w-xl text-center text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Cada icono lleva su propia animación: un corazón que late con
          destello, un café que suelta vapor, un avión que despega. Construidos
          con Motion y Lucide.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-shadow hover:shadow-md dark:bg-white dark:text-zinc-950"
          >
            <GitHubIcon size={16} />
            Ver en GitHub
          </a>
          <Link
            href="/icons"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-800 transition-colors hover:border-rose-300 hover:text-rose-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-rose-500 dark:hover:text-rose-400"
          >
            Ir a la librería
          </Link>
        </div>

        <div className="mt-12 flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
          <HeartIcon size={14} className="text-rose-400" />
          <span>pasa el mouse, cada icono se mueve a su manera</span>
        </div>
      </section>

      <FeaturesSection />

      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tighter text-zinc-950 md:text-4xl dark:text-zinc-50">
                Todo lo que necesitas para dar vida a tu interfaz
              </h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-zinc-600 dark:text-zinc-400">
                {ICON_LIST.length} iconos disponibles y creciendo. Cada uno
                animado, accesible y listo para producción.
              </p>

              <Link
                href="/icons"
                className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-zinc-950 bg-white px-6 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-950 hover:text-white dark:border-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-zinc-950"
              >
                Ir a la librería
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
              {showcase.map((icon) => (
                <IconCard key={icon.file} file={icon.file} name={icon.name} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}