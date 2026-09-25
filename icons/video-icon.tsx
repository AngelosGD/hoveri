"use client";

import { motion } from "motion/react";

interface VideoIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const VideoIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: VideoIconProps) => {
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
      {/* cuerpo de la camara */}
      <motion.rect
        x="2"
        y="6"
        width="14"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.05, 1],
            transition: { duration: d * 0.6, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* lente / play */}
      <motion.path
        d="m10 10 4 2-4 2v-4z"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.3, 1],
            transition: { duration: d * 0.7, delay: d * 0.1 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* lens */}
      <motion.path
        d="M22 8l-6 4 6 4V8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, 2, 0],
            transition: { duration: d * 0.6, delay: d * 0.15 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* rec pulse */}
      <motion.circle
        cx="5"
        cy="9"
        r="1.2"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 1, 0],
            scale: [0, 1.4, 1, 0.6],
            transition: { duration: d, delay: d * 0.2 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
