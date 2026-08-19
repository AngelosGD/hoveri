"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const UnlinkIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,3,0],"rotate":[0,36,0]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-1", {"x":[0,-3,0],"rotate":[0,-36,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-2", {"x":[0,3,0],"rotate":[0,36,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-3", {"x":[0,3,0],"rotate":[0,36,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.15000000000000002 });
    animate(".part-4", {"x":[0,3,0],"rotate":[0,36,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.2 });
    animate(".part-5", {"x":[0,3,0],"rotate":[0,36,0]}, { duration: 0.8, ease: "easeInOut", delay: 0.25 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
        <motion.line className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="8" x2="8" y1="2" y2="5" />
        <motion.line className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="2" x2="5" y1="8" y2="8" />
        <motion.line className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="16" x2="16" y1="19" y2="22" />
        <motion.line className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="19" x2="22" y1="16" y2="16" />
      </motion.svg>
    );
  },
);

UnlinkIcon.displayName = "UnlinkIcon";

export default UnlinkIcon;
