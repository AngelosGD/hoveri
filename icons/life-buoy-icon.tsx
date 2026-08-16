"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const LifeBuoyIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[1,1.15,0.95,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.05 });
    animate(".part-3", {"scale":[1,1.15,0.95,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.05 });
    animate(".part-4", {"scale":[1,1.15,0.95,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.05 });
    animate(".part-5", {"scale":[1,1.15,0.95,1.1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.05 });
    animate(".part-1", {"rotate":90}, { duration: 1.4, ease: "easeInOut", delay: 0.02 });
    animate(".part-2", {"rotate":90}, { duration: 1.4, ease: "easeInOut", delay: 0.04 });
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="10" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m4.93 4.93 4.24 4.24" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14.83 9.17 4.24-4.24" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14.83 14.83 4.24 4.24" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m9.17 14.83-4.24 4.24" />
        <motion.circle className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="4" />
      </motion.svg>
    );
  },
);

LifeBuoyIcon.displayName = "LifeBuoyIcon";

export default LifeBuoyIcon;
