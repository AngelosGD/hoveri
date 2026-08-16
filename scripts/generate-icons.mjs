/**
 * Generates animated icon components from Lucide icon paths.
 * Usage: node scripts/generate-icons.mjs
 * Regenerates every non-handcrafted icon from the manifest using
 * per-icon thematic animations that move its parts individually.
 */
import { pathToFileURL } from "node:url";
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { ICON_MANIFEST } from "./icon-manifest.mjs";

const LUCIDE_DIR = join(process.cwd(), "node_modules/lucide-react/dist/esm/icons");

const HANDCRAFTED = new Set([
  "heart", "star", "rocket", "send", "moon", "sun", "copy", "check",
  "bookmark", "bell", "settings", "coffee", "camera", "github",
]);

const THEME_BY_NAME = {
  // notamos: los 'code' y derivados separan sus símbolos
  code: "split",
  "file-code": "split",
  terminal: "blink",
  languages: "spread",
  "git-branch": "branch",
  database: "stack",
  server: "stack",
  cpu: "chip",
  calculator: "stack",
  bug: "creep",
  // viento / clima
  wind: "wave",
  "cloud-rain": "rain",
  "cloud-snow": "rain",
  "cloud-lightning": "bolt",
  "cloud-sun": "orbit",
  snowflake: "crystal",
  tornado: "swirl",
  rainbow: "rise-parts",
  umbrella: "pop",
  cloud: "drift",
  "cloud-drizzle": "rain",
  // celular
  smartphone: "screen",
  tablet: "screen",
  laptop: "hinge",
  monitor: "screen",
  "battery-charging": "charge",
  battery: "charge",
  wifi: "signal",
  bluetooth: "pulse-parts",
  signal: "bars",
  phone: "ring",
  // música
  music: "notes",
  "music-2": "notes",
  headphones: "sound",
  mic: "amplify",
  "volume-2": "sound",
  play: "play-pulse",
  pause: "bars",
  clapperboard: "clap",
  film: "reel",
  gamepad: "play-pulse",
  // viajes
  plane: "air",
  car: "drive",
  bus: "drive",
  ship: "rock",
  compass: "needle",
  map: "unfold",
  navigation: "aim",
  "map-pin": "pin-drop",
  ticket: "rip",
  anchor: "sway",
  // hogar
  house: "pop",
  lamp: "glow-parts",
  sofa: "soft",
  bed: "soft",
  lightbulb: "filament",
  tv: "screen",
  keyboard: "type",
  printer: "eject",
  thermometer: "heat",
  "washing-machine": "swirl",
  // negocios
  "dollar-sign": "stack",
  bitcoin: "coin",
  "credit-card": "swipe",
  wallet: "open-parts",
  tag: "tag-wave",
  receipt: "print-out",
  "shopping-cart": "roll",
  "trending-up": "climb",
  "chart-pie": "swirl",
  coins: "coin",
  // deportes
  trophy: "shine-parts",
  medal: "shine-parts",
  target: "focus",
  gift: "unbox",
  sparkle: "spark",
  palette: "dab",
  gem: "facet",
  // flechas
  "arrow-up": "climb",
  "arrow-down": "drop-spring",
  "arrow-right": "draw",
  "arrow-left": "draw",
  "arrow-up-right": "climb",
  "arrow-down-left": "inject",
  "arrow-left-right": "split",
  "arrow-up-down": "sway",
  "arrow-down-to-line": "inject",
  "arrow-up-from-line": "eject",
  "corner-up-left": "pendulum",
  "corner-down-left": "swing-parts",
  "corner-up-right": "swing-parts",
  "corner-down-right": "pendulum",
  "arrow-right-to-line": "eject",
  "arrow-left-to-line": "eject",
  "move-vertical": "sway",
  "move-horizontal": "split",
  "mouse-pointer": "aim",
  move: "unfold",
  "chevrons-up": "rise-parts",
  "chevrons-down": "cascade",
  "chevrons-right": "slides",
  "chevrons-left": "slides",
  "folding-zone": "unbox",
  "replace": "swap",
  "arrow-big-up": "rise-parts",
  "arrow-big-down": "drop-spring",
  "arrow-big-left": "slides",
  "arrow-big-right": "slides",
  "arrow-big-up-dash": "dash",
  "arrow-big-down-dash": "dash",
  "arrow-big-left-dash": "dash",
  "arrow-big-right-dash": "dash",
  "wrap-text": "flow",
  "rotate-3d": "orbit",
  "rotate-3d-square": "orbit",
  "move-diagonal": "unfold",
  "move-down-right": "unfold",
  "move-up-left": "unfold",
  "move-up-right": "unfold",
  "move-down-left": "unfold",
  "maximize": "expand",
  "minimize": "squeeze",
  "maximize-2": "expand",
  "minimize-2": "squeeze",
  "scan": "scan",
  "scan-line": "scan",
  "scan-text": "scan",
  // tiempo
  clock: "needle",
  "clock-3": "needle",
  "alarm-clock": "ring",
  timer: "needle",
  "timer-reset": "spin-burst",
  hourly: "pendulum",
  hourglass: "swirl",
  watch: "needle",
  stopwatch: "needle",
  calendar: "unfold",
  "calendar-days": "cascade",
  "calendar-check": "spark",
  "calendar-clock": "needle",
  "calendar-off": "swing-parts",
  "calendar-plus": "stack",
  "calendar-range": "swap",
  "calendar-heart": "pulse-parts",
  "calendar-search": "sawtooth",
  "clock-1": "needle",
  "clock-2": "needle",
  "clock-4": "needle",
  "clock-5": "needle",
  "clock-6": "needle",
  "clock-7": "needle",
  "clock-8": "needle",
  "clock-9": "needle",
  "clock-10": "needle",
  "clock-11": "needle",
  "clock-12": "needle",
  "clock-arrow-down": "inject",
  "clock-arrow-up": "climb",
  "clock-alert": "bolt",
  "clock-clockwise": "swirl",
  "clock-counterclockwise": "swirl",
  "clock-hour-1": "needle",
  "clock-hour-2": "needle",
  "clock-hour-3": "needle",
  "clock-hour-4": "needle",
  "clock-hour-5": "needle",
  "clock-hour-6": "needle",
  "clock-hour-7": "needle",
  "clock-hour-8": "needle",
  "clock-hour-9": "needle",
  "clock-hour-10": "needle",
  "clock-hour-11": "needle",
  "clock-hour-12": "needle",
  "hourglass-off": "crystal",
  "timer-off": "dash",
  // comunicación
  mail: "wave-x",
  "mail-open": "open-parts",
  "mail-plus": "pop",
  "mail-check": "spark",
  "mail-warning": "swing-parts",
  "mail-question": "swing-parts",
  "mail-search": "sawtooth",
  mails: "wave-x",
  inbox: "inject",
  mailbox: "pop",
  reply: "slides",
  "share-2": "swirl",
  "at-sign": "pin-drop",
  "message-square": "pop",
  "message-square-text": "draw-stagger",
  "message-square-plus": "pop",
  "message-square-lock": "film",
  "message-square-header": "film",
  "message-square-x": "swing-parts",
  "message-square-more": "pop",
  "message-square-warning": "bolt",
  "message-circle": "ring",
  "message-circle-more": "ripple",
  "message-circle-heart": "pulse-parts",
  "message-circle-warning": "bolt",
  "message-circle-dashed": "dash",
  quote: "wave-x",
  "forward": "slides",
  "chat-bubble-oval": "pop",
  "chat-bubble-square": "pop",
  "speech": "sound",
  voicemail: "sound",
  // gráficas
  "chart-line": "draw",
  "chart-spline": "draw-stagger",
  "chart-column": "bars-up",
  "chart-column-big": "bars-up",
  "chart-bar-big": "bars-up",
  "chart-area": "amplify",
  "chart-no-axes-combined": "draw-stagger",
  "chart-no-axes-column": "bars-up",
  "chart-no-axes-gantt": "slides",
  "chart-scatter": "spark",
  "chart-pie": "swirl",
  // mapas
  "map-pin": "pin-drop",
  "map-pin-off": "swing-parts",
  "map-pinned": "pin-drop",
  "navigation-2": "needle",
  "navigation-off": "swing-parts",
  crosshair: "focus",
  route: "draw",
  "signpost-big": "pop",
  earth: "orbit",
  globe: "orbit",
  globe_2: "orbit",
  network: "planets",
  "locate-fixed": "aim",
  locate: "ripple",
  "square-split-horizontal": "split",
  // oficina
  "file-text": "draw",
  "file-plus": "stack",
  "file-check": "spark",
  "file-search": "sawtooth",
  "file-image": "ripple",
  "file-audio": "sound",
  folder: "unfold",
  "folder-open": "glow-parts",
  "folder-plus": "stack",
  "clipboard-paste": "unfold",
  "clipboard-check": "spark",
  "clipboard-x": "swing-parts",
  pencil: "sawtooth",
  eraser: "slides",
  "sticky-note": "soft",
  archive: "stack",
  box: "unbox",
  paperclip: "swing-parts",
  glasses: "soft",
  // dispositivos
  "laptop-2": "hinge",
  "laptop-minimal": "hinge",
  mouse: "drive",
  "gamepad-2": "play-pulse",
  "keyboard-music": "type",
  webcam: "screen",
  "hard-drive": "stack",
  "hard-drive-upload": "climb",
  usb: "sway",
  "phone-call": "ring",
  "mic-2": "amplify",
  "mic-vocal": "amplify",
  speaker: "sound",
  router: "signal",
  "camera-off": "swing-parts",
  projector: "glow-parts",
};

