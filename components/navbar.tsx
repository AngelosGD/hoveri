import Link from "next/link";
import HeartIcon from "@/icons/heart-icon";
import GitHubIcon from "@/icons/github-icon";
import ThemeToggle from "./theme-toggle";

const GITHUB_URL = "https://github.com/AngelosGD/hoveri";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-200 bg-white/80 px-6 py-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <Link href="/" className="flex items-center gap-2">
        <HeartIcon size={20} className="text-rose-500" />
        <span className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          hoveri
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/icons"
          className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          Iconos
        </Link>
        <ThemeToggle />
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-zinc-950 bg-white px-4 py-1.5 font-medium text-zinc-800 transition-all hover:bg-zinc-950 hover:text-white dark:border-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-white dark:hover:text-zinc-950"
        >
          <GitHubIcon size={16} />
          Código fuente
        </a>
      </nav>
    </header>
  );
}