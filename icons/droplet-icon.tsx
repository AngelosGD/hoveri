"use client";

import { motion } from "motion/react";

interface DropletIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const DropletIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: DropletIconProps) => {
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
      {/* gota salta */}
      <motion.path
        d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0, scaleY: 1 },
          hover: {
            y: [0, -3, 0],
            scaleY: [1, 0.92, 1.04, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      />
      {/* brillo interior destella */}
      <motion.path
        d="M9.5 12.5a3.5 3.5 0 0 1 2-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.2, 1],
            transition: { duration: d * 0.6, delay: d * 0.2 },
          },
        }}
      />
    </motion.svg>
  );
};
