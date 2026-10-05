"use client";

import { motion } from "motion/react";

interface InfinityIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const InfinityIcon = ({
  size = 32,
  className,
  duration = 0.9,
}: InfinityIconProps) => {
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
      {/* el infinito se traza sin parar */}
      <motion.path
        d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [0, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
      />
    </motion.svg>
  );
};
