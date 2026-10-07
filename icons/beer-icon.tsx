"use client";

import { motion } from "motion/react";

interface BeerIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BeerIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BeerIconProps) => {
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
      {/* brindis: la copa se inclina */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -9, 0],
            transition: { duration: d * 1.1, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 22px" }}
      >
        {/* espuma burbujea */}
        <motion.path
          d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.1, 1],
              transition: {
                duration: d * 0.8,
                delay: d * 0.35,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        />
        {/* lineas del vaso */}
        <path
          d="M9 12v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13 12v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* vaso */}
        <path
          d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* asa */}
        <path
          d="M17 11h1a3 3 0 0 1 0 6h-1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
