"use client";

import { motion } from "motion/react";

interface SunIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

const RAYS = [0, 45, 90, 135, 180, 225, 270, 315];

export const SunIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: SunIconProps) => {
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
      {/* nucleo */}
      <motion.circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.15, 1],
            transition: { duration: d * 0.7, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* rayos fijos + grupo que gira */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 90],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        {RAYS.map((angle) => (
          <line
            key={angle}
            x1="12"
            y1="1.5"
            x2="12"
            y2="4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            transform={`rotate(${angle} 12 12)`}
          />
        ))}
      </motion.g>
      {/* brillo que recorre los rayos */}
      <motion.circle
        cx="12"
        cy="3"
        r="1"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.3, 0],
            transition: { duration: d * 0.6, delay: d * 0.25, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
