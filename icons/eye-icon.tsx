"use client";

import { motion } from "motion/react";

interface EyeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const EyeIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: EyeIconProps) => {
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
      {/* contorno del ojo */}
      <motion.path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        variants={{
          idle: { scaleY: 1 },
          hover: {
            scaleY: [1, 0.15, 1, 1],
            transition: {
              duration: d,
              times: [0, 0.28, 0.5, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* pupila */}
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 0.4, 1],
            transition: {
              duration: d,
              times: [0, 0.28, 0.5],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* parpadeo doble al final */}
      <motion.path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 0, 1, 0, 1, 0],
            transition: {
              duration: d,
              times: [0, 0.55, 0.65, 0.75, 0.85, 1],
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
