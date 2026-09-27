"use client";

import { motion } from "motion/react";

interface PowerIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PowerIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: PowerIconProps) => {
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
      {/* linea vertical */}
      <motion.path
        d="M12 2v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -2, 0],
            transition: { duration: d * 0.6, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* arco */}
      <motion.path
        d="M18.4 6.6a9 9 0 1 1-12.77.04"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.08, 1],
            transition: { duration: d * 0.7, delay: d * 0.1 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* destello */}
      <motion.circle
        cx="12"
        cy="7"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            transition: { duration: d * 0.6, delay: d * 0.3 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
