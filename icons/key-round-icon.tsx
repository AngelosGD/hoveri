"use client";

import { motion } from "motion/react";

interface KeyRoundIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const KeyRoundIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: KeyRoundIconProps) => {
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
      {/* la llave gira como abriendo la cerradura */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -45, -45, 0],
            transition: {
              duration: d * 1.3,
              times: [0, 0.4, 0.6, 1],
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "view-box", transformOrigin: "16.5px 7.5px" }}
      >
        {/* cuerpo de la llave */}
        <path
          d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* diente brilla */}
        <motion.circle
          cx="16.5"
          cy="7.5"
          r=".5"
          fill="currentColor"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.6, 1],
              transition: {
                duration: d * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "view-box", transformOrigin: "16.5px 7.5px" }}
        />
      </motion.g>
    </motion.svg>
  );
};
