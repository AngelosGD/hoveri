"use client";

import { motion } from "motion/react";

interface PillIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PillIcon = ({
  size = 32,
  className,
  duration = 0.7,
}: PillIconProps) => {
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
      {/* pastilla gira */}
      <motion.path
        d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 180],
            transition: {
              duration: d,
              times: [0, 1],
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* division destella */}
      <motion.path
        d="m8.5 8.5 7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            transition: { duration: d * 0.7, delay: d * 0.5 },
          },
        }}
      />
    </motion.svg>
  );
};
