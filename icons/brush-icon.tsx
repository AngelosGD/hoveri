"use client";

import { motion } from "motion/react";

interface BrushIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BrushIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BrushIconProps) => {
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
      {/* pincel pinta un trazo */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -14, 6, 0],
            y: [0, -2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7-2.5-1-4.5-1-7 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 17.5 4.5 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* gota de pintura */}
      <motion.circle
        cx="19"
        cy="19"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, y: -3 },
          hover: {
            opacity: [0, 1, 0],
            y: [-3, 2],
            transition: { duration: d * 0.6, delay: d * 0.35 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
