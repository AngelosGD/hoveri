"use client";

import { motion } from "motion/react";

interface SandwichIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SandwichIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: SandwichIconProps) => {
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
      {/* sándwich completo respira */}
      <motion.g
        variants={{
          idle: { scaleY: 1 },
          hover: {
            scaleY: [1, 0.94, 1.02, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          width="20"
          height="4"
          x="2"
          y="11"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* relleno destella */}
      <motion.path
        d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            transition: { duration: d * 0.7, delay: d * 0.3 },
          },
        }}
      />
    </motion.svg>
  );
};
