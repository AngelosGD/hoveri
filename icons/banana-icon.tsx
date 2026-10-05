"use client";

import { motion } from "motion/react";

interface BananaIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BananaIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: BananaIconProps) => {
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
      {/* plátano se mece */}
      <motion.path
        d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -7, 5, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
