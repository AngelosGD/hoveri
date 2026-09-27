"use client";

import { motion } from "motion/react";

interface CpuIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CpuIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CpuIconProps) => {
  const d = duration;
  const pins = [6, 10, 14, 18];

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
      {/* chip central */}
      <motion.rect
        x="5"
        y="5"
        width="14"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.06, 1],
            transition: { duration: d * 0.6, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* nucleo */}
      <motion.rect
        x="9"
        y="9"
        width="6"
        height="6"
        rx="1"
        fill="currentColor"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.4, 1],
            transition: { duration: d * 0.7, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* pines */}
      {pins.map((p) => (
        <g key={p}>
          <path
            d={`M${p} 2v3M${p} 19v3`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d={`M2 ${p}h3M19 ${p}h3`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      ))}
      {/* pulso de datos */}
      <motion.circle
        cx="12"
        cy="12"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 3, 4],
            transition: { duration: d * 0.7, delay: d * 0.25 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
