"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BananaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".peel", { pathLength: [0, 1], opacity: [0, 1] }, { duration: 0.5, ease: "easeOut" });
      animate(".banana", { rotate: [0, -5, 5, -5, 0], y: [0, -2, 0] }, { duration: 0.6, ease: "easeInOut" });
    };

    const stopAnimation = () => {
      animate(".peel", { pathLength: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".banana", { rotate: 0, y: 0 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="peel" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" />
        <motion.path className="banana" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" />
      </motion.svg>
    );
  },
);

BananaIcon.displayName = "BananaIcon";

export default BananaIcon;
