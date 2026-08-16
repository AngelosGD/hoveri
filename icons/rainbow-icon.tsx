"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RainbowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      await animate(
        ".icon-path",
        { y: [6, -2, 1, 0], opacity: [0.3, 1, 1, 1] },
        { duration: 0.7, ease: "easeInOut" },
      );
    };

    const stopAnimation = () => {
      animate(".icon-path", { y: 0, opacity: 1 }, { duration: 0.2, ease: "easeOut" });
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
        <path d="M22 17a10 10 0 0 0-20 0" />
        <path d="M6 17a6 6 0 0 1 12 0" />
        <path d="M10 17a2 2 0 0 1 4 0" />
        </motion.g>
      </motion.svg>
    );
  },
);

RainbowIcon.displayName = "RainbowIcon";

export default RainbowIcon;
