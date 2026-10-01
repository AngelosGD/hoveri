"use client";

import { motion } from "motion/react";

interface FlashlightIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FlashlightIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: FlashlightIconProps) => {
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
      {/* linterna se sacude */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -8, 8, -4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="6"
          x2="18"
          y1="6"
          y2="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          x2="12"
          y1="12"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* destello de luz */}
      <motion.path
        d="M9 0.5h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0, 1, 0],
            transition: { duration: d, delay: d * 0.3 },
          },
        }}
      />
    </motion.svg>
  );
};
