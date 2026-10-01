"use client";

import { motion } from "motion/react";

interface WashingMachineIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const WashingMachineIcon = ({
  size = 32,
  className,
  duration = 1,
}: WashingMachineIconProps) => {
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
      {/* carcasa */}
      <path
        d="M3 6h3M17 6h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        width="18"
        height="20"
        x="3"
        y="2"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* tambor */}
      <circle
        cx="12"
        cy="13"
        r="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* ropa gira */}
      <motion.path
        d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 360],
            transition: { duration: d, ease: "linear" },
          },
        }}
        style={{ transformOrigin: "12px 13px" }}
      />
    </motion.svg>
  );
};
