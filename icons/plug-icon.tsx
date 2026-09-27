"use client";

import { motion } from "motion/react";

interface PlugIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PlugIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: PlugIconProps) => {
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
      {/* enchufe se conecta */}
      <motion.path
        d="M12 22v-5M9 8V2m6 6V2M18 8v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -3, 0],
            transition: {
              duration: d,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center top" }}
      />
      {/* chispa de conexion */}
      <motion.path
        d="M5 6 4 5m15 1 1-1M3 12H2m20 0h-1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d * 0.7, delay: d * 0.75 },
          },
        }}
      />
    </motion.svg>
  );
};
