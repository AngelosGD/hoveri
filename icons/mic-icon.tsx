"use client";

import { motion } from "motion/react";

interface MicIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MicIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: MicIconProps) => {
  const d = duration;
  const waves = [
    { dir: -1, delay: 0 },
    { dir: 1, delay: 0.1 },
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
      {/* microfono */}
      <motion.rect
        x="9"
        y="2"
        width="6"
        height="11"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.06, 1],
            transition: { duration: d * 0.6, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <path
        d="M5 10a7 7 0 0 0 14 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 17v4M8 21h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* ondas de voz */}
      {waves.map((w) => (
        <motion.path
          key={w.dir}
          d={
            w.dir < 0
              ? "M4 9 Q2 12 4 15"
              : "M20 9 Q22 12 20 15"
          }
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          variants={{
            idle: { opacity: 0, x: 0 },
            hover: {
              opacity: [0, 0.9, 0],
              x: [0, w.dir * 2],
              transition: { duration: d * 0.75, delay: w.delay, ease: "easeOut" },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
