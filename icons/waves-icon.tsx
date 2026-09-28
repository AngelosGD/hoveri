"use client";

import { motion } from "motion/react";

interface WavesIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const WavesIcon = ({
  size = 32,
  className,
  duration = 1,
}: WavesIconProps) => {
  const d = duration;
  const lines = [
    { y: 7, delay: 0 },
    { y: 12.5, delay: 0.15 },
    { y: 18, delay: 0.3 },
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
          d={`M-6 ${line.y}q3-4 6 0t6 0t6 0t6 0t6 0t6 0`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={{
            idle: { x: 0 },
            hover: {
              x: [-6, 6],
              transition: {
                duration: d,
                delay: line.delay,
                repeat: 1,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
