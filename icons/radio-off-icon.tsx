"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RadioOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,-3,0],"rotate":[0,-1.9175257731958764,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"y":[0,-3,0],"rotate":[0,-1.8762886597938144,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.14 });
    animate(".part-2", {"y":[0,-3,0],"rotate":[0,-1.8350515463917525,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.28 });
    animate(".part-3", {"y":[0,-3,0],"rotate":[0,-1.7938144329896908,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.42000000000000004 });
    animate(".part-4", {"y":[0,-3,0],"rotate":[0,-1.7525773195876289,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.56 });
    animate(".part-5", {"y":[0,-3,0],"rotate":[0,-1.7113402061855671,0],"scale":[1,1.08,1]}, { duration: 1, ease: "easeInOut", delay: 0.7000000000000001 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13.414 13.414a2 2 0 1 1-2.828-2.828" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.247 7.761a6 6 0 0 1 1.744 4.572" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19.075 4.933a10 10 0 0 1 2.234 10.72" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m2 2 20 20" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4.925 19.067a10 10 0 0 1 0-14.134" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.753 16.239a6 6 0 0 1 0-8.478" />
      </motion.svg>
    );
  },
);

RadioOffIcon.displayName = "RadioOffIcon";

export default RadioOffIcon;
