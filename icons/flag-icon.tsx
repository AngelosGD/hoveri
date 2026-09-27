"use client";

import { motion } from "motion/react";

interface FlagIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FlagIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: FlagIconProps) => {
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
      {/* asta */}
      <path
        d="M4 22V4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* bandera ondea */}
      <motion.path
        d="M4 4h13l-2.5 4L17 12H4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { skewX: 0 },
          hover: {
            skewX: [0, 8, -6, 4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left center" }}
      />
      {/* estrella */}
      <motion.circle
        cx="9"
        cy="8"
        r="1.2"
        fill="currentColor"
        variants={{
          idle: { opacity: 1, scale: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            scale: [1, 1.4, 1],
            transition: { duration: d * 0.7, delay: d * 0.2 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
