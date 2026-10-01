"use client";

import { motion } from "motion/react";

interface SwordsIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SwordsIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: SwordsIconProps) => {
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
      {/* espada 1 */}
      <motion.g
        variants={{
          idle: { x: 0, y: 0 },
          hover: {
            x: [0, 3, 0],
            y: [0, 3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <polyline
          points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="13"
          x2="19"
          y1="19"
          y2="13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          x2="20"
          y1="16"
          y2="20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="19"
          x2="21"
          y1="21"
          y2="19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* espada 2 */}
      <motion.g
        variants={{
          idle: { x: 0, y: 0 },
          hover: {
            x: [0, -3, 0],
            y: [0, -3, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <polyline
          points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="5"
          x2="9"
          y1="14"
          y2="18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="7"
          x2="4"
          y1="17"
          y2="20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="3"
          x2="5"
          y1="19"
          y2="21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* chispa del choque */}
      <motion.path
        d="M12 10.5v3M10.5 12h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 0, scale: 0.5 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0.5, 1.4, 0.5],
            transition: { duration: d * 0.6, delay: d * 0.45 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
