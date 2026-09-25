"use client";

import { motion } from "motion/react";

interface UserIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const UserIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: UserIconProps) => {
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
      {/* cabeza */}
      <motion.circle
        cx="12"
        cy="8"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -3, 0],
            transition: { duration: d * 0.7, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* cuerpo */}
      <motion.path
        d="M5 20a7 7 0 0 1 14 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 1.5, 0],
            transition: { duration: d * 0.7, delay: d * 0.1, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* saludo */}
      <motion.circle
        cx="20"
        cy="6"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: { duration: d * 0.6, delay: d * 0.25 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
