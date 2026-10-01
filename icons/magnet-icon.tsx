"use client";

import { motion } from "motion/react";

interface MagnetIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MagnetIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: MagnetIconProps) => {
  const d = duration;
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
      {/* cuerpo del iman */}
      <motion.g
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, -3, 1, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* polos */}
        <path
          d="m12 15 4 4M5 8l4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* chispas de atraccion */}
      <motion.path
        d="M3 4l1.5 1.5M2.5 9h-1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d * 0.7, delay: d * 0.55 },
          },
        }}
      />
    </motion.svg>
  );
};
