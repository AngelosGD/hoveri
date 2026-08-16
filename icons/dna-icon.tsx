"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DnaIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":3.7628865979381443,"y":[0,-2,2,0],"x":[0,3.7628865979381443,-3.7628865979381443,0]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"rotate":3.8659793814432986,"y":[0,-2,2,0],"x":[0,3.8659793814432986,-3.8659793814432986,0]}, { duration: 1, ease: "easeInOut", delay: 0.15 });
    animate(".part-2", {"rotate":3.9690721649484537,"y":[0,-2,2,0],"x":[0,3.9690721649484537,-3.9690721649484537,0]}, { duration: 1, ease: "easeInOut", delay: 0.3 });
    animate(".part-3", {"rotate":4.072164948453608,"y":[0,-2,2,0],"x":[0,4.072164948453608,-4.072164948453608,0]}, { duration: 1, ease: "easeInOut", delay: 0.44999999999999996 });
    animate(".part-4", {"rotate":4.175257731958762,"y":[0,-2,2,0],"x":[0,4.175257731958762,-4.175257731958762,0]}, { duration: 1, ease: "easeInOut", delay: 0.6 });
    animate(".part-5", {"rotate":4.278350515463918,"y":[0,-2,2,0],"x":[0,4.278350515463918,-4.278350515463918,0]}, { duration: 1, ease: "easeInOut", delay: 0.75 });
    animate(".part-6", {"rotate":4.381443298969073,"y":[0,-2,2,0],"x":[0,4.381443298969073,-4.381443298969073,0]}, { duration: 1, ease: "easeInOut", delay: 0.8999999999999999 });
    animate(".part-7", {"rotate":4.484536082474227,"y":[0,-2,2,0],"x":[0,4.484536082474227,-4.484536082474227,0]}, { duration: 1, ease: "easeInOut", delay: 1.05 });
    animate(".part-8", {"rotate":4.587628865979382,"y":[0,-2,2,0],"x":[0,4.587628865979382,-4.587628865979382,0]}, { duration: 1, ease: "easeInOut", delay: 1.2 });
    animate(".part-9", {"rotate":4.690721649484536,"y":[0,-2,2,0],"x":[0,4.690721649484536,-4.690721649484536,0]}, { duration: 1, ease: "easeInOut", delay: 1.3499999999999999 });
    animate(".part-10", {"rotate":4.793814432989691,"y":[0,-2,2,0],"x":[0,4.793814432989691,-4.793814432989691,0]}, { duration: 1, ease: "easeInOut", delay: 1.5 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m10 16 1.5 1.5" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 8-1.5-1.5" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16.5 10.5 1 1" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m17 6-2.891-2.891" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 15c6.667-6 13.333 0 20-6" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m20 9 .891.891" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3.109 14.109 4 15" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m6.5 12.5 1 1" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7 18 2.891 2.891" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      </motion.svg>
    );
  },
);

DnaIcon.displayName = "DnaIcon";

export default DnaIcon;
