"use client";

import { motion } from "motion/react";

interface QrCodeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const QrCodeIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: QrCodeIconProps) => {
  const d = duration;
  const finders = [
    { x: 2.5, y: 2.5, delay: 0 },
    { x: 15.5, y: 2.5, delay: 0.1 },
    { x: 2.5, y: 15.5, delay: 0.2 },
  ];
  const dots = [
    { x: 15.5, y: 15.5, delay: 0.05 },
    { x: 19.5, y: 15.5, delay: 0.15 },
    { x: 15.5, y: 19.5, delay: 0.25 },
    { x: 19.5, y: 19.5, delay: 0.35 },
    { x: 10, y: 10, delay: 0.1 },
    { x: 10, y: 3.5, delay: 0.2 },
    { x: 3.5, y: 10, delay: 0.3 },
    { x: 19.5, y: 10, delay: 0.4 },
    { x: 10, y: 15.5, delay: 0.45 },
    { x: 10, y: 19.5, delay: 0.5 },
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
      {/* ojos de finder */}
      {finders.map((f) => (
        <motion.g
          key={`${f.x}-${f.y}`}
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 0.75, 1],
              transition: {
                duration: d,
                delay: f.delay,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        >
          <rect
            x={f.x}
            y={f.y}
            width="6"
            height="6"
            rx="1"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x={f.x + 2}
            y={f.y + 2}
            width="2"
            height="2"
            fill="currentColor"
          />
        </motion.g>
      ))}
      {/* datos parpadean */}
      {dots.map((dot) => (
        <motion.rect
          key={`${dot.x}-${dot.y}`}
          x={dot.x}
          y={dot.y}
          width="2"
          height="2"
          rx="0.5"
          fill="currentColor"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.15, 1],
              transition: {
                duration: d * 0.7,
                delay: dot.delay,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
