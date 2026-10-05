"use client";

import { motion } from "motion/react";

interface SatelliteIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SatelliteIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: SatelliteIconProps) => {
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
      {/* cuerpo gira suave */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -8, 8, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5M16.5 7.5 19 5m-1.5 5.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* señal */}
      <motion.path
        d="M9 21a6 6 0 0 0-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 1, pathLength: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            pathLength: [1, 0.4, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
      />
    </motion.svg>
  );
};
