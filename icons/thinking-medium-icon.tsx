"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ThinkingMediumIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".part-0", { y: [0, -1.5, 0], scale: [1, 1.04, 1] }, { duration: 0.6, ease: "easeInOut" });
      animate(".part-1", { scale: [1, 1.25, 1], opacity: [1, 0.5, 1] }, { duration: 0.45, ease: "easeInOut", delay: 0.15 });
    };

    const stopAnimation = () => {
      animate(".part-0", { y: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
      animate(".part-1", { scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut" });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 21v-1.25c0 -2.311 .778 -1.92 2.244 -3.749a8 8 0 1 0 -14.244 -5.001q 0 .25 -1.876 3.518a1 1 0 0 0 .876 1.482h2v3a2 2 0 0 0 2 2h3" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      </motion.svg>
    );
  },
);

ThinkingMediumIcon.displayName = "ThinkingMediumIcon";

export default ThinkingMediumIcon;
