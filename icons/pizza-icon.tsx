"use client";

import { motion } from "motion/react";

interface PizzaIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PizzaIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: PizzaIconProps) => {
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
      {/* porción se gira */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -8, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12M18.8 9.3a1 1 0 0 0 2.1 7.7M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>
      {/* pepperonis */}
      <motion.path
        d="m12 14-1 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.5, 1],
            transition: { duration: d * 0.7, delay: d * 0.35 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <motion.path
        d="m13.75 18.25-1.25 1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.5, 1],
            transition: { duration: d * 0.7, delay: d * 0.5 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
