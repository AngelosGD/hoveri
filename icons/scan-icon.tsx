"use client";

import { motion } from "motion/react";

interface ScanIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ScanIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: ScanIconProps) => {
  const d = duration;
  const corners = [
    { d: "M3 7V5a2 2 0 0 1 2-2h2", x: 1, y: 1 },
    { d: "M17 3h2a2 2 0 0 1 2 2v2", x: -1, y: 1 },
    { d: "M21 17v2a2 2 0 0 1-2 2h-2", x: -1, y: -1 },
    { d: "M7 21H5a2 2 0 0 1-2-2v-2", x: 1, y: -1 },
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
      {/* esquinas convergen */}
      {corners.map((c) => (
        <motion.path
          key={c.d}
          d={c.d}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            idle: { x: 0, y: 0 },
            hover: {
              x: [0, c.x * 3],
              y: [0, c.y * 3],
              transition: {
                duration: d,
                times: [0, 0.4, 1],
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
      {/* barrido */}
      <motion.line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={{
          idle: { y: -7, opacity: 0 },
          hover: {
            y: [-7, 7],
            opacity: [0, 0.9, 0],
            transition: { duration: d * 0.9, delay: d * 0.15 },
          },
        }}
      />
    </motion.svg>
  );
};
