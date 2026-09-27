"use client";

import { motion } from "motion/react";

interface ScissorsIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ScissorsIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: ScissorsIconProps) => {
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
      {/* hojas que cortan */}
      <motion.circle
        cx="6"
        cy="6"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { x: 0, y: 0 },
          hover: {
            x: [0, -2, 0],
            y: [0, 2, 0],
            transition: { duration: d * 0.7, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <motion.circle
        cx="6"
        cy="18"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { x: 0, y: 0 },
          hover: {
            x: [0, -2, 0],
            y: [0, -2, 0],
            transition: { duration: d * 0.7, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <motion.path
        d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [1, 0.75, 1],
            transition: { duration: d * 0.7, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* chispa del corte */}
      <motion.circle
        cx="16"
        cy="12"
        r="1.3"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: { duration: d * 0.5, delay: d * 0.35 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
