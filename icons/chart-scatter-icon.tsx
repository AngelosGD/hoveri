"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const ChartScatterIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-0", {"opacity":[1,0.6,1],"scale":[1,1.05,1]}, { duration: 0.9, ease: "easeInOut" });
    animate(".part-1", {"opacity":[1,0.6,1],"scale":[1,1.05,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.1 });
    animate(".part-2", {"scale":[0.4,1.3,0.8,1],"rotate":[0,30],"opacity":[0.5,1,0.7,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.16 });
    animate(".part-3", {"opacity":[1,0.6,1],"scale":[1,1.05,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.30000000000000004 });
    animate(".part-4", {"opacity":[1,0.6,1],"scale":[1,1.05,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.4 });
    animate(".part-5", {"opacity":[1,0.6,1],"scale":[1,1.05,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.5 });
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
        <motion.circle className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="7.5" cy="7.5" r=".5" fill="currentColor" />
        <motion.circle className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="18.5" cy="5.5" r=".5" fill="currentColor" />
        <motion.circle className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="11.5" cy="11.5" r=".5" fill="currentColor" />
        <motion.circle className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="7.5" cy="16.5" r=".5" fill="currentColor" />
        <motion.circle className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} cx="17.5" cy="14.5" r=".5" fill="currentColor" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M3 3v16a2 2 0 0 0 2 2h16" />
      </motion.svg>
    );
  },
);

ChartScatterIcon.displayName = "ChartScatterIcon";

export default ChartScatterIcon;
