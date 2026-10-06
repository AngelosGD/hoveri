"use client";

import { motion } from "motion/react";

interface StethoscopeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const StethoscopeIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: StethoscopeIconProps) => {
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
      {/* estetoscopio se mece */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -4, 3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center top" }}
      >
        <path
          d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1M8 15a6 6 0 0 0 12 0v-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* cabeza del estetoscopio late */}
        <motion.circle
          cx="20"
          cy="10"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.5, 1],
              transition: { duration: d * 0.6, delay: d * 0.35 },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        {/* puntas destellan */}
        <motion.path
          d="M11 2v2M5 2v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.3, 1],
              transition: { duration: d * 0.5, delay: d * 0.55 },
            },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};
