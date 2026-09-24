"use client";

import { motion } from "motion/react";

interface MoonIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MoonIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: MoonIconProps) => {
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
      <motion.path
        d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
        fill="currentColor"
        variants={{
          idle: { rotate: 0, scale: 1 },
          hover: {
            rotate: [0, -25, -25, 0],
            scale: [1, 1.08, 1.08, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ originX: "12px", originY: "12px" }}
      />
      {/* estrellitas */}
      <motion.circle
        cx="18"
        cy="5"
        r="1.2"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.3, 0],
            transition: { duration: d, delay: d * 0.25 },
          },
        }}
      />
      <motion.circle
        cx="20"
        cy="10"
        r="0.9"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.3, 0],
            transition: { duration: d, delay: d * 0.4 },
          },
        }}
      />
    </motion.svg>
  );
};
