"use client";

import { motion } from "motion/react";
import HeartIcon from "@/icons/heart-icon";
import CodeIcon from "@/icons/code-icon";
import GitHubIcon from "@/icons/github-icon";
import RocketIcon from "@/icons/rocket-icon";

const features = [
  {
    icon: HeartIcon,
    title: "Movimiento con intención",
    description:
      "Cada icono anima sus propias partes: un corazón que late, un café que suelta vapor, una brújula que gira. Nada de sacudidas genéricas.",
  },
  {
    icon: CodeIcon,
    title: "Componentes React",
    description:
      "Cada icono es un componente editable con Motion. Cópialo, modifícalo y hazlo tuyo en segundos.",
  },
  {
    icon: GitHubIcon,
    title: "Código abierto",
    description:
      "Librería libre construida con Lucide. Los iconos son tuyos para siempre, listos para producción.",
  },
  {
    icon: RocketIcon,
    title: "Instalación simple",
    description:
      "npm, pnpm, yarn o bun. Elige tu icono, cópialo y listo. La animación viaja incluida.",
  },
] as const;

export default function FeaturesSection() {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50/80 dark:border-zinc-800 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl font-semibold tracking-tighter text-zinc-950 md:text-3xl dark:text-zinc-50">
            Características
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            Iconos pensados para interfaces reales: componentes, animaciones y
            herramientas en un solo paquete.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-[0_10px_24px_-12px_rgba(244,63,94,0.25)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none dark:backdrop-blur-xl dark:hover:border-rose-400/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 transition-colors group-hover:border-rose-200 group-hover:bg-rose-50 group-hover:text-rose-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-zinc-100 dark:group-hover:border-rose-400/40 dark:group-hover:bg-rose-500/10 dark:group-hover:text-rose-400">
                <feature.icon size={28} />
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}