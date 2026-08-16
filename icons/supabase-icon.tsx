"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SupabaseIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".supa-tri",
        { y: [0, -2, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".supa-bolt",
        { pathLength: [0, 1], opacity: [0.4, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.15 },
      );
      animate(
        ".supa-splash",
        { scale: [1, 1.2, 1], opacity: [1, 0.5, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.1 },
      );
    };

    const stopAnimation = () => {
      animate(".supa-tri", { y: 0 }, { duration: 0.25 });
      animate(".supa-bolt", { pathLength: 1, opacity: 1 }, { duration: 0.25 });
      animate(".supa-splash", { scale: 1, opacity: 1 }, { duration: 0.25 });
    };

    useImperativeHandle(ref, () => ({ startAnimation, stopAnimation }));

    return (
      <motion.svg
        ref={scope}
        onHoverStart={startAnimation}
        onHoverEnd={stopAnimation}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className} cursor-pointer`}
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <g className="supa-tri" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M5 13 19 5l-4 14H9Z" />
        </g>
        <path className="supa-splash" d="M9.5 16.5 19 5" opacity="0.4" />
        <path className="supa-bolt" d="M11.5 13.4 14 9l-1.5 3.4" strokeWidth={strokeWidth} />
      </motion.svg>
    );
  },
);

SupabaseIcon.displayName = "SupabaseIcon";

export default SupabaseIcon;