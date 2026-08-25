"use client";

import { useState } from "react";

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

export default function SuggestIconForm() {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [motionValue, setMotionValue] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const rawMotion = String(data.get("motion") ?? "").trim();
    const customMotion = String(data.get("motionCustom") ?? "").trim();
    const motion =
      rawMotion === "(escribir)" ? customMotion : rawMotion;
    const payload = {
      nombre: String(data.get("nombre") ?? "").trim(),
      idea: String(data.get("idea") ?? "").trim(),
      motion,
      categoria: String(data.get("categoria") ?? "").trim(),
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
          <input
            name="categoria"
            type="text"
            placeholder="p. ej. Naturaleza"
            className={`${inputCls} mt-2`}
          />
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
          <select
            name="motion"
            value={motionValue}
            onChange={(e) => setMotionValue(e.target.value)}
            className={`${inputCls} mt-2`}
          >
            <option value="" disabled>
              Elige un movimiento
            </option>
            {MOTIONS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
        {motionValue === "(escribir)" && (
          <label className="block">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Escribe qué tipo de movimiento
            </span>
            <input
              name="motionCustom"
              type="text"
              required
              placeholder="p. ej. que gire y vibre al pasar el mouse"
              className={`${inputCls} mt-2`}
            />
          </label>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-950"
      >
        {status === "sending" ? "Enviando…" : "Enviar sugerencia"}
      </button>

      {status === "error" && (
        <p className="text-sm leading-6 text-rose-600 dark:text-rose-400">
          No se pudo enviar tu sugerencia. Inténtalo de nuevo o escríbenos a
          angelde9919@gmail.com.
        </p>
      )}
    </form>
  );
}
