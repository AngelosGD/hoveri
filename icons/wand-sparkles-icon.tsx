"use client";

import { motion } from "motion/react";

interface WandSparklesIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const WandSparklesIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: WandSparklesIconProps) => {
  const d = duration;
  const sparkles = [
    { x: "5px", y: "8px", delay: 0 },
    { x: "19px", y: "16px", delay: 0.2 },
    { x: "10px", y: "3px", delay: 0.4 },
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
      {/* varita */}
      <motion.path
        d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -5, 5, 0],
            transition: {
              duration: d * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <path
        d="m14 7 3 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* destellos titilan */}
      {sparkles.map((s) => (
        <motion.g
          key={`${s.x}-${s.y}`}
          variants={{
            idle: { scale: 1, opacity: 1, rotate: 0 },
            hover: {
              scale: [0.5, 1.25, 0.5],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 45, 90],
              transition: {
                duration: d * 1.4,
                delay: s.delay,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "view-box", transformOrigin: `${s.x} ${s.y}` }}
        >
          <path
            d={
              s.x === "5px"
                ? "M5 6v4"
                : s.x === "19px"
                  ? "M19 14v4"
                  : "M10 2v2"
            }
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d={
              s.x === "5px"
                ? "M7 8H3"
                : s.x === "19px"
                  ? "M21 16h-4"
                  : "M11 3H9"
            }
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </motion.g>
      ))}
    </motion.svg>
  );
};
