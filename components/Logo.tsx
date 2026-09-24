"use client";

import { motion } from "motion/react";

interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Monograma Hoveri — H geometrico con crossbar ondulado (curva motion)
 * y chispa flotante. Insp: logoinspo1/2/3 (formas redondeadas + interlock).
 */
export const Logo = ({ size = 22, className }: LogoProps) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden
      whileHover="hover"
      initial="idle"
    >
      <g
        stroke="currentColor"
        strokeWidth="5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        {/* tallo izq — curva suave arriba estilo geométrico redondeado */}
        <motion.path
          d="M15 36 V18 C15 13.5 18.5 11 22 13"
          variants={{
            idle: { pathLength: 1, opacity: 1 },
            hover: {
              pathLength: [1, 0.92, 1],
              transition: { duration: 0.4, ease: "easeInOut" },
            },
          }}
        />
        {/* tallo der — espejo interlock */}
        <motion.path
          d="M33 12 V30 C33 34.5 29.5 37 26 35"
          variants={{
            idle: { pathLength: 1, opacity: 1 },
            hover: {
              pathLength: [1, 0.92, 1],
              transition: { duration: 0.4, delay: 0.05, ease: "easeInOut" },
            },
          }}
        />
        {/* crossbar ondulado — la "curva de motion" */}
        <motion.path
          d="M15 24 C18.5 18.5 21.5 29.5 25 24 C28.5 18.5 30 24 33 24"
          variants={{
            idle: { d: "M15 24 C18.5 18.5 21.5 29.5 25 24 C28.5 18.5 30 24 33 24" },
            hover: {
              d: [
                "M15 24 C18.5 18.5 21.5 29.5 25 24 C28.5 18.5 30 24 33 24",
                "M15 24 C18.5 28 21.5 19 25 24 C28.5 29 30 24 33 24",
                "M15 24 C18.5 18.5 21.5 29.5 25 24 C28.5 18.5 30 24 33 24",
              ],
              transition: { duration: 0.45, ease: "easeInOut" },
            },
          }}
        />
      </g>

      {/* chispa — el "i" / hover point */}
      <motion.circle
        cx="38"
        cy="12"
        r="2.4"
        fill="currentColor"
        variants={{
          idle: { opacity: 1, scale: 1 },
          hover: {
            opacity: [1, 0.3, 1],
            scale: [1, 1.5, 1],
            transition: { duration: 0.35, delay: 0.1 },
          },
        }}
        style={{ originX: "38px", originY: "12px" }}
      />
    </motion.svg>
  );
};
