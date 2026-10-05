"use client";

import { motion } from "motion/react";

interface WatchIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const WatchIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: WatchIconProps) => {
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
      {/* correa superior */}
      <path
        d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* correa inferior */}
      <path
        d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* caja */}
      <circle
        cx="12"
        cy="12"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* manecilla gira alrededor del centro */}
      <motion.path
        d="M12 10v2.2l1.6 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 360],
            transition: { duration: d * 2.5, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 12px" }}
      />
    </motion.svg>
  );
};
