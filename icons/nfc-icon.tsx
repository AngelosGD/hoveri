"use client";

import { motion } from "motion/react";

interface NfcIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const NfcIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: NfcIconProps) => {
  const d = duration;
  const arcs = [
    "M6 8.32a7.43 7.43 0 0 1 0 7.36",
    "M9.46 6.21a11.76 11.76 0 0 1 0 11.58",
    "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",
    "M16.37 2a20.16 20.16 0 0 1 0 20",
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
      {/* las ondas se propagan con retardo */}
      {arcs.map((path, i) => (
        <motion.path
          key={path}
          d={path}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            idle: { scale: 1, opacity: 1 },
            hover: {
              scale: [1, 1.12, 1],
              opacity: [1, 0.45, 1],
              transition: {
                duration: d * 1.1,
                delay: i * d * 0.16,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
