"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const DatabaseSearchIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,4,-2,2,0],"rotate":[0,6,0]}, { duration: 0.5, ease: "easeInOut" });
    animate(".part-1", {"x":[0,4,-2,2,0],"rotate":[0,6,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.06 });
    animate(".part-2", {"x":[0,-4,2,-2,0],"rotate":[0,-6,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.12 });
    animate(".part-3", {"x":[0,-4,2,-2,0],"rotate":[0,-6,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.18 });
    animate(".part-4", {"x":[0,4,-2,2,0],"rotate":[0,6,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.24 });
    animate(".part-5", {"x":[0,4,-2,2,0],"rotate":[0,6,0]}, { duration: 0.5, ease: "easeInOut", delay: 0.3 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M21 11.693V5" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m22 22-1.875-1.875" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 12a9 3 0 0 0 8.697 2.998" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 5v14a9 3 0 0 0 9.28 2.999" />
        <motion.circle className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="18" cy="18" r="3" />
        <motion.ellipse className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="12" cy="5" rx="9" ry="3" />
      </motion.svg>
    );
  },
);

DatabaseSearchIcon.displayName = "DatabaseSearchIcon";

export default DatabaseSearchIcon;
