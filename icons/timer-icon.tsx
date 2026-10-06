"use client";

import { motion } from "motion/react";

interface TimerIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const TimerIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: TimerIconProps) => {
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
      {/* boton se hunde */}
      <motion.line
        x1="10"
        y1="2"
        x2="14"
        y2="2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 1.5, 0],
            transition: {
              duration: d * 0.5,
              times: [0, 0.35, 1],
              ease: "easeInOut",
            },
          },
        }}
      />
      {/* esfera pulsa */}
      <motion.circle
        cx="12"
        cy="14"
        r="8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.04, 1],
            transition: { duration: d * 0.5, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* anillo de cuenta atras se vacia */}
      <motion.circle
        cx="12"
        cy="14"
        r="5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          idle: { pathLength: 1, opacity: 0 },
          hover: {
            pathLength: [1, 0.08],
            opacity: [0.9, 0.9],
            transition: { duration: d * 2.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 14px" }}
      />
      {/* manecilla da una vuelta completa */}
      <motion.line
        x1="12"
        y1="14"
        x2="15"
        y2="11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 360],
            transition: { duration: d * 2.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 14px" }}
      />
      {/* tic central */}
      <motion.circle
        cx="12"
        cy="14"
        r="1"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.8, 1],
            transition: { duration: d * 0.5, delay: d * 0.6 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
