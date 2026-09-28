"use client";

import { motion } from "motion/react";

interface GhostIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const GhostIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: GhostIconProps) => {
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
      {/* fantasma flota */}
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -3, 1, -2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* ojos parpadean */}
        <motion.path
          d="M9 10h.01"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.15, 1, 0.15, 1],
              transition: {
                duration: d,
                times: [0, 0.3, 0.42, 0.7, 0.85],
              },
            },
          }}
        />
        <motion.path
          d="M15 10h.01"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.15, 1, 0.15, 1],
              transition: {
                duration: d,
                times: [0, 0.3, 0.42, 0.7, 0.85],
              },
            },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};
