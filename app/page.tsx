import Link from "next/link";
import GitHubIcon from "@/icons/github-icon";
import IconCard from "@/components/icon-card";
import FeaturesSection from "@/components/features-section";
import FloatingIcons from "@/components/floating-icons";
import MorphDemo from "@/components/morph-demo";
import Reveal from "@/components/reveal";
import { ICON_LIST } from "@/icons/data";

const GITHUB_URL = "https://github.com/AngelosGD/hoveri";

export default function Home() {
  const showcase = ICON_LIST.slice(0, 10);

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative flex min-h-[82dvh] flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-16 text-center md:pt-28 md:pb-20">
        <FloatingIcons />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-100/70 blur-3xl dark:bg-rose-500/10" />
          <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-zinc-100 blur-3xl dark:bg-zinc-800/40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:opacity-20" />
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:text-zinc-900 hover:shadow-sm active:translate-y-0 active:scale-[0.98] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 transition-transform duration-200 group-hover:scale-125" />
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
            className="group flex h-11 items-center gap-2 rounded-full bg-zinc-950 px-6 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/15 active:translate-y-0 active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 dark:hover:shadow-white/10"
          >
            <GitHubIcon size={16} className="transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110" />
            Ver en GitHub
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
          <Link
            href="/icons"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-600 hover:shadow-md hover:shadow-rose-500/10 active:translate-y-0 active:scale-[0.98] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-rose-500 dark:hover:text-rose-400"
          >
            Ir a la librería
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <div className="mt-12">
          <MorphDemo />
        </div>
      </section>

      <FeaturesSection />

      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
            <Reveal>
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
                  className="group mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-950 bg-white px-6 text-sm font-medium text-zinc-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-950 hover:text-white hover:shadow-md active:translate-y-0 active:scale-[0.98] dark:border-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-zinc-950"
                >
                  Ir a la librería
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {showcase.map((icon) => (
                  <IconCard key={icon.file} file={icon.file} name={icon.name} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}