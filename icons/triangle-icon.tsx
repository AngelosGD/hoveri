"use client";

import { motion } from "motion/react";

interface TriangleIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const TriangleIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: TriangleIconProps) => {
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
      {/* triangulo se tambalea */}
      <motion.path
        d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { rotate: 0, scale: 1 },
          hover: {
            rotate: [0, -8, 8, -4, 0],
            scale: [1, 1.05, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      />
      {/* centro pulsa */}
      <motion.circle
        cx="12"
        cy="15"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { scale: 0, opacity: 0 },
          hover: {
            scale: [0, 1.3, 1],
            opacity: [0, 1, 1, 0],
            transition: { duration: d * 0.9, delay: d * 0.4 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
