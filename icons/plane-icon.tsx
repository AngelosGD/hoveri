"use client";

import { motion } from "motion/react";

interface PlaneIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PlaneIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: PlaneIconProps) => {
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
      {/* avion vuela */}
      <motion.g
        variants={{
          idle: { x: 0, y: 0, rotate: 0 },
          hover: {
            x: [0, 3, -2, 0],
            y: [0, -3, 1, 0],
            rotate: [0, -8, 5, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* estela */}
      <motion.path
        d="M2 22 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0, pathLength: 0 },
          hover: {
            opacity: [0, 0.7, 0],
            pathLength: [0, 1],
            transition: { duration: d * 0.8, delay: d * 0.3 },
          },
        }}
      />
    </motion.svg>
  );
};
