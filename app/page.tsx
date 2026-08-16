import Link from "next/link";
import HeartIcon from "@/icons/heart-icon";
import IconCard from "@/components/icon-card";
import { getFeaturedIcons, ICON_LIST } from "@/icons/data";

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
  const featured = getFeaturedIcons(5);
  const recent = ICON_LIST.slice(0, 10);

  return (
    <main className="flex flex-1 flex-col">
      <section className="flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-24 text-center">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm text-zinc-600 transition-colors hover:border-zinc-300 hover:text-zinc-900"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="font-medium">Código abierto</span>
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
          <Link
            href="/icons"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:text-zinc-950"
          >
            Ir a la librería
          </Link>
        </div>

        <div className="mt-16 rounded-2xl border border-zinc-900 bg-white p-8">
          <HeartIcon size={72} className="text-rose-500" />
        </div>
        <p className="mt-4 font-mono text-xs text-zinc-400">pasa el mouse</p>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tighter text-zinc-950 md:text-4xl">
                Últimos iconos añadidos
              </h2>
              <p className="mt-3 text-base leading-7 text-zinc-600">
                Los 5 más recientes de la librería.
              </p>
            </div>
            <Link
              href="/icons"
              className="hidden shrink-0 text-sm font-medium text-zinc-700 underline-offset-4 hover:underline sm:block"
            >
              Ver todos
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {featured.map((icon) => (
              <IconCard key={icon.file} file={icon.file} name={icon.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tighter text-zinc-950 md:text-4xl">
                Todo lo que necesitas para dar vida a tu interfaz
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {recent.map((icon) => (
                  <IconCard key={icon.file} file={icon.file} name={icon.name} />
                ))}
              </div>
              <Link
                href="/icons"
                className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-300 hover:text-zinc-950"
              >
                Ir a la librería
              </Link>
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
    </main>
  );
}