"use client";

import { motion } from "motion/react";

interface BackpackIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BackpackIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BackpackIconProps) => {
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
      {/* mochila respira */}
      <motion.g
        variants={{
          idle: { scaleY: 1, y: 0 },
          hover: {
            scaleY: [1, 0.95, 1.03, 1],
            y: [0, 1, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10h8M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* bolsillo se destaca */}
      <motion.path
        d="M8 18h8M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.4, 1],
            transition: { duration: d * 0.7, delay: d * 0.3 },
          },
        }}
      />
    </motion.svg>
  );
};
