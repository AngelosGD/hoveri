"use client";

import { motion } from "motion/react";

interface LayoutDashboardIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const LayoutDashboardIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: LayoutDashboardIconProps) => {
  const d = duration;
  const cards = [
    { x: 3, y: 3, w: 7, h: 9 },
    { x: 14, y: 3, w: 7, h: 5 },
    { x: 14, y: 12, w: 7, h: 9 },
    { x: 3, y: 16, w: 7, h: 5 },
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
      {/* tarjetas se reordenan en cascada */}
      {cards.map((c, i) => (
        <motion.rect
          key={i}
          x={c.x}
          y={c.y}
          width={c.w}
          height={c.h}
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.1, 1],
              transition: {
                duration: d * 0.6,
                delay: i * 0.09,
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
