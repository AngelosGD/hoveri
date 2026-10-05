"use client";

import { motion } from "motion/react";

interface BlocksIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BlocksIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BlocksIconProps) => {
  const d = duration;
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      whileHover="hover"
      initial="idle"
      aria-hidden
    >
      {/* base */}
      <motion.path
        d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 0.96, 1],
            transition: { duration: d, delay: d * 0.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* bloque se encaja */}
      <motion.rect
        x="14"
        y="2"
        width="8"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { x: 0, y: 0, rotate: 0 },
          hover: {
            x: [0, -3, 0],
            y: [0, 3, 0],
            rotate: [0, -8, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
