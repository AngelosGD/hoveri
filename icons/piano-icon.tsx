"use client";

import { motion } from "motion/react";

interface PianoIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PianoIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: PianoIconProps) => {
  const d = duration;
  const keys = [
    { x: 6, delay: 0 },
    { x: 10, delay: 0.1 },
    { x: 14, delay: 0.2 },
    { x: 18, delay: 0.3 },
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
      {/* piano */}
      <path
        d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8M2 14h20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* teclas se pulsan */}
      {keys.map((key) => (
        <motion.path
          key={key.x}
          d={`M${key.x} 14v4`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { scaleY: 1, y: 0 },
            hover: {
              scaleY: [1, 0.5, 1],
              y: [0, 1, 0],
              transition: {
                duration: d,
                delay: key.delay,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "top" }}
        />
      ))}
    </motion.svg>
  );
};
