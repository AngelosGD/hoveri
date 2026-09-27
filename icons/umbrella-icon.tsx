"use client";

import { motion } from "motion/react";

interface UmbrellaIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const UmbrellaIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: UmbrellaIconProps) => {
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
      {/* sombrilla se mece */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -6, 4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* gotas rebotan */}
      <motion.circle
        cx="5"
        cy="19"
        r="1.2"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, y: -4 },
          hover: {
            opacity: [0, 1, 0],
            y: [-4, 3],
            transition: { duration: d * 0.7, delay: d * 0.25 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <motion.circle
        cx="19"
        cy="19"
        r="1.2"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, y: -4 },
          hover: {
            opacity: [0, 1, 0],
            y: [-4, 3],
            transition: { duration: d * 0.7, delay: d * 0.4 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
