"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AlarmClockOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":[0,0.3608247422680415,0]}, { duration: 0.7, ease: "easeInOut" });
    animate(".part-1", {"rotate":[0,0.5051546391752575,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.08 });
    animate(".part-2", {"rotate":[0,0.6494845360824735,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.16 });
    animate(".part-3", {"rotate":[0,0.793814432989691,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.24 });
    animate(".part-4", {"rotate":[0,0.938144329896907,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.32 });
    animate(".part-5", {"rotate":[0,1.082474226804123,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.4 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.87 6.87a8 8 0 1 0 11.26 11.26" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19.9 14.25a8 8 0 0 0-9.15-9.15" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m22 6-3-3" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.26 18.67 4 21" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m2 2 20 20" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 4 2 6" />
      </motion.svg>
    );
  },
);

AlarmClockOffIcon.displayName = "AlarmClockOffIcon";

export default AlarmClockOffIcon;
