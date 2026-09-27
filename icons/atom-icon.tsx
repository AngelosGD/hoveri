"use client";

import { motion } from "motion/react";

interface AtomIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const AtomIcon = ({
  size = 32,
  className,
  duration = 0.7,
}: AtomIconProps) => {
  const d = duration;
  const orbits = [0, 60, 120];

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
      {/* orbitas giran */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 360],
            transition: { duration: d * 2.5, ease: "linear" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        {orbits.map((angle) => (
          <ellipse
            key={angle}
            cx="12"
            cy="12"
            rx="10"
            ry="4.5"
            transform={`rotate(${angle} 12 12)`}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        ))}
      </motion.g>
      {/* nucleo */}
      <motion.circle
        cx="12"
        cy="12"
        r="2"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.2, 1],
            transition: { duration: d * 0.8, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
