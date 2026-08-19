"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const RotateCwIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"rotate":[0,120,0],"scale":[1,1.12,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-1", {"rotate":[0,120,0],"scale":[1,1.12,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 3v5h-5" />
      </motion.svg>
    );
  },
);

RotateCwIcon.displayName = "RotateCwIcon";

export default RotateCwIcon;
