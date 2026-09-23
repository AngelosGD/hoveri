"use client";

import { motion } from "motion/react";

const FEATURES = [
  {
    num: "01",
    title: "Hecha con Motion",
    desc: "Cada icono lleva animaciones reales de Framer Motion en el hover, no GIFs ni trucos de CSS.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12c2-4 4-6 7-6s5 2 7 6c-2 4-4 6-7 6s-5-2-7-6z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Customisable",
    desc: "Ajusta color, tamano, duracion y easing de cada animacion para que encaje con tu interfaz.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" y1="8" x2="20" y2="8" />
        <circle cx="9" cy="8" r="2.5" fill="white" />
        <line x1="4" y1="16" x2="20" y2="16" />
        <circle cx="15" cy="16" r="2.5" fill="white" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Fusiona iconos",
    desc: "Une dos iconos en una transicion suave con morphing, para momentos unicos en tu producto.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="12" r="5" />
        <circle cx="16" cy="12" r="5" />
      </svg>
    ),
  },
];

export const Features = () => {
  return (
    <section className="mx-auto max-w-6xl px-8 py-24">
      {/* bloque editorial izquierdo */}
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Por que hoveri
          </p>
          <h2 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-zinc-900 md:text-6xl">
            Detalles pequenos.
            <br />
            <span className="italic">Grandes sensaciones.</span>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-zinc-500">
            Las buenas interfaces se sienten obvias. Las grandes se sienten
            vivas. Hoveri te da los pequenos momentos que hacen que la gente
            quiera seguir explorando.
          </p>
        </div>

        {/* 3 features en cards numeradas */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className="border-t border-zinc-200 pt-4">
                <span className="text-xs font-bold text-rose-500">{f.num}</span>
              </div>

              <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-rose-500">
                {f.icon}
              </div>

              <h3 className="mt-5 text-sm font-bold text-zinc-900">
                {f.title}
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-zinc-500">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
