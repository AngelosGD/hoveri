"use client";

import { motion } from "motion/react";

interface ChevronDownIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ChevronDownIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: ChevronDownIconProps) => {
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
      {/* chevron baja */}
      <motion.path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* fantasma que persigue */}
      <motion.path
        d="m6 5 6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 0.5, 0],
            y: [0, 4, 0],
            transition: { duration: d, delay: d * 0.15 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
