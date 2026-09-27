"use client";

import { motion } from "motion/react";

interface WrenchIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const WrenchIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: WrenchIconProps) => {
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
      {/* llave inglesa aprieta */}
      <motion.path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -20, 10, 0],
            transition: { duration: d, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "80% 20%" }}
      />
      {/* chispa al apretar */}
      <motion.circle
        cx="5"
        cy="19"
        r="1.3"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            transition: { duration: d * 0.5, delay: d * 0.4 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
