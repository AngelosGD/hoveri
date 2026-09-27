"use client";

import { motion } from "motion/react";

interface FileIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FileIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: FileIconProps) => {
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
      {/* hoja */}
      <motion.path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -4, 2, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* doblez */}
      <path
        d="M14 2v6h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* lineas de texto */}
      <motion.path
        d="M8 13h8M8 17h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [1, 0, 1],
            transition: { duration: d, delay: d * 0.15, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left center" }}
      />
    </motion.svg>
  );
};
