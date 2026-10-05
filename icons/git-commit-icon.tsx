"use client";

import { motion } from "motion/react";

interface GitCommitIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const GitCommitIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: GitCommitIconProps) => {
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
      {/* lineas salen del centro */}
      <motion.line
        x1="3"
        y1="12"
        x2="9"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [0, 1],
            transition: { duration: d * 0.6, ease: "easeOut" },
          },
        }}
      />
      <motion.line
        x1="15"
        y1="12"
        x2="21"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [0, 1],
            transition: { duration: d * 0.6, delay: d * 0.15, ease: "easeOut" },
          },
        }}
      />
      {/* commit late */}
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.6, 1],
            transition: { duration: d * 0.8, delay: d * 0.45 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
