"use client";

import { motion } from "motion/react";

interface SirenIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SirenIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: SirenIconProps) => {
  const d = duration;
  const rays = [
    "M2 12h1",
    "M12 2v1",
    "m4.929 4.929.707.707",
    "M18.5 4.5 18 5",
    "M21 12h1",
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
      {/* sirena vibra */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -5, 5, -3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M7 18v-6a5 5 0 1 1 10 0v6M12 12v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* rayos de alarma destellan */}
      {rays.map((path, i) => (
        <motion.path
          key={i}
          d={path}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.15, 1],
              transition: {
                duration: d * 0.6,
                delay: i * 0.07,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
