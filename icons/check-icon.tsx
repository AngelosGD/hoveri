"use client";

import { motion } from "motion/react";

interface CheckIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CheckIcon = ({
  size = 32,
  className,
  duration = 0.45,
}: CheckIconProps) => {
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
      <motion.circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { pathLength: 1, opacity: 1 },
          hover: {
            pathLength: [1, 0],
            opacity: [1, 0],
            transition: { duration: d * 0.4 },
          },
        }}
      />
      <motion.path
        d="m8 12 3 3 6-6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [0, 1],
            transition: { duration: d, delay: d * 0.15, ease: "easeOut" },
          },
        }}
      />
      {/* pop final */}
      <motion.circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { scale: 1, opacity: 0 },
          hover: {
            scale: [0.6, 1.25],
            opacity: [0.7, 0],
            transition: { duration: d * 0.8, delay: d * 0.55 },
          },
        }}
        style={{ originX: "12px", originY: "12px" }}
      />
    </motion.svg>
  );
};
