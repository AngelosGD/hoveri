"use client";

import { motion } from "motion/react";

interface ServerIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ServerIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: ServerIconProps) => {
  const d = duration;
  const led = (delay: number) => ({
    idle: { opacity: 1 },
    hover: {
      opacity: [1, 0.2, 1],
      transition: {
        duration: d * 0.7,
        delay,
        ease: "easeInOut" as const,
      },
    },
  });

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
      {/* rack */}
      <rect
        x="2"
        y="2"
        width="20"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="2"
        y="14"
        width="20"
        height="8"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M6 6h.01M6 18h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* leds parpadean en cascada */}
      <motion.circle cx="10" cy="6" r="1.2" fill="currentColor" variants={led(0)}
        style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <motion.circle cx="10" cy="18" r="1.2" fill="currentColor" variants={led(0.12)}
        style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <motion.circle cx="14" cy="6" r="1.2" fill="currentColor" variants={led(0.24)}
        style={{ transformBox: "fill-box", transformOrigin: "center" }} />
      <motion.circle cx="14" cy="18" r="1.2" fill="currentColor" variants={led(0.36)}
        style={{ transformBox: "fill-box", transformOrigin: "center" }} />
    </motion.svg>
  );
};
