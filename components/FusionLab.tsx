"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useRef, useState } from "react";
import { ICON_LIST } from "@/icons/library";
import type { IconConfig, LibraryIcon } from "@/icons/library";
import { IconEditor } from "./IconEditor";

const FUSION_ACCENT: Record<string, string> = {
  sparkle: "#f43f5e",
  heart: "#fb7185",
  code: "#10b981",
};

type Slot = "left" | "right";
type Configs = Record<string, IconConfig>;

const defaultFusionConfigs = (): Configs =>
  Object.fromEntries(
    ICON_LIST.map((i) => [
      i.id,
      {
        ...i.defaultConfig,
        color: FUSION_ACCENT[i.id] ?? i.defaultConfig.color,
      },
    ]),
  );

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
};

const buildFusionCode = (
  a: LibraryIcon,
  b: LibraryIcon,
  configA: IconConfig,
  configB: IconConfig,
) => {
  const durA = (a.baseDuration / configA.speed).toFixed(2);
  const durB = (b.baseDuration / configB.speed).toFixed(2);
  return `import { ${a.componentName} } from "@/icons/${a.fileName}";
import { ${b.componentName} } from "@/icons/${b.fileName}";
import { AnimatePresence, motion } from "motion/react";

// fusion: hover → ${b.name}, leave → ${a.name}
<AnimatePresence mode="wait" initial={false}>
  <motion.span
    key={fused ? "${b.id}" : "${a.id}"}
    initial={{ opacity: 0, scale: 0.5, rotate: fused ? 90 : -90 }}
    animate={{ opacity: 1, scale: 1, rotate: 0 }}
    exit={{ opacity: 0, scale: 0.5, rotate: fused ? -90 : 90 }}
    style={{ color: fused ? "${configB.color}" : "${configA.color}" }}
  >
    {fused ? (
      <${b.componentName} size={${configB.size}} duration={${durB}} />
    ) : (
      <${a.componentName} size={${configA.size}} duration={${durA}} />
    )}
  </motion.span>
</AnimatePresence>`;
};

const CopyIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CodeIconSvg = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const CheckIcon = () => (
  <motion.svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={{ scale: 0, rotate: -90 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: "spring", stiffness: 500, damping: 20 }}
  >
    <polyline points="20 6 9 17 4 12" />
  </motion.svg>
);

const FusionCard = ({
  a,
  b,
  configA,
  configB,
}: {
  a: LibraryIcon;
  b: LibraryIcon;
  configA: IconConfig;
  configB: IconConfig;
}) => {
  const [fused, setFused] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const icon = fused ? b : a;
  const cfg = fused ? configB : configA;
  const duration = icon.baseDuration / cfg.speed;
  const code = buildFusionCode(a, b, configA, configB);

  const handleCopy = async () => {
    await copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const actionBtnCls = (active: boolean, extra: string) =>
    [
      "group relative flex flex-col items-center gap-1.5 py-3 text-[11px] font-medium transition-colors",
      active
        ? "bg-emerald-500 text-white"
        : "text-zinc-500 hover:bg-zinc-800/80 hover:text-zinc-200",
      extra,
    ].join(" ");

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-colors hover:border-zinc-700"
      onMouseEnter={() => setFused(true)}
      onMouseLeave={() => setFused(false)}
      onFocus={() => setFused(true)}
      onBlur={() => setFused(false)}
      tabIndex={0}
    >
      <div className="flex items-center justify-between px-5 pt-4">
        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          {fused ? "Fused" : "Hover to fuse"}
        </span>
        <span className="text-[10px] font-medium text-zinc-500">
          {a.name} → {b.name}
        </span>
      </div>

      <div className="relative mx-auto flex h-24 w-full items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={icon.id}
            initial={{ opacity: 0, scale: 0.5, rotate: fused ? 90 : -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: fused ? -90 : 90 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              color: cfg.color,
              display: "flex",
            }}
          >
            <icon.Component size={cfg.size} duration={duration} />
          </motion.span>
        </AnimatePresence>
      </div>

      {/* codigo expandible */}
      <AnimatePresence initial={false}>
        {showCode && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-zinc-800"
          >
            <pre className="max-h-40 overflow-auto px-5 py-3 text-[10px] leading-relaxed text-zinc-400">
              <code>{code}</code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>

      {/* acciones: ver codigo + copiar componente */}
      <div className="grid grid-cols-2 border-t border-zinc-800">
        <button
          type="button"
          onClick={() => setShowCode((v) => !v)}
          className={actionBtnCls(showCode, "border-r border-zinc-800")}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={showCode ? "close" : "code"}
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="transition-transform group-hover:scale-110"
            >
              <CodeIconSvg />
            </motion.span>
          </AnimatePresence>
          {showCode ? "ocultar" : "ver codigo"}
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className={actionBtnCls(copied, "")}
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <CheckIcon key="check" />
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.12 }}
                className="transition-transform group-hover:scale-110"
              >
                <CopyIcon />
              </motion.span>
            )}
          </AnimatePresence>
          {copied ? "copiado!" : "component"}
        </button>
      </div>
    </div>
  );
};

