"use client";

import { motion } from "motion/react";

interface CopyIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CopyIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: CopyIconProps) => {
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
      {/* fondo (sale) */}
      <motion.rect
        x="8"
        y="8"
        width="13"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { x: 0, y: 0, opacity: 1 },
          hover: {
            x: [0, 3, 3],
            y: [0, 3, 3],
            opacity: [1, 1, 0.5],
            transition: { duration: d, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* frente */}
      <motion.path
        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { x: 0, y: 0 },
          hover: {
            x: [0, -2, 0],
            y: [0, -2, 0],
            transition: { duration: d, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
