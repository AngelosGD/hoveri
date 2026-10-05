"use client";

import { motion } from "motion/react";

interface LandmarkIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const LandmarkIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: LandmarkIconProps) => {
  const d = duration;
  const columns = [6, 10, 14, 18];

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
      {/* techo y base */}
      <path
        d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM3 22h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* columnas se encienden en cascada */}
      {columns.map((x, i) => (
        <motion.path
          key={x}
          d={`M${x} 18v-7`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.3, 1],
              transition: {
                duration: d * 0.7,
                delay: i * 0.08,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
