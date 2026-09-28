"use client";

import { motion } from "motion/react";

interface BikeIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const BikeIcon = ({
  size = 32,
  className,
  duration = 0.6,
}: BikeIconProps) => {
  const d = duration;
  const wheels = [
    { cx: 5.5, cy: 17.5 },
    { cx: 18.5, cy: 17.5 },
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
      {/* bici pedalea */}
      <motion.g
        variants={{
          idle: { y: 0 },
          hover: {
            y: [0, -1.5, 0],
            transition: { duration: d * 0.6, repeat: 1, ease: "easeInOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <circle cx="5.5" cy="17.5" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="18.5" cy="17.5" r="4" stroke="currentColor" strokeWidth="2" />
        <path
          d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* rayas de rueda giran */}
        {wheels.map((w) => (
          <motion.g
            key={w.cx}
            variants={{
              idle: { rotate: 0 },
              hover: {
                rotate: 360,
                transition: { duration: d, ease: "linear" },
              },
            }}
            style={{ transformOrigin: `${w.cx}px ${w.cy}px` }}
          >
            <path
              d={`M${w.cx - 3} ${w.cy}h6M${w.cx} ${w.cy - 3}v6`}
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </motion.g>
        ))}
      </motion.g>
    </motion.svg>
  );
};
