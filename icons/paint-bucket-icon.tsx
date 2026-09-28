"use client";

import { motion } from "motion/react";

interface PaintBucketIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PaintBucketIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: PaintBucketIconProps) => {
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
      {/* balde se inclina */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -18, 0],
            transition: {
              duration: d,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center center" }}
      >
        <path
          d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="m5 2 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M2 13h15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
      {/* gota cae */}
      <motion.path
        d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { y: 0, opacity: 0 },
          hover: {
            y: [0, 3],
            opacity: [0, 1, 1, 0],
            transition: { duration: d, delay: d * 0.35, times: [0, 0.2, 0.7, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
