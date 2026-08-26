"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AArrowDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,1.333333333333334,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut" });
    animate(".part-1", {"y":[0,0.15,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"y":[0,0.25349999999999967,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.2 });
    animate(".part-3", {"y":[0,-0.3,0],"opacity":[0.3,1,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.30000000000000004 });
    };

    const stopAnimation = () => {
    animate(".part-0", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.00 });
    animate(".part-1", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 }, { duration: 0.25, ease: "easeInOut", delay: 0.18 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 12 4 4 4-4" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18 16V7" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3.304 13h6.392" />
      </motion.svg>
    );
  },
);

AArrowDownIcon.displayName = "AArrowDownIcon";

export default AArrowDownIcon;
