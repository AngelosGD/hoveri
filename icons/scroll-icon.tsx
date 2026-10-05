"use client";

import { motion } from "motion/react";

interface ScrollIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ScrollIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: ScrollIconProps) => {
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
      {/* pergamino se enrolla */}
      <motion.path
        d="M19 17V5a2 2 0 0 0-2-2H4M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { scaleY: 1, y: 0 },
          hover: {
            scaleY: [1, 0.94, 1.03, 1],
            y: [0, 1, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* linea escrita */}
      <motion.path
        d="M10 8h6M10 12h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0.6 },
          hover: {
            opacity: [0.6, 1, 0.6],
            transition: { duration: d * 0.8, delay: d * 0.3 },
          },
        }}
      />
    </motion.svg>
  );
};
