"use client";

import { motion } from "motion/react";

interface RulerIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const RulerIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: RulerIconProps) => {
  const d = duration;
  const ticks = [
    { x1: 7, y1: 11, x2: 9, y2: 9, delay: 0 },
    { x1: 10, y1: 14, x2: 11.7, y2: 12.3, delay: 0.08 },
    { x1: 13, y1: 17, x2: 15, y2: 15, delay: 0.16 },
    { x1: 16, y1: 20, x2: 17.7, y2: 18.3, delay: 0.24 },
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
      {/* cuerpo diagonal quieto */}
      <path
        d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* marcas encendidas en cascada */}
      {ticks.map((t) => (
        <motion.line
          key={t.x1}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.2, 1],
              transition: {
                duration: d * 0.7,
                delay: t.delay,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
