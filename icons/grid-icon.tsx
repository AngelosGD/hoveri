"use client";

import { motion } from "motion/react";

interface GridIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const GridIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: GridIconProps) => {
  const d = duration;
  const cells = [
    { x: 3, y: 3, delay: 0 },
    { x: 13, y: 3, delay: 0.08 },
    { x: 13, y: 13, delay: 0.16 },
    { x: 3, y: 13, delay: 0.24 },
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
      {cells.map((c) => (
        <motion.rect
          key={`${c.x}-${c.y}`}
          x={c.x}
          y={c.y}
          width="8"
          height="8"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 0.7, 1],
              transition: {
                duration: d * 0.8,
                delay: c.delay,
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
