"use client";

import { motion } from "motion/react";

interface MilkIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MilkIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: MilkIconProps) => {
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
      {/* carton respira */}
      <motion.g
        variants={{
          idle: { scaleY: 1 },
          hover: {
            scaleY: [1, 0.96, 1.02, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M8 2h8M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* nivel de leche marea */}
      <motion.path
        d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -1.5, 0],
            transition: { duration: d * 0.8, delay: d * 0.25 },
          },
        }}
      />
    </motion.svg>
  );
};
