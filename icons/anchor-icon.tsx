"use client";

import { motion } from "motion/react";

interface AnchorIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const AnchorIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: AnchorIconProps) => {
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
      {/* ancla se mece como en el mar */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -8, 6, -4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center top" }}
      >
        <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* ola */}
      <motion.path
        d="M4 20c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0, pathLength: 0 },
          hover: {
            opacity: [0, 0.7, 0],
            pathLength: [0, 1],
            transition: { duration: d * 0.8, delay: d * 0.3 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
