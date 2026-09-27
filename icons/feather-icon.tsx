"use client";

import { motion } from "motion/react";

interface FeatherIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const FeatherIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: FeatherIconProps) => {
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
      {/* pluma se mece */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -8, 5, 0],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 8 2 22M17.5 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
    </motion.svg>
  );
};
