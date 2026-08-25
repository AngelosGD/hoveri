import Link from "next/link";
import HeartIcon from "@/icons/heart-icon";
import GitHubIcon from "@/icons/github-icon";
import ThemeToggle from "./theme-toggle";

const GITHUB_URL = "https://github.com/AngelosGD/hoveri";

const navLinkCls =
  "group relative text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <Link
        href="/"
        className="flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        <HeartIcon size={20} className="text-rose-500 transition-transform duration-300 group-hover:rotate-12" />
        <span className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          hoveri
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link href="/icons" className={navLinkCls}>
          Iconos
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-rose-500 transition-transform duration-200 group-hover:scale-x-100" />
        </Link>
        <Link href="/fusionar" className={navLinkCls}>
          Fusionar
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-rose-500 transition-transform duration-200 group-hover:scale-x-100" />
        </Link>
        <Link href="/como-se-hace" className={navLinkCls}>
          Cómo se hace
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-rose-500 transition-transform duration-200 group-hover:scale-x-100" />
        </Link>
        <Link href="/sugerir-icono" className={navLinkCls}>
          Sugerir un icono
          <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-rose-500 transition-transform duration-200 group-hover:scale-x-100" />
        </Link>
        <ThemeToggle />
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 rounded-full border border-zinc-950 bg-white px-4 py-1.5 font-medium text-zinc-800 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-950 hover:text-white hover:shadow-md hover:shadow-zinc-900/10 active:translate-y-0 active:scale-[0.98] dark:border-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-zinc-950 dark:hover:shadow-white/10"
        >
          <GitHubIcon
            size={16}
            className="transition-transform duration-200 group-hover:rotate-6 group-hover:scale-110"
          />
          Código fuente
        </a>
      </nav>
    </header>
  );
}