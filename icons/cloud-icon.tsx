"use client";

import { motion } from "motion/react";

interface CloudIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CloudIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CloudIconProps) => {
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
      {/* nube */}
      <motion.path
        d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.5 4 4 0 0 0 7 19h10.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, -1.5, 1.5, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* gotitas */}
      <motion.path
        d="M9 21l1-2M13 21l1-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 0, y: -2 },
          hover: {
            opacity: [0, 1, 0],
            y: [-2, 2],
            transition: { duration: d * 0.7, delay: d * 0.3 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
