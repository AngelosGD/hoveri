"use client";

import { motion } from "motion/react";

interface CodeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CodeIcon = ({
  size = 32,
  className,
  duration = 0.4,
}: CodeIconProps) => {
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
      {/* bracket izquierdo < */}
      <motion.path
        d="M8 6 L3 12 L8 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, 5, -1, 0],
            transition: { duration: d, times: [0, 0.35, 0.7, 1] },
          },
        }}
      />
      {/* slash central / con flip */}
      <motion.path
        d="M14 5 L10 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 180, 360],
            transition: { duration: d * 1.1, ease: "easeInOut" },
          },
        }}
        style={{ originX: "12px", originY: "12px" }}
      />
      {/* bracket derecho > */}
      <motion.path
        d="M16 6 L21 12 L16 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, -5, 1, 0],
            transition: { duration: d, times: [0, 0.35, 0.7, 1] },
          },
        }}
      />
    </motion.svg>
  );
};
