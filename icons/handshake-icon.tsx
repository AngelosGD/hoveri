"use client";

import { motion } from "motion/react";

interface HandshakeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const HandshakeIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: HandshakeIconProps) => {
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
      {/* apretón se ajusta */}
      <motion.path
        d="m11 17 2 2a1 1 0 1 0 3-3M14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4M21 3 1 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { scale: 1, rotate: 0 },
          hover: {
            scale: [1, 1.05, 1],
            rotate: [0, -2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
