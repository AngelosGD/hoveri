"use client";

import { motion } from "motion/react";

interface SkullIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SkullIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: SkullIconProps) => {
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
      {/* calavera asiente */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -6, 4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="m12.5 17-.5-1-.5 1h1zM15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* ojos parpadean */}
        <motion.circle
          cx="15"
          cy="12"
          r="1"
          fill="currentColor"
          variants={{
            idle: { opacity: 1, scaleY: 1 },
            hover: {
              opacity: [1, 0.15, 1],
              scaleY: [1, 0.2, 1],
              transition: { duration: d * 0.6, delay: d * 0.5 },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <motion.circle
          cx="9"
          cy="12"
          r="1"
          fill="currentColor"
          variants={{
            idle: { opacity: 1, scaleY: 1 },
            hover: {
              opacity: [1, 0.15, 1],
              scaleY: [1, 0.2, 1],
              transition: { duration: d * 0.6, delay: d * 0.55 },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </motion.g>
    </motion.svg>
  );
};
