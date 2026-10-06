"use client";

import { motion } from "motion/react";

interface ScaleIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ScaleIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: ScaleIconProps) => {
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
      {/* basculula se inclina */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -5, 5, -3, 0],
            transition: { duration: d * 1.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 6px" }}
      >
        <path
          d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1ZM2 16l3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* eje y base fijos */}
      <path
        d="M12 3v18M7 21h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};
