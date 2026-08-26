"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SquareDashedTextIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut" });
    animate(".part-1", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.72 });
    animate(".part-7", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.84 });
    animate(".part-8", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.96 });
    animate(".part-9", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 1.08 });
    animate(".part-10", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 1.2 });
    animate(".part-11", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 1.3199999999999998 });
    animate(".part-12", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 1.44 });
    animate(".part-13", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 1.56 });
    animate(".part-14", {"pathLength":[0,1,1]}, { duration: 0.7, ease: "easeInOut", delay: 1.68 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
    animate(".part-6", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.36 });
    animate(".part-7", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.42 });
    animate(".part-8", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.48 });
    animate(".part-9", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.54 });
    animate(".part-10", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.60 });
    animate(".part-11", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.66 });
    animate(".part-12", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.72 });
    animate(".part-13", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.78 });
    animate(".part-14", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.84 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 21h1" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 3h1" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19 3a2 2 0 0 1 2 2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 14v1" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 19a2 2 0 0 1-2 2" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 9v1" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 14v1" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 9v1" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 21a2 2 0 0 1-2-2" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 3a2 2 0 0 0-2 2" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 12h10" />
        <motion.path className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 16h6" />
        <motion.path className="part-12" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 8h8" />
        <motion.path className="part-13" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 21h1" />
        <motion.path className="part-14" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 3h1" />
      </motion.svg>
    );
  },
);

SquareDashedTextIcon.displayName = "SquareDashedTextIcon";

export default SquareDashedTextIcon;
