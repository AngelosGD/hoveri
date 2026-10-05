"use client";

import { motion } from "motion/react";

interface EraserIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const EraserIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: EraserIconProps) => {
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
      {/* goma limpia (va y viene) */}
      <motion.g
        variants={{
          idle: { rotate: 0, x: 0 },
          hover: {
            rotate: [0, -8, 4, -8, 0],
            x: [0, -2, 1, -2, 0],
            transition: { duration: d * 1.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left bottom" }}
      >
        <path
          d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m5.082 11.09 8.828 8.828"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* virutillas */}
      <motion.path
        d="M4 19h4M6 22h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d * 0.7, delay: d * 0.5 },
          },
        }}
      />
    </motion.svg>
  );
};
