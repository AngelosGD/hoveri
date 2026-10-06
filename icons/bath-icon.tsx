"use client";

import { motion } from "motion/react";

interface BathIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BathIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: BathIconProps) => {
  const d = duration;
  const bubbles = [
    { cx: 7.5, cy: 16.5, r: 1.3, delay: 0.15 },
    { cx: 11.5, cy: 17.5, r: 1, delay: 0.35 },
    { cx: 15, cy: 16, r: 1.5, delay: 0.55 },
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
      {/* bañera se mece */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -3, 2.5, -2, 0],
            transition: { duration: d * 1.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M10 4 8 6M17 19v2M7 19v2M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12h20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* burbujas suben dentro de la tina */}
      {bubbles.map((b) => (
        <motion.circle
          key={b.cx}
          cx={b.cx}
          cy={b.cy}
          r={b.r}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          variants={{
            idle: { opacity: 0, y: 0, scale: 0.6 },
            hover: {
              opacity: [0, 1, 0.9, 0],
              y: [0, -3],
              scale: [0.6, 1, 1.1, 1.2],
              transition: { duration: d, delay: b.delay, ease: "easeOut" },
            },
          }}
        />
      ))}
      {/* gota del grifo */}
      <motion.circle
        cx="8.6"
        cy="7.5"
        r="1"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, y: 0 },
          hover: {
            opacity: [0, 1, 0],
            y: [0, 4.5],
            transition: { duration: d * 0.7, delay: d * 0.45 },
          },
        }}
      />
    </motion.svg>
  );
};
