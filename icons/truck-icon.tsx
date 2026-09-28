"use client";

import { motion } from "motion/react";

interface TruckIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const TruckIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: TruckIconProps) => {
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
      {/* camion avanza */}
      <motion.g
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, 2.5, -1, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 18H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* ruedas */}
        <motion.circle
          cx="7"
          cy="18"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.15, 1],
              transition: { duration: d * 0.6, delay: d * 0.1 },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <motion.circle
          cx="17"
          cy="18"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.15, 1],
              transition: { duration: d * 0.6, delay: d * 0.2 },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      </motion.g>
      {/* carretera */}
      <motion.path
        d="M1 22h4m3 0h4m3 0h4m3 0h1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 0.7, 0.7, 0],
            x: [0, -4],
            transition: { duration: d, delay: d * 0.2 },
          },
        }}
      />
    </motion.svg>
  );
};
