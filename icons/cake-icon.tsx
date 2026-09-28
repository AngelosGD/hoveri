"use client";

import { motion } from "motion/react";

interface CakeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CakeIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: CakeIconProps) => {
  const d = duration;
  const flames = [
    { x: 7, delay: 0 },
    { x: 12, delay: 0.1 },
    { x: 17, delay: 0.2 },
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
      {/* pastel */}
      <path
        d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1M2 21h20M7 8v3M12 8v3M17 8v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* llamas titilan */}
      {flames.map((f) => (
        <motion.path
          key={f.x}
          d={`M${f.x} 5.5a1.2 1.2 0 0 1 2.4 0c0 .7-1.2 1.5-1.2 1.5s-1.2-.8-1.2-1.5z`}
          fill="currentColor"
          variants={{
            idle: { scaleY: 1, opacity: 1 },
            hover: {
              scaleY: [1, 1.4, 0.8, 1.2, 1],
              opacity: [1, 1, 0.7, 1, 1],
              transition: { duration: d, delay: f.delay, ease: "easeInOut" },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
        />
      ))}
      {/* chispas */}
      <path
        d="M7 4h.01M12 4h.01M17 4h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};
