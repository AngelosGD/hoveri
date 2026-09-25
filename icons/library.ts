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
import { StarIcon } from "@/icons/star-icon";
import { EyeIcon } from "@/icons/eye-icon";
import { CoffeeIcon } from "@/icons/coffee-icon";
import { PlayIcon } from "@/icons/play-icon";
import { LockIcon } from "@/icons/lock-icon";
import { FolderIcon } from "@/icons/folder-icon";
import { ArrowUpRightIcon } from "@/icons/arrow-up-right-icon";
import { BookmarkIcon } from "@/icons/bookmark-icon";
import { WifiIcon } from "@/icons/wifi-icon";
import { FireIcon } from "@/icons/fire-icon";
import { TrashIcon } from "@/icons/trash-icon";
import { PencilIcon } from "@/icons/pencil-icon";
import { CalendarIcon } from "@/icons/calendar-icon";
import { ClockIcon } from "@/icons/clock-icon";
import { MusicIcon } from "@/icons/music-icon";
import { VideoIcon } from "@/icons/video-icon";
import { UserIcon } from "@/icons/user-icon";
import { SettingsIcon } from "@/icons/settings-icon";
import { MicIcon } from "@/icons/mic-icon";
import { SunIcon } from "@/icons/sun-icon";

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
  {
    id: "star",
    num: "14",
    name: "Star",
    category: "Essentials",
    fileName: "star-icon",
    componentName: "StarIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: StarIcon,
    baseDuration: 0.5,
  },
  {
    id: "eye",
    num: "15",
    name: "Eye",
    category: "Interface",
    fileName: "eye-icon",
    componentName: "EyeIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: EyeIcon,
    baseDuration: 0.55,
  },
  {
    id: "coffee",
    num: "16",
    name: "Coffee",
    category: "Essentials",
    fileName: "coffee-icon",
    componentName: "CoffeeIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: CoffeeIcon,
    baseDuration: 0.6,
  },
  {
    id: "play",
    num: "17",
    name: "Play",
    category: "Media",
    fileName: "play-icon",
    componentName: "PlayIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: PlayIcon,
    baseDuration: 0.5,
  },
  {
    id: "lock",
    num: "18",
    name: "Lock",
    category: "Interface",
    fileName: "lock-icon",
    componentName: "LockIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: LockIcon,
    baseDuration: 0.5,
  },
  {
    id: "folder",
    num: "19",
    name: "Folder",
    category: "Development",
    fileName: "folder-icon",
    componentName: "FolderIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: FolderIcon,
    baseDuration: 0.5,
  },
  {
    id: "arrow-up-right",
    num: "20",
    name: "Arrow Up Right",
    category: "Interface",
    fileName: "arrow-up-right-icon",
    componentName: "ArrowUpRightIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: ArrowUpRightIcon,
    baseDuration: 0.45,
  },
  {
    id: "bookmark",
    num: "21",
    name: "Bookmark",
    category: "Interface",
    fileName: "bookmark-icon",
    componentName: "BookmarkIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: BookmarkIcon,
    baseDuration: 0.5,
  },
  {
    id: "wifi",
    num: "22",
    name: "Wifi",
    category: "Interface",
    fileName: "wifi-icon",
    componentName: "WifiIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: WifiIcon,
    baseDuration: 0.55,
  },
  {
    id: "fire",
    num: "23",
    name: "Fire",
    category: "Essentials",
    fileName: "fire-icon",
    componentName: "FireIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: FireIcon,
    baseDuration: 0.55,
  },
  {
    id: "trash",
    num: "24",
    name: "Trash",
    category: "Interface",
    fileName: "trash-icon",
    componentName: "TrashIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: TrashIcon,
    baseDuration: 0.5,
  },
  {
    id: "pencil",
    num: "25",
    name: "Pencil",
    category: "Interface",
    fileName: "pencil-icon",
    componentName: "PencilIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: PencilIcon,
    baseDuration: 0.5,
  },
  {
    id: "calendar",
    num: "26",
    name: "Calendar",
    category: "Essentials",
    fileName: "calendar-icon",
    componentName: "CalendarIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: CalendarIcon,
    baseDuration: 0.55,
  },
  {
    id: "clock",
    num: "27",
    name: "Clock",
    category: "Essentials",
    fileName: "clock-icon",
    componentName: "ClockIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: ClockIcon,
    baseDuration: 0.6,
  },
  {
    id: "music",
    num: "28",
    name: "Music",
    category: "Media",
    fileName: "music-icon",
    componentName: "MusicIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: MusicIcon,
    baseDuration: 0.55,
  },
  {
    id: "video",
    num: "29",
    name: "Video",
    category: "Media",
    fileName: "video-icon",
    componentName: "VideoIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: VideoIcon,
    baseDuration: 0.5,
  },
  {
    id: "user",
    num: "30",
    name: "User",
    category: "Interface",
    fileName: "user-icon",
    componentName: "UserIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: UserIcon,
    baseDuration: 0.5,
  },
  {
    id: "settings",
    num: "31",
    name: "Settings",
    category: "Development",
    fileName: "settings-icon",
    componentName: "SettingsIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: SettingsIcon,
    baseDuration: 0.6,
  },
  {
    id: "mic",
    num: "32",
    name: "Mic",
    category: "Media",
    fileName: "mic-icon",
    componentName: "MicIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: MicIcon,
    baseDuration: 0.55,
  },
  {
    id: "sun",
    num: "33",
    name: "Sun",
    category: "Essentials",
    fileName: "sun-icon",
    componentName: "SunIcon",
    defaultConfig: { color: "#18181b", speed: 1, size: 48 },
    Component: SunIcon,
    baseDuration: 0.55,
  },
];

export const CATEGORIES = [
  "All icons",
  ...Array.from(new Set(ICON_LIST.map((i) => i.category))),
];
