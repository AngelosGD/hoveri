"use client";

import { motion } from "motion/react";

interface NotebookIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const NotebookIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: NotebookIconProps) => {
  const d = duration;
  const lines = [6, 10, 14, 18];

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
      {/* tapa */}
      <rect
        width="16"
        height="20"
        x="4"
        y="2"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 2v20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* lineas se escriben */}
      {lines.map((y, i) => (
        <motion.path
          key={y}
          d={`M2 ${y}h4`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { pathLength: 1, opacity: 1 },
            hover: {
              pathLength: [0, 1],
              transition: { duration: d * 0.6, delay: i * 0.08 },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
