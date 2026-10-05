"use client";

import { motion } from "motion/react";

interface BombIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BombIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: BombIconProps) => {
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
      {/* mecha */}
      <path
        d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m22 2-1.5 1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* bomba se infla */}
      <motion.circle
        cx="11"
        cy="13"
        r="9"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.05, 1, 1.03, 1],
            transition: { duration: d * 1.4, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* chispa de la mecha */}
      <motion.circle
        cx="21.5"
        cy="2.5"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0.4 },
          hover: {
            opacity: [0, 1, 0.2, 1, 0],
            scale: [0.4, 1.3, 0.8, 1.4, 0.5],
            transition: {
              duration: d * 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
