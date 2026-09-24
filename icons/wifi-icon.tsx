"use client";

import { motion } from "motion/react";

interface WifiIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const WifiIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: WifiIconProps) => {
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
      {/* onda 1 (grande) */}
      <motion.path
        d="M5 12.55a11 11 0 0 1 14.08 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 1, scale: 1 },
          hover: {
            opacity: [1, 0.35, 1],
            scale: [1, 1.06, 1],
            transition: { duration: d * 0.7, delay: 0 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* onda 2 */}
      <motion.path
        d="M8.5 16.429a5 5 0 0 1 7 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 1, scale: 1 },
          hover: {
            opacity: [1, 0.35, 1],
            scale: [1, 1.08, 1],
            transition: { duration: d * 0.7, delay: d * 0.12 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* punto */}
      <motion.circle
        cx="12"
        cy="20"
        r="1.4"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.5, 1],
            transition: { duration: d * 0.6, delay: d * 0.24 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* anillo ping desde el punto */}
      <motion.circle
        cx="12"
        cy="20"
        r="1.4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          idle: { scale: 1, opacity: 0 },
          hover: {
            scale: [1, 5],
            opacity: [0.7, 0],
            transition: { duration: d, delay: d * 0.3, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
