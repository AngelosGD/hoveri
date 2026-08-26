"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BroomSparklesIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"opacity":[1,0.35,1],"x":[0,2.515463917525773,0]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"opacity":[1,0.35,1],"x":[0,2.5979381443298966,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"opacity":[1,0.35,1],"x":[0,2.680412371134021,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"opacity":[1,0.35,1],"x":[0,2.7628865979381443,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"opacity":[1,0.35,1],"x":[0,2.8453608247422677,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"opacity":[1,0.35,1],"x":[0,2.927835051546392,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"opacity":[1,0.35,1],"x":[0,3.0103092783505154,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.72 });
    animate(".part-7", {"opacity":[1,0.35,1],"x":[0,3.092783505154639,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.84 });
    animate(".part-8", {"opacity":[1,0.35,1],"x":[0,3.175257731958763,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.96 });
    animate(".part-9", {"opacity":[1,0.35,1],"x":[0,3.2577319587628866,0]}, { duration: 0.9, ease: "easeInOut", delay: 1.08 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 2v2" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 3h-2" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13.5 10.5 22 2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 15v4" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 17h-4" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4 4v4" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m5 18 2-2" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 6H2" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7.699 10.7 5.602 5.601" />
      </motion.svg>
    );
  },
);

BroomSparklesIcon.displayName = "BroomSparklesIcon";

export default BroomSparklesIcon;
