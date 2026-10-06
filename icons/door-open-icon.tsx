"use client";

import { motion } from "motion/react";

interface DoorOpenIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const DoorOpenIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: DoorOpenIconProps) => {
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
      {/* marco */}
      <path
        d="M11 4H8a2 2 0 0 0-2 2v14M11 20H2M22 20h-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* la puerta se abre y cierra */}
      <motion.path
        d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { scaleX: 1 },
          hover: {
            scaleX: [1, 0.45, 1],
            transition: {
              duration: d,
              times: [0, 0.45, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "11px 20px" }}
      />
      {/* picaporte */}
      <motion.circle
        cx="14"
        cy="12"
        r="1"
        fill="currentColor"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            transition: { duration: d * 0.5, delay: d * 0.55 },
          },
        }}
      />
    </motion.svg>
  );
};
