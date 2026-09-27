"use client";

import { motion } from "motion/react";

interface AwardIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const AwardIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: AwardIconProps) => {
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
      {/* cintas quietas */}
      <path
        d="M12 15 7 22h10l-5-7z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* medalla gira */}
      <motion.circle
        cx="12"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { rotateY: 0 },
          hover: {
            rotateY: [0, 180, 180, 360],
            transition: {
              duration: d,
              times: [0, 0.4, 0.7, 1],
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* estrella dentro */}
      <motion.path
        d="m12 6 1 2 2.2.3-1.6 1.5.4 2.2L12 11l-2 1 .4-2.2L8.8 8.3 11 8l1-2z"
        fill="currentColor"
        variants={{
          idle: { scale: 1, opacity: 1 },
          hover: {
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
            transition: { duration: d * 0.7, delay: d * 0.3 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
