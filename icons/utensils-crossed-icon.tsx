"use client";

import { motion } from "motion/react";

interface UtensilsCrossedIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const UtensilsCrossedIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: UtensilsCrossedIconProps) => {
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
      {/* choque: los cubiertos se sacuden como a saludarse */}
      <motion.g
        variants={{
          idle: { rotate: 0, scale: 1 },
          hover: {
            rotate: [0, -8, 6, -5, 3, 0],
            scale: [1, 1.07, 1.03, 1],
            transition: { duration: d * 1.3, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7M2.1 21.8l6.4-6.3M19 5l-7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* chispa donde se cruzan */}
      <motion.g variants={{
        idle: { opacity: 0, scale: 0.4 },
        hover: {
          opacity: [0, 1, 0],
          scale: [0.4, 1.5, 0.6],
          transition: { duration: d * 0.7, delay: d * 0.35 },
        },
      }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M12 10.4v-1.6M12 15.2v-1.6M10.4 12H8.8M15.2 12h-1.6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </motion.g>
    </motion.svg>
  );
};
