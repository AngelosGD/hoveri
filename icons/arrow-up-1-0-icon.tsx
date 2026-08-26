"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ArrowUp10Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":[0,4.845360824742269,0],"scale":[0.8,1.2,1]}, { duration: 0.7, ease: "easeInOut" });
    animate(".part-1", {"rotate":[0,5.051546391752577,0],"scale":[0.8,1.2,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.07 });
    animate(".part-2", {"rotate":[0,5.257731958762886,0],"scale":[0.8,1.2,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.14 });
    animate(".part-3", {"rotate":[0,5.463917525773196,0],"scale":[0.8,1.2,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.21000000000000002 });
    animate(".part-4", {"rotate":[0,5.6701030927835046,0],"scale":[0.8,1.2,1]}, { duration: 0.7, ease: "easeInOut", delay: 0.28 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m3 8 4-4 4 4" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 4v16" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 10V4h-2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 10h4" />
        <motion.rect className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="15" y="14" width="4" height="6" ry="2" />
      </motion.svg>
    );
  },
);

ArrowUp10Icon.displayName = "ArrowUp10Icon";

export default ArrowUp10Icon;
