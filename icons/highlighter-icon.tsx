"use client";

import { motion } from "motion/react";

interface HighlighterIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const HighlighterIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: HighlighterIconProps) => {
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
      {/* todo junto: la mano gira el marcador */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -6, 3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left bottom" }}
      >
        {/* zona reslatada */}
        <motion.path
          d="m9 11-6 6v3h9l3-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.35, 1],
              transition: { duration: d * 0.7, delay: d * 0.4 },
            },
          }}
        />
        {/* marcador */}
        <path
          d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"
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
