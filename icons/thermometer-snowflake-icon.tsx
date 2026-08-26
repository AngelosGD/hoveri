"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ThermometerSnowflakeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-1", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
    animate(".part-3", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-4", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.4 });
    animate(".part-5", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.5 });
    animate(".part-7", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.7000000000000001 });
    animate(".part-0", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-2", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.36 });
    animate(".part-6", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut", delay: 1.08 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m10 20-1.25-2.5L6 18" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 4 8.75 6.5 6 6" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10.585 15H10" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 12h6.5L10 9" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m4 10 1.5 2L4 14" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7 21 3-6-1.5-3" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m7 3 3 6h2" />
      </motion.svg>
    );
  },
);

ThermometerSnowflakeIcon.displayName = "ThermometerSnowflakeIcon";

export default ThermometerSnowflakeIcon;
