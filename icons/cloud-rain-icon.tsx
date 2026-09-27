"use client";

import { motion } from "motion/react";

interface CloudRainIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CloudRainIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CloudRainIconProps) => {
  const d = duration;
  const drops = [
    { x: 8, delay: 0 },
    { x: 12.5, delay: 0.12 },
    { x: 17, delay: 0.24 },
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
      {/* nube quieta */}
      <path
        d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* gotas caen en cascada */}
      {drops.map((drop) => (
        <motion.line
          key={drop.x}
          x1={drop.x}
          y1="17"
          x2={drop.x}
          y2="20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { y: 0, opacity: 1 },
            hover: {
              y: [0, 3],
              opacity: [1, 0],
              transition: {
                duration: d * 0.7,
                delay: drop.delay,
                ease: "easeIn",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
