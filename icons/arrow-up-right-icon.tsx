"use client";

import { motion } from "motion/react";

interface ArrowUpRightIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ArrowUpRightIcon = ({
  size = 32,
  className,
  duration = 0.45,
}: ArrowUpRightIconProps) => {
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
      <motion.g
        variants={{
          idle: { x: 0, y: 0 },
          hover: {
            x: [0, 3.5, 3.5, 0],
            y: [0, -3.5, -3.5, 0],
            transition: {
              duration: d,
              times: [0, 0.35, 0.65, 1],
              ease: "easeOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M7 17 17 7"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M8 7h9v9"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
