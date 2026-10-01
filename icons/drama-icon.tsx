"use client";

import { motion } from "motion/react";

interface DramaIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const DramaIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: DramaIconProps) => {
  const d = duration;
  const eyes = ["M10 11h.01", "M14 6h.01", "M18 6h.01", "M6.5 13.1h.01"];

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
      {/* mascara se mece */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -5, 5, -2, 0],
            transition: { duration: d * 1.1, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3M17.4 9.9c-.8.8-2 .8-2.8 0M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* ojos parpadean */}
        {eyes.map((path) => (
          <motion.path
            key={path}
            d={path}
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            variants={{
              idle: { opacity: 1 },
              hover: {
                opacity: [1, 0.15, 1, 0.15, 1],
                transition: {
                  duration: d,
                  times: [0, 0.3, 0.42, 0.7, 0.85],
                },
              },
            }}
          />
        ))}
      </motion.g>
    </motion.svg>
  );
};
