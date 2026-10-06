"use client";

import { motion } from "motion/react";

interface SignalIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const SignalIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: SignalIconProps) => {
  const d = duration;
  const bars = [
    { d: "M2 20h.01", h: 1, delay: 0.36 },
    { d: "M7 20v-4", h: 4, delay: 0.27 },
    { d: "M12 20v-8", h: 8, delay: 0.18 },
    { d: "M17 20V8", h: 12, delay: 0.09 },
    { d: "M22 4v16", h: 16, delay: 0 },
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
      {/* barras suben en cascada */}
      {bars.map((b) => (
        <motion.path
          key={b.d}
          d={b.d}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={{
            idle: { scaleY: 1, opacity: 1 },
            hover: {
              scaleY: [0.2, 1],
              opacity: [0.3, 1],
              transition: {
                duration: d * 0.6,
                delay: b.delay,
                ease: "easeOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
        />
      ))}
    </motion.svg>
  );
};
