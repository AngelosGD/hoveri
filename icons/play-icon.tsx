"use client";

import { motion } from "motion/react";

interface PlayIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PlayIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: PlayIconProps) => {
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
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.06, 1],
            transition: { duration: d * 0.5 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* triangulo play */}
      <motion.path
        d="M10 8.5v7l6-3.5-6-3.5z"
        fill="currentColor"
        variants={{
          idle: { x: 0, scale: 1 },
          hover: {
            x: [0, 2, 0],
            scale: [1, 1.12, 1],
            transition: { duration: d * 0.6, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* onda de reproduccion */}
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
            scale: [1, 1.35],
            opacity: [0.5, 0],
            transition: { duration: d * 0.9, delay: d * 0.25, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
