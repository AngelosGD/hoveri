"use client";

import { motion } from "motion/react";

interface MinusIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MinusIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: MinusIconProps) => {
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
      {/* linea se contrae desde el centro */}
      <motion.line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { scaleX: 1 },
          hover: {
            scaleX: [1, 0.3, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* destello final */}
      <motion.circle
        cx="12"
        cy="12"
        r="1.3"
        fill="currentColor"
        variants={{
          idle: { scale: 0, opacity: 0 },
          hover: {
            scale: [0, 1.6, 0],
            opacity: [0, 1, 0],
            transition: { duration: d * 0.7, delay: d * 0.55 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