const THEME_DEFAULTS = [
  "stagger-pop", "stagger-bounce", "breathe", "drift", "stagger-grow",
  "swing-parts", "orbit", "wave", "stagger-tilt", "draw", "cascade",
  "drop-spring", "elastic-squash", "wave-x", "spin-burst", "ripple",
  "shimmer", "planets", "squeeze", "draw-stagger",
];

function hashStr(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

function toKebab(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9-]/g, "-")
    .toLowerCase();
}

function toPascal(str) {
  return str
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}

function nums(str) {
  const m = str.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi);
  return m ? m.map(Number) : [];
}

function pathPoints(d) {
  const pts = [];
  const re = /([MmLlHhVvCcSsQqTtAaZz])|(-?\d*\.?\d+(?:e[-+]?\d+)?)/g;
  let cmd = "M";
  let x = 0;
  let y = 0;
  let sx = 0;
  let sy = 0;
  const isRel = () => cmd === cmd.toLowerCase();
  const args = [];

  const ARG_COUNT = { M: 2, L: 2, T: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, A: 7, Z: 0 };

  const apply = () => {
    const C = cmd.toUpperCase();
    const R = isRel();
    if (C === "M") {
      x = R ? x + args[0] : args[0];
      y = R ? y + args[1] : args[1];
      pts.push({ x, y });
      sx = x;
      sy = y;
      cmd = R ? "l" : "L";
    } else if (C === "L") {
      x = R ? x + args[0] : args[0];
      y = R ? y + args[1] : args[1];
      pts.push({ x, y });
    } else if (C === "H") {
      x = R ? x + args[0] : args[0];
      pts.push({ x, y });
    } else if (C === "V") {
      y = R ? y + args[0] : args[0];
      pts.push({ x, y });
    } else if (C === "C") {
      const ex = R ? x + args[4] : args[4];
      const ey = R ? y + args[5] : args[5];
      pts.push({ x: ex, y: ey });
      x = ex;
      y = ey;
    } else if (C === "S") {
      const ex = R ? x + args[2] : args[2];
      const ey = R ? y + args[3] : args[3];
      pts.push({ x: ex, y: ey });
      x = ex;
      y = ey;
    } else if (C === "Q") {
      const ex = R ? x + args[2] : args[2];
      const ey = R ? y + args[3] : args[3];
      pts.push({ x: ex, y: ey });
      x = ex;
      y = ey;
    } else if (C === "A") {
      x = R ? x + args[5] : args[5];
      y = R ? y + args[6] : args[6];
      pts.push({ x, y });
    } else if (C === "Z") {
      x = sx;
      y = sy;
      pts.push({ x, y });
    }
    args.length = 0;
  };

  for (const m of d.matchAll(re)) {
    if (m[1]) {
      if (args.length) apply();
      cmd = m[1];
      if (cmd.toUpperCase() === "Z") {
        apply();
        continue;
      }
      continue;
    }
    args.push(Number(m[0]));
    if (ARG_COUNT[cmd.toUpperCase()] > 0 && args.length >= ARG_COUNT[cmd.toUpperCase()]) apply();
  }
  if (args.length) apply();
  return pts.length ? pts : [{ x: 12, y: 12 }];
}

