"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TicketsPlaneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,2,0],"y":[0,0,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-1", {"x":[0,2,0],"y":[0,0.8,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", {"x":[0,2,0],"y":[0,1.6,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", {"x":[0,-2,0],"y":[0,2.4000000000000004,0],"rotate":[0,-3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", {"x":[0,-2,0],"y":[0,3.2,0],"rotate":[0,-3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", {"x":[0,-2,0],"y":[0,4,0],"rotate":[0,-3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.3 });
    animate(".part-6", {"x":[0,2,0],"y":[0,4.800000000000001,0],"rotate":[0,3,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.36 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.30 });
    animate(".part-6", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.36 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m12 13.5 3.794.506" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 10V8" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 14v1" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 19v2" />
        <motion.rect className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="2" y="8" width="20" height="13" rx="2" />
      </motion.svg>
    );
  },
);

TicketsPlaneIcon.displayName = "TicketsPlaneIcon";

export default TicketsPlaneIcon;
