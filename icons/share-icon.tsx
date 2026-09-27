"use client";

import { motion } from "motion/react";

interface ShareIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ShareIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: ShareIconProps) => {
  const d = duration;
  const nodes = [
    { x: 18, y: 5, delay: 0.1 },
    { x: 6, y: 12, delay: 0.2 },
    { x: 18, y: 19, delay: 0.3 },
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
      {/* lineas */}
      <motion.path
        d="M8.59 13.51 15.42 17.49M15.41 6.51 8.59 10.49"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { pathLength: 1, opacity: 1 },
          hover: {
            pathLength: [1, 0.3, 1],
            opacity: [1, 0.5, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* nodos pulsan */}
      {nodes.map((n) => (
        <motion.circle
          key={`${n.x}-${n.y}`}
          cx={n.x}
          cy={n.y}
          r="3"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.25, 1],
              transition: { duration: d * 0.6, delay: n.delay },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
