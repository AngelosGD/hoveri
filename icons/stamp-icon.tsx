"use client";

import { motion } from "motion/react";

interface StampIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const StampIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: StampIconProps) => {
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
      {/* sello aprieta */}
      <motion.g
        variants={{
          idle: { y: 0, scaleY: 1 },
          hover: {
            y: [0, 3, 0],
            scaleY: [1, 0.9, 1],
            transition: {
              duration: d,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* marca en el papel */}
      <motion.path
        d="M5 22h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 0.4, scaleX: 1 },
          hover: {
            opacity: [0.4, 1, 0.4],
            scaleX: [1, 1.1, 1],
            transition: { duration: d, delay: d * 0.4 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
