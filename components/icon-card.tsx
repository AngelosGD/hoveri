"use client";

import type { ComponentType } from "react";
import {
  BellIcon,
  BookmarkIcon,
  CameraIcon,
  CheckIcon,
  CoffeeIcon,
  CopyIcon,
  HeartIcon,
  MoonIcon,
  RocketIcon,
  SendIcon,
  SettingsIcon,
  StarIcon,
  SunIcon,
} from "@/icons";

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "heart-icon": HeartIcon,
  "star-icon": StarIcon,
  "rocket-icon": RocketIcon,
  "send-icon": SendIcon,
  "moon-icon": MoonIcon,
  "sun-icon": SunIcon,
  "copy-icon": CopyIcon,
  "check-icon": CheckIcon,
  "bookmark-icon": BookmarkIcon,
  "bell-icon": BellIcon,
  "settings-icon": SettingsIcon,
  "coffee-icon": CoffeeIcon,
  "camera-icon": CameraIcon,
};

interface IconCardProps {
  file: string;
  name: string;
  size?: number;
}

export default function IconCard({ file, name, size = 40 }: IconCardProps) {
  const Icon = iconMap[file];

  if (!Icon) return null;

  return (
    <div className="flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-zinc-900 bg-white transition-transform duration-300 hover:-translate-y-1">
      <Icon size={size} />
    </div>
  );
}