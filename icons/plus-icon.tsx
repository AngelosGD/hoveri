"use client";

import { motion } from "motion/react";

interface PlusIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PlusIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: PlusIconProps) => {
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
      {/* horizontal crece */}
      <motion.line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { scaleX: 1 },
          hover: {
            scaleX: [1, 0.45, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* vertical crece */}
      <motion.line
        x1="12"
        y1="4"
        x2="12"
        y2="20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { scaleY: 1 },
          hover: {
            scaleY: [1, 0.45, 1],
            transition: {
              duration: d,
              delay: d * 0.15,
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
