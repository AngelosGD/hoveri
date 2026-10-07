"use client";

import { motion } from "motion/react";

interface LampIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const LampIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: LampIconProps) => {
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
      {/* lampara se tambalea */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -5, 5, -3, 0],
            transition: {
              duration: d * 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "12px 22px" }}
      >
        {/* pantalla se enciende */}
        <motion.path
          d="M12 12v6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <motion.path
          d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="currentColor"
          variants={{
            idle: { fillOpacity: 0 },
            hover: {
              fillOpacity: [0, 0, 0.25, 0],
              transition: {
                duration: d * 1.6,
                times: [0, 0.3, 0.45, 1],
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
        />
        {/* base */}
        <path
          d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
};
