"use client";

import { motion } from "motion/react";

interface AppleIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const AppleIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: AppleIconProps) => {
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
      {/* manzana se aplasta y rebota */}
      <motion.g
        variants={{
          idle: { scaleY: 1 },
          hover: {
            scaleY: [1, 0.92, 1.05, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* tallo se mueve */}
      <motion.path
        d="M12 6.528V3a1 1 0 0 1 1-1h0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -14, 10, 0],
            transition: { duration: d, delay: d * 0.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 7px" }}
      />
    </motion.svg>
  );
};
