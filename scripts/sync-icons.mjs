/**
 * Syncs icons/data.ts, icons/index.ts and components/icon-map.ts from the manifest.
 * Run after generating new icon files: node scripts/sync-icons.mjs
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { ICON_MANIFEST } from "./icon-manifest.mjs";

const DATA_HEADER = `export interface IconMeta {
  name: string;
  file: string;
  category: string;
  tags: string[];
}

export const ICON_LIST: IconMeta[] = [
`;

const DATA_FOOTER = `];

export function getIconCount(): number {
  return ICON_LIST.length;
}

export function getFeaturedIcons(limit = 5): IconMeta[] {
  return ICON_LIST.slice(-limit).reverse();
}

export function getCategories(): string[] {
  return Array.from(new Set(ICON_LIST.map((icon) => icon.category)));
}
`;

function pascalFromFile(file) {
  return file
    .replace(/-icon$/, "")
    .split("-")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("")
    + "Icon";
}

function buildData() {
  const entries = ICON_MANIFEST.map(
    (i) => `  {
    name: "${i.name}",
    file: "${i.file}",
    category: "${i.category}",
    tags: ${JSON.stringify(i.tags)},
  },`,
  ).join("\n");
  return DATA_HEADER + entries + "\n" + DATA_FOOTER;
}

function buildIndex() {
  const exports = ICON_MANIFEST.map(
    (i) => `export { default as ${pascalFromFile(i.file)} } from "./${i.file}";`,
  ).join("\n");
  return `${exports}
export { default as GitHubIcon } from "./github-icon";
export type { AnimatedIconHandle, AnimatedIconProps } from "./types";
`;
}

function buildIconMap() {
  const imports = ICON_MANIFEST.map(
    (i) => `import ${pascalFromFile(i.file)} from "@/icons/${i.file}";`,
  ).join("\n");
  const map = ICON_MANIFEST.map(
    (i) => `  "${i.file}": ${pascalFromFile(i.file)},`,
  ).join("\n");
  return `"use client";

import type { ComponentType } from "react";
${imports}

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
${map}
};

export function getIconComponent(file: string) {
  return iconMap[file];
}
`;
}

writeFileSync(join(process.cwd(), "icons", "data.ts"), buildData());
writeFileSync(join(process.cwd(), "icons", "index.ts"), buildIndex());
writeFileSync(join(process.cwd(), "icons", "icon-map.ts"), buildIconMap());
console.log("✓ synced icons/data.ts, icons/index.ts, icons/icon-map.ts");