"use client";

import { motion } from "motion/react";

interface CalendarIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CalendarIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CalendarIconProps) => {
  const d = duration;
  const dots = [
    { x: 8, y: 14, delay: 0 },
    { x: 12, y: 14, delay: 0.08 },
    { x: 16, y: 14, delay: 0.16 },
    { x: 8, y: 18, delay: 0.12 },
    { x: 12, y: 18, delay: 0.2 },
    { x: 16, y: 18, delay: 0.28 },
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
      {/* marco */}
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M16 3v4M8 3v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 10h18"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* dias */}
      {dots.map((dot) => (
        <motion.circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r="1.1"
          fill="currentColor"
          variants={{
            idle: { scale: 1, opacity: 1 },
            hover: {
              scale: [1, 0.4, 1],
              opacity: [1, 0.4, 1],
              transition: { duration: d * 0.7, delay: dot.delay, ease: "easeInOut" },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
