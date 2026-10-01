"use client";

import { motion } from "motion/react";

interface PartyPopperIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PartyPopperIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: PartyPopperIconProps) => {
  const d = duration;
  const dots = [
    { path: "M4 3h.01", delay: 0 },
    { path: "M22 8h.01", delay: 0.1 },
    { path: "M15 2h.01", delay: 0.2 },
    { path: "M22 20h.01", delay: 0.3 },
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
      {/* confeti destella */}
      {dots.map((dot) => (
        <motion.path
          key={dot.path}
          d={dot.path}
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.7, 1],
              transition: { duration: d * 0.7, delay: dot.delay, ease: "easeOut" },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}

      {/* estrella central */}
      <motion.path
        d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { scale: 1, rotate: 0 },
          hover: {
            scale: [1, 1.2, 1],
            rotate: [0, 25],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />

      {/* estallidos */}
      <path
        d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11-.11.7-.72 1.22-1.43 1.22H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* cono se sacude */}
      <motion.path
        d="M5.8 11.3 2 22l10.7-3.79"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -8, 4, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformOrigin: "2.5px 21.5px" }}
      />
    </motion.svg>
  );
};
