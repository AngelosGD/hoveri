"use client";

import { motion } from "motion/react";

interface FanIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FanIcon = ({
  size = 32,
  className,
  duration = 1.2,
}: FanIconProps) => {
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
      {/* aspas giran */}
      <motion.path
        d="M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 360],
            transition: { duration: d, ease: "linear" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* eje */}
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </motion.svg>
  );
};
