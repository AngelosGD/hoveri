"use client";

import { motion } from "motion/react";

interface LayersIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const LayersIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: LayersIconProps) => {
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
      {/* diamante superior */}
      <motion.path
        d="M12 2 2 7l10 5 10-5-10-5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0, opacity: 1 },
          hover: {
            y: [0, -3, 0],
            opacity: [1, 1, 1],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* capa media */}
      <motion.path
        d="m2 12 10 5 10-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0, opacity: 1 },
          hover: {
            y: [0, -1.5, 0],
            opacity: [1, 0.35, 1],
            transition: { duration: d, delay: d * 0.08, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* capa inferior */}
      <motion.path
        d="m2 17 10 5 10-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0, opacity: 1 },
          hover: {
            y: [0, -1.5, 0],
            opacity: [1, 0.5, 1],
            transition: { duration: d, delay: d * 0.16, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
