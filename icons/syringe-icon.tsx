"use client";

import { motion } from "motion/react";

interface SyringeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SyringeIcon = ({
  size = 32,
  className,
  duration = 0.45,
}: SyringeIconProps) => {
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
      {/* jeringa pica (avanza en su eje) */}
      <motion.g
        variants={{
          idle: { x: 0, y: 0 },
          hover: {
            x: [0, 2, 0],
            y: [0, -2.4, 0],
            transition: {
              duration: d,
              times: [0, 0.35, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="m18 2 4 4M17 7l3-3M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5m-6 6 4 4M5 19l-3 3M14 4l6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* destello en la punta */}
      <motion.circle
        cx="21"
        cy="3"
        r="1.4"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0.4 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0.4, 1.4, 0.4],
            transition: { duration: d * 0.7, delay: d * 0.35 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
