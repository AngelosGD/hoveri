"use client";

import { motion } from "motion/react";

interface EarIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const EarIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: EarIconProps) => {
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
      {/* oreja se inclina a escuchar */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -5, 3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* caracola late */}
        <motion.path
          d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.18, 1],
              transition: {
                duration: d * 0.6,
                delay: d * 0.3,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </motion.g>
      {/* ondas de sonido entran */}
      <motion.path
        d="M20 7.5a6 6 0 0 1 0 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0, x: -1.5 },
          hover: {
            opacity: [0, 1, 0],
            x: [-1.5, 0],
            transition: { duration: d * 0.8, delay: d * 0.4 },
          },
        }}
      />
      <motion.path
        d="M21.8 5.5a9 9 0 0 1 0 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0, x: -1.5 },
          hover: {
            opacity: [0, 1, 0],
            x: [-1.5, 0],
            transition: { duration: d * 0.8, delay: d * 0.55 },
          },
        }}
      />
    </motion.svg>
  );
};
