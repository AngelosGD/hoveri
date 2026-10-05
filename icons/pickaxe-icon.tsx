"use client";

import { motion } from "motion/react";

interface PickaxeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const PickaxeIcon = ({
  size = 32,
  className,
  duration = 0.5,
}: PickaxeIconProps) => {
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
      {/* pico se alza y golpea */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -18, 0],
            transition: {
              duration: d,
              times: [0, 0.4, 1],
              ease: "easeInOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "left bottom" }}
      >
        <path
          d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      {/* golpe */}
      <motion.circle
        cx="4"
        cy="20"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0.5 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0.5, 1.3, 0.5],
            transition: { duration: d * 0.5, delay: d * 0.45 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
