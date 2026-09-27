"use client";

import { motion } from "motion/react";

interface DatabaseIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const DatabaseIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: DatabaseIconProps) => {
  const d = duration;
  const levels = [0, 1, 2];

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
      {/* elipses de la base */}
      <ellipse
        cx="12"
        cy="5"
        rx="9"
        ry="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <motion.path
        d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.6, 1],
            transition: { duration: d * 0.7, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <path
        d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* datos suben */}
      {levels.map((i) => (
        <motion.circle
          key={i}
          cx="12"
          cy={17 - i * 4.5}
          r="1.2"
          fill="currentColor"
          variants={{
            idle: { opacity: 0, y: 0 },
            hover: {
              opacity: [0, 1, 0],
              y: [0, -4],
              transition: {
                duration: d * 0.7,
                delay: i * 0.12,
                ease: "easeOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
