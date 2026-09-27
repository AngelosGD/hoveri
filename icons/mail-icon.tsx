"use client";

import { motion } from "motion/react";

interface MailIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const MailIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: MailIconProps) => {
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
      {/* sobre quieto */}
      <rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* carta que sale */}
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -7, -7, 0],
            transition: {
              duration: d,
              times: [0, 0.3, 0.7, 1],
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <rect
          x="6"
          y="6.5"
          width="12"
          height="8"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 9.5h5M8 12h7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.g>
      {/* brillo al salir */}
      <motion.circle
        cx="19"
        cy="5"
        r="1.4"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: { duration: d * 0.6, delay: d * 0.25 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
