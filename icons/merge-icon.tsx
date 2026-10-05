"use client";

import { motion } from "motion/react";

interface MergeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MergeIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: MergeIconProps) => {
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
      {/* flecha se traza hacia abajo */}
      <motion.path
        d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [0, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
      />
      {/* rama que entra */}
      <motion.path
        d="m20 22-5-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { x: 0, y: 0, opacity: 1 },
          hover: {
            x: [4, 0],
            y: [4, 0],
            opacity: [0, 1],
            transition: { duration: d * 0.8, delay: d * 0.3 },
          },
        }}
      />
      {/* punta arriba pulsa */}
      <motion.path
        d="m8 6 4-4 4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -2, 0],
            transition: { duration: d * 0.6, delay: d * 0.5 },
          },
        }}
      />
    </motion.svg>
  );
};
