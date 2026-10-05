"use client";

import { motion } from "motion/react";

interface RadioTowerIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const RadioTowerIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: RadioTowerIconProps) => {
  const d = duration;
  const waveOrigin = {
    transformBox: "view-box",
    transformOrigin: "12px 9px",
  } as const;

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
      {/* torre */}
      <path
        d="M9.5 18h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m8 22 4-11 4 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* antena */}
      <circle
        cx="12"
        cy="9"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* onda izquierda */}
      <motion.g
        variants={{
          idle: { scale: 1, opacity: 1 },
          hover: {
            scale: [0.6, 1.15, 0.6],
            opacity: [0.4, 1, 0.4],
            transition: {
              duration: d * 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
        style={waveOrigin}
      >
        <path
          d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </motion.g>
      {/* onda derecha */}
      <motion.g
        variants={{
          idle: { scale: 1, opacity: 1 },
          hover: {
            scale: [0.6, 1.15, 0.6],
            opacity: [0.4, 1, 0.4],
            transition: {
              duration: d * 1.4,
              repeat: Infinity,
              delay: d * 0.35,
              ease: "easeInOut",
            },
          },
        }}
        style={waveOrigin}
      >
        <path
          d="M16.2 4.8c2 2 2.26 5.11.8 7.47"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </motion.g>
    </motion.svg>
  );
};
