"use client";

import { motion } from "motion/react";

interface PopcornIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PopcornIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: PopcornIconProps) => {
  const d = duration;
  const kernels = [
    { delay: 0, y: -4 },
    { delay: 0.1, y: -5 },
    { delay: 0.2, y: -3.5 },
    { delay: 0.3, y: -5.5 },
    { delay: 0.4, y: -4.5 },
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
      {/* palomitas explotan */}
      {kernels.map((k, i) => (
        <motion.circle
          key={i}
          cx={6 + i * 3}
          cy={i % 2 === 0 ? 4.5 : 3}
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          variants={{
            idle: { y: 6, opacity: 0 },
            hover: {
              y: [6, k.y],
              opacity: [0, 1],
              transition: { duration: d * 0.8, delay: k.delay, ease: "easeOut" },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
      {/* envase */}
      <path
        d="M18 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1ZM10 22 9 8m5 14 1-14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* lineas del envase */}
      <path
        d="M8 12h8M7.5 16h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </motion.svg>
  );
};
