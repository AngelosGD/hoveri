"use client";

import { motion } from "motion/react";

interface OrbitIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const OrbitIcon = ({
  size = 32,
  className,
  duration = 1.2,
}: OrbitIconProps) => {
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
      {/* orbitas */}
      <path
        d="M20.341 6.484A10 10 0 0 1 10.266 21.85M3.659 17.516A10 10 0 0 1 13.74 2.152"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* nucleo */}
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* planetas giran alrededor */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: 360,
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 12px" }}
      >
        <circle
          cx="19"
          cy="5"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="5"
          cy="19"
          r="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </motion.g>
    </motion.svg>
  );
};
