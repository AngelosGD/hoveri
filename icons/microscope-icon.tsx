"use client";

import { motion } from "motion/react";

interface MicroscopeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MicroscopeIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: MicroscopeIconProps) => {
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
      {/* base quieta */}
      <path
        d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1M9 14h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* lupa enfoca */}
      <motion.g
        variants={{
          idle: { y: 0, rotate: 0 },
          hover: {
            y: [0, -2, 0],
            rotate: [0, -8, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2ZM12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* muestra destella */}
      <motion.circle
        cx="16"
        cy="16"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { scale: 0, opacity: 0 },
          hover: {
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            transition: { duration: d * 0.7, delay: d * 0.5 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
