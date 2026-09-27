"use client";

import { motion } from "motion/react";

interface CropIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CropIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CropIconProps) => {
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
      {/* marco que recorta fuerte */}
      <motion.path
        d="M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 0.72, 1],
            transition: {
              duration: d,
              times: [0, 0.4, 1],
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* esquina activa */}
      <motion.rect
        x="16.5"
        y="16.5"
        width="5"
        height="5"
        rx="1"
        fill="currentColor"
        variants={{
          idle: { scale: 1, opacity: 1 },
          hover: {
            scale: [1, 1.6, 1],
            opacity: [1, 0.5, 1],
            transition: { duration: d, times: [0, 0.4, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* guia de recorte */}
      <motion.line
        x1="6"
        y1="16"
        x2="16"
        y2="6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 3"
        variants={{
          idle: { opacity: 0.5 },
          hover: {
            opacity: [0.5, 1, 0.5],
            transition: { duration: d },
          },
        }}
      />
    </motion.svg>
  );
};
