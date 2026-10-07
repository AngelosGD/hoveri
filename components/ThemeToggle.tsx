"use client";

import { motion } from "motion/react";

export const ThemeToggle = () => {
  const toggle = () => {
    const el = document.documentElement;
    const next = !el.classList.contains("dark");
    el.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* noop */
    }
  };

  return (
    <motion.button
      type="button"
      aria-label="Cambiar tema"
      onClick={toggle}
      className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600/80 transition-colors hover:bg-gray-100 hover:text-red-500 dark:text-gray-300/80 dark:hover:bg-gray-800 dark:hover:text-red-400"
      whileHover={{ rotate: -10, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.1 }}
    >
      {/* luna (tema claro) */}
      <svg
        className="dark:hidden"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      {/* sol (tema oscuro) */}
      <svg
        className="hidden dark:block"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </motion.button>
  );
};
