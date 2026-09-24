"use client";

import { motion } from "motion/react";

interface ZapIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ZapIcon = ({
  size = 32,
  className,
  duration = 0.45,
}: ZapIconProps) => {
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
      <motion.path
        d="M13 2 L3 14 h9 l-1 8 10-12 h-9 l1-8 z"
        fill="currentColor"
        variants={{
          idle: { scale: 1, rotate: 0 },
          hover: {
            scale: [1, 1.2, 0.95, 1.1, 1],
            rotate: [0, -6, 4, 0],
            transition: { duration: d, times: [0, 0.25, 0.5, 0.75, 1] },
          },
        }}
        style={{ originX: "12px", originY: "12px" }}
      />
      <motion.path
        d="M13 2 L3 14 h9 l-1 8 10-12 h-9 l1-8 z"
        fill="white"
        opacity={0.35}
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 0.45, 0],
            transition: { duration: d * 0.9, delay: d * 0.15 },
          },
        }}
      />
    </motion.svg>
  );
};
