"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const CalculatorIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.15 });
    animate(".part-2", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.3 });
    animate(".part-3", {"y":[0,-3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.44999999999999996 });
    animate(".part-4", {"y":[0,-3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.6 });
    animate(".part-5", {"y":[0,-3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.75 });
    animate(".part-6", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.8999999999999999 });
    animate(".part-7", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.05 });
    animate(".part-8", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.2 });
    animate(".part-9", {"y":[0,3,0],"opacity":[1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 1.3499999999999999 });
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
        <motion.rect className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} width="16" height="20" x="4" y="2" rx="2" />
        <motion.line className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="8" x2="16" y1="6" y2="6" />
        <motion.line className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x1="16" x2="16" y1="14" y2="18" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 10h.01" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 10h.01" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 10h.01" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 14h.01" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 14h.01" />
        <motion.path className="part-8" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 18h.01" />
        <motion.path className="part-9" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 18h.01" />
      </motion.svg>
    );
  },
);

CalculatorIcon.displayName = "CalculatorIcon";

export default CalculatorIcon;
