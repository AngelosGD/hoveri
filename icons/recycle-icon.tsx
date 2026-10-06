"use client";

import { motion } from "motion/react";

interface RecycleIconProps {
  size?: number;
  className?: string;
  duration?: number;
}

export const RecycleIcon = ({
  size = 32,
  className,
  duration = 0.65,
}: RecycleIconProps) => {
  const d = duration;
  const arms = [
    "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
    "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
    "M9.344 5.811l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
  ];
  const heads = [
    "m14 16-3 3 3 3",
    "m8.293 13.596-1.097-4.098-4.096 1.098",
    "m13.378 9.633 4.096 1.098 1.097-4.096",
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
      {/* los tres brazos reciclan en cascada */}
      {arms.map((dPath, i) => (
        <motion.path
          key={`a${i}`}
          d={dPath}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.25, 1],
              transition: {
                duration: d * 0.6,
                delay: i * d * 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
      {/* puntas de flecha */}
      {heads.map((dPath, i) => (
        <motion.path
          key={`h${i}`}
          d={dPath}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={{
            idle: { opacity: 1 },
            hover: {
              opacity: [1, 0.25, 1],
              transition: {
                duration: d * 0.6,
                delay: i * d * 0.2,
                ease: "easeInOut",
              },
            },
          }}
        />
      ))}
    </motion.svg>
  );
};
