"use client";

import { motion } from "motion/react";

interface ClipboardIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ClipboardIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: ClipboardIconProps) => {
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
      {/* portapapeles */}
      <rect
        x="5"
        y="4"
        width="14"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* clip que se suelta */}
      <motion.rect
        x="8"
        y="2"
        width="8"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { y: 0, rotate: 0 },
          hover: {
            y: [0, -2.5, 0],
            rotate: [0, -8, 0],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      />
      {/* lineas */}
      <motion.path
        d="M9 12h6M9 16h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [1, 0, 1],
            transition: { duration: d, delay: d * 0.15, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left center" }}
      />
    </motion.svg>
  );
};
