"use client";

import { motion } from "motion/react";

interface SunriseIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SunriseIcon = ({
  size = 32,
  className,
  duration = 0.7,
}: SunriseIconProps) => {
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
      {/* horizonte quieto */}
      <path
        d="M2 18h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* rayos giran sobre su eje */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 18, -8, 12, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformOrigin: "12px 17px" }}
      >
        <path
          d="M12 2v3M5.6 9.2l1.3 1.3M17.1 10.5l1.3-1.3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* sol sentado sobre la linea */}
      <motion.path
        d="M8 17a4 4 0 0 1 8 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { scale: 1, y: 0 },
          hover: {
            scale: [1, 1.1, 0.97, 1],
            y: [0, -2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      />
    </motion.svg>
  );
};
