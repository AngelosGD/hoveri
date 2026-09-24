"use client";

import { motion } from "motion/react";

interface GlobeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const GlobeIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: GlobeIconProps) => {
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
      <motion.g
        variants={{
          idle: { rotate: 0, scale: 1 },
          hover: {
            rotate: [0, -12, 12, -6, 0],
            scale: [1, 1.06, 1.06, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M3 12h18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
