"use client";

import { motion } from "motion/react";

interface PenIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PenIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: PenIconProps) => {
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
      {/* lapiz escribe */}
      <motion.path
        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -8, 5, -8, 0],
            transition: { duration: d * 1.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "3px 17px" }}
      />
      {/* rastro de tinta */}
      <motion.path
        d="M3 21c2 .5 4 .5 6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0, pathLength: 1 },
          hover: {
            opacity: [0, 1, 1, 0],
            pathLength: [0, 1],
            transition: { duration: d * 1.2, delay: d * 0.2 },
          },
        }}
      />
    </motion.svg>
  );
};
