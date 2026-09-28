"use client";

import { motion } from "motion/react";

interface FingerprintIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FingerprintIcon = ({
  size = 32,
  className,
  duration = 0.7,
}: FingerprintIconProps) => {
  const d = duration;
  const ridges = [
    "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",
    "M14 13.12c0 2.38 0 6.38-1 8.88",
    "M17.29 21.02c.12-.6.43-2.3.5-3.02",
    "M2 12a10 10 0 0 1 18-6",
    "M21.8 16c.2-2 .131-5.354 0-6",
    "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",
    "M8.65 22c.21-.66.45-1.32.57-2",
    "M9 6.8a6 6 0 0 1 9 5.2v2",
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
      {/* crestas */}
      {ridges.map((path, i) => (
        <motion.path
          key={i}
          d={path}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.3, 1],
              transition: {
                duration: d * 0.6,
                delay: i * 0.05,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
      <path d="M2 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* linea de escaneo barre */}
      <motion.line
        x1="2"
        y1="3"
        x2="22"
        y2="3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={{
          idle: { y: 0, opacity: 0 },
          hover: {
            y: [0, 18],
            opacity: [0, 0.9, 0],
            transition: { duration: d * 0.9, delay: d * 0.1, ease: "easeInOut" },
          },
        }}
      />
    </motion.svg>
  );
};
