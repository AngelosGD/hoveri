"use client";

import { motion } from "motion/react";

interface ClapperboardIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ClapperboardIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: ClapperboardIconProps) => {
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
      {/* base quieta */}
      <path
        d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* tapa clap */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -25, 0],
            transition: {
              duration: d,
              times: [0, 0.35, 1],
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{ transformOrigin: "3px 11px" }}
      >
        <path
          d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m6.2 5.3 3.1 3.9M12.4 3.4l3.1 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* destello del clap */}
      <motion.path
        d="M12 2.5v1.5M10.8 3.3h2.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 0, scale: 0.5 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
            transition: { duration: d * 0.6, delay: d * 0.45 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
