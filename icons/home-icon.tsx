"use client";

import { motion } from "motion/react";

interface HomeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const HomeIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: HomeIconProps) => {
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
      {/* casa */}
      <path
        d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22V12h6v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* humo de chimenea */}
      <motion.path
        d="M17 9c.5-1 0-2-.5-2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0, y: 0 },
          hover: {
            opacity: [0, 1, 0],
            y: [0, -3, -5],
            transition: { duration: d * 0.8, delay: d * 0.2, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* brillo puerta */}
      <motion.circle
        cx="12"
        cy="16"
        r="1"
        fill="currentColor"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            transition: { duration: d * 0.6, delay: d * 0.15 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
