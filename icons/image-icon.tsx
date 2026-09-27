"use client";

import { motion } from "motion/react";

interface ImageIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ImageIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: ImageIconProps) => {
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
      {/* marco */}
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* sol */}
      <motion.circle
        cx="8.5"
        cy="8.5"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.5, 1],
            transition: { duration: d * 0.6, delay: d * 0.15 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* montaña */}
      <motion.path
        d="m21 15-5-5L5 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [1, 0, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <path
        d="m16 15 3-3 2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};
