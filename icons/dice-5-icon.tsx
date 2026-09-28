"use client";

import { motion } from "motion/react";

interface Dice5IconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const Dice5Icon = ({
  size = 32,
  className,
  duration = 0.7,
}: Dice5IconProps) => {
  const d = duration;
  const pips = [
    { x: 16, y: 8, delay: 0 },
    { x: 8, y: 8, delay: 0.06 },
    { x: 12, y: 12, delay: 0.12 },
    { x: 8, y: 16, delay: 0.18 },
    { x: 16, y: 16, delay: 0.24 },
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
      {/* dado rueda */}
      <motion.rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
        ry="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 90],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* caras parpadean */}
      {pips.map((pip) => (
        <motion.path
          key={`${pip.x}-${pip.y}`}
          d={`M${pip.x} ${pip.y}h.01`}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.15, 1],
              transition: {
                duration: d * 0.6,
                delay: pip.delay,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
