"use client";

import { motion } from "motion/react";

interface SailboatIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SailboatIcon = ({
  size = 32,
  className,
  duration = 0.7,
}: SailboatIconProps) => {
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
      {/* barco navega */}
      <motion.g
        variants={{
          idle: { rotate: 0, y: 0 },
          hover: {
            rotate: [0, -6, 6, -3, 0],
            y: [0, -1, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M10 2v15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