const LIST_INITIAL = 10;
const LIST_STEP = 6;

const PencilIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);

export const FusionLab = () => {
  const [ids, setIds] = useState<[string, string]>(["sparkle", "code"]);
  const [activeSlot, setActiveSlot] = useState<Slot>("right");
  const [query, setQuery] = useState("");
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [configs, setConfigs] = useState<Configs>(defaultFusionConfigs);
  const [editingId, setEditingId] = useState<string | null>(null);

  const left = ICON_LIST.find((i) => i.id === ids[0]) ?? ICON_LIST[0];
  const right = ICON_LIST.find((i) => i.id === ids[1]) ?? ICON_LIST[1];
  const configLeft = configs[left.id] ?? left.defaultConfig;
  const configRight = configs[right.id] ?? right.defaultConfig;

  // hover independiente por icono (con la config del icono mostrado)
  const shownLeft = hoverLeft ? right : left;
  const shownRight = hoverRight ? left : right;
  const shownLeftCfg = hoverLeft ? configRight : configLeft;
  const shownRightCfg = hoverRight ? configLeft : configRight;

  const editingIcon = ICON_LIST.find((i) => i.id === editingId) ?? null;
  const editingConfig = editingId
    ? configs[editingId] ?? ICON_LIST.find((i) => i.id === editingId)?.defaultConfig ?? {
        color: "#18181b",
        speed: 1,
        size: 48,
      }
    : { color: "#18181b", speed: 1, size: 48 };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ICON_LIST.filter((i) => !q || i.name.toLowerCase().includes(q));
  }, [query]);

  // scroll lazy: 10 visibles, mas al acercarse al final
  const [visibleCount, setVisibleCount] = useState(LIST_INITIAL);
  const listRef = useRef<HTMLUListElement>(null);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setVisibleCount(LIST_INITIAL);
    listRef.current?.scrollTo({ top: 0 });
  };

  const visible = filtered.slice(0, visibleCount);

  const handleListScroll = () => {
    const el = listRef.current;
    if (!el) return;
    if (el.scrollTop + el.clientHeight >= el.scrollHeight - 80) {
      setVisibleCount((c) => Math.min(c + LIST_STEP, filtered.length));
    }
  };

  const pick = (id: string) => {
    const next: [string, string] = [...ids];
    const idx = activeSlot === "left" ? 0 : 1;
    const otherIdx = activeSlot === "left" ? 1 : 0;
    if (id === next[otherIdx]) return;
    next[idx] = id;
    setIds(next);
    if (!configs[id]) {
      setConfigs((prev) => ({
        ...prev,
        [id]: {
          ...ICON_LIST.find((i) => i.id === id)!.defaultConfig,
          color: FUSION_ACCENT[id] ?? "#18181b",
        },
      }));
    }
  };

  const openEditor = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setEditingId(id);
  };

  const tileCls = (slot: Slot) =>
    `relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-3xl bg-zinc-800/90 transition-all md:h-28 md:w-28 ${
      activeSlot === slot
        ? "ring-2 ring-rose-500 shadow-[0_0_24px_rgba(244,63,94,0.25)]"
        : "hover:bg-zinc-700/80"
    }`;

  const tileMotion = {
    initial: { opacity: 0, scale: 0.55, rotate: -50 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.55, rotate: 50 },
    transition: { duration: 0.35, ease: "easeOut" as const },
  };

  const shownLeftDuration = shownLeft.baseDuration / shownLeftCfg.speed;
  const shownRightDuration = shownRight.baseDuration / shownRightCfg.speed;

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl border-t border-zinc-200 px-6 py-24 md:px-10">
        {/* header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
              Motion playground
            </p>
            <h2 className="mt-4 text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">
              See them <span className="italic">transform.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500 md:text-right">
            Empareja dos iconos y mira uno convertirse en el otro. Editalos y
            mira la fusion cambiar en vivo.
          </p>
        </div>

        {/* body: stage + selector */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* stage oscuro */}
          <motion.div
            className="relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl bg-[#0a0a0a] lg:col-span-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            {/* grid pattern */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* label */}
            <div className="relative z-10 flex items-center gap-2 px-7 pt-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                Hover to transform
              </span>
              <span className="text-rose-500">↗</span>
            </div>

            {/* tiles — hover independiente, click = elegir slot, lapiz = editar */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-4 px-6 py-4">
              <div className="flex items-center gap-6">
                {/* tile izq (A) */}
                <div className="group relative">
                  <motion.button
                    type="button"
                    aria-label={`Slot A: ${left.name}. Click para cambiar`}
                    className={tileCls("left")}
                    onClick={() => setActiveSlot("left")}
                    onMouseEnter={() => setHoverLeft(true)}
                    onMouseLeave={() => setHoverLeft(false)}
                    onFocus={() => setHoverLeft(true)}
                    onBlur={() => setHoverLeft(false)}
                    whileTap={{ scale: 0.97 }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={shownLeft.id}
                        {...tileMotion}
                        style={{
                          color: shownLeftCfg.color,
                          display: "flex",
                        }}
                      >
                        <shownLeft.Component
                          size={shownLeftCfg.size}
                          duration={shownLeftDuration}
                        />
                      </motion.span>
                    </AnimatePresence>
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-rose-500 px-1.5 text-[9px] font-bold text-white">
                      A
                    </span>
                  </motion.button>
                  <button
                    type="button"
                    aria-label={`Editar ${left.name}`}
                    onClick={(e) => openEditor(left.id, e)}
                    className="absolute -right-2 -top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 opacity-0 transition-opacity hover:text-white focus:opacity-100 group-hover:opacity-100"
                  >
                    <PencilIcon />
                  </button>
                </div>

                {/* conector */}
                <div className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                  <span className="h-0.5 w-6 bg-zinc-500" />
                  <span className="h-1 w-1 rounded-full bg-zinc-600" />
                </div>

                {/* tile der (B) */}
                <div className="group relative">
                  <motion.button
                    type="button"
                    aria-label={`Slot B: ${right.name}. Click para cambiar`}
                    className={tileCls("right")}
                    onClick={() => setActiveSlot("right")}
                    onMouseEnter={() => setHoverRight(true)}
                    onMouseLeave={() => setHoverRight(false)}
                    onFocus={() => setHoverRight(true)}
                    onBlur={() => setHoverRight(false)}
                    whileTap={{ scale: 0.97 }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={shownRight.id}
                        {...tileMotion}
                        style={{
                          color: shownRightCfg.color,
                          display: "flex",
                        }}
                      >
                        <shownRight.Component
                          size={shownRightCfg.size}
                          duration={shownRightDuration}
                        />
                      </motion.span>
                    </AnimatePresence>
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-1.5 text-[9px] font-bold text-white">
                      B
                    </span>
                  </motion.button>
                  <button
                    type="button"
                    aria-label={`Editar ${right.name}`}
                    onClick={(e) => openEditor(right.id, e)}
                    className="absolute -right-2 -top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 opacity-0 transition-opacity hover:text-white focus:opacity-100 group-hover:opacity-100"
                  >
                    <PencilIcon />
                  </button>
                </div>
              </div>

              {/* labels */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-zinc-300">
                  {left.name}
                </span>
                <span className="text-xs text-rose-500">↔</span>
                <span className="text-xs font-bold text-zinc-300">
                  {right.name}
                </span>
              </div>

              {/* card: hover → A se transforma en B, al salir → vuelve a A */}
              <div className="w-full max-w-md">
                <FusionCard
                  a={left}
                  b={right}
                  configA={configLeft}
                  configB={configRight}
                />
              </div>
            </div>
          </motion.div>

          {/* panel selector */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white lg:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* buscador */}
            <div className="relative border-b border-zinc-200">
              <svg
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3-3" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Quick find an icon..."
                className="w-full bg-transparent py-4 pl-12 pr-5 text-sm text-zinc-700 outline-none placeholder:text-zinc-400"
              />
            </div>

            {/* hint */}
            <p className="border-b border-zinc-100 bg-zinc-50 px-5 py-2.5 text-[11px] font-medium text-zinc-500">
              Cambiando slot{" "}
              <span className="font-bold text-rose-500">
                {activeSlot === "left" ? "A" : "B"}
              </span>{" "}
              — click en un tile para cambiar de slot
            </p>

            {/* lista — altura fija + scroll lazy (iconos siempre negros) */}
            <ul
              ref={listRef}
              onScroll={handleListScroll}
              className="h-[440px] overflow-y-auto overscroll-contain"
            >
              {visible.map((i, idx) => {
                const slot: Slot | null =
                  i.id === ids[0] ? "left" : i.id === ids[1] ? "right" : null;
                return (
                  <motion.li
                    key={i.id}
                    initial={idx >= LIST_INITIAL ? { opacity: 0, y: 8 } : false}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <button
                      type="button"
                      onClick={() => pick(i.id)}
                      className="group flex w-full items-center gap-3 border-b border-zinc-100 px-5 py-3.5 text-left transition-colors hover:bg-zinc-50"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 text-zinc-900">
                        <i.Component size={16} />
                      </span>
                      <span className="flex-1 text-sm font-medium text-zinc-800">
                        {i.name}
                      </span>
                      {slot && (
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase text-white ${
                            slot === "left" ? "bg-rose-500" : "bg-emerald-500"
                          }`}
                        >
                          {slot === "left" ? "A" : "B"}
                        </span>
                      )}
                      <span className="text-zinc-300 transition-transform group-hover:translate-x-0.5 group-hover:text-zinc-500">
                        →
                      </span>
                    </button>
                  </motion.li>
                );
              })}
              {filtered.length === 0 && (
                <li className="px-5 py-8 text-center text-sm text-zinc-400">
                  Sin resultados.
                </li>
              )}
              {visible.length < filtered.length && (
                <li className="px-5 py-3 text-center text-[11px] text-zinc-400">
                  Baja para ver mas iconos…
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* editor de fusion — cambios se reflejan al instante en stage + card */}
      <IconEditor
        icon={editingIcon}
        config={editingConfig}
        onChange={(c) => editingId && setConfigs((prev) => ({ ...prev, [editingId]: c }))}
        onClose={() => setEditingId(null)}
      />
    </section>
  );
};
