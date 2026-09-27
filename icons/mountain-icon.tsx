"use client";

import { motion } from "motion/react";

interface MountainIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MountainIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: MountainIconProps) => {
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
      {/* montaña se dibuja */}
      <motion.path
        d="m8 3 4 8 5-5 5 15H2L8 3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [1, 0.3, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* cumbre nevada destella */}
      <motion.path
        d="m14 6 1.5 3L17 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.2, 1],
            transition: { duration: d * 0.7, delay: d * 0.3 },
          },
        }}
      />
    </motion.svg>
  );
};
