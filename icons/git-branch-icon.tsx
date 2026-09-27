"use client";

import { motion } from "motion/react";

interface GitBranchIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const GitBranchIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: GitBranchIconProps) => {
  const d = duration;
  const popVariant = (delay: number) => ({
    idle: { scale: 1 },
    hover: {
      scale: [1, 1.4, 1],
      transition: { duration: d * 0.55, delay },
    },
  });

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
      {/* linea lateral */}
      <motion.path
        d="M6 3v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [1, 0.4, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* curva */}
      <circle
        cx="18"
        cy="6"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M18 9a9 9 0 0 1-9 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* puntos hacen pop en cascada */}
      <motion.circle cx="6" cy="3" r="2" fill="currentColor" variants={popVariant(0)}
        style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <motion.circle cx="18" cy="6" r="2" fill="currentColor" variants={popVariant(d * 0.12)}
        style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <motion.circle cx="6" cy="18" r="2" fill="currentColor" variants={popVariant(d * 0.24)}
        style={{ transformBox: "fill-box", transformOrigin: "center" }} />
    </motion.svg>
  );
};
