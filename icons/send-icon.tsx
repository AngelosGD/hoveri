"use client";

import { motion } from "motion/react";

interface SendIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SendIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: SendIconProps) => {
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
      <motion.g
        variants={{
          idle: { x: 0, y: 0, rotate: 0 },
          hover: {
            x: [0, 5, -1, 0],
            y: [0, -5, 1, 0],
            rotate: [0, 8, -2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ originX: "12px", originY: "12px" }}
      >
        <path
          d="m22 2-7 20-4-9-9-4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 2 11 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* estela */}
      <motion.path
        d="M4 16 Q6 14 5 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0, pathLength: 0 },
          hover: {
            opacity: [0, 0.8, 0],
            pathLength: [0, 1],
            transition: { duration: d * 0.8, delay: d * 0.2 },
          },
        }}
      />
    </motion.svg>
  );
};
