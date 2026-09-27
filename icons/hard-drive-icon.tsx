"use client";

import { motion } from "motion/react";

interface HardDriveIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const HardDriveIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: HardDriveIconProps) => {
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
      {/* chasis */}
      <path
        d="M22 12H2M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* disco gira */}
      <motion.circle
        cx="6"
        cy="16"
        r="1.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 360],
            transition: { duration: d, ease: "linear" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* led lee/escribe */}
      <motion.circle
        cx="18"
        cy="16"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.2, 1, 0.2, 1],
            transition: { duration: d * 0.9, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
