"use client";

import { motion } from "motion/react";

interface FilterIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FilterIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: FilterIconProps) => {
  const d = duration;
  const bars = [
    { w: 16, delay: 0 },
    { w: 10, delay: 0.1 },
    { w: 5, delay: 0.2 },
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
      {/* lineas de filtro en cascada */}
      {bars.map((bar, i) => (
        <motion.line
          key={i}
          x1="4"
          y1={6 + i * 6}
          x2={4 + bar.w}
          y2={6 + i * 6}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { x: 0 },
            hover: {
              x: [0, 3, 0],
              transition: {
                duration: d * 0.7,
                delay: bar.delay,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "left center" }}
        />
      ))}
      {/* puntos de control */}
      <motion.circle
        cx="18"
        cy="6"
        r="2"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.4, 1],
            transition: { duration: d * 0.6, delay: 0.15 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.4, 1],
            transition: { duration: d * 0.6, delay: 0.25 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <motion.circle
        cx="7"
        cy="18"
        r="2"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.4, 1],
            transition: { duration: d * 0.6, delay: 0.35 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
