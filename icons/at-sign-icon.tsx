"use client";

import { motion } from "motion/react";

interface AtSignIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const AtSignIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: AtSignIconProps) => {
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
      {/* circulo exterior gira */}
      <motion.circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 360],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* arco externo */}
      <motion.path
        d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [1, 0.4, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* punto central */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </motion.svg>
  );
};
