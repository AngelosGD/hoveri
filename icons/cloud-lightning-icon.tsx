"use client";

import { motion } from "motion/react";

interface CloudLightningIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CloudLightningIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: CloudLightningIconProps) => {
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
      {/* nube quieta */}
      <path
        d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* rayo destella */}
      <motion.path
        d="m13 12-3 5h4l-3 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.1, 1, 0.1, 1],
            transition: {
              duration: d,
              times: [0, 0.15, 0.3, 0.45, 0.7],
              ease: "easeInOut",
            },
          },
        }}
      />
    </motion.svg>
  );
};
