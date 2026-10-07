"use client";

import { motion } from "motion/react";

interface JoystickIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const JoystickIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: JoystickIconProps) => {
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
      {/* base */}
      <path
        d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* palanca se tambalea a los lados */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 18, -18, 10, 0],
            transition: { duration: d * 1.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 15px" }}
      >
        <path
          d="M12 15V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="12" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
      </motion.g>
    </motion.svg>
  );
};
