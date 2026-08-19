/**
 * Regenerates hand-shaped animations for the tail-end UI icons.
 * Each icon gets semantic groups (.line-0, .arrow, .dot...) animated with
 * intent (itshover style), not generic per-part pops.
 * Usage: node scripts/regenerate-tail-icons.mjs
 */
import { writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const OUT = join(process.cwd(), "icons");

function motion(tag, cls, attrs) {
  const a = Object.entries(attrs)
    .map(([k, v]) => (typeof v === "number" ? `${k}={${v}}` : `${k}="${v}"`))
    .join(" ");
  return `        <motion.${tag} className="${cls}" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} ${a} />`;
}

function svg(parts) {
  return parts.join("\n");
}

// start/stop builders
const A = (sel, kf, dur, delay) =>
  `      animate("${sel}", ${JSON.stringify(kf)}, { duration: ${dur}, ease: "easeInOut"${delay ? `, delay: ${delay}` : ""} });`;

const DEFS = {
  "square-terminal": {
    parts: [
      motion("path", "chevron", { d: "m7 11 2-2-2-2" }),
      motion("path", "prompt", { d: "M11 13h4" }),
      motion("rect", "frame", { width: 18, height: 18, x: 3, y: 3, rx: 2, ry: 2 }),
    ],
    start: [
      A(".chevron", { pathLength: [0, 1], opacity: [0, 1] }, 0.4),
      A(".prompt", { x: [0, 2, 0] }, 0.5, 0.2),
      A(".frame", { scale: [1, 1.03, 1] }, 0.6),
    ],
    stop: [
      A(".chevron", { pathLength: 1, opacity: 1, x: 0 }, 0.2),
      A(".prompt", { x: 0 }, 0.2),
      A(".frame", { scale: 1 }, 0.2),
    ],
  },
  "file-terminal": {
    parts: [
      motion("path", "file", { d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }),
      motion("path", "fold", { d: "M14 2v5a1 1 0 0 0 1 1h5" }),
      motion("path", "chevron", { d: "m8 16 2-2-2-2" }),
      motion("path", "prompt", { d: "M12 18h4" }),
    ],
    start: [
      A(".fold", { pathLength: [0, 1] }, 0.4),
      A(".chevron", { pathLength: [0, 1], opacity: [0, 1] }, 0.35, 0.2),
      A(".prompt", { x: [0, 2, 0] }, 0.5, 0.3),
      A(".file", { scale: [1, 1.02, 1] }, 0.6),
    ],
    stop: [
      A(".fold", { pathLength: 1, x: 0 }, 0.2),
      A(".chevron", { pathLength: 1, opacity: 1, x: 0 }, 0.2),
      A(".prompt", { x: 0 }, 0.2),
      A(".file", { scale: 1 }, 0.2),
    ],
  },
  "git-merge": {
    parts: [
      motion("circle", "dot-a", { cx: 18, cy: 18, r: 3 }),
      motion("circle", "dot-b", { cx: 6, cy: 6, r: 3 }),
      motion("path", "stem", { d: "M6 21V9a9 9 0 0 0 9 9" }),
    ],
    start: [
      A(".stem", { pathLength: [0.4, 1] }, 0.5),
      A(".dot-b", { y: [0, 2, 0], scale: [1, 1.15, 1] }, 0.5),
      A(".dot-a", { scale: [1, 1.15, 1] }, 0.5, 0.15),
    ],
    stop: [
      A(".stem", { pathLength: 1, x: 0 }, 0.2),
      A(".dot-a", { scale: 1, y: 0 }, 0.2),
      A(".dot-b", { scale: 1, y: 0 }, 0.2),
    ],
  },
  "git-commit-horizontal": {
    parts: [
      motion("circle", "dot", { cx: 12, cy: 12, r: 3 }),
      motion("line", "left", { x1: 3, x2: 9, y1: 12, y2: 12 }),
      motion("line", "right", { x1: 15, x2: 21, y1: 12, y2: 12 }),
    ],
    start: [
      A(".dot", { scale: [1, 1.35, 1] }, 0.5),
      A(".left", { x1: [3, 1, 3], opacity: [0.4, 1, 1] }, 0.6, 0.1),
      A(".right", { x2: [21, 23, 21], opacity: [0.4, 1, 1] }, 0.6, 0.1),
    ],
    stop: [
      A(".dot", { scale: 1 }, 0.2),
      A(".left", { x1: 3, opacity: 1 }, 0.2),
      A(".right", { x2: 21, opacity: 1 }, 0.2),
    ],
  },
  "git-pull-request": {
    parts: [
      motion("circle", "dot-a", { cx: 18, cy: 18, r: 3 }),
      motion("circle", "dot-b", { cx: 6, cy: 6, r: 3 }),
      motion("path", "stem", { d: "M13 6h3a2 2 0 0 1 2 2v7" }),
    ],
    start: [
      A(".stem", { pathLength: [0.3, 1] }, 0.5),
      A(".dot-a", { y: [0, -2, 0], scale: [1, 1.15, 1] }, 0.5, 0.1),
      A(".dot-b", { scale: [1, 1.1, 1] }, 0.5, 0.15),
    ],
    stop: [
      A(".stem", { pathLength: 1 }, 0.2),
      A(".dot-a", { scale: 1, y: 0 }, 0.2),
      A(".dot-b", { scale: 1 }, 0.2),
    ],
  },
  "heading-2": {
    parts: [
      motion("path", "rule", { d: "M4 12h8" }),
      motion("path", "col-a", { d: "M4 18V6" }),
      motion("path", "col-b", { d: "M12 18V6" }),
      motion("path", "num", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }),
    ],
    start: [
      A(".rule", { scaleX: [0.3, 1] }, 0.4),
      A(".col-a", { scaleY: [0.5, 1] }, 0.4, 0.1),
      A(".col-b", { scaleY: [0.5, 1] }, 0.4, 0.15),
      A(".num", { pathLength: [0, 1] }, 0.5, 0.2),
    ],
    stop: [
      A(".rule", { scaleX: 1 }, 0.2),
      A(".col-a", { scaleY: 1 }, 0.2),
      A(".col-b", { scaleY: 1 }, 0.2),
      A(".num", { pathLength: 1 }, 0.2),
    ],
  },
  "text-cursor-input": {
    parts: [
      motion("path", "top", { d: "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" }),
      motion("path", "right", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }),
      motion("path", "left", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }),
      motion("path", "bottom", { d: "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" }),
      motion("path", "cursor", { d: "M9 6v12" }),
    ],
    start: [
      A(".cursor", { opacity: [1, 0.2, 1] }, 0.6),
      A(".top", { y: [0, -1, 0] }, 0.5, 0.05),
      A(".bottom", { y: [0, 1, 0] }, 0.5, 0.1),
    ],
    stop: [
      A(".cursor", { opacity: 1, x: 0 }, 0.2),
      A(".top", { y: 0 }, 0.2),
      A(".bottom", { y: 0 }, 0.2),
      A(".left", { x: 0 }, 0.2),
      A(".right", { x: 0 }, 0.2),
    ],
  },
  share: {
    parts: [
      motion("path", "stem", { d: "M12 2v13" }),
      motion("path", "arrow", { d: "m16 6-4-4-4 4" }),
      motion("path", "box", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
    ],
    start: [
      A(".arrow", { y: [0, -3, 0] }, 0.5),
      A(".stem", { scaleY: [1, 1.15, 1] }, 0.5),
      A(".box", { y: [0, 1, 0], opacity: [1, 0.85, 1] }, 0.6, 0.1),
    ],
    stop: [
      A(".arrow", { y: 0 }, 0.2),
      A(".stem", { scaleY: 1, x: 0 }, 0.2),
      A(".box", { y: 0, opacity: 1 }, 0.2),
    ],
  },
  "share-2": {
    parts: [
      motion("circle", "a", { cx: 18, cy: 5, r: 3 }),
      motion("circle", "b", { cx: 6, cy: 12, r: 3 }),
      motion("circle", "c", { cx: 18, cy: 19, r: 3 }),
      motion("line", "line-1", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }),
      motion("line", "line-2", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" }),
    ],
    start: [
      A(".a", { y: [0, -2, 0], scale: [1, 1.15, 1] }, 0.5),
      A(".b", { scale: [1, 1.15, 1] }, 0.5, 0.1),
      A(".c", { y: [0, 2, 0], scale: [1, 1.15, 1] }, 0.5, 0.15),
      A(".line-1", { opacity: [0.5, 1, 1], x1: ["8.59", "9", "8.59"] }, 0.6, 0.1),
      A(".line-2", { opacity: [0.5, 1, 1], x2: ["8.59", "8.2", "8.59"] }, 0.6, 0.15),
    ],
    stop: [
      A(".a", { scale: 1, y: 0 }, 0.2),
      A(".b", { scale: 1 }, 0.2),
      A(".c", { scale: 1, y: 0 }, 0.2),
      A(".line-1", { opacity: 1, x1: "8.59" }, 0.2),
      A(".line-2", { opacity: 1, x2: "8.59" }, 0.2),
    ],
  },
  rss: {
    parts: [
      motion("path", "arc-b", { d: "M4 11a9 9 0 0 1 9 9" }),
      motion("path", "arc-a", { d: "M4 4a16 16 0 0 1 16 16" }),
      motion("circle", "dot", { cx: 4, cy: 20, r: 1 }),
    ],
    start: [
      A(".arc-a", { scale: [0.9, 1.06, 1] }, 0.7),
      A(".arc-b", { scale: [0.95, 1.08, 1] }, 0.7, 0.12),
      A(".dot", { scale: [1, 1.4, 1] }, 0.5, 0.2),
    ],
    stop: [
      A(".arc-a", { scale: 1 }, 0.2),
      A(".arc-b", { scale: 1 }, 0.2),
      A(".dot", { scale: 1 }, 0.2),
    ],
  },
  megaphone: {
    parts: [
      motion("path", "horn", { d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" }),
      motion("path", "echo", { d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }),
      motion("path", "bolt", { d: "M8 6v8" }),
    ],
    start: [
      A(".bolt", { opacity: [0.4, 1, 0.4] }, 0.8),
      A(".echo", { scale: [1, 1.06, 1] }, 0.7, 0.1),
      A(".horn", { scale: [1, 1.03, 1], rotate: [0, -1, 0] }, 0.6),
    ],
    stop: [
      A(".bolt", { opacity: 1 }, 0.2),
      A(".echo", { scale: 1 }, 0.2),
      A(".horn", { scale: 1, rotate: 0 }, 0.2),
    ],
  },
  radio: {
    parts: [
      motion("path", "arc-a", { d: "M16.247 7.761a6 6 0 0 1 0 8.478" }),
      motion("path", "arc-b", { d: "M19.075 4.933a10 10 0 0 1 0 14.134" }),
      motion("path", "arc-c", { d: "M4.925 19.067a10 10 0 0 1 0-14.134" }),
      motion("path", "arc-d", { d: "M7.753 16.239a6 6 0 0 1 0-8.478" }),
    ],
    start: [
      A(".arc-a", { scale: [0.9, 1.08, 1] }, 0.7, 0),
      A(".arc-b", { scale: [0.95, 1.05, 1] }, 0.7, 0.08),
      A(".arc-c", { scale: [0.95, 1.05, 1] }, 0.7, 0.14),
      A(".arc-d", { scale: [0.9, 1.08, 1] }, 0.7, 0.2),
    ],
    stop: [
      A(".arc-a", { scale: 1 }, 0.2),
      A(".arc-b", { scale: 1 }, 0.2),
      A(".arc-c", { scale: 1 }, 0.2),
      A(".arc-d", { scale: 1 }, 0.2),
    ],
  },
  ellipsis: {
    parts: [
      motion("circle", "d0", { cx: 12, cy: 12, r: 1 }),
      motion("circle", "d1", { cx: 19, cy: 12, r: 1 }),
      motion("circle", "d2", { cx: 5, cy: 12, r: 1 }),
    ],
    start: [
      A(".d0", { opacity: [0.3, 1, 0.3] }, 0.6, 0),
      A(".d1", { opacity: [0.3, 1, 0.3] }, 0.6, 0.15),
      A(".d2", { opacity: [0.3, 1, 0.3] }, 0.6, 0.3),
    ],
    stop: [
      A(".d0", { opacity: 1 }, 0.2),
      A(".d1", { opacity: 1 }, 0.2),
      A(".d2", { opacity: 1 }, 0.2),
    ],
  },
  "ellipsis-vertical": {
    parts: [
      motion("circle", "d0", { cx: 12, cy: 12, r: 1 }),
      motion("circle", "d1", { cx: 12, cy: 5, r: 1 }),
      motion("circle", "d2", { cx: 12, cy: 19, r: 1 }),
    ],
    start: [
      A(".d0", { opacity: [0.3, 1, 0.3] }, 0.6, 0),
      A(".d1", { opacity: [0.3, 1, 0.3] }, 0.6, 0.15),
      A(".d2", { opacity: [0.3, 1, 0.3] }, 0.6, 0.3),
    ],
    stop: [
      A(".d0", { opacity: 1 }, 0.2),
      A(".d1", { opacity: 1 }, 0.2),
      A(".d2", { opacity: 1 }, 0.2),
    ],
  },
  "message-square-share": {
    parts: [
      motion("path", "bubble", { d: "M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4" }),
      motion("path", "arrow", { d: "M16 3h6v6" }),
      motion("path", "head", { d: "m16 9 6-6" }),
    ],
    start: [
      A(".arrow", { pathLength: [0, 1] }, 0.4),
      A(".head", { pathLength: [0, 1] }, 0.4, 0.15),
      A(".bubble", { scale: [1, 1.02, 1] }, 0.6),
    ],
    stop: [
      A(".arrow", { pathLength: 1 }, 0.2),
      A(".head", { pathLength: 1 }, 0.2),
      A(".bubble", { scale: 1 }, 0.2),
    ],
  },
  "message-circle-heart": {
    parts: [
      motion("path", "bubble", { d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }),
      motion("path", "heart", { d: "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" }),
    ],
    start: [
      A(".heart", { scale: [1, 1.2, 0.94, 1] }, 0.6),
      A(".bubble", { scale: [1, 1.04, 1] }, 0.6, 0.1),
    ],
    stop: [
      A(".heart", { scale: 1 }, 0.2),
      A(".bubble", { scale: 1 }, 0.2),
    ],
  },
  "heart-handshake": {
    parts: [
      motion("path", "heart", { d: "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" }),
    ],
    start: [
      A(".heart", { scale: [1, 1.05, 0.97, 1] }, 0.7),
      A(".heart", { y: [0, 1, 0] }, 0.5, 0.1),
    ],
    stop: [A(".heart", { scale: 1, y: 0 }, 0.2)],
  },
  download: {
    parts: [
      motion("path", "stem", { d: "M12 15V3" }),
      motion("path", "box", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
      motion("path", "arrow", { d: "m7 10 5 5 5-5" }),
    ],
    start: [
      A(".arrow", { y: [0, 3, 0] }, 0.5),
      A(".stem", { scaleY: [1, 1.2, 1] }, 0.5),
      A(".box", { y: [0, 1, 0] }, 0.5, 0.15),
    ],
    stop: [
      A(".arrow", { y: 0 }, 0.2),
      A(".stem", { scaleY: 1 }, 0.2),
      A(".box", { y: 0 }, 0.2),
    ],
  },
  upload: {
    parts: [
      motion("path", "stem", { d: "M12 3v12" }),
      motion("path", "arrow", { d: "m17 8-5-5-5 5" }),
      motion("path", "box", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    ],
    start: [
      A(".arrow", { y: [0, -3, 0] }, 0.5),
      A(".stem", { scaleY: [1, 1.2, 1] }, 0.5),
      A(".box", { y: [0, 1, 0] }, 0.5, 0.15),
    ],
    stop: [
      A(".arrow", { y: 0 }, 0.2),
      A(".stem", { scaleY: 1 }, 0.2),
      A(".box", { y: 0 }, 0.2),
    ],
  },
  "star-off": {
    parts: [
      motion("path", "half-a", { d: "m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152" }),
      motion("path", "half-b", { d: "m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099" }),
      motion("path", "slash", { d: "m2 2 20 20" }),
    ],
    start: [
      A(".slash", { pathLength: [0, 1], opacity: [0, 1] }, 0.4),
      A(".half-a", { x: [0, -1.5, 0], rotate: [0, -4, 0] }, 0.6, 0.1),
      A(".half-b", { x: [0, 1.5, 0], rotate: [0, 4, 0] }, 0.6, 0.15),
    ],
    stop: [
      A(".slash", { pathLength: 1, opacity: 1, x: 0 }, 0.2),
      A(".half-a", { x: 0, rotate: 0 }, 0.2),
      A(".half-b", { x: 0, rotate: 0 }, 0.2),
    ],
  },
  "heart-off": {
    parts: [
      motion("path", "half-a", { d: "M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655" }),
      motion("path", "half-b", { d: "m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761" }),
      motion("path", "slash", { d: "m2 2 20 20" }),
    ],
    start: [
      A(".slash", { pathLength: [0, 1], opacity: [0, 1] }, 0.4),
      A(".half-a", { scale: [1, 1.05, 1] }, 0.6, 0.1),
      A(".half-b", { scale: [1, 1.05, 1] }, 0.6, 0.15),
    ],
    stop: [
      A(".slash", { pathLength: 1, opacity: 1, x: 0 }, 0.2),
      A(".half-a", { scale: 1 }, 0.2),
      A(".half-b", { scale: 1 }, 0.2),
    ],
  },
  "trash-2": {
    parts: [
      motion("path", "line-a", { d: "M10 11v6" }),
      motion("path", "line-b", { d: "M14 11v6" }),
      motion("path", "can", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }),
      motion("path", "top", { d: "M3 6h18" }),
      motion("path", "handle", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
    ],
    start: [
      A(".line-a", { y: [0, 2, 0], opacity: [1, 0.4, 1] }, 0.4),
      A(".line-b", { y: [0, 2, 0], opacity: [1, 0.4, 1] }, 0.4, 0.08),
      A(".top", { x: [0, -2, 0], rotate: [0, -8, 0] }, 0.5),
      A(".can", { scale: [1, 1.04, 1] }, 0.5, 0.1),
    ],
    stop: [
      A(".line-a", { y: 0, opacity: 1 }, 0.2),
      A(".line-b", { y: 0, opacity: 1 }, 0.2),
      A(".top", { x: 0, rotate: 0 }, 0.2),
      A(".can", { scale: 1 }, 0.2),
      A(".handle", { x: 0 }, 0.2),
    ],
  },
  flame: {
    parts: [
      motion("path", "flame", { d: "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" }),
    ],
    start: [
      A(".flame", { scale: [1, 1.06, 0.97, 1.03, 1], y: [0, -1.5, 0], rotate: [0, 2, -2, 0] }, 0.9),
    ],
    stop: [A(".flame", { scale: 1, y: 0, rotate: 0 }, 0.25)],
  },
  droplets: {
    parts: [
      motion("path", "drop-a", { d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" }),
      motion("path", "drop-b", { d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" }),
    ],
    start: [
      A(".drop-a", { y: [0, 1.5, 0], scale: [1, 1.04, 1] }, 0.6),
      A(".drop-b", { y: [0, 2, 0], scale: [1, 1.04, 1] }, 0.6, 0.12),
    ],
    stop: [
      A(".drop-a", { y: 0, scale: 1 }, 0.2),
      A(".drop-b", { y: 0, scale: 1 }, 0.2),
    ],
  },
  ban: {
    parts: [
      motion("circle", "ring", { cx: 12, cy: 12, r: 10 }),
      motion("path", "slash", { d: "M4.929 4.929 19.07 19.071" }),
    ],
    start: [
      A(".slash", { pathLength: [0, 1], opacity: [0, 1] }, 0.4),
      A(".ring", { scale: [1, 1.06, 1] }, 0.5, 0.1),
    ],
    stop: [
      A(".slash", { pathLength: 1, opacity: 1 }, 0.2),
      A(".ring", { scale: 1 }, 0.2),
    ],
  },
  magnet: {
    parts: [
      motion("path", "tip", { d: "m12 15 4 4" }),
      motion("path", "body", { d: "M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" }),
      motion("path", "pole", { d: "m5 8 4 4" }),
    ],
    start: [
      A(".tip", { pathLength: [0.3, 1] }, 0.5),
      A(".pole", { opacity: [0.5, 1, 0.5] }, 0.8),
      A(".body", { scale: [1, 1.04, 1] }, 0.6, 0.1),
    ],
    stop: [
      A(".tip", { pathLength: 1 }, 0.2),
      A(".pole", { opacity: 1 }, 0.2),
      A(".body", { scale: 1 }, 0.2),
    ],
  },
  puzzle: {
    parts: [
      motion("path", "piece", { d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" }),
    ],
    start: [
      A(".piece", { rotate: [0, 8, -8, 0], scale: [1, 1.04, 1] }, 0.8),
    ],
    stop: [A(".piece", { rotate: 0, scale: 1 }, 0.25)],
  },
  "paw-print": {
    parts: [
      motion("circle", "toe-a", { cx: 11, cy: 4, r: 2 }),
      motion("circle", "toe-b", { cx: 18, cy: 8, r: 2 }),
      motion("circle", "toe-c", { cx: 20, cy: 16, r: 2 }),
      motion("path", "pad", { d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" }),
    ],
    start: [
      A(".pad", { scale: [1, 1.06, 1], y: [0, 1, 0] }, 0.6),
      A(".toe-a", { y: [0, -2, 0], scale: [1, 1.15, 1] }, 0.6, 0.1),
      A(".toe-b", { y: [0, -2, 0], scale: [1, 1.15, 1] }, 0.6, 0.2),
      A(".toe-c", { y: [0, -2, 0], scale: [1, 1.15, 1] }, 0.6, 0.3),
    ],
    stop: [
      A(".pad", { scale: 1, y: 0 }, 0.2),
      A(".toe-a", { y: 0, scale: 1 }, 0.2),
      A(".toe-b", { y: 0, scale: 1 }, 0.2),
      A(".toe-c", { y: 0, scale: 1 }, 0.2),
    ],
  },
  "pencil-ruler": {
    parts: [
      motion("path", "pencil", { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" }),
      motion("path", "lead", { d: "m8 6 2-2" }),
      motion("path", "tip", { d: "m18 16 2-2" }),
      motion("path", "ruler", { d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" }),
      motion("path", "body", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }),
      motion("path", "join", { d: "m15 5 4 4" }),
    ],
    start: [
      A(".pencil", { x: [0, -2, 0], rotate: [0, -3, 0] }, 0.6),
      A(".ruler", { x: [0, 2, 0], rotate: [0, 3, 0] }, 0.6, 0.1),
      A(".lead", { opacity: [0.4, 1, 0.4] }, 0.7, 0.15),
      A(".tip", { opacity: [0.4, 1, 0.4] }, 0.7, 0.25),
    ],
    stop: [
      A(".pencil", { x: 0, rotate: 0 }, 0.2),
      A(".ruler", { x: 0, rotate: 0 }, 0.2),
      A(".lead", { opacity: 1 }, 0.2),
      A(".tip", { opacity: 1 }, 0.2),
      A(".body", { x: 0 }, 0.2),
      A(".join", { x: 0 }, 0.2),
    ],
  },
  award: {
    parts: [
      motion("path", "ribbon", { d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" }),
      motion("circle", "medal", { cx: 12, cy: 8, r: 6 }),
    ],
    start: [
      A(".ribbon", { scale: [1, 1.08, 1], y: [0, -2, 0] }, 0.7),
      A(".medal", { scale: [1, 1.06, 0.97, 1] }, 0.6, 0.1),
    ],
    stop: [
      A(".ribbon", { scale: 1, y: 0 }, 0.2),
      A(".medal", { scale: 1 }, 0.2),
    ],
  },
  zap: {
    parts: [
      motion("path", "bolt", { d: "M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z" }),
    ],
    start: [
      A(".bolt", { pathLength: [0, 1, 1], opacity: [0, 1, 1] }, 0.5),
      A(".bolt", { x: [0, 1.5, 0], y: [0, -1, 0] }, 0.5, 0.1),
    ],
    stop: [A(".bolt", { pathLength: 1, opacity: 1, x: 0, y: 0 }, 0.25)],
  },
};

function toPascal(str) {
  return str.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
}

for (const [name, def] of Object.entries(DEFS)) {
  const className = `${toPascal(name)}Icon`;
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
${def.start.join("\n")}
    };

    const stopAnimation = () => {
${def.stop.join("\n")}
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
${svg(def.parts)}
      </motion.svg>
    );
  },
);

${className}.displayName = "${className}";

export default ${className};
`;
  writeFileSync(join(OUT, `${name}-icon.tsx`), component);
  console.log(`✓ ${name}-icon.tsx`);
}

console.log("Done.");