"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SnowflakeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":14.072164948453608,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"rotate":14.38144329896907,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 0.15 });
    animate(".part-2", {"rotate":14.690721649484537,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 0.3 });
    animate(".part-3", {"rotate":-15,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 0.44999999999999996 });
    animate(".part-4", {"rotate":-14.690721649484535,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 0.6 });
    animate(".part-5", {"rotate":-14.381443298969073,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 0.75 });
    animate(".part-6", {"rotate":-14.072164948453608,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 0.8999999999999999 });
    animate(".part-7", {"rotate":-13.762886597938143,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 1.05 });
    animate(".part-8", {"rotate":-13.45360824742268,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 1.2 });
    animate(".part-9", {"rotate":-13.144329896907216,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 1.3499999999999999 });
    animate(".part-10", {"rotate":-12.835051546391753,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 1.5 });
    animate(".part-11", {"rotate":-12.525773195876289,"scale":[1,0.85,1.1,1]}, { duration: 1, ease: "easeInOut", delay: 1.65 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m10 20-1.25-2.5L6 18" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 4 8.75 6.5 6 6" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 20 1.25-2.5L18 18" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 4 1.25 2.5L18 6" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17 21-3-6h-4" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17 3-3 6 1.5 3" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 12h6.5L10 9" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20 10-1.5 2 1.5 2" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 12h-6.5L14 15" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m4 10 1.5 2L4 14" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7 21 3-6-1.5-3" />
        <motion.path className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7 3 3 6h4" />
      </motion.svg>
    );
  },
);

SnowflakeIcon.displayName = "SnowflakeIcon";

export default SnowflakeIcon;
