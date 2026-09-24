"use client";

import { motion } from "motion/react";

interface DownloadIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const DownloadIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: DownloadIconProps) => {
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
        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 1.5, 0],
            transition: { duration: d * 0.7, delay: d * 0.35 },
          },
        }}
      />
      <motion.path
        d="M7 10l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0, opacity: 1 },
          hover: {
            y: [0, 6, -2, 0],
            opacity: [1, 1, 0.4, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
      />
      <motion.path
        d="M12 15V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 6, -2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
      />
    </motion.svg>
  );
};
