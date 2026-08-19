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
        { y: [0, -3, 0], scale: [1, 1.06, 1] },
        { duration: 0.55, ease: "easeInOut" },
      );
      animate(
        ".figma-bottom",
        { y: [0, 2.5, 0], scale: [1, 0.96, 1] },
        { duration: 0.55, ease: "easeInOut", delay: 0.12 },
      );
      animate(
        ".figma-stem",
        { scaleY: [1, 1.15, 1], scaleX: [1, 0.95, 1] },
        { duration: 0.6, ease: "easeInOut", delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate(".figma-top", { y: 0, scale: 1 }, { duration: 0.25 });
      animate(".figma-bottom", { y: 0, scale: 1 }, { duration: 0.25 });
      animate(".figma-stem", { scaleX: 1, scaleY: 1 }, { duration: 0.25 });
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
        <g className="figma-top" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <circle cx="9" cy="7" r="4.6" fill={color} stroke="none" />
          <circle cx="15" cy="7" r="4.6" fill={color} stroke="none" />
        </g>
        <g className="figma-bottom" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <circle cx="9" cy="17" r="4.6" fill={color} stroke="none" />
          <circle cx="15" cy="17" r="4.6" fill={color} stroke="none" />
        </g>
        <circle className="figma-stem" cx="9" cy="12" r="4.6" fill={color} stroke="none" />
      </motion.svg>
    );
  },
);

FigmaIcon.displayName = "FigmaIcon";

export default FigmaIcon;