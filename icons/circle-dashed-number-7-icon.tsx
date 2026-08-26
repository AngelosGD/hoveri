"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CircleDashedNumber7Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.15 });
    animate(".part-2", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.3 });
    animate(".part-3", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.44999999999999996 });
    animate(".part-4", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.6 });
    animate(".part-5", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.75 });
    animate(".part-6", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 0.8999999999999999 });
    animate(".part-7", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 1.05 });
    animate(".part-8", {"opacity":[1,0.55,1],"scale":[1,1.06,1]}, { duration: 1, ease: "easeInOut", delay: 1.2 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8.56 3.69a9 9 0 0 0 -2.92 1.95" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3.69 8.56a9 9 0 0 0 -.69 3.44" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3.69 15.44a9 9 0 0 0 1.95 2.92" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8.56 20.31a9 9 0 0 0 3.44 .69" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15.44 20.31a9 9 0 0 0 2.92 -1.95" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20.31 15.44a9 9 0 0 0 .69 -3.44" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15.44 3.69a9 9 0 0 0 -3.44 -.69" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 8h4l-2 8" />
      </motion.svg>
    );
  },
);

CircleDashedNumber7Icon.displayName = "CircleDashedNumber7Icon";

export default CircleDashedNumber7Icon;
