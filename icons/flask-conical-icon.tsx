"use client";

import { motion } from "motion/react";

interface FlaskConicalIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FlaskConicalIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: FlaskConicalIconProps) => {
  const d = duration;
  const bubbles = [
    { cx: 10, cy: 18, delay: 0 },
    { cx: 14, cy: 19, delay: 0.15 },
    { cx: 12, cy: 16.5, delay: 0.3 },
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
      {/* matraz */}
      <path
        d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M8.5 2h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* liquido sube */}
      <motion.path
        d="M6.453 15h11.094"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* burbujas suben */}
      {bubbles.map((b) => (
        <motion.circle
          key={b.cx}
          cx={b.cx}
          cy={b.cy}
          r="1"
          fill="currentColor"
          variants={{
            idle: { y: 0, opacity: 0 },
            hover: {
              y: [0, -7],
              opacity: [0, 1, 0],
              transition: { duration: d * 0.9, delay: b.delay },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
