import { motion } from "motion/react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <header className="border-b-2 border-b-gray-200 w-full p-4 sticky top-0  flex">
        <nav className="flex w-full items-center pl-50">
          <p className="text-3xl font-semibold text-gray-800">
            Hoveri<span className="text-red-500 ">.</span>
          </p>

          <div className="flex items-center justify-center ml-100 gap-10 font-sans text-gray-600/80 font-semibold">
            <motion.div
              whileHover={{ rotate: -1 }}
              whileTap={{ rotate: -5, scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <Link
                href="/icons"
                className="hover:text-red-500 transition ease-in"
              >
                Explorar
              </Link>
            </motion.div>
            <motion.a
              className="hover:text-red-500 transition ease-in"
              whileHover={{ rotate: 3 }}
              whileTap={{ rotate: 5, scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              Uso
            </motion.a>
            <motion.a
              className="hover:text-red-500 transition ease-in"
              whileHover={{ rotate: -2 }}
              whileTap={{ rotate: -5, scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              Sugerir icono
            </motion.a>
          </div>

          {/* Botones al final del navbar */}
          <div className="ml-auto flex items-center gap-4 pr-50">
            <motion.button
              type="button"
              aria-label="Cambiar tema"
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-600/80 transition-colors hover:bg-gray-100 hover:text-red-500"
              whileHover={{ rotate: -10, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.1 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </motion.button>

            <motion.a
              href="/invitame-un-cafe"
              className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              Invítame un café ☕
            </motion.a>
          </div>
        </nav>
      </header>
    </>
  );
};
