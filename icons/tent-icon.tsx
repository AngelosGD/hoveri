"use client";

import { motion } from "motion/react";

interface TentIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const TentIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: TentIconProps) => {
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
      {/* tienda respira */}
      <motion.g
        variants={{
          idle: { scaleX: 1 },
          hover: {
            scaleX: [1, 0.94, 1.03, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M3.5 21 14 3M20.5 21 10 3M2 21h20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* entrada se abre */}
      <motion.path
        d="M15.5 21 12 15l-3.5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            transition: { duration: d * 0.7, delay: d * 0.3 },
          },
        }}
      />
    </motion.svg>
  );
};
