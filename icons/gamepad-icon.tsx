"use client";

import { motion } from "motion/react";

interface GamepadIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const GamepadIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: GamepadIconProps) => {
  const d = duration;
  const buttons = [
    { cx: 16.5, cy: 9.5, delay: 0 },
    { cx: 19.5, cy: 13, delay: 0.1 },
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
      {/* cuerpo */}
      <path
        d="M6 12h4m-2-2v4m6-1h.01M18 13h.01M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* cruceta pulsa */}
      <motion.path
        d="M6 12h4m-2-2v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.25, 1],
            transition: { duration: d * 0.6, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* botones pop en cascada */}
      {buttons.map((b) => (
        <motion.circle
          key={`${b.cx}-${b.cy}`}
          cx={b.cx}
          cy={b.cy}
          r="1"
          fill="currentColor"
          variants={{
            idle: { scale: 1 },
            hover: {
              scale: [1, 1.6, 1],
              transition: {
                duration: d * 0.7,
                delay: b.delay + 0.15,
                ease: "easeOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
