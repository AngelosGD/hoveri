"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const AArrowUpIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,-1.5773195876288661,0.9463917525773197,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut" });
    animate(".part-1", {"x":[0,-1.5154639175257731,0.9092783505154638,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.13 });
    animate(".part-2", {"x":[0,-1.4536082474226806,0.8721649484536084,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.26 });
    animate(".part-3", {"x":[0,-1.3917525773195876,0.8350515463917525,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.39 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 11 4-4 4 4" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18 16V7" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3.304 13h6.392" />
      </motion.svg>
    );
  },
);

AArrowUpIcon.displayName = "AArrowUpIcon";

export default AArrowUpIcon;
