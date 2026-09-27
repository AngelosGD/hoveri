"use client";

import { motion } from "motion/react";

interface TrophyIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const TrophyIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: TrophyIconProps) => {
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
      {/* copa */}
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -3, 0],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0V4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 6H4a1 1 0 0 0-1 1 5 5 0 0 0 4 4.9M17 6h3a1 1 0 0 1 1 1 5 5 0 0 1-4 4.9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* brillo */}
      <motion.circle
        cx="12"
        cy="9"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            transition: { duration: d * 0.6, delay: d * 0.25 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
