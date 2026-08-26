"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DeerIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-2", {"scale":[1,1.12,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-3", {"scale":[1,1.12,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-10", {"scale":[1,1.12,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-0", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.14 });
    animate(".part-4", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.56 });
    animate(".part-5", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-6", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.8400000000000001 });
    animate(".part-7", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.9800000000000001 });
    animate(".part-8", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.12 });
    animate(".part-9", {"scale":[0.7,1.2,1],"opacity":[0.4,1,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.2600000000000002 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 3c0 2 1 3 4 3c2 0 3 1 3 3" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 3c0 1.333 -.333 2.333 -1 3" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 3c0 1.333 .333 2.333 1 3" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 6c-2.667 .667 -4.333 1.667 -5 3" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 6c2.667 .667 4.333 1.667 5 3" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8.5 10l-1.5 -1" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15.5 10l1.5 -1" />
        <motion.path className="part-10" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 15h.01" />
      </motion.svg>
    );
  },
);

DeerIcon.displayName = "DeerIcon";

export default DeerIcon;
