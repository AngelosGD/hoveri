"use client";

import { motion } from "motion/react";

interface FilmIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FilmIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: FilmIconProps) => {
  const d = duration;
  const holes = [4.5, 9.5, 14.5, 19.5];

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
      {/* marco */}
      <rect
        x="2"
        y="3"
        width="20"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 3v18M17 3v18"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* agujeros de film */}
      {holes.map((y) => (
        <motion.rect
          key={`l-${y}`}
          x="3.5"
          y={y}
          width="2"
          height="2"
          rx="0.5"
          fill="currentColor"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.3, 1],
              transition: {
                duration: d * 0.7,
                delay: (y / 24) * 0.3,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
      {holes.map((y) => (
        <motion.rect
          key={`r-${y}`}
          x="18.5"
          y={y}
          width="2"
          height="2"
          rx="0.5"
          fill="currentColor"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.3, 1],
              transition: {
                duration: d * 0.7,
                delay: (y / 24) * 0.3 + 0.08,
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