function estimateBox(node) {
  const [tag, attrs] = node;
  let xs = [];
  let ys = [];
  if (tag === "path" && attrs.d) {
    const pts = pathPoints(attrs.d);
    for (const p of pts) {
      xs.push(p.x);
      ys.push(p.y);
    }
  } else if (tag === "circle") {
    xs.push(attrs.cx);
    ys.push(attrs.cy);
  } else if (tag === "rect") {
    xs.push(attrs.x, attrs.x + attrs.width);
    ys.push(attrs.y, attrs.y + attrs.height);
  } else if (tag === "line") {
    xs.push(attrs.x1, attrs.x2);
    ys.push(attrs.y1, attrs.y2);
  } else if (tag === "ellipse") {
    xs.push(attrs.cx);
    ys.push(attrs.cy);
  } else if (tag === "polyline" || tag === "polygon") {
    const n = nums(attrs.points ?? "");
    for (let i = 0; i + 1 < n.length; i += 2) {
      xs.push(n[i]);
      ys.push(n[i + 1]);
    }
  }
  if (!xs.length) return { cx: 12, cy: 12 };
  const avg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  return { cx: avg(xs), cy: avg(ys) };
}

function serializeAttrs(attrs) {
  return Object.entries(attrs)
    .filter(([key]) => key !== "key")
    .map(([key, value]) => (typeof value === "number" ? `${key}={${value}}` : `${key}="${value}"`))
    .join(" ");
}

function nodeToJsx(node, partIndex) {
  const [tag, attrs, children] = node;
  const box = estimateBox(node);
  const style = `style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}`;
  const cls = `className="part-${partIndex}"`;
  if (Array.isArray(children) && children.length > 0) {
    const inner = children.map((c) => nodeToJsx(c, partIndex)).join("\n");
    const attrStr = Object.keys(attrs).length ? ` ${serializeAttrs(attrs)}` : "";
    return `        <motion.${tag} ${cls} ${style}${attrStr}>\n${inner}\n        </motion.${tag}>`;
  }
  const attrStr = serializeAttrs(attrs);
  return `        <motion.${tag} ${cls} ${style} ${attrStr} />`;
}

function json(v) {
  return JSON.stringify(v);
}

