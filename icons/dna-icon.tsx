"use client";

import { motion } from "motion/react";

interface DnaIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const DnaIcon = ({
  size = 32,
  className,
  duration = 0.7,
}: DnaIconProps) => {
  const d = duration;
  const rungs = [
    "m10 16 1.5 1.5",
    "m14 8-1.5-1.5",
    "m16.5 10.5 1 1",
    "m17 6-2.891-2.891",
    "m20 9 .891.891",
    "M3.109 14.109 4 15",
    "m6.5 12.5 1 1",
    "m7 18 2.891 2.891",
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
      {/* doble hebra completa */}
      <path
        d="M2 15c6.667-6 13.333 0 20-6M9 22c1.798-1.998 2.518-3.995 2.807-5.993M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* peldaños se encienden en onda */}
      {rungs.map((rung, i) => (
        <motion.path
          key={i}
          d={rung}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.25, 1],
              transition: {
                duration: d * 0.6,
                delay: i * 0.07,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
