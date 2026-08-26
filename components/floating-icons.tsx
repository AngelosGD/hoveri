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
import SparklesIcon from "@/icons/sparkles-icon";
import StarIcon from "@/icons/star-icon";
import GiftIcon from "@/icons/gift-icon";
import TrophyIcon from "@/icons/trophy-icon";
import ZapIcon from "@/icons/zap-icon";
import FlameIcon from "@/icons/flame-icon";
import MoonIcon from "@/icons/moon-icon";
import MusicIcon from "@/icons/music-icon";
import CloudIcon from "@/icons/cloud-icon";
import PaletteIcon from "@/icons/palette-icon";

const ICONS = [
  { Icon: HeartIcon, top: "14%", left: "8%", size: 28, rotate: 6, duration: 6.2 },
  { Icon: RocketIcon, top: "22%", right: "10%", size: 32, rotate: -6, duration: 7.1 },
  { Icon: SunIcon, top: "8%", left: "30%", size: 24, rotate: 5, duration: 5.8 },
  { Icon: CoffeeIcon, top: "70%", left: "6%", size: 30, rotate: -5, duration: 6.6 },
  { Icon: CameraIcon, top: "76%", right: "12%", size: 26, rotate: 6, duration: 6.9 },
  { Icon: BellIcon, top: "12%", right: "26%", size: 22, rotate: -6, duration: 5.4 },
  { Icon: BookmarkIcon, top: "62%", left: "16%", size: 24, rotate: 4, duration: 6.0 },
  { Icon: SettingsIcon, top: "58%", right: "24%", size: 28, rotate: -4, duration: 7.3 },
  { Icon: SparklesIcon, top: "6%", right: "14%", size: 20, rotate: 8, duration: 5.6 },
  { Icon: StarIcon, top: "34%", left: "4%", size: 22, rotate: -7, duration: 6.4 },
  { Icon: GiftIcon, top: "44%", right: "5%", size: 24, rotate: 5, duration: 6.1 },
  { Icon: TrophyIcon, top: "82%", left: "22%", size: 26, rotate: -5, duration: 7.0 },
  { Icon: ZapIcon, top: "18%", left: "48%", size: 18, rotate: 7, duration: 5.2 },
  { Icon: FlameIcon, top: "78%", right: "30%", size: 20, rotate: -8, duration: 5.9 },
  { Icon: MoonIcon, top: "38%", right: "18%", size: 20, rotate: 6, duration: 6.7 },
  { Icon: MusicIcon, top: "52%", left: "42%", size: 20, rotate: -6, duration: 5.5 },
  { Icon: CloudIcon, top: "26%", left: "18%", size: 22, rotate: 4, duration: 6.3 },
  { Icon: PaletteIcon, top: "66%", right: "6%", size: 24, rotate: -4, duration: 6.8 },
] as const;

export default function FloatingIcons() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {ICONS.map(({ Icon, size, rotate, duration, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute text-zinc-300/60 dark:text-zinc-600/30"
          style={pos as React.CSSProperties}
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -12 - (i % 3) * 3, 0],
                  rotate: [0, rotate, 0],
                  scale: [1, 1.02, 1],
                  opacity: [0.7, 1, 0.7],
                }
          }
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
}
