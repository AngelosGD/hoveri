"use client";

import { motion } from "motion/react";

interface SparkleIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SparkleIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: SparkleIconProps) => {
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
      {/* estrella principal */}
      <motion.path
        d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z"
        fill="currentColor"
        variants={{
          idle: { rotate: 0, scale: 1 },
          hover: {
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1.1, 1],
            transition: { duration: d, times: [0, 0.3, 0.6, 1] },
          },
        }}
        style={{ originX: "12px", originY: "12px" }}
      />
      {/* acentos que salen como chispas */}
      <motion.circle
        cx="20"
        cy="4"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: { duration: d, delay: d * 0.2 },
          },
        }}
      />
      <motion.circle
        cx="4"
        cy="18"
        r="1"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: { duration: d, delay: d * 0.4 },
          },
        }}
      />
      <motion.circle
        cx="20"
        cy="18"
        r="1.2"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: { duration: d, delay: d * 0.6 },
          },
        }}
      />
    </motion.svg>
  );
};
