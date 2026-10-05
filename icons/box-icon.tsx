"use client";

import { motion } from "motion/react";

interface BoxIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BoxIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BoxIconProps) => {
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
      {/* caja completa se comprime */}
      <motion.g
        variants={{
          idle: { scaleY: 1 },
          hover: {
            scaleY: [1, 0.93, 1.04, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* aristas laten sin desaparecer */}
        <motion.path
          d="m3.3 7 8.7 5 8.7-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.3, 1],
              transition: { duration: d * 0.7, delay: d * 0.35 },
            },
          }}
        />
        <motion.path
          d="M12 22V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.3, 1],
              transition: { duration: d * 0.7, delay: d * 0.5 },
            },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};
