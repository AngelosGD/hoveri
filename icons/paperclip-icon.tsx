"use client";

import { motion } from "motion/react";

interface PaperclipIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PaperclipIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: PaperclipIconProps) => {
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
      {/* clip se engancha y suelta */}
      <motion.path
        d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0, rotate: 0 },
          hover: {
            y: [0, -3, 0],
            rotate: [0, -8, 0],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* brillo enganche */}
      <motion.circle
        cx="19"
        cy="5"
        r="1.2"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: { duration: d * 0.5, delay: d * 0.3 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
