"use client";

import { motion } from "motion/react";

interface GrapeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const GrapeIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: GrapeIconProps) => {
  const d = duration;
  const berries = [
    { cx: 16.6, cy: 15.89 },
    { cx: 8.11, cy: 7.4 },
    { cx: 12.35, cy: 11.65 },
    { cx: 13.91, cy: 5.85 },
    { cx: 18.15, cy: 10.09 },
    { cx: 6.56, cy: 13.2 },
    { cx: 10.8, cy: 17.44 },
    { cx: 5, cy: 19 },
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
      {/* tallo */}
      <path
        d="M22 5V2l-5.89 5.89"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* uvas rebotan una a una */}
      {berries.map((b) => (
        <motion.circle
          key={`${b.cx}-${b.cy}`}
          cx={b.cx}
          cy={b.cy}
          r="3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.2, 1],
              transition: {
                duration: d * 0.6,
                delay: (b.cx + b.cy) * 0.02,
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
