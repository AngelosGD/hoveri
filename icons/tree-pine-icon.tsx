"use client";

import { motion } from "motion/react";

interface TreePineIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const TreePineIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: TreePineIconProps) => {
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
      {/* arbol se mece */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -4, 4, -2, 0],
            transition: { duration: d * 1.2, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
      >
        <path
          d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22v-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </motion.g>
      {/* copo en la punta */}
      <motion.path
        d="M12 1.5v1.5M10.5 3h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        variants={{
          idle: { opacity: 0, scale: 0.5 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
            transition: { duration: d * 0.8, delay: d * 0.3 },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
