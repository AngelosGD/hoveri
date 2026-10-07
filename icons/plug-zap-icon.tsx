"use client";

import { motion } from "motion/react";

interface PlugZapIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PlugZapIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: PlugZapIconProps) => {
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
      {/* enchufe */}
      <g>
        <path
          d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m2 22 3-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7.5 13.5 10 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 16.5 13 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* rayo destella */}
      <motion.path
        d="m18 3-4 4h6l-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { scale: 1, opacity: 1 },
          hover: {
            scale: [1, 1.3, 1, 1.15, 1],
            opacity: [1, 0.4, 1, 0.6, 1],
            transition: {
              duration: d * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
