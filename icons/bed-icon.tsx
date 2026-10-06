"use client";

import { motion } from "motion/react";

interface BedIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BedIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BedIconProps) => {
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
      {/* cama respira */}
      <motion.g
        variants={{
          idle: { scaleY: 1 },
          hover: {
            scaleY: [1, 0.96, 1.02, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* almohada destella */}
        <motion.path
          d="M6 8v9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.3, 1],
              transition: { duration: d * 0.7, delay: d * 0.35 },
            },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};
