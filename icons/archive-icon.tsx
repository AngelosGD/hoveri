"use client";

import { motion } from "motion/react";

interface ArchiveIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ArchiveIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: ArchiveIconProps) => {
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
      {/* tapa se abre */}
      <motion.g
        variants={{
          idle: { y: 0, rotate: 0 },
          hover: {
            y: [0, -3, 0],
            rotate: [0, -2, 0],
            transition: {
              duration: d,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <rect
          width="20"
          height="5"
          x="2"
          y="3"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
      </motion.g>
      {/* caja */}
      <path
        d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* manija destella */}
      <motion.path
        d="M10 12h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 1, scaleX: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            scaleX: [1, 0.5, 1],
            transition: { duration: d * 0.7, delay: d * 0.45 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
