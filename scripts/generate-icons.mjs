/**
 * Generates animated icon components from Lucide icon paths.
 * Usage: node scripts/generate-icons.mjs <lucide-name> [more-names...]
 * Output: icons/<kebab-name>-icon.tsx
 */
import { pathToFileURL } from "node:url";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const LUCIDE_DIR = join(process.cwd(), "node_modules/lucide-react/dist/esm/icons");

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

function generateIcon(lucideName) {
  return {
    fileName: `${toKebab(lucideName)}-icon.tsx`,
    className: `${toPascal(lucideName)}Icon`,
  };
}

const names = process.argv.slice(2);

for (const name of names) {
  const url = pathToFileURL(join(LUCIDE_DIR, `${name}.mjs`)).href;
  const mod = await import(url);
  const iconNode = mod.__iconNode;

  const { fileName, className } = generateIcon(name);

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

    const startAnimation = async () => {
      await animate(
        ".icon-path",
        { scale: [1, 1.12, 1, 1.2, 1] },
        { duration: 0.6, ease: "easeOut" },
      );
    };

    const stopAnimation = () => {
      animate(".icon-path", { scale: 1 }, { duration: 0.2, ease: "easeOut" });
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
        <motion.g
          className="icon-path"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}
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
  console.log(`✓ generated icons/${fileName}`);
}

console.log("Done.");