"use client";

import { motion } from "motion/react";

interface MegaphoneIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MegaphoneIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: MegaphoneIconProps) => {
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
      {/* megafono grita */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -6, 4, -6, 0],
            transition: { duration: d * 1.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left bottom" }}
      >
        <path
          d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zM6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* linea interior vibra */}
        <motion.path
          d="M8 6v8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.25, 1],
              transition: {
                duration: d * 0.3,
                repeat: 3,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};