function buildStart(theme, parts, seedName) {
  const boxes = parts.map((p, i) => ({ i, tag: p[0][0], ...estimateBox(p[0]) }));
  const n = parts.length;
  const seed = hashStr(seedName || parts[0][0][1].d || "");
  const r = (k) => (k % 97) / 97;

  const ease = "easeInOut";
  let lines = [];

  const push = (i, keyframes, duration, delay = 0) => {
    lines.push(
      `    animate(".part-${i}", ${json(keyframes)}, { duration: ${duration}, ease: "${ease}"${delay ? `, delay: ${delay}` : ""} });`,
    );
  };

  const resetPoints = (jitter = 0.04, based = 0.06) => {
    return boxes.map((b) => {
      const j = (r(seed + b.i * 3) - 0.5) * jitter;
      return `    animate(".part-${b.i}", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut"${based ? `, delay: ${(based * b.i).toFixed(2)}` : ""} });`;
    }).join("\n");
  };

  const below = (cy) => cy > 13;
  const left = (cx) => cx < 12;

  switch (theme) {
    case "split": {
      boxes.forEach((b) => {
        const dir = (left(b.cx) ? -1 : 1) * 3;
        push(b.i, { x: [0, dir, 0], rotate: [0, dir * 12, 0] }, 0.8, 0.05 * b.i);
      });
      break;
    }
    case "wave": {
      boxes.forEach((b) => {
        const wob = (r(seed + b.i) - 0.5) * 6;
        push(b.i, { x: [0, wob, -wob * 0.6, 0], y: [0, -2, 2, 0] }, 1.1, 0.13 * b.i);
      });
      break;
    }
    case "rain": {
      const drops = boxes.filter((b) => below(b.cy));
      const rest = boxes.filter((b) => !below(b.cy));
      rest.forEach((b) => push(b.i, { y: [0, 2, 0] }, 0.6, 0.1 * b.i));
      drops.forEach((b) => {
        push(b.i, { y: [0, 5], rotate: [0, 10], opacity: [0, 0.4, 1, 0] }, 0.9, 0.18 * b.i);
      });
      break;
    }
    case "bolt": {
      boxes.forEach((b) => {
        push(b.i, { scale: [1, 0.85, 1.2, 1], opacity: [1, 0.3, 1, 1] }, 0.4, 0.12 * b.i);
      });
      break;
    }
    case "orbit": {
      const rays = boxes.filter((b) => b.cy < 11);
      const core = boxes.filter((b) => b.cy >= 11);
      core.forEach((b) => push(b.i, { scale: [1, 1.15, 0.95, 1.1, 1] }, 0.9, 0.05));
      rays.forEach((b) => push(b.i, { rotate: 90 }, 1.4, 0.02 * b.i));
      break;
    }
    case "crystal": {
      boxes.forEach((b) => {
        const dir = (r(seed + b.i) - 0.5) * 30;
        push(b.i, { rotate: dir, scale: [1, 0.85, 1.1, 1] }, 1, 0.15 * b.i);
      });
      break;
    }
    case "swirl": {
      boxes.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { rotate: dir * 30, x: [0, dir * 2, 0], scale: [1, 0.9, 1] }, 1.2, 0.1 * b.i);
      });
      break;
    }
    case "rise-parts": {
      boxes.forEach((b) => {
        const side = left(b.cx) ? -1.5 : 1.5;
        push(b.i, { y: [6, -1, 0], opacity: [0.2, 1, 1], x: [0, side, 0] }, 0.9, 0.12 * b.i);
      });
      break;
    }
    case "pop": {
      boxes.forEach((b) => {
        push(b.i, { scale: [0.6, 1.2, 0.95, 1] }, 0.7, 0.1 * b.i);
      });
      break;
    }
    case "stack": {
      boxes.forEach((b) => {
        const dir = below(b.cy) ? 1 : -1;
        push(b.i, { y: [0, dir * 3, 0], opacity: [1, 0.7, 1] }, 0.9, 0.15 * b.i);
      });
      break;
    }
    case "chip": {
      boxes.forEach((b) => {
        if (below(b.cy)) push(b.i, { y: [0, 2, 0], opacity: [1, 0.5, 1] }, 0.8, 0.1 * b.i);
        else push(b.i, { y: [0, -1, 0] }, 0.8, 0.1 * b.i);
      });
      break;
    }
    case "blink": {
      boxes.forEach((b) => {
        push(b.i, { opacity: [1, 0.2, 1] }, 0.3, 0.12 * b.i);
      });
      break;
    }
    case "branch": {
      const stem = boxes.find((b) => b.cy >= 12);
      const tips = boxes.filter((b) => b.cy < 12);
      if (stem) push(stem.i, { scaleY: [1, 1.06, 1] }, 0.8);
      tips.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { x: [0, dir * 2, 0], y: [0, -1.5, 0], scale: [1, 1.1, 1] }, 1, 0.1 * b.i);
      });
      break;
    }
    case "screen": {
      const body = boxes.find((b) => below(b.cy));
      const screen = boxes.find((b) => b.cy < 12);
      if (body) push(body.i, { scale: [1, 1.03, 1] }, 0.7);
      if (screen) push(screen.i, { opacity: [1, 0.5, 1], scale: [1, 0.97, 1] }, 0.9, 0.1);
      boxes.forEach((b, idx) => {
        if (b !== body && b !== screen) push(b.i, { opacity: [1, 0.6, 1] }, 0.8, 0.1 * idx);
      });
      break;
    }
    case "hinge": {
      const screen = boxes.find((b) => b.cy < 12);
      if (screen) push(screen.i, { rotate: [-3, 3, 0] }, 0.7, 0.05);
      boxes.forEach((b) => {
        if (b !== screen) push(b.i, { y: [0, 1, 0] }, 0.7, 0.08);
      });
      break;
    }
    case "charge": {
      const rayo = boxes.find((b) => b.cx < 8);
      if (rayo) push(rayo.i, { scale: [1, 0.85, 1.15, 1], opacity: [1, 0.3, 1, 1] }, 0.5, 0.1);
      boxes.forEach((b) => {
        if (b !== rayo) push(b.i, { opacity: [1, 0.65, 1], scale: [1, 1.04, 1] }, 1.1, 0.12 * b.i);
      });
      break;
    }
    case "signal": {
      boxes.forEach((b) => {
        push(b.i, { scale: [0.85, 1.15, 0.9, 1], opacity: [0.6, 1, 0.8, 1] }, 1, 0.18 * b.i);
      });
      break;
    }
    case "bars": {
      boxes.forEach((b) => {
        const dir = below(b.cy) ? 1 : -1;
        push(b.i, { scaleY: [1, 0.6, 1.15, 1], y: [0, dir * 1.5, 0] }, 0.8, 0.12 * b.i);
      });
      break;
    }
    case "ring": {
      boxes.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { rotate: [0, dir * 10, 0] }, 0.6, 0.03);
      });
      break;
    }
    case "notes": {
      boxes.forEach((b) => {
        const wob = (r(seed + b.i) - 0.5) * 4;
        push(b.i, { y: [0, -3, 0], rotate: [0, wob, 0], scale: [1, 1.08, 1] }, 1, 0.14 * b.i);
      });
      break;
    }
    case "sound": {
      const arcsTop = boxes.filter((b) => b.cy < 12);
      arcsTop.forEach((b) => push(b.i, { scale: [0.8, 1.15, 0.85, 1], opacity: [0.5, 1, 0.7, 1] }, 1, 0.15 * b.i));
      const rest = boxes.filter((b) => b.cy >= 12);
      rest.forEach((b) => push(b.i, { scale: [1, 1.05, 1] }, 0.8));
      break;
    }
    case "amplify": {
      boxes.forEach((b) => {
        push(b.i, { scale: [1, 1.12, 0.96, 1.08, 1], opacity: [1, 0.8, 1, 1] }, 0.9, 0.1 * b.i);
      });
      break;
    }
    case "play-pulse": {
      const focus = boxes.find((b) => b.cx > 11);
      if (focus) push(focus.i, { scale: [1, 1.18, 0.95, 1.1, 1] }, 0.7, 0.05);
      boxes.forEach((b) => {
        if (b !== focus) push(b.i, { scale: [1, 1.05, 1] }, 0.7, 0.08);
      });
      break;
    }
    case "clap": {
      boxes.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { x: [0, dir * 3, 0], rotate: [0, dir * 8, 0] }, 0.6, 0.06);
      });
      break;
    }
    case "reel": {
      boxes.forEach((b) => {
        if (b.cy < 10) push(b.i, { rotate: 24 }, 1.2, 0.04 * b.i);
        else push(b.i, { opacity: [1, 0.6, 1] }, 1, 0.1 * b.i);
      });
      break;
    }
    case "air": {
      boxes.forEach((b) => {
        const wob = (r(seed + b.i) - 0.5) * 2;
        push(b.i, { y: [0, -3, 0, -1, 0], rotate: [0, wob, -wob, 0], x: [0, 1, 0] }, 1.1, 0.12 * b.i);
      });
      break;
    }
    case "drive": {
      boxes.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { x: [0, dir * 2, 0], y: [0, 0.8 * b.i, 0], rotate: [0, dir * 3, 0] }, 0.8, 0.06 * b.i);
      });
      break;
    }
    case "rock": {
      boxes.forEach((b) => {
        push(b.i, { rotate: [0, -8, 8, -4, 0], y: [0, 1, 0] }, 1, 0.1 * b.i);
      });
      break;
    }
    case "needle": {
      const needle = boxes.find((b) => b.cy < 12);
      if (needle) push(needle.i, { rotate: 40 }, 1.1, 0.1);
      boxes.forEach((b) => {
        if (b !== needle) push(b.i, { scale: [1, 1.06, 1] }, 0.8);
      });
      break;
    }
    case "unfold": {
      const leftSide = boxes.filter((b) => left(b.cx));
      const rightSide = boxes.filter((b) => !left(b.cx));
      leftSide.forEach((b) => push(b.i, { x: [0, -3, 0], rotate: [0, -6, 0] }, 0.8, 0.05));
      rightSide.forEach((b) => push(b.i, { x: [0, 3, 0], rotate: [0, 6, 0] }, 0.8, 0.05));
      break;
    }
    case "aim": {
      const arrow = boxes.find((b) => b.cy < 12);
      if (arrow) push(arrow.i, { y: [0, -3, 0], opacity: [1, 0.7, 1] }, 0.7, 0.08);
      boxes.forEach((b) => {
        if (b !== arrow) push(b.i, { scale: [1, 1.06, 1] }, 0.9);
      });
      break;
    }
    case "pin-drop": {
      const pin = boxes.find((b) => below(b.cy));
      if (pin) push(pin.i, { y: [0, 4, 0], rotate: [0, 12, 0] }, 0.7, 0.08);
      const top = boxes.find((b) => b.cy < 12);
      if (top) push(top.i, { y: [0, -1, 0] }, 0.7, 0.05);
      break;
    }
    case "rip": {
      boxes.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { x: [0, dir * 4, 0], rotate: [0, dir * 10, 0] }, 0.7, 0.05 * b.i);
      });
      break;
    }
    case "sway": {
      boxes.forEach((b) => {
        push(b.i, { rotate: [0, -10, 10, -4, 0] }, 1.2, 0.12 * b.i);
      });
      break;
    }
    case "glow-parts": {
      boxes.forEach((b) => {
        push(b.i, { opacity: [1, 0.55, 1], scale: [1, 1.06, 1] }, 1, 0.15 * b.i);
      });
      break;
    }
    case "soft": {
      boxes.forEach((b) => {
        const dir = below(b.cy) ? 1 : -1;
        push(b.i, { y: [0, dir * 1.5, 0], scaleY: [1, 0.92, 1.04, 1] }, 1, 0.12 * b.i);
      });
      break;
    }
    case "filament": {
      const glow = boxes.find((b) => b.cy >= 9 && b.cy <= 12);
      if (glow) push(glow.i, { opacity: [1, 0.4, 1], scale: [1, 1.1, 1] }, 0.6, 0.05);
      boxes.forEach((b) => {
        if (b !== glow) push(b.i, { opacity: [1, 0.7, 1] }, 0.8, 0.1 * b.i);
      });
      break;
    }
    case "type": {
      const keys = boxes.filter((b) => b.cy < 12);
      const rest = boxes.filter((b) => b.cy >= 12);
      keys.forEach((b) => push(b.i, { y: [0, 1.5, 0], opacity: [1, 0.6, 1] }, 0.7, 0.06 * b.i));
      rest.forEach((b) => push(b.i, { scale: [1, 1.04, 1] }, 0.7, 0.05));
      break;
    }
    case "eject": {
      boxes.forEach((b) => {
        if (b.cy < 9) push(b.i, { scale: [0.85, 1.1, 1], opacity: [0.5, 1, 1] }, 0.7, 0.08);
        else push(b.i, { y: [0, 2, 0] }, 0.7, 0.1 * b.i);
      });
      break;
    }
    case "heat": {
      const top = boxes.find((b) => b.cy < 10);
      boxes.forEach((b) => {
        if (b.cy < 10) push(b.i, { y: [0, -2, 0], opacity: [0.5, 1, 0.6] }, 0.9, 0.1 * b.i);
        else push(b.i, { opacity: [1, 0.7, 1], scale: [1, 1.04, 1] }, 1.1, 0.1 * b.i);
      });
      void top;
      break;
    }
    case "coin": {
      boxes.forEach((b) => {
        push(b.i, { rotate: [0, 20, -10, 8, 0], x: [0, 2, 0], scale: [1, 1.08, 1] }, 1, 0.1 * b.i);
      });
      break;
    }
    case "swipe": {
      boxes.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { x: [0, dir * 6, 0], rotate: [0, dir * 12, 0] }, 0.8, 0.04);
      });
      break;
    }
    case "open-parts": {
      const leftSide = boxes.filter((b) => left(b.cx));
      const rightSide = boxes.filter((b) => !left(b.cx));
      leftSide.forEach((b) => push(b.i, { x: [0, -4, 0], rotate: [0, -10, 0] }, 0.9, 0.05));
      rightSide.forEach((b) => push(b.i, { x: [0, 4, 0], rotate: [0, 10, 0] }, 0.9, 0.05));
      break;
    }
    case "tag-wave": {
      boxes.forEach((b) => {
        const wob = (r(seed + b.i) - 0.5) * 5;
        push(b.i, { y: [0, -2, 2, 0], rotate: [0, wob, 0] }, 1.1, 0.12 * b.i);
      });
      break;
    }
    case "print-out": {
      boxes.forEach((b) => {
        if (b.cy < 9) push(b.i, { y: [0, 3, 0], opacity: [0.4, 1, 0.6] }, 0.9, 0.1 * b.i);
        else push(b.i, { y: [0, -1, 0] }, 0.7);
      });
      break;
    }
    case "roll": {
      const wheels = boxes.filter((b) => below(b.cy));
      const rest = boxes.filter((b) => !below(b.cy));
      wheels.forEach((b) => push(b.i, { x: [0, 3, -3, 0] }, 0.9, 0.08));
      rest.forEach((b) => push(b.i, { x: [0, 1.5, 0] }, 0.9, 0.05));
      break;
    }
    case "climb": {
      boxes.forEach((b) => {
        push(b.i, { y: [6, -2, 0], opacity: [0.2, 1, 1] }, 1, 0.15 * b.i);
      });
      break;
    }
    case "shine-parts": {
      boxes.forEach((b) => {
        push(b.i, { opacity: [1, 0.55, 1], scale: [1, 1.07, 1], rotate: [0, r(seed + b.i) * 8, 0] }, 1, 0.15 * b.i);
      });
      break;
    }
    case "focus": {
      boxes.forEach((b) => {
        if (b.cy === 12 && b.cx === 12) push(b.i, { scale: [1, 1.3, 1] }, 0.8, 0.05);
        else push(b.i, { scale: [0.9, 1.08, 0.95, 1] }, 0.9, 0.1 * b.i);
      });
      break;
    }
    case "unbox": {
      const lid = boxes.filter((b) => b.cy < 10);
      const rest = boxes.filter((b) => b.cy >= 10);
      lid.forEach((b) => push(b.i, { y: [0, -4, 0], rotate: [0, 6, 0] }, 0.8, 0.05));
      rest.forEach((b) => {
        const side = left(b.cx) ? -1 : 1;
        push(b.i, { x: [0, side * 2, 0], scale: [0.9, 1.08, 1] }, 0.9, 0.12 * b.i);
      });
      break;
    }
    case "spark": {
      const tips = boxes.filter((b) => Math.abs(b.cx - 12) < 2 && Math.abs(b.cy - 12) < 2);
      boxes.forEach((b) => {
        if (tips.includes(b)) push(b.i, { scale: [0.4, 1.3, 0.8, 1], rotate: [0, 30], opacity: [0.5, 1, 0.7, 1] }, 0.9, 0.08 * b.i);
        else push(b.i, { opacity: [1, 0.6, 1], scale: [1, 1.05, 1] }, 0.9, 0.1 * b.i);
      });
      break;
    }
    case "dab": {
      const dots = boxes.filter((b) => below(b.cy) && Math.abs(b.cx - 12) < 4);
      dots.forEach((b) => push(b.i, { scale: [0.8, 1.25, 1], opacity: [0.6, 1, 1] }, 0.8, 0.12 * b.i));
      boxes.forEach((b) => {
        if (!dots.includes(b)) push(b.i, { scale: [1, 1.06, 1] }, 0.8, 0.1);
      });
      break;
    }
    case "facet": {
      boxes.forEach((b) => {
        const dir = (r(seed + b.i) - 0.5) * 16;
        push(b.i, { rotate: dir, scale: [0.9, 1.12, 1], opacity: [0.6, 1, 1] }, 0.9, 0.14 * b.i);
      });
      break;
    }
    case "creep": {
      boxes.forEach((b) => {
        push(b.i, { x: [0, (left(b.cx) ? -1 : 1) * 3, 0], y: [0, (below(b.cy) ? 2 : -2), 0], rotate: [0, 6, 0] }, 0.9, 0.08 * b.i);
      });
      break;
    }
    case "pulse-parts": {
      boxes.forEach((b) => {
        push(b.i, { scale: [1, 1.16, 1], opacity: [1, 0.7, 1] }, 0.9, 0.12 * b.i);
      });
      break;
    }
    case "stagger-pop": {
      boxes.forEach((b) => {
        push(b.i, { scale: [0.7, 1.15, 0.95, 1] }, 0.7, 0.08 * b.i);
      });
      break;
    }
    case "stagger-bounce": {
      boxes.forEach((b) => {
        push(b.i, { y: [0, -4, 0], scale: [1, 1.06, 1] }, 0.7, 0.09 * b.i);
      });
      break;
    }
    case "stagger-grow": {
      boxes.forEach((b) => {
        push(b.i, { scale: [0.5, 1.15, 0.9, 1], opacity: [0.4, 1, 1] }, 0.8, 0.1 * b.i);
      });
      break;
    }
    case "stagger-tilt": {
      boxes.forEach((b) => {
        const dir = (r(seed + b.i) - 0.5) * 14;
        push(b.i, { rotate: [0, dir, 0] }, 0.7, 0.08 * b.i);
      });
      break;
    }
    case "swing-parts": {
      boxes.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { rotate: [0, dir * 12, 0] }, 0.8, 0.1 * b.i);
      });
      break;
    }
    case "breathe": {
      boxes.forEach((b) => {
        push(b.i, { scale: [1, 1.1, 0.95, 1.06, 1], opacity: [1, 0.85, 1] }, 1.3, 0.1 * b.i);
      });
      break;
    }
    case "drift": {
      boxes.forEach((b) => {
        const wob = (r(seed + b.i) - 0.5) * 3;
        push(b.i, { x: [0, wob, 0], y: [0, -3 * r(seed + b.i + 1), 0] }, 1.2, 0.12 * b.i);
      });
      break;
    }
    case "draw": {
      boxes.forEach((b) => {
        if (b.tag === "path") {
          push(b.i, { pathLength: [0, 1, 1] }, 0.7, 0.12 * b.i);
        } else {
          push(b.i, { scale: [0.6, 1.1, 1], opacity: [0, 1] }, 0.7, 0.12 * b.i);
        }
      });
      break;
    }
    case "draw-stagger": {
      boxes.forEach((b) => {
        if (b.tag === "path") {
          push(b.i, { pathLength: [0, 1], opacity: [0, 1] }, 0.8, 0.2 + 0.14 * b.i);
        }
      });
      break;
    }
    case "ripple": {
      const core = boxes.filter((b) => Math.hypot(b.cx - 12, b.cy - 12) < 4);
      const ring = boxes.filter((b) => Math.hypot(b.cx - 12, b.cy - 12) >= 4);
      core.forEach((b) => push(b.i, { scale: [1, 1.12, 1] }, 0.8, 0.05));
      ring.forEach((b) => push(b.i, { scale: [0.7, 1.2, 1], opacity: [0.4, 1, 1] }, 0.9, 0.14 * b.i));
      break;
    }
    case "pendulum": {
      boxes.forEach((b) => {
        if (b.cy > 15) return;
        const dir = (left(b.cx) ? -1 : 1) * 8;
        push(b.i, { rotate: [0, dir, -dir * 0.7, 0] }, 1.1, 0.04 * b.i);
      });
      break;
    }
    case "drop-spring": {
      boxes.forEach((b) => {
        push(b.i, { y: [0, -5, 1.5, -0.5, 0], scale: [1, 0.9, 1.04, 1] }, 0.9, 0.1 * b.i);
      });
      break;
    }
    case "elastic-squash": {
      boxes.forEach((b) => {
        push(b.i, { scale: [1, 1.14, 0.92, 1.06, 1] }, 0.8, 0.1 * b.i);
        if (b.cy < 13) push(b.i, { y: [0, 1, 0] }, 0.4, 0.1 * b.i);
      });
      break;
    }
    case "cascade": {
      boxes.forEach((b) => {
        const drop = (b.cy - 12) * (below(b.cy) ? 1 : -0.3);
        push(b.i, { y: [0, drop, 0], opacity: [0.3, 1, 1] }, 0.8, 0.1 * b.i);
      });
      break;
    }
    case "wave-x": {
      boxes.forEach((b) => {
        const wob = (r(seed + b.i) - 0.5) * 8;
        push(b.i, { x: [0, wob, -wob * 0.5, 0], rotate: [0, wob * 0.8, 0] }, 1, 0.08 * b.i);
      });
      break;
    }
    case "spin-burst": {
      boxes.forEach((b) => {
        const dir = (r(seed + b.i) - 0.5) * 20;
        push(b.i, { rotate: [0, dir, 0], scale: [0.8, 1.2, 1] }, 0.7, 0.07 * b.i);
      });
      break;
    }
    case "dash": {
      const idx = Math.floor(r(seed) * n);
      boxes.forEach((b) => {
        if (b.i === idx) push(b.i, { opacity: [1, 0.3, 1], scale: [1, 0.9, 1] }, 0.5, 0);
        else push(b.i, { scale: [1, 1.05, 1] }, 0.5, 0.05 * b.i);
      });
      break;
    }
    case "shimmer": {
      boxes.forEach((b) => {
        const flash = (r(seed + b.i) - 0.5) * 8;
        push(b.i, { opacity: [1, 0.35, 1], x: [0, flash, 0] }, 0.9, 0.12 * b.i);
      });
      break;
    }
    case "sawtooth": {
      boxes.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { x: [0, dir * 4, -dir * 2, dir * 2, 0], rotate: [0, dir * 6, 0] }, 0.5, 0.06 * b.i);
      });
      break;
    }
    case "squeeze": {
      const top = boxes.filter((b) => b.cy < 13);
      const bot = boxes.filter((b) => b.cy >= 13);
      top.forEach((b) => push(b.i, { scale: [1, 1.12, 1], y: [0, 0.5, 0] }, 0.8, 0.08 * b.i));
      bot.forEach((b) => push(b.i, { y: [0, 1.5, 0], scale: [1, 0.94, 1] }, 0.8, 0.08 * b.i));
      break;
    }
    case "planets": {
      const core = boxes.filter((b) => Math.hypot(b.cx - 12, b.cy - 12) < 3.5);
      const moons = boxes.filter((b) => Math.hypot(b.cx - 12, b.cy - 12) >= 3.5);
      core.forEach((b) => push(b.i, { scale: [1, 1.08, 1] }, 1, 0));
      moons.forEach((b) => {
        const ox = b.cx - 12;
        const oy = b.cy - 12;
        push(b.i, { x: [0, ox * 0.3, -ox * 0.3, 0], y: [0, oy * 0.3, -oy * 0.3, 0] }, 1.3, 0.08 * b.i);
      });
      break;
    }
    case "inject": {
      boxes.forEach((b) => {
        const dir = below(b.cy) ? -1 : 1;
        push(b.i, { y: [0, dir * 4, 0], scale: [1, 0.92, 1] }, 0.6, 0.08 * b.i);
      });
      break;
    }
    case "slides": {
      boxes.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { x: [0, dir * 3, 0], opacity: [1, 0.4, 1] }, 0.6, 0.07 * b.i);
      });
      break;
    }
    case "flow": {
      boxes.forEach((b) => {
        const dir = below(b.cy) ? 1 : -1;
        push(b.i, { y: [0, dir * 3, 0], opacity: [1, 0.5, 1] }, 0.7, 0.06 * b.i);
      });
      break;
    }
    case "swap": {
      boxes.forEach((b) => {
        const dir = left(b.cx) ? -1 : 1;
        push(b.i, { x: [0, dir * 4, 0], rotate: [0, dir * 8, 0] }, 0.7, 0.1 * b.i);
      });
      break;
    }
    case "expand": {
      boxes.forEach((b) => {
        push(b.i, { scale: [0.8, 1.18, 1], opacity: [0.5, 1, 1] }, 0.7, 0.1 * b.i);
      });
      break;
    }
    case "scan": {
      boxes.forEach((b) => {
        if (b.cy < 13) push(b.i, { scale: [1, 1.1, 1], opacity: [1, 0.5, 1] }, 0.8, 0.1 * b.i);
        else push(b.i, { y: [0, -6, 0] }, 0.8, 0.05);
      });
      break;
    }
    case "bars-up": {
      boxes.forEach((b) => {
        push(b.i, { scaleY: [0.2, 1, 1], opacity: [0.3, 1, 1] }, 0.7, 0.1 * b.i);
      });
      break;
    }
    default: {
      boxes.forEach((b) => {
        push(b.i, { scale: [0.85, 1.12, 1] }, 0.8, 0.08 * b.i);
      });
    }
  }

  const resetLines = resetPoints();
  return { start: lines.join("\n"), stop: resetLines };
}

