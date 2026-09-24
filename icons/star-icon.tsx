"use client";

import { motion } from "motion/react";

interface StarIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const StarIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: StarIconProps) => {
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
        d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill="currentColor"
        variants={{
          idle: { scale: 1, rotate: 0 },
          hover: {
            scale: [1, 1.15, 1],
            rotate: [0, 10, -6, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* brillo */}
      <motion.circle
        cx="18"
        cy="5"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: { duration: d * 0.7, delay: d * 0.25 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
