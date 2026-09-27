"use client";

import { motion } from "motion/react";

interface MaximizeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MaximizeIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: MaximizeIconProps) => {
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
      {/* esquinas que se expanden */}
      <motion.path
        d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.15, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* centro destella */}
      <motion.rect
        x="10.5"
        y="10.5"
        width="3"
        height="3"
        rx="0.5"
        fill="currentColor"
        variants={{
          idle: { scale: 1, opacity: 1 },
          hover: {
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            transition: { duration: d * 0.8, delay: d * 0.2 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
