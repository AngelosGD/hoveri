"use client";

import { motion } from "motion/react";

interface IceCreamIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const IceCreamIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: IceCreamIconProps) => {
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
      {/* cono */}
      <path
        d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* bola de helado se menea */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -8, 8, -4, 0],
            transition: { duration: d * 1.1, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 11px" }}
      >
        <path
          d="M17 7A5 5 0 0 0 7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