for (const entry of ICON_MANIFEST) {
  const lucideName = entry.file.replace(/-icon$/, "");
  if (HANDCRAFTED.has(lucideName)) continue;

  const themed = THEME_BY_NAME[lucideName];
  const theme = themed || THEME_DEFAULTS[hashStr(lucideName) % THEME_DEFAULTS.length];

  const url = pathToFileURL(join(LUCIDE_DIR, `${lucideName}.mjs`)).href;
  const mod = await import(url);
  const iconNode = mod.__iconNode;
  if (!iconNode) continue;

  const parts = iconNode.map((node, i) => nodeToJsx(node, i));
  const { start, stop } = buildStart(theme, iconNode.map((n) => [n]), lucideName);

  const fileName = `${lucideName}-icon.tsx`;
  const className = `${toPascal(lucideName)}Icon`;

  const component = `"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ${className} = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
${start}
    };

    const stopAnimation = () => {
${stop}
    };

    useImperativeHandle(ref, () => ({ startAnimation, stopAnimation }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={startAnimation}
        onHoverEnd={stopAnimation}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={\`\${className} cursor-pointer\`}
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
${parts.join("\n")}
      </motion.svg>
    );
  },
);

${className}.displayName = "${className}";

export default ${className};
`;

  writeFileSync(join(process.cwd(), "icons", fileName), component);
  console.log(`✓ regenerated ${fileName} [${theme}] (${parts.length} parts)`);
}

console.log("Done.");