"use client";

import { motion } from "motion/react";

interface TerminalIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const TerminalIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: TerminalIconProps) => {
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
      <motion.rect
        x="2"
        y="3"
        width="20"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.04, 1],
            transition: { duration: d * 0.5 },
          },
        }}
        style={{ originX: "12px", originY: "12px" }}
      />
      {/* prompt >_ */}
      <motion.path
        d="m6 9 3 3-3 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { x: 0, opacity: 1 },
          hover: {
            x: [0, 2, 0],
            transition: { duration: d * 0.6 },
          },
        }}
      />
      {/* cursor line */}
      <motion.path
        d="M12 15h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.2, 1, 0.2, 1],
            transition: {
              duration: d,
              times: [0, 0.2, 0.4, 0.6, 0.8],
            },
          },
        }}
      />
      {/* puntos titlebar */}
      <motion.circle
        cx="6"
        cy="6.5"
        r="0.9"
        fill="currentColor"
        variants={{
          idle: { opacity: 0.5 },
          hover: {
            opacity: [0.5, 1, 0.5],
            transition: { duration: d * 0.7, delay: d * 0.1 },
          },
        }}
      />
      <motion.circle
        cx="9"
        cy="6.5"
        r="0.9"
        fill="currentColor"
        variants={{
          idle: { opacity: 0.5 },
          hover: {
            opacity: [0.5, 1, 0.5],
            transition: { duration: d * 0.7, delay: d * 0.2 },
          },
        }}
      />
    </motion.svg>
  );
};
