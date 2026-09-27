"use client";

import { motion } from "motion/react";

interface MessageCircleIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MessageCircleIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: MessageCircleIconProps) => {
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
      {/* burbuja */}
      <motion.path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.08, 1],
            transition: { duration: d * 0.7, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* puntos de escribiendo */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx={9 + i * 3}
          cy={12}
          r="1.1"
          fill="currentColor"
          variants={{
            idle: { opacity: 0.5, y: 0 },
            hover: {
              opacity: [0.5, 1, 0.5],
              y: [0, -1.5, 0],
              transition: {
                duration: d * 0.6,
                delay: i * 0.1,
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
