"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ConstructionIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"x":[0,-3,1.7999999999999998,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut" });
    animate(".part-1", {"x":[0,-2.938144329896907,1.762886597938144,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.13 });
    animate(".part-2", {"x":[0,-2.8762886597938144,1.7257731958762885,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.26 });
    animate(".part-3", {"x":[0,-2.8144329896907214,1.6886597938144328,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.39 });
    animate(".part-4", {"x":[0,-2.752577319587629,1.6515463917525772,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.52 });
    animate(".part-5", {"x":[0,-2.6907216494845363,1.6144329896907217,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.65 });
    animate(".part-6", {"x":[0,-2.6288659793814433,1.577319587628866,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.78 });
    animate(".part-7", {"x":[0,-2.5670103092783507,1.5402061855670104,0],"y":[0,-2,2,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.91 });
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
        <motion.rect className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} x="2" y="6" width="20" height="8" rx="1" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 14v7" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 14v7" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 3v3" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 3v3" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 14 2.3 6.3" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m14 6 7.7 7.7" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m8 6 8 8" />
      </motion.svg>
    );
  },
);

ConstructionIcon.displayName = "ConstructionIcon";

export default ConstructionIcon;
