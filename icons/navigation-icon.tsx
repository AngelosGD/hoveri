"use client";

import { motion } from "motion/react";

interface NavigationIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const NavigationIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: NavigationIconProps) => {
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
      {/* brujula que busca */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 25, -25, 10, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <polygon
          points="3 11 22 2 13 21 11 13 3 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
