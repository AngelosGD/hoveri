"use client";

import { motion } from "motion/react";

interface SmileIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SmileIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: SmileIconProps) => {
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
      {/* cara */}
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      {/* ojos parpadean */}
      <motion.g
        variants={{
          idle: { scaleY: 1 },
          hover: {
            scaleY: [1, 0.1, 1],
            transition: { duration: d * 0.5, times: [0, 0.5, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <circle cx="9" cy="10" r="1.2" fill="currentColor" />
        <circle cx="15" cy="10" r="1.2" fill="currentColor" />
      </motion.g>
      {/* sonrisa */}
      <motion.path
        d="M8 14.5s1.5 2 4 2 4-2 4-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { d: "M8 14.5s1.5 2 4 2 4-2 4-2" },
          hover: {
            d: "M8 14s1.5 3 4 3 4-3 4-3",
            transition: { duration: d * 0.6, delay: d * 0.3 },
          },
        }}
      />
    </motion.svg>
  );
};
