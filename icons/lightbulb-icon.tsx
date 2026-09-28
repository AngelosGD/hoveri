"use client";

import { motion } from "motion/react";

interface LightbulbIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const LightbulbIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: LightbulbIconProps) => {
  const d = duration;
  const rays = [
    { d: "M12 4V1.5", delay: 0 },
    { d: "M5 7 3.2 5.2", delay: 0.07 },
    { d: "M19 7l1.8-1.8", delay: 0.14 },
    { d: "M3 12.5H1", delay: 0.21 },
    { d: "M21 12.5h2", delay: 0.28 },
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
      {/* bombilla */}
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6m-5 3h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* filamento brilla */}
      <motion.path
        d="M9 12a3 3 0 0 1 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0.6 },
          hover: {
            opacity: [0.6, 1, 0.6],
            transition: { duration: d * 0.7, delay: d * 0.1 },
          },
        }}
      />
      {/* rayos de idea salen */}
      {rays.map((ray) => (
        <motion.path
          key={ray.d}
          d={ray.d}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { pathLength: 0, opacity: 0 },
            hover: {
              pathLength: [0, 1],
              opacity: [0, 1],
              transition: {
                duration: d * 0.5,
                delay: ray.delay,
                ease: "easeOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
