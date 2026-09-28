"use client";

import { motion } from "motion/react";

interface BrainIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BrainIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: BrainIconProps) => {
  const d = duration;
  const paths = [
    "M12 18V5",
    "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",
    "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",
    "M17.997 5.125a4 4 0 0 1 2.526 5.77",
    "M18 18a4 4 0 0 0 2-7.464",
    "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
    "M6 18a4 4 0 0 1-2-7.464",
    "M6.003 5.125a4 4 0 0 0-2.526 5.77",
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
      {/* hemisferios piensan */}
      {paths.map((path, i) => (
        <motion.path
          key={i}
          d={path}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.3, 1],
              transition: {
                duration: d * 0.7,
                delay: i * 0.05,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
      {/* idea centellea */}
      <motion.circle
        cx="12"
        cy="2.5"
        r="1.2"
        fill="currentColor"
        variants={{
          idle: { scale: 0, opacity: 0 },
          hover: {
            scale: [0, 1.4, 0],
            opacity: [0, 1, 0],
            transition: { duration: d * 0.8, delay: d * 0.5 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
