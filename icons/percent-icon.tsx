"use client";

import { motion } from "motion/react";

interface PercentIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PercentIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: PercentIconProps) => {
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
      {/* diagonal se redibuja */}
      <motion.line
        x1="19"
        y1="5"
        x2="5"
        y2="19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [1, 0, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* circulos */}
      <motion.circle
        cx="6.5"
        cy="6.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.3, 1],
            transition: { duration: d * 0.6, delay: d * 0.2 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <motion.circle
        cx="17.5"
        cy="17.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.3, 1],
            transition: { duration: d * 0.6, delay: d * 0.35 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
