"use client";

import { motion } from "motion/react";

interface HourglassIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const HourglassIcon = ({
  size = 32,
  className,
  duration = 0.7,
}: HourglassIconProps) => {
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
      {/* reloj de arena */}
      <path
        d="M5 22h14M5 2h14M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* arena cayendo */}
      <motion.path
        d="M12 12v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 1, scaleY: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            scaleY: [1, 0.4, 1],
            transition: { duration: d * 0.8, repeat: 1, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* voltereta */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 0, 180],
            transition: {
              duration: d,
              times: [0, 0.55, 1],
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M8 6h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </motion.g>
    </motion.svg>
  );
};
