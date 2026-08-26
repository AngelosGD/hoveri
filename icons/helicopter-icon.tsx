"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const HelicopterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"y":[0,-3,0,-1,0],"rotate":[0,-0.6288659793814433,0.6288659793814433,0],"x":[0,1,0]}, { duration: 1.1, ease: "easeInOut" });
    animate(".part-1", {"y":[0,-3,0,-1,0],"rotate":[0,-0.6082474226804124,0.6082474226804124,0],"x":[0,1,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.12 });
    animate(".part-2", {"y":[0,-3,0,-1,0],"rotate":[0,-0.5876288659793815,0.5876288659793815,0],"x":[0,1,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.24 });
    animate(".part-3", {"y":[0,-3,0,-1,0],"rotate":[0,-0.5670103092783505,0.5670103092783505,0],"x":[0,1,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.36 });
    animate(".part-4", {"y":[0,-3,0,-1,0],"rotate":[0,-0.5463917525773196,0.5463917525773196,0],"x":[0,1,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.48 });
    animate(".part-5", {"y":[0,-3,0,-1,0],"rotate":[0,-0.5257731958762887,0.5257731958762887,0],"x":[0,1,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.6 });
    animate(".part-6", {"y":[0,-3,0,-1,0],"rotate":[0,-0.5051546391752577,0.5051546391752577,0],"x":[0,1,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.72 });
    animate(".part-7", {"y":[0,-3,0,-1,0],"rotate":[0,-0.48453608247422686,0.48453608247422686,0],"x":[0,1,0]}, { duration: 1.1, ease: "easeInOut", delay: 0.84 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M11 17v4" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 3v8a2 2 0 0 0 2 2h5.865" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M17 17v4" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 10v5" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M6 3h16" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M7 21h14" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M8 13H2" />
      </motion.svg>
    );
  },
);

HelicopterIcon.displayName = "HelicopterIcon";

export default HelicopterIcon;
