"use client";

import { motion } from "motion/react";

interface FolderIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FolderIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: FolderIconProps) => {
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
      {/* tapa */}
      <motion.path
        d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { rotate: 0, y: 0 },
          hover: {
            rotate: [0, -8, -4, 0],
            y: [0, -1.5, -0.5, 0],
            transition: {
              duration: d,
              times: [0, 0.3, 0.6, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left bottom" }}
      />
      {/* base */}
      <path
        d="M3 9v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};
