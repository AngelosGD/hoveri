"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const WifiSyncIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 0.18 });
    animate(".part-2", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 0.36 });
    animate(".part-3", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 0.54 });
    animate(".part-4", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 0.72 });
    animate(".part-5", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 0.8999999999999999 });
    animate(".part-6", {"scale":[0.85,1.15,0.9,1],"opacity":[0.6,1,0.8,1]}, { duration: 1, ease: "easeInOut", delay: 1.08 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11.965 14.105h4" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 8.82a15 15 0 0 1 20 0" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21.965 22.105v-4" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 12.86a10 10 0 0 1 3-2.032" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8.5 16.429h.01" />
      </motion.svg>
    );
  },
);

WifiSyncIcon.displayName = "WifiSyncIcon";

export default WifiSyncIcon;
