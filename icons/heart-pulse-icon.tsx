"use client";

import { motion } from "motion/react";

interface HeartPulseIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const HeartPulseIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: HeartPulseIconProps) => {
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
      {/* latido doble */}
      <motion.g
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.05, 1, 1.03, 1],
            transition: {
              duration: d,
              times: [0, 0.2, 0.4, 0.6, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
