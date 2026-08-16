"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const XIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".x-line-a",
        { rotate: [0, 14, 0], x: [0, 0.8, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
      animate(
        ".x-line-b",
        { rotate: [0, -14, 0], x: [0, -0.8, 0] },
        { duration: 0.6, ease: "easeInOut" },
      );
    };

    const stopAnimation = () => {
      animate(".x-line-a", { rotate: 0, x: 0 }, { duration: 0.25 });
      animate(".x-line-b", { rotate: 0, x: 0 }, { duration: 0.25 });
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
        fill={color}
        className={`${className} cursor-pointer`}
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <g className="x-line-a" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M4 4 20 20M4 4l4 4M20 20l-4-4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
        </g>
        <g className="x-line-b" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }}>
          <path d="M20 4 4 20m0-16l4 4m0 8l4 4" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" fill="none" />
        </g>
      </motion.svg>
    );
  },
);

XIcon.displayName = "XIcon";

export default XIcon;