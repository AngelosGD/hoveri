"use client";

import { motion } from "motion/react";

interface RadioIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const RadioIcon = ({
  size = 32,
  className,
  duration = 0.55,
}: RadioIconProps) => {
  const d = duration;
  const arcs = [
    { r: 5.5, delay: 0 },
    { r: 8.5, delay: 0.1 },
    { r: 11, delay: 0.2 },
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
      {/* centro pulsa */}
      <motion.circle
        cx="12"
        cy="12"
        r="2.5"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: {
            scale: [1, 1.3, 1],
            transition: { duration: d * 0.6, ease: "easeOut" },
          },
        }}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {/* arcos se dibujan hacia afuera en cascada */}
      {arcs.map((a) => (
        <motion.path
          key={a.r}
          d={`M12 ${12 - a.r}a${a.r} ${a.r} 0 0 1 0 ${a.r * 2}`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={{
            idle: { pathLength: 1, opacity: 1 },
            hover: {
              pathLength: [1, 0.2, 1],
              opacity: [1, 0.4, 1],
              transition: {
                duration: d,
                delay: a.delay,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
      {arcs.map((a) => (
        <motion.path
          key={`l-${a.r}`}
          d={`M12 ${12 + a.r}a${a.r} ${a.r} 0 0 1 0 ${-a.r * 2}`}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          variants={{
            idle: { pathLength: 1, opacity: 1 },
            hover: {
              pathLength: [1, 0.2, 1],
              opacity: [1, 0.4, 1],
              transition: {
                duration: d,
                delay: a.delay + 0.05,
                ease: "easeInOut",
              },
            },
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}
    </motion.svg>
  );
};
