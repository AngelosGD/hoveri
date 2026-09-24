"use client";

import { motion } from "motion/react";

interface FireIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FireIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: FireIconProps) => {
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
      {/* llama principal */}
      <motion.path
        d="M12 2s-1 4-4 7c-2.5 2.5-4 5-4 8a8 8 0 0 0 16 0c0-3-1.5-5.5-4-8-3-3-4-7-4-7z"
        fill="currentColor"
        variants={{
          idle: { scale: 1, rotate: 0 },
          hover: {
            scale: [1, 1.08, 0.97, 1.05, 1],
            rotate: [0, -3, 3, -2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      />
      {/* nucleo interno (tenue, no tapa la forma) */}
      <motion.path
        d="M12 13c-1.2 1.2-2 2.5-2 4a2 2 0 0 0 4 0c0-1.5-0.8-2.8-2-4z"
        fill="white"
        opacity={0.35}
        variants={{
          idle: { opacity: 0, scale: 0.7 },
          hover: {
            opacity: [0, 0.4, 0.2, 0.4, 0],
            scale: [0.7, 1.1, 0.9, 1.05, 0.7],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* chispas */}
      <motion.circle
        cx="17"
        cy="5"
        r="1"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.3, 0],
            transition: { duration: d * 0.7, delay: d * 0.3 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
