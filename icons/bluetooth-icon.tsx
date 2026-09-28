"use client";

import { motion } from "motion/react";

interface BluetoothIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BluetoothIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: BluetoothIconProps) => {
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
      {/* simbolo se dibuja */}
      <motion.path
        d="m7 7 10 10-5 5V2l5 5L7 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { pathLength: 1 },
          hover: {
            pathLength: [0, 1],
            transition: { duration: d, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* parpadeo final */}
      <motion.path
        d="m7 7 10 10-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 0.4, 0],
            transition: { duration: d * 0.6, delay: d * 0.7 },
          },
        }}
      />
    </motion.svg>
  );
};
