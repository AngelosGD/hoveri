"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BiohazardIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut" });
    animate(".part-1", {"rotate":-30,"x":[0,-2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"rotate":-30,"x":[0,-2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.2 });
    animate(".part-3", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-4", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.4 });
    animate(".part-5", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.5 });
    animate(".part-6", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.6000000000000001 });
    animate(".part-7", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-8", {"rotate":30,"x":[0,2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.8 });
    animate(".part-9", {"rotate":-30,"x":[0,-2,0],"scale":[1,0.9,1]}, { duration: 1.2, ease: "easeInOut", delay: 0.9 });
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="11.9" r="2" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m8.9 10.1 1.4.8" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m15.1 10.1-1.4.8" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 13.9v1.6" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M13.5 5.4c-1-.2-2-.2-3 0" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 16.4c.7-.7 1.2-1.6 1.5-2.5" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5.5 13.9c.3.9.8 1.8 1.5 2.5" />
      </motion.svg>
    );
  },
);

BiohazardIcon.displayName = "BiohazardIcon";

export default BiohazardIcon;
