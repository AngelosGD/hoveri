"use client";

import { motion } from "motion/react";

interface CitrusIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CitrusIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: CitrusIconProps) => {
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
      {/* la fruta entera se mece */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -6, 4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04zM19.65 15.66A8 8 0 0 1 8.35 4.34M14 10l-5.5 5.5M14 17.85V10H6.15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
