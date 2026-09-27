"use client";

import { motion } from "motion/react";

interface CompassIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CompassIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: CompassIconProps) => {
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
      {/* circulo */}
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      {/* aguja gira */}
      <motion.path
        d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 45, -15, 0],
            transition: {
              duration: d,
              times: [0, 0.4, 0.7, 1],
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
