"use client";

import { motion } from "motion/react";

interface CableIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CableIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: CableIconProps) => {
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
      {/* cable recibe corriente */}
      <motion.path
        d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { strokeWidth: 2 },
          hover: {
            strokeWidth: [2, 2.7, 2],
            transition: {
              duration: d * 0.9,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
      />
      {/* ficha superior se tensa */}
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -1, 0],
            transition: {
              duration: d * 0.9,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
      >
        <path
          d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 5V3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 5V3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* ficha inferior se tensa */}
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 1, 0],
            transition: {
              duration: d * 0.9,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
      >
        <path
          d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 21v-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 21v-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
    </motion.svg>
  );
};
