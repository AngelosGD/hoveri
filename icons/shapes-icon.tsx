"use client";

import { motion } from "motion/react";

interface ShapesIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ShapesIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: ShapesIconProps) => {
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
      {/* triangulo */}
      <motion.path
        d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { scale: 1, rotate: 0 },
          hover: {
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* cuadrado gira */}
      <motion.rect
        x="3"
        y="14"
        width="7"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 45, 0],
            transition: { duration: d, delay: d * 0.12, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* circulo late */}
      <motion.circle
        cx="17.5"
        cy="17.5"
        r="3.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.25, 1],
            transition: { duration: d, delay: d * 0.24, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
