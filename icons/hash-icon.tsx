"use client";

import { motion } from "motion/react";

interface HashIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const HashIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: HashIconProps) => {
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
      {/* horizontales se deslizan */}
      <motion.path
        d="M4 9h16M4 15h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, 2.5, -2.5, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* verticales se deslizan al contrario */}
      <motion.path
        d="M10 3 8 21M16 3l-2 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -2.5, 2.5, 0],
            transition: { duration: d, delay: d * 0.08, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* cruce central destella */}
      <motion.circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.3, 1.8],
            transition: { duration: d * 0.6, delay: d * 0.3, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
