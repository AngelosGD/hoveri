"use client";

import { motion } from "motion/react";

interface BatteryIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BatteryIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: BatteryIconProps) => {
  const d = duration;
  const cells = [0, 1, 2];

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
      {/* carcasa */}
      <rect
        x="2"
        y="7"
        width="17"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* pin */}
      <path
        d="M22 11v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* celdas cargan en cascada */}
      {cells.map((i) => (
        <motion.rect
          key={i}
          x={4.5 + i * 4.5}
          y="9.5"
          width="3.5"
          height="5"
          rx="1"
          fill="currentColor"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.25, 1],
              transition: {
                duration: d * 0.7,
                delay: i * 0.12,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
