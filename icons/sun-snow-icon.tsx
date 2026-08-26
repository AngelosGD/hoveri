"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SunSnowIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-1", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.2 });
    animate(".part-4", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.4 });
    animate(".part-6", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.6000000000000001 });
    animate(".part-7", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-8", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.8 });
    animate(".part-10", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 1 });
    animate(".part-0", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-3", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.54 });
    animate(".part-5", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.8999999999999999 });
    animate(".part-9", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut", delay: 1.6199999999999999 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 21v-1" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 4V3" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 9a3 3 0 0 0 0 6" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 20 1.25-2.5L18 18" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 4 1.25 2.5L18 6" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17 21-3-6 1.5-3H22" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17 3-3 6 1.5 3" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 12h1" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20 10-1.5 2 1.5 2" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m3.64 18.36.7-.7" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m4.34 6.34-.7-.7" />
      </motion.svg>
    );
  },
);

SunSnowIcon.displayName = "SunSnowIcon";

export default SunSnowIcon;
