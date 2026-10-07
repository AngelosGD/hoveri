"use client";

import { motion } from "motion/react";

interface BusIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BusIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BusIconProps) => {
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
      {/* autobus rebota al frenar */}
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -1.6, 0],
            transition: { duration: d * 1.2, ease: "easeInOut" },
          },
        }}
      >
        <path
          d="M8 6v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M15 6v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M2 12h19.6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 18h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* ruedas giran */}
        <motion.circle
          cx="7"
          cy="18"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.2, 1],
              transition: {
                duration: d * 0.7,
                delay: d * 0.2,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "view-box", transformOrigin: "7px 18px" }}
        />
        <motion.circle
          cx="16"
          cy="18"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.2, 1],
              transition: {
                duration: d * 0.7,
                delay: d * 0.32,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "view-box", transformOrigin: "16px 18px" }}
        />
      </motion.g>
    </motion.svg>
  );
};
