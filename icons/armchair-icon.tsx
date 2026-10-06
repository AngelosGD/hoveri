"use client";

import { motion } from "motion/react";

interface ArmchairIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ArmchairIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: ArmchairIconProps) => {
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
      {/* sillón se hunde y respira */}
      <motion.g
        variants={{
          idle: { scaleY: 1, y: 0 },
          hover: {
            scaleY: [1, 0.94, 1.03, 1],
            y: [0, 1, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* patas */}
      <path
        d="M5 18v2M19 18v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};
