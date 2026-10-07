"use client";

import { motion } from "motion/react";

interface CrownIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CrownIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CrownIconProps) => {
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
      {/* base */}
      <path
        d="M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* corona se eleva y hace una reverencia */}
      <motion.path
        d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0, rotate: 0 },
          hover: {
            y: [0, -3, 0],
            rotate: [0, -5, 5, 0],
            transition: { duration: d * 1.3, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      />
    </motion.svg>
  );
};
