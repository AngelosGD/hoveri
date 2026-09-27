"use client";

import { motion } from "motion/react";

interface InboxIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const InboxIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: InboxIconProps) => {
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
      {/* bandeja */}
      <path
        d="M22 12h-6l-2 3h-4l-2-3H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 1.5, 0],
            transition: { duration: d * 0.7, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* mensaje entrando */}
      <motion.path
        d="M12 5V2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { y: 0, opacity: 0 },
          hover: {
            y: [-3, 2],
            opacity: [0, 1, 0],
            transition: { duration: d * 0.7, delay: d * 0.2 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
