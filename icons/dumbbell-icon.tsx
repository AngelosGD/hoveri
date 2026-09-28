"use client";

import { motion } from "motion/react";

interface DumbbellIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const DumbbellIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: DumbbellIconProps) => {
  const d = duration;
  const paths = [
    "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",
    "m2.5 21.5 1.4-1.4",
    "m20.1 3.9 1.4-1.4",
    "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",
    "m9.6 14.4 4.8-4.8",
  ];

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
      {/* curl: levanta y baja */}
      <motion.g
        variants={{
          idle: { y: 0, rotate: 0 },
          hover: {
            y: [0, -3, 0],
            rotate: [0, -12, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        {paths.map((path, i) => (
          <path
            key={i}
            d={path}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </motion.g>
    </motion.svg>
  );
};
