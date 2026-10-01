"use client";

import { motion } from "motion/react";

interface BracesIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BracesIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BracesIconProps) => {
  const d = duration;
  const left =
    "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1";
  const right =
    "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1";

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
      {/* llave izquierda se cierra */}
      <motion.path
        d={left}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, 3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* llave derecha se cierra */}
      <motion.path
        d={right}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, -3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* contenido destella */}
      <motion.path
        d="M10 8.5 12 12l-2 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d * 0.8, delay: d * 0.35 },
          },
        }}
      />
    </motion.svg>
  );
};
