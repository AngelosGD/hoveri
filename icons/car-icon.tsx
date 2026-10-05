"use client";

import { motion } from "motion/react";

interface CarIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CarIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CarIconProps) => {
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
      {/* coche arranca */}
      <motion.g
        variants={{
          idle: { x: 0, y: 0 },
          hover: {
            x: [0, 3, 0],
            y: [0, -1, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2M9 17h6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* ruedas */}
        <motion.circle
          cx="7"
          cy="17"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 0.8, 1.1, 1],
              transition: { duration: d, ease: "easeInOut" },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <motion.circle
          cx="17"
          cy="17"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 0.8, 1.1, 1],
              transition: { duration: d, delay: d * 0.1, ease: "easeInOut" },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </motion.g>
    </motion.svg>
  );
};
