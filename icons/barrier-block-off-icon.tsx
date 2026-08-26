"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BarrierBlockOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut" });
    animate(".part-1", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.2 });
    animate(".part-3", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-4", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.4 });
    animate(".part-5", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.5 });
    animate(".part-6", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.6000000000000001 });
    animate(".part-7", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-8", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.8 });
    animate(".part-9", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.9 });
    animate(".part-10", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 1 });
    animate(".part-11", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 1.1 });
    animate(".part-12", {"scale":[1,1.12,0.94,1],"x":[0,0,2,0]}, { duration: 0.5, ease: "easeInOut", delay: 1.2000000000000002 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 7h8a1 1 0 0 1 1 1v7c0 .27 -.107 .516 -.282 .696" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 16h-11a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h2" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 16v4" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.5 16l4.244 -4.244" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13.745 9.755l2.755 -2.755" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13.5 16l1.249 -1.249" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.741 12.759l3.259 -3.259" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 13.5l4.752 -4.752" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 17v3" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 20h4" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 20h4" />
        <motion.path className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 7v-2" />
        <motion.path className="part-12" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 3l18 18" />
      </motion.svg>
    );
  },
);

BarrierBlockOffIcon.displayName = "BarrierBlockOffIcon";

export default BarrierBlockOffIcon;
