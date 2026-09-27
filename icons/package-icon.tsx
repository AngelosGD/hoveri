"use client";

import { motion } from "motion/react";

interface PackageIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PackageIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: PackageIconProps) => {
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
      <motion.g
        variants={{
          idle: { rotate: 0, y: 0 },
          hover: {
            rotate: [0, -4, 3, 0],
            y: [0, -2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M16.5 9.4 7.55 4.24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* brillo abierto */}
      <motion.circle
        cx="12"
        cy="12"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            transition: { duration: d * 0.6, delay: d * 0.3 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
