"use client";

import { motion } from "motion/react";

interface HardHatIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const HardHatIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: HardHatIconProps) => {
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
      {/* casco asiente */}
      <motion.g
        variants={{
          idle: { y: 0, rotate: 0 },
          hover: {
            y: [0, -3, 0],
            rotate: [0, -5, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5M14 6a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="2"
          y="15"
          width="20"
          height="4"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
      </motion.g>
      {/* reflejo de seguridad */}
      <motion.path
        d="M9 6.5 10.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d * 0.7, delay: d * 0.45 },
          },
        }}
      />
    </motion.svg>
  );
};
