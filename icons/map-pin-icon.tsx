"use client";

import { motion } from "motion/react";

interface MapPinIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MapPinIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: MapPinIconProps) => {
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
      {/* pin */}
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -4, 0, -1.5, 0],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
      </motion.g>
      {/* onda en el punto */}
      <motion.circle
        cx="12"
        cy="22"
        r="2"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.6, 2],
            transition: { duration: d * 0.7, delay: d * 0.35 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
