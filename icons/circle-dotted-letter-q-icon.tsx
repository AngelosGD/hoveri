"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CircleDottedLetterQIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"scale":[1,1.12,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-1", {"scale":[1,1.12,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-2", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.28 });
    animate(".part-3", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.42000000000000004 });
    animate(".part-4", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.56 });
    animate(".part-5", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-6", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.8400000000000001 });
    animate(".part-7", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.9800000000000001 });
    animate(".part-8", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.12 });
    animate(".part-9", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.2600000000000002 });
    animate(".part-10", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.4000000000000001 });
    animate(".part-11", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.54 });
    animate(".part-12", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.6800000000000002 });
    animate(".part-13", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.8200000000000003 });
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
    animate(".part-12", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.72 });
    animate(".part-13", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.78 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13 15l1 1" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.5 4.21v.01" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4.21 7.5v.01" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 12v.01" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M4.21 16.5v.01" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7.5 19.79v.01" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 21v.01" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.5 19.79v.01" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19.79 16.5v.01" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 12v.01" />
        <motion.path className="part-11" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M19.79 7.5v.01" />
        <motion.path className="part-12" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.5 4.21v.01" />
        <motion.path className="part-13" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 3v.01" />
      </motion.svg>
    );
  },
);

CircleDottedLetterQIcon.displayName = "CircleDottedLetterQIcon";

export default CircleDottedLetterQIcon;
