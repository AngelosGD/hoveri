"use client";

import { motion } from "motion/react";

interface EggIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const EggIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: EggIconProps) => {
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
      {/* huevo se tambalea */}
      <motion.path
        d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -10, 10, -6, 0],
            transition: { duration: d * 1.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      />
    </motion.svg>
  );
};
