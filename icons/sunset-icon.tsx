"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";
import { motion, useAnimate } from "motion/react";

const SunsetIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref,
  ) => {
    const [scope, animate] = useAnimate();

    const startAnimation = async () => {
    animate(".part-2", {"scale":[1,1.04,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-3", {"scale":[1,1.04,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-5", {"scale":[1,1.04,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-7", {"scale":[1,1.04,1]}, { duration: 0.8, ease: "easeInOut", delay: 0.05 });
    animate(".part-0", {"y":[0,4,0],"opacity":[1,0.4,0.7],"scale":[1,0.97,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.1 });
    animate(".part-1", {"y":[0,4,0],"opacity":[1,0.4,0.7],"scale":[1,0.97,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.1 });
    animate(".part-4", {"y":[0,4,0],"opacity":[1,0.4,0.7],"scale":[1,0.97,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.1 });
    animate(".part-6", {"y":[0,4,0],"opacity":[1,0.4,0.7],"scale":[1,0.97,1]}, { duration: 0.9, ease: "easeInOut", delay: 0.1 });
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
        <motion.path className="part-0" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M12 10V2" />
        <motion.path className="part-1" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m4.93 10.93 1.41 1.41" />
        <motion.path className="part-2" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M2 18h2" />
        <motion.path className="part-3" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M20 18h2" />
        <motion.path className="part-4" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m19.07 10.93-1.41 1.41" />
        <motion.path className="part-5" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M22 22H2" />
        <motion.path className="part-6" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="m16 6-4 4-4-4" />
        <motion.path className="part-7" style={{ transformOrigin: "50% 50%", transformBox: "fill-box" }} d="M16 18a4 4 0 0 0-8 0" />
      </motion.svg>
    );
  },
);

SunsetIcon.displayName = "SunsetIcon";

export default SunsetIcon;
