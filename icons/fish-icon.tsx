"use client";

import { motion } from "motion/react";

interface FishIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FishIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: FishIconProps) => {
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
      {/* pez entero nada */}
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -3, 0, -1.5, 0],
            transition: {
              duration: d * 1.2,
              times: [0, 0.25, 0.5, 0.75, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 12v.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 17.93a9.77 9.77 0 0 1 0-11.86"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4M16.01 17.93l-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* cola menea pegada al cuerpo */}
        <motion.path
          d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            idle: { rotate: 0 },
            hover: {
              rotate: [0, 12, -12, 0],
              transition: { duration: d * 0.9, ease: "easeInOut" },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "right center" }}
        />
      </motion.g>
    </motion.svg>
  );
};
