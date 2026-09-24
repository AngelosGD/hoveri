"use client";

import { motion } from "motion/react";

interface CoffeeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CoffeeIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: CoffeeIconProps) => {
  const d = duration;
  const steam = [
    { x: 6, delay: 0 },
    { x: 10, delay: 0.12 },
    { x: 14, delay: 0.24 },
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
      {/* taza */}
      <path
        d="M17 8h1a4 4 0 1 1 0 8h-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* las 3 lineas de vapor: quietas en idle, suben al hover */}
      {steam.map((s) => (
        <motion.path
          key={s.x}
          d={`M${s.x} 5v-3`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { y: 0, opacity: 1 },
            hover: {
              y: [0, -3, -6],
              opacity: [1, 0.7, 0],
              transition: {
                duration: d * 0.75,
                delay: s.delay,
                ease: "easeOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
