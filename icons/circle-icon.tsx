"use client";

import { motion } from "motion/react";

interface CircleIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CircleIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: CircleIconProps) => {
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
      {/* circulo se redibuja */}
      <motion.circle
        cx="12"
        cy="12"
        r="9.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { pathLength: 1, rotate: 0 },
          hover: {
            pathLength: [0, 1],
            rotate: [0, 360],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* punto orbita */}
      <motion.circle
        cx="12"
        cy="2.5"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { scale: 1, opacity: 1 },
          hover: {
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
            transition: { duration: d, delay: d * 0.3 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
