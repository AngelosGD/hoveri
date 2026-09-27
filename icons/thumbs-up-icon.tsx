"use client";

import { motion } from "motion/react";

interface ThumbsUpIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ThumbsUpIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: ThumbsUpIconProps) => {
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
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -4, 0, -1.5, 0],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 10l4.2-7.2a2 2 0 0 1 3.6 1.4L14 10h4.8a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.6 21H7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* chispa like */}
      <motion.circle
        cx="20"
        cy="5"
        r="1.3"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            transition: { duration: d * 0.6, delay: d * 0.3 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
