"use client";

import { motion } from "motion/react";

interface CupSodaIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CupSodaIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: CupSodaIconProps) => {
  const d = duration;
  const bubbles = [
    { cx: 10, cy: 16, delay: 0 },
    { cx: 13.5, cy: 14, delay: 0.15 },
    { cx: 11, cy: 12, delay: 0.3 },
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
      {/* vaso */}
      <path
        d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8M5 8h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* pajita se mueve */}
      <motion.path
        d="m12 8 1-6h2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -6, 4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "bottom left" }}
      />
      {/* onda */}
      <path
        d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* burbujas suben */}
      {bubbles.map((b) => (
        <motion.circle
          key={`${b.cx}-${b.cy}`}
          cx={b.cx}
          cy={b.cy}
          r="1"
          fill="currentColor"
          variants={{
            idle: { opacity: 0, y: 0 },
            hover: {
              opacity: [0, 1, 0],
              y: [0, -4],
              transition: { duration: d, delay: b.delay + d * 0.2 },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
