"use client";

import { motion } from "motion/react";

interface SnowflakeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SnowflakeIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: SnowflakeIconProps) => {
  const d = duration;
  const spokes = [0, 60, 120];

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
      {/* brazos se dibujan en cascada */}
      {spokes.map((angle, i) => (
        <motion.g
          key={angle}
          transform={`rotate(${angle} 12 12)`}
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.35, 1],
              transition: {
                duration: d * 0.7,
                delay: i * 0.1,
                ease: "easeInOut",
              },
            },
          }}
        >
          <path
            d="M12 2v20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="m9 4 3 3 3-3M9 20l3-3 3 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      ))}
      {/* centro late */}
      <motion.circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.5, 1],
            transition: { duration: d * 0.7, delay: 0.3, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
