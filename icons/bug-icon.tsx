"use client";

import { motion } from "motion/react";

interface BugIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BugIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: BugIconProps) => {
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
      {/* cuerpo quieto */}
      <rect
        x="8"
        y="7"
        width="8"
        height="12"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 7V3M8 7l-2-3M16 7l2-3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 13h4M16 13h4M4 17h4M16 17h4M9 13h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* patas tiemblan */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, 3, -3, 2, 0],
            transition: { duration: d * 0.8, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M8 11 4.5 9M8 17l-3.5 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* antenas */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -6, 6, 0],
            transition: { duration: d * 0.6, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "bottom center" }}
      >
        <path
          d="M16 11l3.5-2M16 17l3.5 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
    </motion.svg>
  );
};
