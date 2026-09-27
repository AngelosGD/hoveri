"use client";

import { motion } from "motion/react";

interface ShieldIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ShieldIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: ShieldIconProps) => {
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
      {/* escudo */}
      <motion.path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.06, 1],
            transition: { duration: d * 0.6, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* brillo que barre */}
      <motion.path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, x: -30 },
          hover: {
            opacity: [0, 0.25, 0],
            x: [-30, 30],
            transition: { duration: d * 0.9, delay: d * 0.15 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* check */}
      <motion.path
        d="m9 12 2 2 4-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { pathLength: 1, opacity: 1 },
          hover: {
            pathLength: [1, 0, 1],
            opacity: [1, 0.4, 1],
            transition: { duration: d, delay: d * 0.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
