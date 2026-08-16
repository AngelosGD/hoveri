"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SandwichIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":[0,6.56701030927835,0]}, { duration: 0.7, ease: "easeInOut" });
    animate(".part-1", {"rotate":[0,6.711340206185566,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.08 });
    animate(".part-2", {"rotate":[0,6.855670103092784,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.16 });
    animate(".part-3", {"rotate":[0,-7,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.24 });
    animate(".part-4", {"rotate":[0,-6.855670103092783,0]}, { duration: 0.7, ease: "easeInOut", delay: 0.32 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
        <motion.rect className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="20" height="4" x="2" y="11" rx="1" />
      </motion.svg>
    );
  },
);

SandwichIcon.displayName = "SandwichIcon";

export default SandwichIcon;
