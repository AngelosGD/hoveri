"use client";

import { motion } from "motion/react";

interface HammerIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const HammerIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: HammerIconProps) => {
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
      {/* martillo golpea */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -30, 0],
            transition: {
              duration: d,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9M18 15l4-4M14.5 5.5 18 2l4 4-3.5 3.5M12 18l4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* chispa del golpe */}
      <motion.path
        d="M4 4 3 3m18 18 1 1M3 8V6m18 16v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 0, scale: 0.5 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
            transition: { duration: d * 0.6, delay: d * 0.35 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
