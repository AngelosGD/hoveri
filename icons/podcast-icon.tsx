"use client";

import { motion } from "motion/react";

interface PodcastIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PodcastIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: PodcastIconProps) => {
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
      {/* mic */}
      <path
        d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 0 0 1 0z"
        fill="currentColor"
      />
      {/* onda externa pulsa hacia afuera */}
      <motion.path
        d="M16.85 18.58a9 9 0 1 0-9.7 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.08, 1],
            transition: { duration: d * 0.7, delay: d * 0.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* onda interna pulsa */}
      <motion.path
        d="M8 14a5 5 0 1 1 8 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.15, 1],
            transition: { duration: d * 0.7, delay: d * 0.1, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* centro */}
      <motion.circle
        cx="12"
        cy="11"
        r="1"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.7, 1],
            transition: { duration: d * 0.7, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
