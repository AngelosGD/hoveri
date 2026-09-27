"use client";

import { motion } from "motion/react";

interface WalletIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const WalletIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: WalletIconProps) => {
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
      {/* cartera */}
      <path
        d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* boton saca dinero */}
      <motion.circle
        cx="16"
        cy="14"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.8, 1],
            transition: { duration: d * 0.7, delay: d * 0.2 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* billete sale */}
      <motion.rect
        x="7"
        y="8"
        width="7"
        height="4"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          idle: { y: 0, opacity: 0 },
          hover: {
            y: [0, -4],
            opacity: [0, 1, 1, 0],
            transition: { duration: d, times: [0, 0.25, 0.7, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
