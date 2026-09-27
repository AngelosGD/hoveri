"use client";

import { motion } from "motion/react";

interface MoveIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MoveIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: MoveIconProps) => {
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
      {/* flechas que giran con la cruz */}
      <motion.g
        variants={{
          idle: { rotate: 0, scale: 1 },
          hover: {
            rotate: [0, 45],
            scale: [1, 0.9, 1],
            transition: {
              duration: d,
              times: [0, 0.6, 1],
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </motion.g>
    </motion.svg>
  );
};
