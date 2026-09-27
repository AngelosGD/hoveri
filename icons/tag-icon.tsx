"use client";

import { motion } from "motion/react";

interface TagIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const TagIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: TagIconProps) => {
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
      {/* etiqueta se mece desde el ojo */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -8, 5, -3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left bottom" }}
      >
        <path
          d="M20.59 13.41 12 22l-9-9V4a1 1 0 0 1 1-1h8l8.59 8.59a2 2 0 0 1 0 2.82z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
      </motion.g>
    </motion.svg>
  );
};
