"use client";

import { motion } from "motion/react";

interface BookmarkIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BookmarkIcon = ({
  size = 32,
  className,
  duration = 0.45,
}: BookmarkIconProps) => {
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
      {/* contorno siempre visible */}
      <path
        d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* relleno: cae suave desde arriba */}
      <motion.path
        d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"
        fill="currentColor"
        variants={{
          idle: { y: -110, opacity: 0 },
          hover: {
            y: [-110, 0],
            opacity: [0, 1],
            transition: {
              duration: d * 0.55,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
