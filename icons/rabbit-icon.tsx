"use client";

import { motion } from "motion/react";

interface RabbitIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const RabbitIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: RabbitIconProps) => {
  const d = duration;
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
      {/* conejo da saltitos */}
      <motion.path
        d="M13 16a3 3 0 0 1 2.24 5M18 12h.01M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3M20 8.54V4a2 2 0 1 0-4 0v3M7.612 12.524a3 3 0 1 0-1.6 4.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -4, 0, -2, 0],
            transition: {
              duration: d * 1.2,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            },
          },
        }}
      />
    </motion.svg>
  );
};
