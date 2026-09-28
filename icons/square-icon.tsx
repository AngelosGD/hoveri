"use client";

import { motion } from "motion/react";

interface SquareIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SquareIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: SquareIconProps) => {
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
      {/* cuadro gira */}
      <motion.rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { rotate: 0, scale: 1 },
          hover: {
            rotate: [0, 45, 0],
            scale: [1, 0.9, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* centro destella */}
      <motion.rect
        x="10"
        y="10"
        width="4"
        height="4"
        rx="1"
        fill="currentColor"
        variants={{
          idle: { scale: 0, opacity: 0 },
          hover: {
            scale: [0, 1.3, 0],
            opacity: [0, 1, 0],
            transition: { duration: d * 0.7, delay: d * 0.45 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
