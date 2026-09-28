"use client";

import { motion } from "motion/react";

interface BotIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BotIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BotIconProps) => {
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
      {/* antena enciende */}
      <motion.path
        d="M12 8V4H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            transition: { duration: d * 0.6 },
          },
        }}
      />
      {/* robot asiente */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -6, 6, -3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <rect
          width="16"
          height="12"
          x="4"
          y="8"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M2 14h2M20 14h2M15 13v2M9 13v2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* ojos */}
        <motion.circle
          cx="9"
          cy="14"
          r="1"
          fill="currentColor"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.2, 1, 0.2, 1],
              transition: { duration: d, times: [0, 0.2, 0.4, 0.55, 0.8] },
            },
          }}
        />
        <motion.circle
          cx="15"
          cy="14"
          r="1"
          fill="currentColor"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.2, 1, 0.2, 1],
              transition: { duration: d, times: [0, 0.2, 0.4, 0.55, 0.8] },
            },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};
