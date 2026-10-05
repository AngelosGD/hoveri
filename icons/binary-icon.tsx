"use client";

import { motion } from "motion/react";

interface BinaryIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BinaryIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: BinaryIconProps) => {
  const d = duration;
  const els = [
    { key: "r1", delay: 0 },
    { key: "r2", delay: 0.1 },
    { key: "l1", delay: 0.2 },
    { key: "l2", delay: 0.3 },
  ];

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
      {/* 0 */}
      <motion.rect
        x="6"
        y="4"
        width="4"
        height="6"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.2, 1],
            transition: { duration: d * 0.7, delay: els[0].delay },
          },
        }}
      />
      <motion.path
        d="M6 20h4M6 14h2v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.2, 1],
            transition: { duration: d * 0.7, delay: els[1].delay },
          },
        }}
      />
      {/* 1 */}
      <motion.rect
        x="14"
        y="14"
        width="4"
        height="6"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.2, 1],
            transition: { duration: d * 0.7, delay: els[2].delay },
          },
        }}
      />
      <motion.path
        d="M14 10h4M14 4h2v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 1 },
          hover: {
            opacity: [1, 0.2, 1],
            transition: { duration: d * 0.7, delay: els[3].delay },
          },
        }}
      />
    </motion.svg>
  );
};
