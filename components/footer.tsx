import Link from "next/link";

const GITHUB_URL = "https://github.com/AngelosGD/hoveri";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight text-zinc-950">
              hoveri
            </span>
            <span className="text-sm text-zinc-400">/</span>
            <span className="text-sm text-zinc-500">
              iconos que se mueven con intención
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Inicio
            </Link>
            <Link
              href="/icons"
              className="text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Iconos
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 transition-colors hover:text-zinc-950"
            >
              Código fuente
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row">
          <p>Librería abierta construida con Motion y Lucide.</p>
          <p>
            creado por <span className="font-medium text-zinc-900">AngelosDev</span>
          </p>
        </div>
      </div>
    </footer>
  );
}