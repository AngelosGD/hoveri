"use client";

import { motion } from "motion/react";

interface SearchIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SearchIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: SearchIconProps) => {
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
      <motion.circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="2.2"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.12, 1],
            transition: { duration: d, ease: "easeOut" },
          },
        }}
        style={{ originX: "11px", originY: "11px" }}
      />
      <motion.path
        d="m20 20-3.5-3.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        variants={{
          idle: { x: 0, y: 0 },
          hover: {
            x: [0, 2.5, 0],
            y: [0, 2.5, 0],
            transition: { duration: d, ease: "easeOut" },
          },
        }}
      />
      {/* ping */}
      <motion.circle
        cx="11"
        cy="11"
        r="7"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { scale: 1, opacity: 0 },
          hover: {
            scale: [1, 1.7],
            opacity: [0.6, 0],
            transition: { duration: d * 1.1, ease: "easeOut" },
          },
        }}
        style={{ originX: "11px", originY: "11px" }}
      />
    </motion.svg>
  );
};
