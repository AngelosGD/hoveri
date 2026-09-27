"use client";

import { motion } from "motion/react";

interface MonitorIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MonitorIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: MonitorIconProps) => {
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
      {/* pantalla */}
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 21h8M12 17v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* brillo de encendido */}
      <motion.rect
        x="4.5"
        y="5.5"
        width="15"
        height="9"
        rx="1"
        fill="currentColor"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 0.18, 0],
            transition: { duration: d * 0.8, delay: d * 0.15 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* cursor */}
      <motion.path
        d="m9 8 6 4-2.5.5L14 16l-1.5.7-1.4-3.4L9 15V8z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        variants={{
          idle: { x: 0, y: 0, opacity: 1 },
          hover: {
            x: [0, 3, -2, 0],
            y: [0, 2, -1, 0],
            opacity: [1, 1, 1, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
