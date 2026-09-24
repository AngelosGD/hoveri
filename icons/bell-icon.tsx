"use client";

import { motion } from "motion/react";

interface BellIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BellIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BellIconProps) => {
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
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 18, -14, 10, -6, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ originX: "12px", originY: "4px" }}
      >
        <path
          d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.3 21a1.94 1.94 0 0 0 3.4 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* nota / notificacion */}
      <motion.circle
        cx="19"
        cy="5"
        r="2.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1, 0.6],
            transition: { duration: d, delay: d * 0.2 },
          },
        }}
        style={{ originX: "19px", originY: "5px" }}
      />
    </motion.svg>
  );
};
