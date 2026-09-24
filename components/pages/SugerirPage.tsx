"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { SparkleIcon } from "@/icons/sparkle-icon";

const CONTACT_EMAIL = "angelde9919@gmail.com";

const CATEGORY_OPTIONS = ["Essentials", "Development", "Interface", "Media"];

export const SugerirPage = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Essentials");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");
  const [sent, setSent] = useState(false);

  const canSend = name.trim().length > 0 && desc.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSend) return;

    const subject = encodeURIComponent(`Sugerencia de icono: ${name}`);
    const body = encodeURIComponent(
      [
        `Nombre del icono: ${name}`,
        `Categoria: ${category}`,
        "",
        "Que deberia hacer:",
        desc,
        "",
        author ? `Enviado por: ${author}` : "Enviado por: anonimo",
      ].join("\n"),
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  const inputCls =
    "w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-rose-300 focus:ring-2 focus:ring-rose-100";

  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        {/* volver */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            Volver a Hoveri
          </Link>
        </motion.div>

        {/* header */}
        <motion.div
          className="mt-24 max-w-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            Haz crecer la libreria
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-zinc-900 md:text-7xl">
            Sugiere un
            <br />
            <span className="text-rose-500">icono.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-500">
            Tienes una idea que haria tu interfaz sentir mas viva? Cuentanos lo
            que necesitas y lo agregaremos a la lista.
          </p>
        </motion.div>

        {/* body: form + card */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* form */}
          <motion.form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-zinc-200 bg-white p-6 md:p-8 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <div className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-zinc-800">
                  Nombre del icono
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="ej. Calendar check"
                  className={inputCls}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-zinc-800">
                  Categoria
                </span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`${inputCls} appearance-none`}
                >
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-zinc-800">
                  Que deberia hacer?
                </span>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows={5}
                  placeholder="Describe el icono y el movimiento que imaginas..."
                  className={`${inputCls} resize-y`}
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-sm font-bold text-zinc-800">
                  Tu nombre
                </span>
                <span className="text-xs text-zinc-400">opcional</span>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Angelos"
                  className={inputCls}
                />
              </label>

              <button
                type="submit"
                disabled={!canSend}
                className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-rose-500 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {sent ? "¡Listo!" : "Enviar sugerencia"}
                <span aria-hidden>↗</span>
              </button>
            </div>
          </motion.form>

          {/* card nota */}
          <motion.aside
            className="flex flex-col justify-between rounded-3xl bg-[#111111] p-7 md:p-8 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <div>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500 text-white">
                <SparkleIcon size={24} duration={0.55} />
              </span>

              <p className="mt-8 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
                Una nota
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white">
                Hecho para los detalles.
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Cada sugerencia se revisa con cuidado. Las mejores ideas se
                vuelven parte de Hoveri y se comparten con toda la comunidad.
              </p>
            </div>

            <div className="mt-10 border-t border-zinc-800 pt-5">
              <p className="text-sm text-zinc-500">
                Sin cuenta necesaria. Solo una idea con ganas.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
};
