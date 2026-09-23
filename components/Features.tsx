"use client";

import { motion } from "motion/react";

const FEATURES = [
  {
    num: "01",
    title: "Hecha con Motion",
    desc: "Animaciones reales de Framer Motion en cada hover, no GIFs ni trucos de CSS.",
    preview: "motion",
  },
  {
    num: "02",
    title: "Customisable",
    desc: "Ajusta color, tamano, duracion y easing para que encaje con tu interfaz.",
    preview: "custom",
  },
  {
    num: "03",
    title: "Fusiona iconos",
    desc: "Une dos iconos en una transicion suave con morphing.",
    preview: "fusion",
  },
] as const;

const MotionPreview = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-fuchsia-600">
    <svg
      className="absolute inset-0 h-full w-full opacity-30"
      viewBox="0 0 200 200"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
    >
      <motion.path
        d="M0 140 Q50 80 100 120 T200 100"
        stroke="white"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        d="M0 160 Q50 120 100 150 T200 130"
        stroke="white"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
      />
    </svg>
    <motion.div
      className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/20 backdrop-blur-sm"
      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />
    <span className="absolute left-4 top-4 text-[10px] font-bold uppercase tracking-widest text-white/70">
      motion
    </span>
  </div>
);

const CustomPreview = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-orange-400 to-amber-300">
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-3 rounded-2xl bg-white/95 p-4 shadow-lg">
      <div className="flex gap-2">
        {["bg-rose-500", "bg-orange-400", "bg-violet-500", "bg-emerald-500"].map(
          (c) => (
            <motion.span
              key={c}
              className={`h-5 w-5 rounded-full ${c}`}
              whileHover={{ scale: 1.3 }}
            />
          ),
        )}
      </div>
      <div className="h-1.5 w-36 rounded-full bg-zinc-200">
        <motion.div
          className="h-full w-2/3 rounded-full bg-rose-500"
          initial={{ width: "0%" }}
          whileInView={{ width: "66%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
      <div className="h-1.5 w-36 rounded-full bg-zinc-200">
        <motion.div
          className="h-full w-1/3 rounded-full bg-violet-500"
          initial={{ width: "0%" }}
          whileInView={{ width: "40%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </div>
    <span className="absolute left-4 top-4 text-[10px] font-bold uppercase tracking-widest text-white/80">
      editor
    </span>
  </div>
);

const FusionPreview = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-zinc-100">
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 text-zinc-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
        </svg>
      </div>
      <span className="text-lg font-bold text-zinc-300">+</span>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 text-zinc-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4 L14 10 L20 12 L14 14 L12 20 L10 14 L4 12 L10 10 Z" />
        </svg>
      </div>
    </div>
    <span className="rounded-full bg-zinc-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
      Proximamente
    </span>
  </div>
);

const PREVIEWS = {
  motion: MotionPreview,
  custom: CustomPreview,
  fusion: FusionPreview,
} as const;

export const Features = () => {
  return (
    <section className="mx-auto max-w-6xl px-8 py-24">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        {/* bloque editorial izquierdo */}
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

        {/* 3 cards con preview de fondo + texto encima */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
          {FEATURES.map((f, i) => {
            const Preview = PREVIEWS[f.preview];
            return (
              <motion.div
                key={f.num}
                className="relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
              >
                {/* preview de fondo */}
                <Preview />

                {/* scrim + texto encima */}
                <div className="relative z-10 bg-gradient-to-t from-white via-white/95 to-transparent p-5 pt-12">
                  <span className="text-xs font-bold text-rose-500">
                    {f.num}
                  </span>
                  <h3 className="mt-2 text-sm font-bold text-zinc-900">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-zinc-500">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
