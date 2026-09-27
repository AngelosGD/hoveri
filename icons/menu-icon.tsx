"use client";

import { motion } from "motion/react";

interface MenuIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MenuIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: MenuIconProps) => {
  const d = duration;
  const lines = [
    { y: 6, delay: 0 },
    { y: 12, delay: 0.08 },
    { y: 18, delay: 0.16 },
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
        <motion.line
          key={line.y}
          x1="4"
          y1={line.y}
          x2="20"
          y2={line.y}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { scaleX: 1, x: 0 },
            hover: {
              scaleX: [1, 0.5, 1],
              x: [0, 4, 0],
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
