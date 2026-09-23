"use client";

import { motion } from "motion/react";

interface HeartIconProps {
  size?: number;
  className?: string;
}

export const HeartIcon = ({ size = 32, className }: HeartIconProps) => {
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
      <motion.path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            // doble latido estilo ECG: lub-dub
            scale: [1, 1.25, 1, 1.15, 1],
            transition: {
              duration: 0.55,
              times: [0, 0.15, 0.3, 0.45, 0.6],
              ease: "easeOut",
            },
          },
        }}
        style={{ originX: "12px", originY: "12px" }}
      />
      {/* brillo que cruza el corazon */}
      <motion.path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="white"
        variants={{
          idle: { opacity: 0, x: -20 },
          hover: {
            opacity: [0, 0.45, 0],
            x: [-20, 25],
            transition: { duration: 0.55, delay: 0.15 },
          },
        }}
      />
    </motion.svg>
  );
};
