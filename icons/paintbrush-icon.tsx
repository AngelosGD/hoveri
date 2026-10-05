"use client";

import { motion } from "motion/react";

interface PaintbrushIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PaintbrushIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: PaintbrushIconProps) => {
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
      {/* pincelle pinta */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -10, 6, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left bottom" }}
      >
        <path
          d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0zM9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* trazo de pintura se dibuja */}
      <motion.path
        d="m14.622 17.897-10.68-2.913"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [0, 1],
            transition: { duration: d, delay: d * 0.35, ease: "easeOut" },
          },
        }}
      />
    </motion.svg>
  );
};
