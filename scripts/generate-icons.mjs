/**
 * Generates animated icon components from Lucide icon paths.
 * Usage: node scripts/generate-icons.mjs <name>:<variant> [more...]
 * Variant is picked per name via the ANIMATION_MANIFEST when omitted.
 * Output: icons/<kebab-name>-icon.tsx
 */
import { pathToFileURL } from "node:url";
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LUCIDE_DIR = join(process.cwd(), "node_modules/lucide-react/dist/esm/icons");

const VARIANTS = {
  pulse: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { scale: [1, 1.15, 0.95, 1.2, 1] },
        { duration: 0.7, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { scale: 1 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  throb: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { scale: [1, 1.08, 1, 1.06, 1] },
        { duration: 0.9, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { scale: 1 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  bounce: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { y: [0, -6, 0, -2, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { y: 0 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  float: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { y: [0, -3, 0, -1.5, 0], scale: [1, 1.05, 1] },
        { duration: 1, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { y: 0, scale: 1 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  wiggle: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { rotate: [0, -8, 8, -6, 6, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { rotate: 0 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  shake: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { x: [0, -4, 4, -3, 3, 0], rotate: [0, -3, 3, -2, 2, 0] },
        { duration: 0.5, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { x: 0, rotate: 0 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  swing: {
    origin: "50% 15%",
    start: `async () => {
      await animate(
        ".icon-path",
        { rotate: [0, -14, 14, -8, 8, 0] },
        { duration: 0.8, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { rotate: 0 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  tilt: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { rotate: [0, 12, -8, 6, 0], x: [0, 1.5, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { rotate: 0, x: 0 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  spin: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { rotate: 360 },
        { duration: 1.1, ease: "linear", repeat: 2 },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { rotate: 0 }, { duration: 0.3, ease: "easeOut" });
    };`,
  },
  crank: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { rotate: [0, 18, -18, 12, -12, 0] },
        { duration: 0.65, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { rotate: 0 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  flash: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { scale: [1, 0.85, 1.15, 1], opacity: [1, 0.4, 1, 1] },
        { duration: 0.45, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { scale: 1, opacity: 1 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  grow: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { scale: [0.5, 1.15, 0.9, 1] },
        { duration: 0.65, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { scale: 1 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  drop: {
    origin: "50% 0%",
    start: `async () => {
      await animate(
        ".icon-path",
        { y: [-8, 2, -1, 0], rotate: [20, -4, 2, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { y: 0, rotate: 0 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  rise: {
    origin: "50% 100%",
    start: `async () => {
      await animate(
        ".icon-path",
        { y: [6, -2, 1, 0], opacity: [0.3, 1, 1, 1] },
        { duration: 0.7, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { y: 0, opacity: 1 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  squash: {
    origin: "50% 100%",
    start: `async () => {
      await animate(
        ".icon-path",
        { scaleY: [1, 0.65, 1.2, 1], scaleX: [1, 1.1, 0.95, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { scaleY: 1, scaleX: 1 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  slide: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { x: [-8, 2, -1, 0], rotate: [0, -6, 3, 0] },
        { duration: 0.65, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { x: 0, rotate: 0 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
  spread: {
    origin: "50% 50%",
    start: `async () => {
      await animate(
        ".icon-path",
        { scale: [0.9, 1.2, 0.95, 1.1, 1], opacity: [1, 0.75, 1, 1] },
        { duration: 0.8, ease: "easeInOut" },
      );
    };`,
    stop: `() => {
      animate(".icon-path", { scale: 1, opacity: 1 }, { duration: 0.2, ease: "easeOut" });
    };`,
  },
};

const ANIMATION_MANIFEST = {
  smartphone: "pulse",
  tablet: "wiggle",
  laptop: "pulse",
  monitor: "swing",
  battery: "throb",
  "battery-charging": "flash",
  wifi: "spread",
  bluetooth: "wiggle",
  signal: "grow",
  phone: "bounce",
  code: "wiggle",
  terminal: "flash",
  "git-branch": "spread",
  database: "pulse",
  server: "throb",
  cpu: "spin",
  "file-code": "bounce",
  languages: "grow",
  calculator: "pulse",
  bug: "wiggle",
  pizza: "pulse",
  beer: "swing",
  donut: "slide",
  "ice-cream-bowl": "grow",
  cake: "bounce",
  apple: "swing",
  sandwich: "squash",
  utensils: "shake",
  croissant: "grow",
  popcorn: "bounce",
  cloud: "float",
  "cloud-rain": "drop",
  "cloud-snow": "drop",
  "cloud-lightning": "flash",
  "cloud-sun": "spread",
  snowflake: "spin",
  wind: "wiggle",
  umbrella: "float",
  rainbow: "rise",
  tornado: "crank",
  music: "wiggle",
  "music-2": "bounce",
  headphones: "throb",
  mic: "grow",
  play: "bounce",
  pause: "pulse",
  "volume-2": "grow",
  clapperboard: "slide",
  gamepad: "tilt",
  film: "crank",
  plane: "float",
  car: "shake",
  bus: "bounce",
  ship: "swing",
  compass: "spin",
  map: "spread",
  navigation: "tilt",
  "map-pin": "drop",
  ticket: "slide",
  anchor: "swing",
  house: "bounce",
  lamp: "grow",
  sofa: "squash",
  bed: "spread",
  lightbulb: "flash",
  tv: "pulse",
  keyboard: "shake",
  printer: "throb",
  thermometer: "rise",
  "washing-machine": "crank",
  "dollar-sign": "grow",
  bitcoin: "spin",
  "credit-card": "slide",
  wallet: "bounce",
  tag: "wiggle",
  receipt: "drop",
  "shopping-cart": "shake",
  "trending-up": "rise",
  "chart-pie": "grow",
  coins: "bounce",
  trophy: "bounce",
  medal: "spin",
  target: "spread",
  gift: "bounce",
  sparkle: "grow",
  palette: "crank",
  gem: "flash",
};

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

function serializeAttrs(attrs) {
  return Object.entries(attrs)
    .filter(([key]) => key !== "key")
    .map(([key, value]) => (typeof value === "number" ? `${key}={${value}}` : `${key}="${value}"`))
    .join(" ");
}

function nodeToJsx(node, depth = 0) {
  const [tag, attrs, children] = node;
  if (Array.isArray(children) && children.length > 0) {
    const inner = children.map((c) => nodeToJsx(c, depth + 1)).join("\n");
    const attrStr = Object.keys(attrs).length ? ` ${serializeAttrs(attrs)}` : "";
    return `        <${tag}${attrStr}>\n${inner}\n        </${tag}>`;
  }
  const attrStr = serializeAttrs(attrs);
  return `        <${tag} ${attrStr} />`;
}

const args = process.argv.slice(2);

if (!existsSync(join(process.cwd(), "icons"))) {
  mkdirSync(join(process.cwd(), "icons"));
}

for (const arg of args) {
  const [name, explicitVariant] = arg.split(":");
  const variant = explicitVariant || ANIMATION_MANIFEST[name] || "pulse";
  const animation = VARIANTS[variant];

  if (!animation) {
    console.error(`✗ unknown variant "${variant}" for ${name}`);
    continue;
  }

  const url = pathToFileURL(join(LUCIDE_DIR, `${name}.mjs`)).href;
  const mod = await import(url);
  const iconNode = mod.__iconNode;

  const fileName = `${toKebab(name)}-icon.tsx`;
  const className = `${toPascal(name)}Icon`;

  const paths = iconNode.map((node) => nodeToJsx(node)).join("\n");

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

    const startAnimation = ${animation.start}

    const stopAnimation = ${animation.stop}

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
        <motion.g
          className="icon-path"
          style={{ transformOrigin: "${animation.origin}", transformBox: "fill-box" }}
        >
${paths}
        </motion.g>
      </motion.svg>
    );
  },
);

${className}.displayName = "${className}";

export default ${className};
`;

  writeFileSync(join(process.cwd(), "icons", fileName), component);
  console.log(`✓ generated icons/${fileName} [${variant}]`);
}

console.log("Done.");