"use client";

import { motion, useReducedMotion } from "motion/react";
import HeartIcon from "@/icons/heart-icon";
import RocketIcon from "@/icons/rocket-icon";
import SunIcon from "@/icons/sun-icon";
import CoffeeIcon from "@/icons/coffee-icon";
import CameraIcon from "@/icons/camera-icon";
import BellIcon from "@/icons/bell-icon";
import BookmarkIcon from "@/icons/bookmark-icon";
import SettingsIcon from "@/icons/settings-icon";

const ICONS = [
  { Icon: HeartIcon, top: "14%", left: "8%", size: 28 },
  { Icon: RocketIcon, top: "22%", right: "10%", size: 32 },
  { Icon: SunIcon, top: "8%", left: "30%", size: 24 },
  { Icon: CoffeeIcon, top: "70%", left: "6%", size: 30 },
  { Icon: CameraIcon, top: "76%", right: "12%", size: 26 },
  { Icon: BellIcon, top: "12%", right: "26%", size: 22 },
  { Icon: BookmarkIcon, top: "62%", left: "16%", size: 24 },
  { Icon: SettingsIcon, top: "58%", right: "24%", size: 28 },
] as const;

export default function FloatingIcons() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {ICONS.map(({ Icon, size, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute text-zinc-300/70 dark:text-zinc-700/50"
          style={pos}
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -14, 0],
                  rotate: [0, i % 2 === 0 ? 6 : -6, 0],
                }
          }
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
}