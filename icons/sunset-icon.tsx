"use client";

import { motion } from "motion/react";

interface SunsetIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SunsetIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: SunsetIconProps) => {
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
      {/* horizonte */}
      <path
        d="M22 22H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2 18h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 18h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* sol se hunde tras el horizonte */}
      <motion.g
        variants={{
          idle: { y: 0, opacity: 1 },
          hover: {
            y: [0, 3.5, 0],
            opacity: [1, 0.55, 1],
            transition: {
              duration: d * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
      >
        <path
          d="M16 18a4 4 0 0 0-8 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10V2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="m4.93 10.93 1.41 1.41"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="m19.07 10.93-1.41 1.41"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* flecha marca la puesta de sol */}
      <motion.path
        d="m16 6-4 4-4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0, opacity: 1 },
          hover: {
            y: [0, 4, 0],
            opacity: [1, 0.3, 1],
            transition: {
              duration: d * 1.5,
              delay: d * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
      />
    </motion.svg>
  );
};
