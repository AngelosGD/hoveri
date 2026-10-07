"use client";

import { motion } from "motion/react";

interface PrinterIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PrinterIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: PrinterIconProps) => {
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
      {/* papel entra por arriba */}
      <motion.path
        d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 2.5, 0],
            transition: { duration: d * 1.2, ease: "easeInOut" },
          },
        }}
      />
      {/* cuerpo */}
      <path
        d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* hoja impresa sale por abajo */}
      <motion.rect
        x="6"
        y="14"
        width="12"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, 0, 2],
            transition: {
              duration: d * 1.2,
              times: [0, 0.3, 1],
              ease: "easeInOut",
            },
          },
        }}
      />
    </motion.svg>
  );
};
