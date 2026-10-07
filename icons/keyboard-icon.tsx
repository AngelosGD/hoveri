"use client";

import { motion } from "motion/react";

interface KeyboardIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

const KEYS = [
  { x: "6px", y: "8px", delay: 0 },
  { x: "8px", y: "12px", delay: 0.06 },
  { x: "10px", y: "8px", delay: 0.12 },
  { x: "12px", y: "12px", delay: 0.18 },
  { x: "14px", y: "8px", delay: 0.24 },
  { x: "16px", y: "12px", delay: 0.3 },
  { x: "18px", y: "8px", delay: 0.36 },
];

export const KeyboardIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: KeyboardIconProps) => {
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
      {/* teclas se teclean en cascada */}
      {KEYS.map((k) => (
        <motion.path
          key={`${k.x}-${k.y}`}
          d={`M${k.x.replace("px", "")} ${k.y.replace("px", "")}h.01`}
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 0.35, 1],
              transition: {
                duration: d * 0.5,
                delay: k.delay,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "view-box", transformOrigin: `${k.x} ${k.y}` }}
        />
      ))}
      {/* barra espaciadora */}
      <motion.path
        d="M7 16h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 1.4, 0],
            transition: { duration: d * 0.5, delay: d * 0.5, ease: "easeInOut" },
          },
        }}
      />
      {/* cuerpo */}
      <rect
        width="20"
        height="16"
        x="2"
        y="4"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </motion.svg>
  );
};
