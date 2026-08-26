"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CirclePlusIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,-0.27835051546391754,0.1670103092783505,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut" });
    animate(".part-1", {"x":[0,-0.21649484536082464,0.12989690721649477,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.13 });
    animate(".part-2", {"x":[0,-0.15463917525773208,0.09278350515463925,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.26 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="12" r="10" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 12h8" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 8v8" />
      </motion.svg>
    );
  },
);

CirclePlusIcon.displayName = "CirclePlusIcon";

export default CirclePlusIcon;
