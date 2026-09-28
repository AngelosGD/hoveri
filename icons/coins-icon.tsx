"use client";

import { motion } from "motion/react";

interface CoinsIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CoinsIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CoinsIconProps) => {
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
      {/* moneda trasera */}
      <motion.path
        d="M18.09 10.37A6 6 0 1 1 10.34 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { x: 0, y: 0 },
          hover: {
            x: [0, 2, 0],
            y: [0, -2, 0],
            transition: { duration: d, delay: d * 0.15, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* moneda delantera */}
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <circle
          cx="8"
          cy="8"
          r="6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M7 6h1v4m9.71 3.88.7.71-2.82 2.82"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
