"use client";

import { motion } from "motion/react";

interface ThermometerIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ThermometerIcon = ({
  size = 32,
  className,
  duration = 0.7,
}: ThermometerIconProps) => {
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
      {/* termometro */}
      <path
        d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* sube el mercurio */}
      <motion.path
        d="M12 14V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { pathLength: 0, opacity: 0 },
          hover: {
            pathLength: [0, 1],
            opacity: 1,
            transition: { duration: d * 0.7, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 14px" }}
      />
      {/* bulbo brilla */}
      <motion.circle
        cx="12"
        cy="17.5"
        r="2"
        fill="currentColor"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1],
            transition: { duration: d * 0.4, delay: d * 0.6 },
          },
        }}
      />
    </motion.svg>
  );
};
