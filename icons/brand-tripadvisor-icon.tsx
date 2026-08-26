"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const BrandTripadvisorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,1.5,0],"scaleY":[1,0.92,1.04,1]}, { duration: 1, ease: "easeInOut" });
    animate(".part-1", {"y":[0,1.5,0],"scaleY":[1,0.92,1.04,1]}, { duration: 1, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"y":[0,-1.5,0],"scaleY":[1,0.92,1.04,1]}, { duration: 1, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"y":[0,-1.5,0],"scaleY":[1,0.92,1.04,1]}, { duration: 1, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"y":[0,1.5,0],"scaleY":[1,0.92,1.04,1]}, { duration: 1, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"y":[0,-1.5,0],"scaleY":[1,0.92,1.04,1]}, { duration: 1, ease: "easeInOut", delay: 0.6 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M5 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10.5 15.5l1.5 2l1.5 -2" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M9 6.75c2 -.667 4 -.667 6 0" />
      </motion.svg>
    );
  },
);

BrandTripadvisorIcon.displayName = "BrandTripadvisorIcon";

export default BrandTripadvisorIcon;
