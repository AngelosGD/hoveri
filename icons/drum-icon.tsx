"use client";

import { motion } from "motion/react";

interface DrumIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const DrumIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: DrumIconProps) => {
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
      {/* tambor */}
      <path
        d="M7 13.4v7.9M12 14v8M17 13.4v7.9M2 9v8a10 5 0 0 0 20 0V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* baquetas golpean */}
      <motion.path
        d="m2 2 8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -20, 0],
            transition: {
              duration: d,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformOrigin: "10px 10px" }}
      />
      <motion.path
        d="m22 2-8 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 20, 0],
            transition: {
              duration: d,
              times: [0, 0.4, 1],
              delay: 0.1,
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformOrigin: "14px 10px" }}
      />
    </motion.svg>
  );
};
