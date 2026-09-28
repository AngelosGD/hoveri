"use client";

import { motion } from "motion/react";

interface CookieIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CookieIcon = ({
  size = 32,
  className,
  duration = 0.7,
}: CookieIconProps) => {
  const d = duration;
  const chips = [
    { x: 8.5, y: 8.5, delay: 0 },
    { x: 16, y: 15.5, delay: 0.08 },
    { x: 12, y: 12, delay: 0.16 },
    { x: 11, y: 17, delay: 0.24 },
    { x: 7, y: 14, delay: 0.32 },
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
      {/* galleta gira */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 360],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* chips */}
        {chips.map((chip) => (
          <motion.circle
            key={`${chip.x}-${chip.y}`}
            cx={chip.x}
            cy={chip.y}
            r="1"
            fill="currentColor"
            variants={{
              idle: { scale: 1 },
              hover: {
                scale: [1, 1.6, 1],
                transition: { duration: d * 0.5, delay: chip.delay },
              },
            }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}
      </motion.g>
    </motion.svg>
  );
};
