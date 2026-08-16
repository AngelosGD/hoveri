"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SandwichIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".icon-path",
        { scaleY: [1, 0.65, 1.2, 1], scaleX: [1, 1.1, 0.95, 1] },
        { duration: 0.6, ease: "easeInOut" },
      );
    };

    const stopAnimation = () => {
      animate(".icon-path", { scaleY: 1, scaleX: 1 }, { duration: 0.2, ease: "easeOut" });
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
        <motion.g
          className="icon-path"
          style={{ transformOrigin: "50% 100%", transformBox: "fill-box" }}
        >
        <path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" />
        <path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
        <path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
        <path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
        <rect width="20" height="4" x="2" y="11" rx="1" />
        </motion.g>
      </motion.svg>
    );
  },
);

SandwichIcon.displayName = "SandwichIcon";

export default SandwichIcon;
