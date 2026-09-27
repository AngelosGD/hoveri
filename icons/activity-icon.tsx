"use client";

import { motion } from "motion/react";

interface ActivityIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ActivityIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: ActivityIconProps) => {
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
      {/* pulso se redibuja */}
      <motion.path
        d="M22 12h-4l-3 9L9 3l-3 9H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [0, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* punto del latido */}
      <motion.circle
        cx="22"
        cy="12"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { scale: 0 },
          hover: {
            scale: [0, 1.6, 1],
            transition: { duration: d * 0.5, delay: d * 0.85 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
