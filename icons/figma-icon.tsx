"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const FigmaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".figma-top",
        { y: [0, -2, 0], scale: [1, 1.08, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".figma-bottom",
        { y: [0, 1.5, 0], scale: [1, 0.92, 1] },
        { duration: 0.6, ease: "easeInOut", delay: 0.1 },
      );
      animate(
        ".figma-stem",
        { rotate: [0, 8, 0] },
        { duration: 0.5, ease: "easeInOut", delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate(".figma-top", { y: 0, scale: 1 }, { duration: 0.25 });
      animate(".figma-bottom", { y: 0, scale: 1 }, { duration: 0.25 });
      animate(".figma-stem", { rotate: 0 }, { duration: 0.25 });
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
        className={`${className} cursor-pointer`}
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <g className="figma-top" style={{ transformOrigin: "50% 35%", transformBox: "fill-box" }}>
          <circle cx="12" cy="10" r="4" />
        </g>
        <g className="figma-bottom" style={{ transformOrigin: "50% 90%", transformBox: "fill-box" }}>
          <path d="M8 14h4a4 4 0 1 1-4 4z" />
          <rect x="8" y="14" width="4" height="4" />
        </g>
        <g className="figma-stem" style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }}>
          <path d="M8 6v16" />
        </g>
      </motion.svg>
    );
  },
);

FigmaIcon.displayName = "FigmaIcon";

export default FigmaIcon;