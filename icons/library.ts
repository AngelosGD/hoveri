"use client";

import { CodeIcon } from "@/icons/code-icon";
import { HeartIcon } from "@/icons/heart-icon";
import { SparkleIcon } from "@/icons/sparkle-icon";
import { ZapIcon } from "@/icons/zap-icon";
import { BellIcon } from "@/icons/bell-icon";
import { SearchIcon } from "@/icons/search-icon";
import { DownloadIcon } from "@/icons/download-icon";
import { GlobeIcon } from "@/icons/globe-icon";
import { CameraIcon } from "@/icons/camera-icon";
import { MoonIcon } from "@/icons/moon-icon";
import { CheckIcon } from "@/icons/check-icon";
import { SendIcon } from "@/icons/send-icon";
import { TerminalIcon } from "@/icons/terminal-icon";

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
  {
    id: "zap",
    num: "04",
    name: "Zap",
    category: "Essentials",
    fileName: "zap-icon",
    componentName: "ZapIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: ZapIcon,
    baseDuration: 0.45,
  },
  {
    id: "check",
    num: "05",
    name: "Check",
    category: "Essentials",
    fileName: "check-icon",
    componentName: "CheckIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: CheckIcon,
    baseDuration: 0.45,
  },
  {
    id: "bell",
    num: "06",
    name: "Bell",
    category: "Interface",
    fileName: "bell-icon",
    componentName: "BellIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: BellIcon,
    baseDuration: 0.55,
  },
  {
    id: "search",
    num: "07",
    name: "Search",
    category: "Interface",
    fileName: "search-icon",
    componentName: "SearchIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: SearchIcon,
    baseDuration: 0.5,
  },
  {
    id: "download",
    num: "08",
    name: "Download",
    category: "Interface",
    fileName: "download-icon",
    componentName: "DownloadIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: DownloadIcon,
    baseDuration: 0.5,
  },
  {
    id: "globe",
    num: "09",
    name: "Globe",
    category: "Interface",
    fileName: "globe-icon",
    componentName: "GlobeIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: GlobeIcon,
    baseDuration: 0.6,
  },
  {
    id: "moon",
    num: "10",
    name: "Moon",
    category: "Interface",
    fileName: "moon-icon",
    componentName: "MoonIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: MoonIcon,
    baseDuration: 0.55,
  },
  {
    id: "send",
    num: "11",
    name: "Send",
    category: "Interface",
    fileName: "send-icon",
    componentName: "SendIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: SendIcon,
    baseDuration: 0.5,
  },
  {
    id: "camera",
    num: "12",
    name: "Camera",
    category: "Media",
    fileName: "camera-icon",
    componentName: "CameraIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: CameraIcon,
    baseDuration: 0.5,
  },
  {
    id: "terminal",
    num: "13",
    name: "Terminal",
    category: "Development",
    fileName: "terminal-icon",
    componentName: "TerminalIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: TerminalIcon,
    baseDuration: 0.5,
  },
];

export const CATEGORIES = [
  "All icons",
  ...Array.from(new Set(ICON_LIST.map((i) => i.category))),
];
