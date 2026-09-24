"use client";

import { motion } from "motion/react";

interface LockIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const LockIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: LockIconProps) => {
  const d = duration;
  const clipId = "lock-shackle-clip";
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
      {/* recorta el arco arriba del cuerpo — la pierna larga no traspasa */}
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width="24" height="11" />
        </clipPath>
      </defs>

      {/* arco: pierna izq larga (queda oculta dentro del cuerpo),
          pierna der corta — al subir solo se abre por la derecha */}
      <motion.path
        d="M7 15V7a5 5 0 0 1 10 0v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        clipPath={`url(#${clipId})`}
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -2.5, -2.5, 0],
            transition: {
              duration: d,
              times: [0, 0.35, 0.7, 1],
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />

      {/* cuerpo */}
      <motion.rect
        x="4"
        y="11"
        width="16"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.04, 1],
            transition: {
              duration: d * 0.6,
              delay: d * 0.1,
              ease: "easeOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />

      {/* chispa al abrir (lado derecho) */}
      <motion.circle
        cx="19"
        cy="6"
        r="1.5"
        fill="currentColor"
        variants={{
          idle: { opacity: 0, scale: 0 },
          hover: {
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            transition: {
              duration: d * 0.55,
              delay: d * 0.3,
              ease: "easeOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </motion.svg>
  );
};
