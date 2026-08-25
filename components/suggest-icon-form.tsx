"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { getCategories } from "@/icons/data";

const MOTIONS = [
  "Latido / pulso",
  "Giro / rotación",
  "Flotar / levitar",
  "Rebote / elasticidad",
  "Escala / zoom",
  "Balanceo / vaivén",
  "Temblor / vibración",
  "Deslizamiento / traslado",
  "Aparición / desvanecimiento",
  "Dibujado / trazado",
  "Ondulación",
  "Parpadeo",
  "Brillo / destello",
  "Otra",
  "(escribir)",
] as const;

const inputCls =
  "w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-rose-500 dark:focus:bg-zinc-900 dark:focus:ring-rose-500/10";

const CATEGORIES = getCategories();

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-zinc-400"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </motion.svg>
  );
}

function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  placeholder: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center justify-between rounded-xl border bg-zinc-50 px-4 py-3 text-left text-sm outline-none transition-all dark:bg-zinc-900 ${
          open
            ? "border-rose-400 bg-white ring-4 ring-rose-100 dark:border-rose-500 dark:bg-zinc-900 dark:ring-rose-500/10"
            : "border-zinc-200 hover:border-zinc-300 hover:bg-white dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
        }`}
      >
        <span
          className={
            value
              ? "text-zinc-900 dark:text-zinc-100"
              : "text-zinc-400 dark:text-zinc-500"
          }
        >
          {value || placeholder}
        </span>
        <ChevronIcon open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
            role="listbox"
            className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-zinc-200 bg-white p-1.5 shadow-xl shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/30"
          >
            {options.map((opt) => {
              const active = value === opt;
              return (
                <li key={opt} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      active
                        ? "bg-rose-500 text-white dark:bg-rose-500"
                        : "text-zinc-700 hover:bg-zinc-50 active:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:active:bg-zinc-700/50"
                    }`}
                  >
                    <span className="pr-2">{opt}</span>
                    {active && (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SuggestIconForm() {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [motionValue, setMotionValue] = useState("");
  const [categoriaValue, setCategoriaValue] = useState("");
  const [customMotion, setCustomMotion] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const motion =
      motionValue === "(escribir)" ? customMotion.trim() : motionValue.trim();
    const payload = {
      nombre: String(data.get("nombre") ?? "").trim(),
      idea: String(data.get("idea") ?? "").trim(),
      motion,
      categoria: categoriaValue.trim(),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(err?.error ?? "Error al enviar");
      }
      setSent(true);
    } catch {
      setStatus("error");
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-rose-200 bg-rose-50 p-8 text-center dark:border-rose-500/30 dark:bg-rose-500/10">
        <p className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
          Sugerencia enviada
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          ¡Gracias! Recibimos tu idea y la revisaremos. Si tiene sentido, la
          agregamos a la librería.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.04] dark:backdrop-blur-xl"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            Nombre del icono
          </span>
          <input
            name="nombre"
            type="text"
            required
            placeholder="p. ej. mariposa"
            className={`${inputCls} mt-2`}
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            Categoría sugerida
          </span>
          <div className="mt-2">
            <CustomSelect
              value={categoriaValue}
              onChange={setCategoriaValue}
              options={CATEGORIES}
              placeholder="Elige una categoría"
            />
          </div>
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
          Qué representa / tu idea
        </span>
        <textarea
          name="idea"
          required
          rows={4}
          placeholder="Cuéntanos qué transmite el icono y en qué contexto lo usarías."
          className={`${inputCls} mt-2 resize-none`}
        />
      </label>

      <div className="space-y-3">
        <label className="block">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            Movimiento sugerido
          </span>
          <div className="mt-2">
            <CustomSelect
              value={motionValue}
              onChange={setMotionValue}
              options={MOTIONS}
              placeholder="Elige un movimiento"
            />
          </div>
        </label>
        <AnimatePresence>
          {motionValue === "(escribir)" && (
            <motion.label
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="block overflow-hidden"
            >
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Escribe qué tipo de movimiento
              </span>
              <input
                name="motionCustom"
                type="text"
                required
                value={customMotion}
                onChange={(e) => setCustomMotion(e.target.value)}
                placeholder="p. ej. que gire y vibre al pasar el mouse"
                className={`${inputCls} mt-2`}
              />
            </motion.label>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={status !== "sending" ? { scale: 1.01, y: -1 } : undefined}
        whileTap={status !== "sending" ? { scale: 0.99, y: 0 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className="group relative w-full overflow-hidden rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:shadow-lg hover:shadow-zinc-900/10 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-950 dark:hover:shadow-white/10"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {status === "sending" ? (
            <>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white dark:border-zinc-300/30 dark:border-t-zinc-950"
              />
              Enviando…
            </>
          ) : (
            <>
              Enviar sugerencia
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </>
          )}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-rose-500/10 to-rose-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.button>

      {status === "error" && (
        <p className="text-sm leading-6 text-rose-600 dark:text-rose-400">
          No se pudo enviar tu sugerencia. Inténtalo de nuevo o escríbenos a
          angelde9919@gmail.com.
        </p>
      )}
    </form>
  );
}
