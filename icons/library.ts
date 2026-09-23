"use client";

import { CodeIcon } from "@/icons/code-icon";
import { HeartIcon } from "@/icons/heart-icon";
import { SparkleIcon } from "@/icons/sparkle-icon";

export type IconConfig = {
  color: string;
  speed: number;
  size: number;
};

export type LibraryIcon = {
  id: string;
  num: string;
  name: string;
  category: string;
  fileName: string;
  componentName: string;
  defaultConfig: IconConfig;
  Component: (props: {
    size?: number;
    className?: string;
    duration?: number;
  }) => React.ReactElement;
  baseDuration: number;
};

export const ICON_LIST: LibraryIcon[] = [
  {
    id: "sparkle",
    num: "01",
    name: "Sparkles",
    category: "Essentials",
    fileName: "sparkle-icon",
    componentName: "SparkleIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: SparkleIcon,
    baseDuration: 0.5,
  },
  {
    id: "heart",
    num: "02",
    name: "Heart",
    category: "Essentials",
    fileName: "heart-icon",
    componentName: "HeartIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: HeartIcon,
    baseDuration: 0.55,
  },
  {
    id: "code",
    num: "03",
    name: "Code",
    category: "Development",
    fileName: "code-icon",
    componentName: "CodeIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: CodeIcon,
    baseDuration: 0.4,
  },
];

export const CATEGORIES = [
  "All icons",
  ...Array.from(new Set(ICON_LIST.map((i) => i.category))),
];
