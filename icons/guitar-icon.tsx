"use client";

import { motion } from "motion/react";

interface GuitarIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const GuitarIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: GuitarIconProps) => {
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
      {/* guitarra se mece */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -7, 5, -2, 0],
            transition: { duration: d * 1.1, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="m11.9 12.1 4.514-4.514M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4zM8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* cuerdas vibran */}
      <motion.path
        d="m6 16 2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 1, x: 0 },
          hover: {
            opacity: [1, 0.3, 1, 0.3, 1],
            x: [0, 0.8, -0.8, 0],
            transition: { duration: d * 0.8, delay: d * 0.25 },
          },
        }}
      />
    </motion.svg>
  );
};
