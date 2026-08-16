import Link from "next/link";
import HeartIcon from "@/icons/heart-icon";
import { getIconCount } from "@/icons/data";

const GITHUB_URL = "https://github.com/AngelosGD/hoveri";

const features = [
  {
    title: "Componentes React",
    description:
      "Cada icono es un componente editable con Motion. Tómalo, modifícalo y hazlo tuyo.",
    badge: "<Motion />",
  },
  {
    title: "Se mueve con intención",
    description:
      "Animaciones de hover con resorte, no decoración. El movimiento comunica.",
    badge: "hover",
  },
  {
    title: "Construido con Lucide",
    description:
      "Trazo de Lucide, una librería libre y abierta. Los iconos son tuyos para siempre.",
    badge: "MIT",
  },
] as const;

export default function Home() {
  const iconCount = getIconCount();

  return (
    <main className="flex flex-1 flex-col">
      <header className="flex items-center justify-between border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur">
        <Link href="/" className="flex items-center gap-2">
          <HeartIcon size={20} className="text-rose-500" />
          <span className="text-sm font-semibold tracking-tight text-zinc-950">
            hoveri
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="#features"
            className="hidden text-zinc-600 transition-colors hover:text-zinc-950 sm:block"
          >
            Librería
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-200 px-4 py-1.5 font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:text-zinc-950"
          >
            GitHub
          </a>
        </nav>
      </header>

      <section className="flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-24 text-center">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="font-medium">Open source</span>
        </a>

        <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight tracking-tighter text-zinc-950 md:text-6xl">
          Iconos que se mueven
          <br />
          con intención
        </h1>

        <p className="mt-5 max-w-xl text-center text-base leading-7 text-zinc-600">
          Librería de iconos animados para React y Next.js, construida con Motion
          y Lucide. Lista para instalar, copiar o personalizar.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white transition-shadow hover:shadow-md"
          >
            Ver en GitHub
          </a>
          <a
            href="#features"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:text-zinc-950"
          >
            Conocer la librería
          </a>
        </div>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-16 flex items-center justify-center rounded-full border border-zinc-200 bg-white px-12 py-10 shadow-sm transition-colors hover:border-rose-200"
          aria-label={`Ver el icono de corazón en ${GITHUB_URL}`}
        >
          <HeartIcon
            size={72}
            className="text-rose-500 transition-transform group-hover:scale-105"
          />
        </a>
        <p className="mt-4 font-mono text-xs text-zinc-400">pasa el mouse</p>
      </section>

      <section id="features" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tighter text-zinc-950 md:text-4xl">
                Todo lo que necesitas para dar vida a tu interfaz
              </h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-zinc-600">
                {iconCount} icono disponible hoy y creciendo. Cada uno animado,
                accesible y listo para producción.
              </p>

              <div className="mt-10 flex h-40 items-center justify-center rounded-2xl border border-zinc-200 bg-white">
                <HeartIcon size={56} className="text-rose-500" />
              </div>
            </div>

            <div className="flex flex-col justify-center divide-y divide-zinc-200 border-t border-zinc-200">
              {features.map((feature) => (
                <div key={feature.title} className="py-6 first:pt-8 last:pb-0">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-rose-500">
                      {feature.badge}
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-zinc-950">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-zinc-500">
            hoveri <span className="text-zinc-300">/</span> icons that move with
            intent
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
          >
            MIT License en GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}