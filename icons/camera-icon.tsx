"use client";

import { motion } from "motion/react";

interface CameraIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const CameraIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: CameraIconProps) => {
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
      {/* cuerpo */}
      <path
        d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* lente estatico */}
      <circle
        cx="12"
        cy="13"
        r="3.5"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* FLASH — destello blanco radial como al tomar foto */}
      <motion.circle
        cx="12"
        cy="13"
        r="8"
        fill="white"
        variants={{
          idle: { opacity: 0, scale: 0.3 },
          hover: {
            opacity: [0, 0.95, 0],
            scale: [0.3, 1.4, 1.8],
            transition: {
              duration: d * 0.85,
              delay: d * 0.2,
              ease: "easeOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* segundo destello mas tenue */}
      <motion.circle
        cx="12"
        cy="13"
        r="6"
        fill="white"
        variants={{
          idle: { opacity: 0, scale: 0.3 },
          hover: {
            opacity: [0, 0.6, 0],
            scale: [0.4, 1.5, 2],
            transition: {
              duration: d * 0.9,
              delay: d * 0.25,
              ease: "easeOut",
            },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />

      {/* rayitos de flash saliendo */}
      {[
        { x: 0, y: -1 },
        { x: 0.85, y: -0.5 },
        { x: 0.85, y: 0.5 },
        { x: -0.85, y: -0.5 },
        { x: -0.85, y: 0.5 },
      ].map((dir, i) => (
        <motion.line
          key={i}
          x1={12 + dir.x * 5.5}
          y1={13 + dir.y * 5.5}
          x2={12 + dir.x * 8}
          y2={13 + dir.y * 8}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          variants={{
            idle: { opacity: 0, pathLength: 0 },
            hover: {
              opacity: [0, 1, 0],
              pathLength: [0, 1],
              transition: {
                duration: d * 0.55,
                delay: d * 0.3 + i * 0.03,
                ease: "easeOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
