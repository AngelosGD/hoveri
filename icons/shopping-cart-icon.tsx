"use client";

import { motion } from "motion/react";

interface ShoppingCartIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const ShoppingCartIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: ShoppingCartIconProps) => {
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
      {/* el carrito avanza y vuelve */}
      <motion.g
        variants={{
          idle: { x: 0 },
          hover: {
            x: [0, 3.5, -1.5, 0],
            transition: {
              duration: d * 1.3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        }}
      >
        <path
          d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* ruedas giran */}
        <motion.circle
          cx="8"
          cy="21"
          r="1"
          fill="currentColor"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.35, 1],
              transition: {
                duration: d * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
        />
        <motion.circle
          cx="19"
          cy="21"
          r="1"
          fill="currentColor"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.35, 1],
              transition: {
                duration: d * 0.7,
                delay: d * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
        />
      </motion.g>
    </motion.svg>
  );
};
