"use client";

import { motion } from "motion/react";

interface BriefcaseIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BriefcaseIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: BriefcaseIconProps) => {
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
      {/* maletin salta y aterriza con rebote */}
      <motion.g
        variants={{
          idle: { y: 0, scaleY: 1 },
          hover: {
            y: [0, -2.5, 0],
            scaleY: [1, 1, 1.06, 1],
            transition: {
              duration: d * 1.2,
              times: [0, 0.4, 0.7, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          width="20"
          height="14"
          x="2"
          y="6"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </motion.g>
    </motion.svg>
  );
};
