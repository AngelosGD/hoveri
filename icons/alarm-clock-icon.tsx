"use client";

import { motion } from "motion/react";

interface AlarmClockIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const AlarmClockIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: AlarmClockIconProps) => {
  const d = duration;
  const waves = [
    { delay: 0, scale: 1 },
    { delay: 0.15, scale: 1 },
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
      {/* reloj vibra */}
      <motion.g
        variants={{
          idle: { rotate: 0 },
          hover: {
            rotate: [0, -10, 10, -7, 7, 0],
            transition: { duration: d * 1.1, ease: "easeInOut" },
          },
        }}
        style={{ transformOrigin: "12px 14px" }}
      >
        <circle cx="12" cy="14" r="6.5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M7.5 19.5l-2 2.5M16.5 19.5l2 2.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7.5 9 5 6.5M16.5 9 19 6.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 10.5V14l2.5 1.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>

      {/* ondas de sonido saliendo */}
      <motion.path
        d="M20.5 5a5 5 0 0 1 1.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d, delay: waves[0].delay, ease: "easeOut" },
          },
        }}
      />
      <motion.path
        d="M3.5 5a5 5 0 0 0-1.5 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d, delay: waves[0].delay, ease: "easeOut" },
          },
        }}
      />
      <motion.path
        d="M21.5 2.5a7.5 7.5 0 0 1 1.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d, delay: waves[1].delay, ease: "easeOut" },
          },
        }}
      />
      <motion.path
        d="M2.5 2.5a7.5 7.5 0 0 0-1.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        variants={{
          idle: { opacity: 0 },
          hover: {
            opacity: [0, 1, 0],
            transition: { duration: d, delay: waves[1].delay, ease: "easeOut" },
          },
        }}
      />
    </motion.svg>
  );
};
