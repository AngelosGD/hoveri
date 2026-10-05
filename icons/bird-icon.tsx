"use client";

import { motion } from "motion/react";

interface BirdIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BirdIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BirdIconProps) => {
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
      {/* pajaro completo da un salto */}
      <motion.path
        d="M16 7h.01M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20m18-13 2 .5-2 .5M10 18v3M14 17.75V21M7 18a6 6 0 0 0 3.84-10.61"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -4, 0, -2, 0],
            transition: {
              duration: d * 1.2,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            },
          },
        }}
      />
    </motion.svg>
  );
};
