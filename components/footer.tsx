import Link from "next/link";
import IconCard from "./icon-card";
import GitHubIcon from "@/icons/github-icon";
import { getFeaturedIcons } from "@/icons/data";

const GITHUB_URL = "https://github.com/AngelosGD/hoveri";

export default function Footer() {
  const featured = getFeaturedIcons(5);

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight text-zinc-950">
                hoveri
              </span>
              <span className="text-sm text-zinc-400">/</span>
              <span className="text-sm text-zinc-500">
                iconos que se mueven con intención
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600">
              Librería abierta construida con Motion y Lucide. Cada icono tiene
              su propio movimiento.
            </p>
            <Link
              href="/icons"
              className="mt-6 inline-flex items-center rounded-full border border-zinc-950 bg-white px-4 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-950 hover:text-white"
            >
              Explorar la librería
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-medium text-rose-500">
              Últimos iconos añadidos
            </h3>
            <div className="mt-4 grid grid-cols-5 gap-3">
              {featured.map((icon) => (
                <IconCard key={icon.file} file={icon.file} name={icon.name} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row">
          <p>creado por <span className="font-medium text-zinc-900">AngelosDev</span></p>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-950"
          >
            <GitHubIcon size={14} />
            Código fuente en GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}