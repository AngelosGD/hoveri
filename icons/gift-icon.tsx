"use client";

import { motion } from "motion/react";

interface GiftIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const GiftIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: GiftIconProps) => {
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
      {/* caja */}
      <rect
        x="3"
        y="8"
        width="18"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="5"
        y="12"
        width="14"
        height="9"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 8v13"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* moño tiembla */}
      <motion.path
        d="M12 8c-1.5-3-3-4-4.5-4a2.5 2.5 0 0 0 0 5H12zM12 8c1.5-3 3-4 4.5-4a2.5 2.5 0 0 1 0 5H12z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.15, 1.05, 1],
            rotate: [0, -5, 4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      />
      {/* confeti */}
      <motion.circle
        cx="4"
        cy="5"
        r="1"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: { duration: d * 0.6, delay: d * 0.25 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <motion.circle
        cx="20"
        cy="4"
        r="1"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: { duration: d * 0.6, delay: d * 0.4 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
