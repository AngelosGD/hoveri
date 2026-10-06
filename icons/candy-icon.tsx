"use client";

import { motion } from "motion/react";

interface CandyIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CandyIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CandyIconProps) => {
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
      {/* bombone gira y vuelve */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 12, -8, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M10 7v10.9M14 6.1V17M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* centro destella */}
      <motion.circle
        cx="12.77"
        cy="11"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d * 0.6, delay: d * 0.5 },
          },
        }}
      />
    </motion.svg>
  );
};
