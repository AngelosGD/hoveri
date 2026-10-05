"use client";

import { motion } from "motion/react";

interface CookingPotIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CookingPotIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CookingPotIconProps) => {
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
      {/* olla respira */}
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
          d="M2 12h20M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* tapa se levanta */}
      <motion.g
        variants={{
          idle: { y: 0, rotate: 0 },
          hover: {
            y: [0, -2.5, 0],
            rotate: [0, -4, 0],
            transition: {
              duration: d,
              times: [0, 0.4, 1],
              delay: d * 0.15,
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="m4 8 16-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
