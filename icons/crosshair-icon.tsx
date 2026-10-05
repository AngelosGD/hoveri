"use client";

import { motion } from "motion/react";

interface CrosshairIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CrosshairIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CrosshairIconProps) => {
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
      {/* circulo apunta */}
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 0.85, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* marcas convergen */}
      <motion.line
        x1="22"
        y1="12"
        x2="18"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { x: 0 },
          hover: { x: [-3, 0, -3], transition: { duration: d } },
        }}
      />
      <motion.line
        x1="6"
        y1="12"
        x2="2"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { x: 0 },
          hover: { x: [3, 0, 3], transition: { duration: d } },
        }}
      />
      <motion.line
        x1="12"
        y1="6"
        x2="12"
        y2="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { y: 0 },
          hover: { y: [3, 0, 3], transition: { duration: d } },
        }}
      />
      <motion.line
        x1="12"
        y1="22"
        x2="12"
        y2="18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { y: 0 },
          hover: { y: [-3, 0, -3], transition: { duration: d } },
        }}
      />
      {/* centro */}
      <motion.circle
        cx="12"
        cy="12"
        r="1.2"
        fill="currentColor"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            transition: { duration: d * 0.8, delay: d * 0.15 },
          },
        }}
      />
    </motion.svg>
  );
};
