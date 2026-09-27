"use client";

import { motion } from "motion/react";

interface SlidersIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SlidersIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: SlidersIconProps) => {
  const d = duration;
  const knobs = [
    { x: 6, dir: 3.5, delay: 0 },
    { x: 12, dir: -3.5, delay: 0.1 },
    { x: 18, dir: 3.5, delay: 0.2 },
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
      {/* guias */}
      {knobs.map((k) => (
        <line
          key={`t-${k.x}`}
          x1={k.x}
          y1="3"
          x2={k.x}
          y2="21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      {/* perillas se deslizan en cascada */}
      {knobs.map((k) => (
        <motion.circle
          key={k.x}
          cx={k.x}
          cy="12"
          r="3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { y: 0 },
            hover: {
              y: [0, k.dir, 0],
              transition: {
                duration: d,
                delay: k.delay,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
