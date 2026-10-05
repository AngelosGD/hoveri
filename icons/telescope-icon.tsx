"use client";

import { motion } from "motion/react";

interface TelescopeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const TelescopeIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: TelescopeIconProps) => {
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
      {/* buscapersonas apunta al cielo */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -12, -6, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left bottom" }}
      >
        <path
          d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44M13.56 11.747l4.332-.924M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* trípode */}
      <path
        d="m16 21-3.105-6.21M8 21l3.105-6.21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* lente brilla */}
      <motion.circle
        cx="12"
        cy="13"
        r="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            scale: [1, 1.3, 1],
            transition: { duration: d * 0.8, delay: d * 0.4 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
