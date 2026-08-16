"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AlarmClockIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":[0,10,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.03 });
    animate(".part-1", {"rotate":[0,10,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.03 });
    animate(".part-2", {"rotate":[0,-10,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.03 });
    animate(".part-3", {"rotate":[0,10,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.03 });
    animate(".part-4", {"rotate":[0,-10,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.03 });
    animate(".part-5", {"rotate":[0,10,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.03 });
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="13" r="8" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 9v4l2 2" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 3 2 6" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m22 6-3-3" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.38 18.7 4 21" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17.64 18.67 20 21" />
      </motion.svg>
    );
  },
);

AlarmClockIcon.displayName = "AlarmClockIcon";

export default AlarmClockIcon;
