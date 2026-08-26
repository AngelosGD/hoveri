"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const TrainFrontTunnelIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-1", {"y":[0,2,0]}, { duration: 0.6, ease: "easeInOut", delay: 0.1 });
    animate(".part-0", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-2", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.36 });
    animate(".part-3", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.54 });
    animate(".part-4", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.72 });
    animate(".part-5", {"y":[0,5],"rotate":[0,10],"opacity":[0,0.4,1,0]}, { duration: 0.9, ease: "easeInOut", delay: 0.8999999999999999 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 22V12a10 10 0 1 1 20 0v10" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 15h.01" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M14 15h.01" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m9 19-2 3" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m15 19 2 3" />
      </motion.svg>
    );
  },
);

TrainFrontTunnelIcon.displayName = "TrainFrontTunnelIcon";

export default TrainFrontTunnelIcon;
