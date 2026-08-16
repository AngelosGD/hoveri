"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const VueIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, className = "" }, ref) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".vue-arm",
        { rotate: [0, 4, -4, 0], x: [0, 0.6, -0.6, 0] },
        { duration: 0.7, ease: "easeInOut" },
      );
      animate(
        ".vue-core",
        { scale: [1, 1.1, 1], opacity: [1, 0.75, 1] },
        { duration: 0.5, ease: "easeInOut", delay: 0.2 },
      );
    };

    const stopAnimation = () => {
      animate(".vue-arm", { rotate: 0, x: 0 }, { duration: 0.25 });
      animate(".vue-core", { scale: 1, opacity: 1 }, { duration: 0.25 });
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
        <g className="vue-arm" style={{ transformOrigin: "50% 90%", transformBox: "fill-box" }}>
          <path d="M3 5h4l5 9 5-9h4l-9 16z" transform="translate(0 1)" />
          <path d="M7.2 5l4.8 9L16.8 5h-3L12 8.4 10.2 5z" fill={color} stroke="none" opacity="0.35" />
        </g>
        <polyline className="vue-core" points="12,9.5 9.5,5 14.5,5" fill="none"
          style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} />
      </motion.svg>
    );
  },
);

VueIcon.displayName = "VueIcon";

export default VueIcon;