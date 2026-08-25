import Link from "next/link";
import IconCard from "./icon-card";
import CoffeeIcon from "@/icons/coffee-icon";
import GitHubIcon from "@/icons/github-icon";
import { getFeaturedIcons } from "@/icons/data";

const GITHUB_URL = "https://github.com/AngelosGD/hoveri";

export default function Footer() {
  const featured = getFeaturedIcons(20);

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                hoveri
              </span>
              <span className="text-sm text-zinc-400">/</span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                iconos que se mueven con intención
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Librería abierta construida con Motion y Lucide. Cada icono tiene
              su propio movimiento.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Link
                href="/invitame-un-cafe"
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-950 bg-white px-4 py-1.5 text-sm font-medium text-zinc-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-950 hover:text-white hover:shadow-md active:translate-y-0 active:scale-[0.98] dark:border-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-zinc-950"
              >
                <CoffeeIcon size={16} className="transition-transform duration-200 group-hover:rotate-12 group-hover:scale-110" />
                Invítame un café
              </Link>
              <Link
                href="/icons"
                className="group inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:text-rose-600 hover:shadow-md hover:shadow-rose-500/10 active:translate-y-0 active:scale-[0.98] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-rose-500 dark:hover:text-rose-400"
              >
                Explorar la librería
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-rose-500">
              ¿Falta algo?
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  href="/sugerir-icono"
                  className="group inline-flex items-center gap-1.5 text-zinc-600 transition-all hover:translate-x-1 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  <span className="h-px w-0 bg-rose-500 transition-all duration-200 group-hover:w-3" />
                  Pedir un icono
                </Link>
              </li>
              <li>
                <Link
                  href="/como-se-hace"
                  className="group inline-flex items-center gap-1.5 text-zinc-600 transition-all hover:translate-x-1 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  <span className="h-px w-0 bg-rose-500 transition-all duration-200 group-hover:w-3" />
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/invitame-un-cafe"
                  className="group inline-flex items-center gap-1.5 text-zinc-600 transition-all hover:translate-x-1 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  <span className="h-px w-0 bg-rose-500 transition-all duration-200 group-hover:w-3" />
                  Invítame un café
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-medium text-rose-500">
            Últimos iconos añadidos
          </h3>
          <div className="mt-4 grid grid-cols-5 gap-1.5 md:grid-cols-10 md:gap-2">
            {featured.map((icon) => (
              <IconCard
                key={icon.file}
                file={icon.file}
                name={icon.name}
                compact
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row dark:border-zinc-800 dark:text-zinc-400">
          <p>
            creado por{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-50">
              AngelosDev
            </span>
          </p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-zinc-600 transition-all hover:translate-x-0.5 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <GitHubIcon size={14} className="transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110" />
            Código fuente en GitHub
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
