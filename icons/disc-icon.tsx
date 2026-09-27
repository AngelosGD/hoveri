"use client";

import { motion } from "motion/react";

interface DiscIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const DiscIcon = ({
  size = 32,
  className,
  duration = 0.7,
}: DiscIconProps) => {
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
      {/* vinilo */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      {/* surco que gira (visible) */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 360],
            transition: { duration: d, ease: "linear" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <circle cx="12" cy="4.5" r="1.2" fill="currentColor" />
        <path
          d="M12 7.5a4.5 4.5 0 0 1 4.5 4.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </motion.g>
    </motion.svg>
  );
};
