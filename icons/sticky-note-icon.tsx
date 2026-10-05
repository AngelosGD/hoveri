"use client";

import { motion } from "motion/react";

interface StickyNoteIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const StickyNoteIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: StickyNoteIconProps) => {
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
      {/* nota se inclina */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -4, 2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* esquina se desdobla */}
      <motion.path
        d="M15 3v4a2 2 0 0 0 2 2h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { scale: 1, opacity: 1 },
          hover: {
            scale: [1, 1.25, 1],
            opacity: [1, 0.5, 1],
            transition: { duration: d, delay: d * 0.25 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "bottom left" }}
      />
    </motion.svg>
  );
};
