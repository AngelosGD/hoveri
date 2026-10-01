"use client";

import { motion } from "motion/react";

interface WaypointsIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const WaypointsIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: WaypointsIconProps) => {
  const d = duration;
  const nodes = [
    { cx: 12, cy: 4.5, delay: 0 },
    { cx: 4.5, cy: 12, delay: 0.12 },
    { cx: 19.5, cy: 12, delay: 0.24 },
    { cx: 12, cy: 19.5, delay: 0.36 },
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
      {/* rutas se dibujan */}
      <motion.path
        d="m10.2 6.3-3.9 3.9M7 12h10m-3.2 5.7 3.9-3.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [0, 1],
            transition: { duration: d * 0.7, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* nodos laten en cascada */}
      {nodes.map((n) => (
        <motion.circle
          key={`${n.cx}-${n.cy}`}
          cx={n.cx}
          cy={n.cy}
          r="2.5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.35, 1],
              transition: {
                duration: d * 0.7,
                delay: n.delay,
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
