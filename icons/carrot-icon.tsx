"use client";

import { motion } from "motion/react";

interface CarrotIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CarrotIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CarrotIconProps) => {
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
      {/* zanahoria se arranca */}
      <motion.g
        variants={{
          idle: { rotate: 0, y: 0 },
          hover: {
            rotate: [0, -10, 5, 0],
            y: [0, -1, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* hojas revolotean */}
      <motion.path
        d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9zM15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 8, -5, 0],
            transition: { duration: d, delay: d * 0.15, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left bottom" }}
      />
    </motion.svg>
  );
};
