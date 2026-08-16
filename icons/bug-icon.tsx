"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BugIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,3,0],"y":[0,2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"x":[0,3,0],"y":[0,-2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.08 });
    animate(".part-2", {"x":[0,3,0],"y":[0,-2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.16 });
    animate(".part-3", {"x":[0,3,0],"y":[0,2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.24 });
    animate(".part-4", {"x":[0,3,0],"y":[0,-2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.32 });
    animate(".part-5", {"x":[0,3,0],"y":[0,-2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.4 });
    animate(".part-6", {"x":[0,-3,0],"y":[0,2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.48 });
    animate(".part-7", {"x":[0,-3,0],"y":[0,-2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.56 });
    animate(".part-8", {"x":[0,-3,0],"y":[0,-2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.64 });
    animate(".part-9", {"x":[0,-3,0],"y":[0,-2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.72 });
    animate(".part-10", {"x":[0,3,0],"y":[0,-2,0],"rotate":[0,6,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.8 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 20v-9" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14.12 3.88 16 2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 21a4 4 0 0 0-3.81-4" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 5a4 4 0 0 1-3.55 3.97" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 13h-4" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 21a4 4 0 0 1 3.81-4" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 5a4 4 0 0 0 3.55 3.97" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 13H2" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m8 2 1.88 1.88" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 7.13V6a3 3 0 1 1 6 0v1.13" />
      </motion.svg>
    );
  },
);

BugIcon.displayName = "BugIcon";

export default BugIcon;
