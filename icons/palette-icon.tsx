"use client";

import { motion } from "motion/react";

interface PaletteIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PaletteIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: PaletteIconProps) => {
  const d = duration;
  const paints = [
    { cx: 7.5, cy: 7.5, delay: 0 },
    { cx: 12, cy: 5.5, delay: 0.08 },
    { cx: 16.5, cy: 7.5, delay: 0.16 },
    { cx: 17.5, cy: 12, delay: 0.24 },
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
      {/* paleta */}
      <path
        d="M12 2a10 10 0 0 0 0 20 2 2 0 0 0 2-2 2 2 0 0 1 2-2h2a4 4 0 0 0 4-4 10 10 0 0 0-10-10z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* puntos de pintura pulsan en cascada */}
      {paints.map((p) => (
        <motion.circle
          key={`${p.cx}-${p.cy}`}
          cx={p.cx}
          cy={p.cy}
          r="1.3"
          fill="currentColor"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.6, 1],
              transition: { duration: d * 0.55, delay: p.delay },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
