"use client";

import { motion } from "motion/react";

interface AnvilIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const AnvilIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: AnvilIconProps) => {
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
      {/* yunque se sacude con el golpe */}
      <motion.g
        variants={{
          idle: { y: 0, scaleY: 1 },
          hover: {
            y: [0, 2, 0],
            scaleY: [1, 0.94, 1],
            transition: {
              duration: d,
              times: [0, 0.3, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1zM9 12v5M15 12v5M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* chispas al golpear */}
      <motion.path
        d="M12 4v-2M4 6 3 5M20 6l1-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d * 0.6, delay: d * 0.25 },
          },
        }}
      />
    </motion.svg>
  );
};
