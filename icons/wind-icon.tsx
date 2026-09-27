"use client";

import { motion } from "motion/react";

interface WindIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const WindIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: WindIconProps) => {
  const d = duration;
  const lines = [
    { y: 7, delay: 0, w: 14 },
    { y: 12, delay: 0.1, w: 18 },
    { y: 17, delay: 0.2, w: 12 },
  ];

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
      {lines.map((line) => (
        <motion.path
          key={line.y}
          d={`M${2} ${line.y}h${line.w - 4}a2.5 2.5 0 1 0-2.5-2.5`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={{
            idle: { x: 0, opacity: 1 },
            hover: {
              x: [0, 4, -1, 0],
              opacity: [1, 0.5, 1],
              transition: {
                duration: d,
                delay: line.delay,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "left center" }}
        />
      ))}
    </motion.svg>
  );
};
