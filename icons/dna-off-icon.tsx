"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DnaOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.72 });
    animate(".part-7", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.84 });
    animate(".part-8", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.96 });
    animate(".part-9", {"scale":[1,1.16,1],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.08 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17 6-2.891-2.891" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 15c3.333-3 6.667-3 10-3" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m2 2 20 20" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20 9 .891.891" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3.109 14.109 4 15" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m6.5 12.5 1 1" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7 18 2.891 2.891" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
      </motion.svg>
    );
  },
);

DnaOffIcon.displayName = "DnaOffIcon";

export default DnaOffIcon;
