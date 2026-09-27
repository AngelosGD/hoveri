"use client";

import { motion } from "motion/react";

interface ApertureIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ApertureIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: ApertureIconProps) => {
  const d = duration;
  const blades = [0, 60, 120, 180, 240, 300];

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
      {/* circulo */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />

      {/* aspas del diafragma */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 60],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        {blades.map((angle) => (
          <path
            key={angle}
            d="M12 4.5 17 11"
            transform={`rotate(${angle} 12 12)`}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </motion.g>

      {/* click del obturador */}
      <motion.circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 0.3, 1],
            transition: {
              duration: d * 0.7,
              times: [0, 0.4, 1],
              delay: d * 0.35,
              ease: "easeOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
