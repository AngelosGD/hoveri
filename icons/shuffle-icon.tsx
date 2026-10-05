"use client";

import { motion } from "motion/react";

interface ShuffleIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ShuffleIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: ShuffleIconProps) => {
  const d = duration;
  const lines = [
    "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
    "M2 6h1.972a4 4 0 0 1 3.6 2.2",
    "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
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
      {/* rutas se redibujan */}
      {lines.map((dPath, i) => (
        <motion.path
          key={i}
          d={dPath}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            idle: { pathLength: 1 },
            hover: {
              pathLength: [0, 1],
              transition: {
                duration: d * 0.7,
                delay: i * 0.12,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
      {/* flechas laten */}
      <motion.path
        d="m18 2 4 4-4 4M18 14l4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, 2, 0],
            transition: { duration: d * 0.7, delay: d * 0.45 },
          },
        }}
      />
    </motion.svg>
  );
};
