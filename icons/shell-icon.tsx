"use client";

import { motion } from "motion/react";

interface ShellIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ShellIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: ShellIconProps) => {
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
      {/* concha respira */}
      <motion.path
        d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { scale: 1, rotate: 0 },
          hover: {
            scale: [1, 1.07, 1],
            rotate: [0, -5, 3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
