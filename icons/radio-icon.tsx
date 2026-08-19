"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RadioIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
      animate(".arc-a", {"scale":[0.9,1.08,1]}, { duration: 0.7, ease: "easeInOut" });
      animate(".arc-b", {"scale":[0.95,1.05,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.08 });
      animate(".arc-c", {"scale":[0.95,1.05,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.14 });
      animate(".arc-d", {"scale":[0.9,1.08,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.2 });
    };

    const stopAnimation = () => {
      animate(".arc-a", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".arc-b", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".arc-c", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
      animate(".arc-d", {"scale":1}, { duration: 0.2, ease: "easeInOut" });
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
        <motion.path className="arc-a" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.247 7.761a6 6 0 0 1 0 8.478" />
        <motion.path className="arc-b" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19.075 4.933a10 10 0 0 1 0 14.134" />
        <motion.path className="arc-c" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4.925 19.067a10 10 0 0 1 0-14.134" />
        <motion.path className="arc-d" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.753 16.239a6 6 0 0 1 0-8.478" />
      </motion.svg>
    );
  },
);

RadioIcon.displayName = "RadioIcon";

export default RadioIcon;
