"use client";

import { motion } from "motion/react";

interface SproutIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SproutIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: SproutIconProps) => {
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
      {/* brote crece */}
      <motion.path
        d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [0.1, 1],
            transition: { duration: d, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* tierra */}
      <path
        d="M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* hoja se mece */}
      <motion.path
        d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -6, 4, 0],
            transition: { duration: d * 1.1, delay: d * 0.4 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "right bottom" }}
      />
    </motion.svg>
  );
};
