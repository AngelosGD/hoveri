"use client";

import { motion } from "motion/react";

interface TicketIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const TicketIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: TicketIconProps) => {
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
      {/* ticket */}
      <path
        d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* linea punteada se trocea */}
      <motion.path
        d="M13 5v2m0 4v2m0 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 1, x: 0 },
          hover: {
            opacity: [1, 0.3, 1],
            x: [0, 2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* precio destella */}
      <motion.circle
        cx="6"
        cy="12"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.7, 1],
            transition: { duration: d * 0.6, delay: d * 0.25 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
